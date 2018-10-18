function fn() {
	
	var $Gou = document.querySelectorAll('.Gou ');
	var priceAll = 0;
	for(var k = 0; k < $Gou.length; k++) {
		if($Gou[k].className == 'Gou active') {
			var tt = $($Gou[k]);
			var jiage = tt.parent().parent().find('.shang_price').text();
			var shuLiang = tt.parent().parent().find('#shuLiang').text();
			var jiaQian = Number(jiage) * Number(shuLiang);
			var num5 = jiaQian;
			console.log(num5)
			priceAll += num5;
		}
	}
	$('#zongGong').html(priceAll);
}
function fn1()
{
	var $Gou = document.querySelectorAll('.Gou');

			var num3 = 0;
			for(var i = 0; i < $Gou.length; i++) {
				console.log($Gou[i]);
				if($Gou[i].className == 'Gou active') {
					num3 += 1;

				}
				console.log($Gou[i].className)
			}
			$('#phoneShap').html(num3);
}
$(function() {
	if(localStorage.getItem('hongmi')) {
		var i = localStorage.getItem('hongmi');
		arr = JSON.parse(i);
		var num = arr.length;
		var num1 = 0; //判断选择几个

		for(var i = 0; i < arr.length; i++) {

			obj = arr[i];
			console.log(obj)
			var shangPing = `<div class="shangPing">
				<div class="shang_check ">
					<i class="Gou move">√</i>
				</div>
				<div class="shang_img" style = 'background:url(${obj.phoneurl}) no-repeat' ></div>
				<div class="shang_name">${obj.name}</div>
				<div class="shang_color">${obj.iphoneColor + ' '+obj.type}</div>
				<div class="shang_price">${obj.price}</div>
				<div class="shang_num">
					<div id="jiSuan">
						<span class="jian">-</span>
						<span id='shuLiang'>${obj.tok}</span>
						<span class="jia">+</span>	
					</div>
				</div>
				<div class="shang_total">${obj.tok*obj.price}元</div>
				<div class="shang_action"><a href="#">×</a></div>
			</div>`;
			shangPing = $(shangPing);
			$('.main').append(shangPing);
			console.log(obj.phoneurl);

		}
		$('.jian').on('click', function() {
			var target = $(event.target)
			var num = Number(target.next().text());
			num--;
			if(num <= 0) {
				num = 0;
			}
			target.next().html(num);
			target.parent().parent().next().html(target.next().text() * target.parent().parent().prev().text() + '元')
			fn()
		})
		$('.jia').on('click', function() {
			var target = $(event.target)
			var num = Number(target.prev().text());
			num++;
			target.prev().html(num);
			target.parent().parent().next().html(target.prev().text() * target.parent().parent().prev().text() + '元')
			fn()
		})
		$('.col_check').click(function() {

			$('.col_check i').toggleClass('move');
			$('.col_check i').toggleClass('active');
			if($('.col_check i').attr('class') == 'zongGou active') {
				$('.shang_check i').attr('class', '');
				$('.shang_check i').addClass('Gou active');
				num1 = arr.length;
				$('#phoneShap').html(num1);
				fn();

			} else if($('.col_check i').attr('class') == 'zongGou move') {
				$('.shang_check i').attr('class', '');
				$('.shang_check i').addClass('Gou move');
				num1 = 0;
				$('#phoneShap').html(num1);
				fn();
			}
			fn1();
		})
		$('.Gou').on('click', function() {
			var target = $(event.target);
			target.toggleClass('move');
			target.toggleClass('active');
			var $Gou = document.querySelectorAll('.Gou ');

			var num3 = 0;
			for(var i = 0; i < $Gou.length; i++) {
				console.log($Gou[i]);
				if($Gou[i].className == 'Gou active') {
					num3 += 1;
					console.log(num1);
				}
				console.log($Gou[i].className)
			}
			fn();
			$('#phoneShap').html(num3);

		})
		// 弹出框
		$(function(){
			$('.shang_action').click(function(){
				layer.confirm('确定删除吗?', {
				btn: ['确定','取消'] ,
				area: ['400px', '200px']
				},function(index, layero){
					$('.shangPing').remove();
					$('#numberShap').html(num);
					layer.closeAll();
				})
			})
		})
		$('#numberShap').html(num);
		$('#phoneShap').html(num1);

	} 

})