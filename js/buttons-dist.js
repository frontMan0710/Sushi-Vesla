$((function(){function t(){$(".cartItem").length?$(".emptyMessage").hide():($(".emptyMessage").show(),$(".deliveryButtons a, .checkout").addClass("disable").on("click",(function(t){t.preventDefault()})))}function e(){var t=0;$(".itemPrice").each((function(){var e=parseFloat($(this).text())||0;t+=e}));let e=$(".totalSum"),i=parseFloat(e.text())||0;!function(t,e,i,s){const c=i-e,a=performance.now();requestAnimationFrame((function n(o){const r=o-a,l=Math.min(r/s,1),m=e+c*l;t.text(m.toFixed(2)+" грн."),l<1?requestAnimationFrame(n):t.text(i.toFixed(2)+" грн.")}))}(e,i,t,600)}$(".decrease").on("click",(function(){let i=$(this).siblings(".counter"),s=$(this).closest(".cartItem, [class*='Item']").find(".itemPrice"),c=s.data("currency"),a=parseFloat(s.data("price")),n=parseInt(i.text(),10);if(n>1){n--;let t=(a*n).toFixed(2);i.text(n),s.text(t+" "+c+".")}0===n&&($(this).closest("aside .cart .cartList .cartItem").remove(),$(this).addClass("disable"),t()),e()})),$(".increase").on("click",(function(){let t=$(this).siblings(".counter"),i=$(this).closest(".cartItem, [class*='Item']").find(".itemPrice"),s=i.data("currency"),c=parseFloat(i.data("price")),a=parseInt(t.text(),10);a++;var n=(c*a).toFixed(2);t.text(a),i.text(n+" "+s+"."),a>0&&$(this).siblings(".decrease").removeClass("disable"),e()})),$(".cartItem").find(".removeItem").on("click",(function(){$(this).closest(".cartItem").fadeOut(300,(function(){$(this).remove(),t(),e()}))})),$(".remove").on("click",(function(){$(this).closest(".cartItem").fadeOut(400,(function(){$(this).remove(),t(),e()}))})),t(),e()}));