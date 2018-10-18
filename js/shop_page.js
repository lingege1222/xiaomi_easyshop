// 轮播图
var mySwiper = new Swiper('.swiper-container', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	loop: true,
	autoplay: true,
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});
// 选择版本
$(function() {
	var xin;
	var price;
	var yan;

	$('.step-list').on('click', 'a', function() {
		{
			var target = $(event.target);
			if(target.attr('class') == 'write') {
				$('.swiper-container').removeClass('xianShi');
				$('#oneI').addClass('xianShi');
				target.parent().css({
					'border': '1px solid #ff6700'
				});
				target.parent().siblings().css({
					'border-color': '#e0e0e0'
				});
				yan = target.text().trim();
				console.log(yan)
				$('#yansetu').html(yan);
			} else if(target.attr('class') == 'jin') {
				$('.swiper-container').removeClass('xianShi');
				$('#twoI').addClass('xianShi');
				target.parent().css({
					'border': '1px solid #ff6700'
				});
				target.parent().siblings().css({
					'border-color': '#e0e0e0'
				});
				yan = target.text().trim();
				$('#yansetu').html(yan);
			} else if(target.attr('class') == 'pink') {
				$('.swiper-container').removeClass('xianShi');
				$('#threeI').addClass('xianShi');
				target.parent().css({
					'border': '1px solid #ff6700'
				});
				target.parent().siblings().css({
					'border-color': '#e0e0e0'
				});
				yan = target.text().trim();
				$('#yansetu').html(yan);
			} else if(target.attr('class') == 'blue') {
				$('.swiper-container').removeClass('xianShi');
				$('#fourI').addClass('xianShi');
				target.parent().css({
					'border': '1px solid #ff6700'
				});
				target.parent().siblings().css({
					'border-color': '#e0e0e0'
				});
				yan = target.text().trim();
				$('#yansetu').html(yan);
			}

		}
	})

	$('.step_list1').on('click', 'li', function() {

		var target = $(event.target);
		if(target.attr("class") == 'alione') {
			console.log(1)
			target.parent().css({
				'border': '1px solid #ff6700'
			})
			target.parent().siblings().css({
				'border-color': '#e0e0e0'
			})
			$('.ddpig').html('');
			$('.xinghaode').text(target.find('.name').html())
			$('.zuiPrice').text(target.find('.price').html())
			$('.daZhe').text('799元')
			$('.qian').html($('.zuiPrice').text());
		} else if(target.attr("class") == 'alitwo') {
			console.log(2);
			target.parent().css({
				'border': '1px solid #ff6700'
			})
			target.parent().siblings().css({
				'border-color': '#e0e0e0'
			})
			$('.ddpig').html('');
			$('.xinghaode').text(target.find('.name').html())
			$('.zuiPrice').text(target.find('.price').html())
			$('.daZhe').text('999元')
			$('.qian').html($('.zuiPrice').text());
		}
	})
// 加购物车
	$('.duihao').click(function() {
		$('.duihao').css({
			'border-color': '#ff6700',
			'background-color': '#ff6700',
			color: '#fff'
		});
		$('.duihao').html('√');
		$('.zhengqudui').css({
			visibility: 'visible'
		})
		$('.zhengqudui').html('√');
		$('.duihao1').css({
			'background-color': '#fff',
			color: '#fff'
		});
		$('.duihao1').html('');
		$('.zhengqudui1').css({
			visibility: 'hidden'
		});
		$('.fuwu1').css({
			'border-color': '#ff6700'
		});
		$('.fuwu3').css({
			'border-color': '#e0e0e0'
		});
		var sum = parseInt($('.zuiPrice').text());
		sum = parseInt($('.zijiJiage').text()) + sum;
		$('.qian').html(sum + '元');
	})
	$('.duihao1').click(function() {
		$('.duihao1').css({
			'border-color': '#ff6700',
			'background-color': '#ff6700',
			color: '#fff'
		});
		$('.duihao1').html('√');
		$('.zhengqudui1').css({
			visibility: 'visible'
		})
		$('.zhengqudui1').html('√');
		$('.duihao').css({
			'background-color': '#fff',
			color: '#fff'
		});
		$('.duihao').html('');
		$('.zhengqudui').css({
			visibility: 'hidden'
		})
		$('.fuwu3').css({
			'border-color': '#ff6700'
		});
		$('.fuwu2').css({
			'border-color': '#e0e0e0'
		});
		$('.qian').html($('.zuiPrice').text());
		var sum = parseInt($('.zuiPrice').text());
		sum = parseInt($('.zijiJiage').text()) + sum;
		$('.qian').html(sum + '元');
	})
	$('.address-info').click(function(e) {
		var target = e.target;

		console.log(1);
		var input = $("<input type='text'>");
		var td = $(target);
		input.val(td.text());
		td.contents().replaceWith(input);
		input.blur(function() {
			td.text($(this).val());
			$(this).remove();
		})
	})
	$('.dianji').on('click', 'button', function(e) {
		var target = $(event.target);
		if(target.prop('tagName') == 'BUTTON') {
			if(JSON.parse(localStorage.getItem('hongmi'))) {
				var arr = JSON.parse(localStorage.getItem('hongmi'))
				var num = 1;
				var fool;
				var price = parseInt($('.qian').text());
				var iphoneColor = $("#yansetu").text();
				var address = $('.sheng').text() + $('.shi').text() + $('.qu').text() + $('.jie').text();
				var name = $('.type').text();
				var type = $('.xinghaode').text();
				var str = $('.tuPianUrl').css('background-image').slice(4);
				var phoneurl = $('.tuPianUrl').css('background-image').slice(4).substring(0,str.length-1);
				auto:for(var i = 0; i < arr.length; i++) {
					for(var k in arr[i]) {
						if(arr[i].name == name && arr[i].type == type && arr[i].iphoneColor == iphoneColor && arr[i].address == address && arr[i].price == price && arr[i].phoneurl == phoneurl) {
							num = arr[i].tok + 1;
							data = {
								name: name,
								type: type,
								iphoneColor: iphoneColor,
								address: address,
								price: price,
								tok: num,
								phoneurl: phoneurl
							}
							arr.splice(i, 1, data)
							arr = JSON.stringify(arr);

							localStorage.setItem('hongmi', arr);
							fool=i;
							break auto;
						}
					}
				}
				if(i !=fool) {
					var arr = JSON.parse(localStorage.getItem('hongmi'))
					data = {
						name: name,
						type: type,
						iphoneColor: iphoneColor,
						address: address,
						price: price,
						tok: num,
						phoneurl: phoneurl
					}
					arr.push(data);
					arr = JSON.stringify(arr);
					localStorage.setItem('hongmi', arr);

				}
				console.log(arr);
			} else {
				var arr = [];
				var num = 1;
				var price = parseInt($('.qian').text());
				var iphoneColor = $("#yansetu").text();
				var address = $('.sheng').text() + $('.shi').text() + $('.qu').text() + $('.jie').text();
				var name = $('.type').text();
				var type = $('.xinghaode').text();
				var str = $('.tuPianUrl').css('background-image').slice(4);
				var phoneurl = $('.tuPianUrl').css('background-image').slice(4).substring(0,str.length-1);
				data = {
					name: name,
					type: type,
					iphoneColor: iphoneColor,
					address: address,
					price: price,
					tok: num,
					phoneurl: phoneurl
				}
				arr.push(data);
				arr = JSON.stringify(arr);
				console.log(arr);
				localStorage.setItem('hongmi', arr);
			}
		}
	})
	
})