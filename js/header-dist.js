$((function(){$(window).width()<1440?($(".headerNav").hide(),$(".burgerIcon").on("click",(function(){$(this).toggleClass("active"),$(".headerNav").slideToggle(300),$(window).width()<720&&$("body").toggleClass("lock")})),$(".phone").on("click",(function(){$(window).width()>=720&&($(".phoneNumbers").toggleClass("active"),$(".search").removeClass("active"))})),$(".userMenu .profile").on("click",(function(){$(".search").toggleClass("active"),$(".phoneNumbers").removeClass("active")})),$(".userMenu .search").remove()):$(".headerContent .burgerIcon").remove(),$(window).width()>=720&&$(".headerNav li.callUs").remove();let e=$("header");if(e.length){let o=e.outerHeight(!0);$(".wrapper").css("padding-top",o+20+"px"),$(window).width()<720&&$(".wrapper").css("padding-top",o+"px")}}));