$((function(){$(window).width()<720&&$("aside").remove(),$(window).width()>720&&$(".openCart").on("click",(function(){$(this).toggleClass("active"),$("aside").toggleClass("active")})),$(window).width()<720?$("button.openCart").remove():$("a.openCart").remove()}));