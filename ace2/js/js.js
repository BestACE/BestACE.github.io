//设置单击菜单动画跳转
$(function() {

	//跟随滚动设置菜单
	$(window).scroll(function() {
		if(($("header.fixed").length > 0)) {
			if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
				$("header").addClass("on");
			} else {
				$("header").removeClass("on");
			}
		};
	});
	
	

	//meun菜单
	$("#toggle").click(function() {
		$(this).toggleClass("on");
		$("#me").slideToggle();
	});

	//job   ul移动
	var liW = 0;
	var ul = document.getElementById("f");
	var x = 0;
	var dir = 1;
	var l = 0;
	$(function() {
		var li = document.getElementsByClassName("e");
		liW = li.length * 230;
		ul.style.width = liW + "px";
		liW = -liW + 1200 + "px";
		$("#left").click(function() {
			dir = -1;
			x = $("#f").css("left");
			console.log(l);
			move();
			x = $("#f").css("left");
			console.log(l);
		});
		$("#right").click(function() {
			dir = 1;
			x = $("#f").css("left");
			console.log(l);
			move();
			x = $("#f").css("left");
			console.log(l);
		});
		function move(){
					if(x>liW && x<0+'px'){
						l += dir*230;
						$("#f").animate({left:l+'px'});
						console.log(1);
					}
					else{
					 	if(x==0+"px" && dir==1){console.log(2);$("#f").animate({left:liW});l=parseInt(liW)}
					    else{
					    	if(x==liW && dir==-1){console.log(4);$("#f").animate({left:'0'});l=0;}
					    	else{
						    	console.log(6);
						    	l += dir*230;
						    	$("#f").animate({left:l+'px'});
						    	console.log(l);
						    	console.log($("#f").css("left"));
							}
					    }
					}
				}

//		function move() {
//
//			if(x > liW && x < 0 + 'px') {
//				l += dir * 240;
//				$("#f").animate({
//					left: l + 'px'
//				});
//				console.log(1);
//			} else {
//				if(x == 0 + "px" && dir == 1) {
//					console.log(2);
//					$("#f").animate({
//						left: liW
//					});
//					l = parseInt(liW)
//				} else {
//					if(x == liW && dir == -1) {
//						console.log(4);
//						$("#f").animate({
//							left: '0'
//						});
//						l = 0;
//					} else {
//						console.log(6);
//						l += dir * 240;
//						$("#f").animate({
//							left: l + 'px'
//						});
//						console.log(l);
//						console.log($("#f").css("left"));
//					}
//				}
//			}
//		}
	});
	$('#menuf a').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top-60}, 500);
	});
	
	//滚动监听
	$('body').scrollspy({
		target:'.scrollspy',
		offset:70
	});
		
	
});