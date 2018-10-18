var register = (function(){

    return {
        init: function(ele) {   
            // 获取form表单
            this.$ele = document.querySelector(ele);
            // 获取提交按钮
            this.$loginBtn = this.$ele['login-btn'];
            this.$usernameInp =   this.$ele['username'];
            this.$passwordInp =   this.$ele['password'];
            this.$nanmep = document.querySelector('.p2')
            this.$p=document.querySelector('.p5')
            this.event();
        },
        event: function() {
            var _this = this;
            var reg_user = /^1[35789]\d{9}$/;
            var reg_pwd = /\w{6,16}/;
            // 鼠标离开正则
            this.$usernameInp.onblur = function(){
	            if(_this.$usernameInp.value == ''){
                	_this.$nanmep.innerHTML = '用户名不能为空';
                	_this.$nanmep.style.display = 'block';
	            }else{
	            	if(reg_user.test(_this.$usernameInp.value)){
	            		_this.$nanmep.style.display = 'none';
	            	}else{
	            		_this.$nanmep.innerHTML = '用户名格式错误';
	            	}
	            }
        	}

        	this.$passwordInp.onblur = function(){
	            if(_this.$passwordInp.value == ''){
                	_this.$p.innerHTML = '密码不能为空';
                	_this.$p.style.display = 'block';
	            }else{
	            	if(reg_pwd.test(_this.$passwordInp.value)){
	            		_this.$p.style.display = 'none';
	            	}else{
	            		_this.$p.innerHTML = '密码格式错误';
	            		_this.$p.style.display = 'block';
	            	}
	            }
        	}
            // 密码框提交
            this.$passwordInp.oninput=function(){
                if(_this.$passwordInp.value==''){
                    _this.$p.style.display='block';
                }else if(_this.$passwordInp.value){
                    _this.$p.style.display='none';
                }
            }
            this.$loginBtn.onclick = function() {
                if(_this.$usernameInp.value == ''){
                    _this.$nanmep.innerHTML = '不能为空,请输入正确的账号';
                    _this.$p.style.display='block';
                }else{
                    if(_this.$passwordInp.value==''){
                        _this.$p.style.display='block';
                    }else{
                        // 发送ajax，验证用户名和密码
                    var params = {
                        method: 'post',
                        data: {
                            username: _this.$usernameInp.value,
                            password: _this.$passwordInp.value
                        },
                        success: function(data) {
                            data = JSON.parse(data);
                            _this.register(data);
                        }
                    }
                    sendAjax('http://localhost:3456/xiaomi_shop/php/register.php', params);
                    }
                }
                
                
            },
            // 判断用户名称是否存在
            this.$usernameInp. addEventListener('change', function(){
                var params = {
                    method: 'post',
                    data: {
                        username: _this.$usernameInp.value
                    },
                    success: function(data) {
                        data = JSON.parse(data);
                        _this.checkUsername(data);
                    }
                }
                sendAjax('http://localhost:3456/xiaomi_shop/php/check_username.php', params);
            }, false);
        },
        checkUsername: function(data) {
            if(data.code == 200) {
               this.$usernameInp.className = 'inp success';
               this.$loginBtn.disabled = '';
            } else {
                alert(data.msg);
                this.$usernameInp.className = 'inp error';
                this.$loginBtn.disabled = 'true';
            }
        },
        register: function(data) {
            if(data.code == 200) {
                //   注册成功
                alert('注册成功')
                location.href = 'login.html';
             } else {
                
             }
        }
    }

}())