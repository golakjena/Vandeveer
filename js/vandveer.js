;(function($){
	var device = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

	function mobileNav(){
		$(".btnMobileNav").on("click", function(){
			$(this).toggleClass("isActiveNav");
			var navPos = parseInt($(".topNav").css("right"));

			if(navPos == -320){
				$(".topNav").stop(true, true).animate({
					right:0
				}, 300);

			}
			else{
				$(".topNav").stop(true, true).animate({
					right:-320
				}, 300);
			}
		});
	}

	function ourTeamAccord(){
		var winWidth = $(window).width();
		if(winWidth < 768){
			$(".activeTeam").removeClass("activeTeam");
		}
		$(".accordRow").eq(0).slideDown(300);
		$(".tList li").each(function(){
			$(this).on("click", function(){
				var target = $(this).attr("data-team");

				var teamHtml = $("#"+target).html();

				$(".accordRow").stop(true, true).slideUp(300);
				$(".activeTeam").removeClass("activeTeam");
				$(this).addClass("activeTeam");
				$("#"+target).stop(true, true).slideDown(300);

				if(winWidth < 768){
					$("#mModal").html(teamHtml);
					$('#myModal').modal();
				}
			});
		});
	}

	function caseStudy(){
		$(".csDetailsInner").eq(0).slideDown(300);
		$(".item").each(function(){
			$(this).on("click", function(){
				var target = $(this).attr("data-cs");
				$(".csDetailsInner").stop(true, true).slideUp(300);
				$(".activeItem").removeClass("activeItem");
				$(this).addClass("activeItem");
				$("#"+target).stop(true, true).slideDown(300);
			});
		});
	}


	$(function(){
		mobileNav();
		ourTeamAccord();
		caseStudy();
	});

})(jQuery);




