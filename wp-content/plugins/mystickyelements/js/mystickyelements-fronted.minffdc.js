function launch_mystickyelements(a){var b="desktop",c=1;a=void 0!==a?a:1,/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(b="mobile"),jQuery(".mystickyelements-fixed .mystickyelements-lists").each(function(){if(!(c>1)){var d=1;jQuery(this).find("li").each(function(){if(jQuery(this).hasClass("mystickyelements-minimize")){jQuery(this).hasClass("element-minimize")&&jQuery(this).trigger("click");return}if(jQuery(this).hasClass("element-"+b+"-on")){if(a==d)return jQuery(this).addClass("elements-active"),jQuery(this).parent().parent().parent().hasClass("mystickyelements-on-click")||jQuery(this).parent().parent().parent().addClass("mystickyelements-on-click"),!1;d++}}),c++}})}function close_mystickyelements(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),jQuery(".mystickyelements-fixed .mystickyelements-lists").each(function(){jQuery(this).find("li").each(function(){jQuery(this).hasClass("elements-active")&&jQuery(this).removeClass("elements-active")})})}function hide_mystickyelements(){jQuery(".mystickyelements-fixed").each(function(){jQuery(this).hide(),jQuery.cookie("hide_mystickyelements","closed",{expires:365,path:"/"})})}function show_mystickyelements(){jQuery(".mystickyelements-fixed").each(function(){jQuery(this).show(),jQuery.cookie("hide_mystickyelements","opened",{expires:1,path:"/"})})}!function($){"use strict";var a="",b="",c=0,d=!1,e=0,f=-1;function g(){return/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"mobile":"desktop"}function h(){if(1024>=$(window).width()){if($(".mystickyelements-fixed").hasClass("mystickyelements-position-mobile-top")){var a=$(".mystickyelements-fixed").height();$("html").attr("style","margin-top: "+a+"px !important")}}else $("html").css("margin-top","")}function i(){if(0!==$(".element-contact-form").length){var g=$(window).height(),i=$(".mystickyelements-fixed").position().top;$(".element-contact-form").offset().top;var j=$("#mystickyelements-contact-form #stickyelements-form").innerHeight()+$(".element-contact-form h3").innerHeight();if(g<j){var l=g-70;$("#mystickyelements-contact-form .element-contact-form").css("max-height",l+"px"),$("#mystickyelements-contact-form .element-contact-form").css("overflowY","auto");var f=i-10;$(window).width()>1025&&!$(".mystickyelements-fixed").hasClass("mystickyelements-position-bottom")&&$("#mystickyelements-contact-form .element-contact-form").css("top","-"+f+"px"),1024>$(window).width()&&!$(".mystickyelements-fixed").hasClass("mystickyelements-position-mobile-bottom")&&$("#mystickyelements-contact-form .element-contact-form").css("top","-"+f+"px")}else{var h=$("ul.mystickyelements-lists .mystickyelements-minimize").height();null===h&&(h=0);var f=i-(g-j)+h+10;$(window).width()>1025&&!$(".mystickyelements-fixed").hasClass("mystickyelements-position-bottom")&&$("#mystickyelements-contact-form .element-contact-form").css("top","-"+f+"px"),1024>$(window).width()&&!$(".mystickyelements-fixed").hasClass("mystickyelements-position-mobile-bottom")&&$("#mystickyelements-contact-form .element-contact-form").css("top","-"+f+"px"),$("#mystickyelements-contact-form .element-contact-form").css("overflowY",""),$("#mystickyelements-contact-form .element-contact-form").css("max-height","")}}var e="";/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(e="mobile-");var k=0;$(".mystickyelements-fixed ul li").each(function(){if("1"===mystickyelements.google_analytics&& !0!==$(this).hasClass("mystickyelements-minimize")&&"mystickyelements-contact-form"!==$(this).attr("id")){if(0!==$(this).find("a").length){var f=$(this).attr("id").split("mystickyelements-social-");$(this).find("a").addClass("update-analytics"),$(this).find("a").attr("data-social-slug",f[1])}else $(this).addClass("analytics-update")}$(".mystickyelements-position-"+e+"left #"+$(this).attr("id")+" .mystickyelements-social-icon").css("border-radius",""),$(".mystickyelements-position-"+e+"right #"+$(this).attr("id")+" .mystickyelements-social-icon").css("border-radius",""),0==c&&($(window).width()>1024&&!$(this).hasClass("element-desktop-on")&&(d=!0),1025>$(window).width()&&!$(this).hasClass("element-mobile-on")&&(d=!0)),1==c&& !0===d&&($(window).width()>1024&&(b=$(this).attr("id")),1025>$(window).width()&&(b=$(this).attr("id"))),$(window).width()>1024&&$(this).hasClass("element-desktop-on")&&(a=$(this).attr("id")),1025>$(window).width()&&$(this).hasClass("element-mobile-on")&&(a=$(this).attr("id"),k++),c++}),$(".mystickyelements-fixed.mystickyelements-position-mobile-bottom").addClass("mystickyelements-bottom-social-channel-"+k),$(".mystickyelements-fixed.mystickyelements-position-mobile-top").addClass("mystickyelements-top-social-channel-"+k),""!=a?"mystickyelements-contact-form"===a?($(".mystickyelements-position-"+e+"left #"+a+" .mystickyelements-social-icon").css("border-bottom-left-radius","10px"),$(".mystickyelements-position-"+e+"right #"+a+" .mystickyelements-social-icon").css("border-top-left-radius","10px"),$(".mystickyelements-position-"+e+"bottom #"+a+" .mystickyelements-social-icon").css("border-top-right-radius","10px"),1!==$("li.mystickyelements-minimize").length&&($(".mystickyelements-position-"+e+"left #"+a+" .mystickyelements-social-icon").css("border-bottom-right-radius","10px"),$(".mystickyelements-position-"+e+"right #"+a+" .mystickyelements-social-icon").css("border-top-right-radius","10px"))):"mystickyelements-contact-form"!==a&&(1===c?($(".mystickyelements-position-"+e+"left #"+a+" .mystickyelements-social-icon").css("border-radius","0px 10px 10px 0"),$(".mystickyelements-position"+e+"-right #"+a+" .mystickyelements-social-icon").css("border-radius","10px 0 0 10px")):($(".mystickyelements-position-"+e+"left #"+a+" .mystickyelements-social-icon").css("border-bottom-right-radius","10px"),$(".mystickyelements-position-"+e+"right #"+a+" .mystickyelements-social-icon").css("border-bottom-left-radius","10px"),$(".mystickyelements-position-"+e+"bottom #"+a+" .mystickyelements-social-icon").css("border-top-right-radius","10px"))):($(".mystickyelement-credit").hide(),$(".mystickyelements-fixed").hide()),""!=b&&"mystickyelements-contact-form"!==b&&1!==$("li.mystickyelements-minimize").length&&($(".mystickyelements-position-"+e+"left #"+b+" .mystickyelements-social-icon").css("border-top-right-radius","10px"),$(".mystickyelements-position-"+e+"right #"+b+" .mystickyelements-social-icon").css("border-top-left-radius","10px"),$(".mystickyelements-position-"+e+"bottom #"+b+" .mystickyelements-social-icon").css("border-top-left-radius","10px"))}function j(a){a.parent().parent().removeClass("elements-active")}$(document).ready(function(){function b(a){a.find("a").attr("href","#"),e++,f=0}function c(a,b){f=1,e++,a.find("a").attr("href",b)}if("closed"==$.cookie("hide_mystickyelements")&&$(".mystickyelements-fixed").each(function(){jQuery(this).hide()}),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&$(".mystickyelements-fixed").addClass("mystickyelements-on-click").removeClass("mystickyelements-on-hover"),$("#stickyelements-form").on("submit",function(a){a.preventDefault(),$("#stickyelements-form .mse-input-error").removeClass("mse-input-error"),$("#stickyelements-form .mse-input-message").remove();var b=0;return $("#stickyelements-form .required").length&&$("#stickyelements-form .required").each(function(){""==$.trim($(this).val())&&($(this).addClass("mse-input-error"),$(this).after("<span class='mse-input-message'>This field is required</span>"),b++)}),$("#stickyelements-form .email.required:not(.mse-input-error)").length&&$("#stickyelements-form .email.required:not(.mse-input-error)").each(function(){var a=$.trim($(this).val());!/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(a)&&($(this).addClass("mse-input-error"),$(this).after("<span class='mse-input-message'>Email address is not valid</span>"),b++)}),0==b&&jQuery.ajax({url:mystickyelements.ajaxurl,type:"post",data:"action=mystickyelements_contact_form&"+jQuery("form#stickyelements-form").serialize()+"&security="+mystickyelements.ajax_nonce,beforeSend:function(){$("#stickyelements-submit-form").prop("disabled",!0)},success:function(a){if($("#stickyelements-submit-form").prop("disabled",!1),$("#stickyelements-form .mse-input-error").removeClass("mse-input-error"),$("#stickyelements-form .mse-input-message").remove(),"1"==(a=$.parseJSON(a)).error)for(var b=0;b<a.errors.length;b++)"mse-form-error"!=a.errors[b].key?($("#stickyelements-form #"+a.errors[b].key).addClass("mse-input-error"),$("#stickyelements-form #"+a.errors[b].key).after("<span class='mse-input-message'>"+a.errors[b].message+"</span>")):($("#mse-form-error").removeClass("mse-form-success-message").addClass("mse-form-error-message").show(),$("#mse-form-error").html(a.errors[b].message));else"0"==a.status?($("#mse-form-error").removeClass("mse-form-success-message").addClass("mse-form-error-message").show(),$("#mse-form-error").html(a.message)):($("#mse-form-error").removeClass("mse-form-error-message").addClass("mse-form-success-message").show(),$("#mse-form-error").html(a.message),$('#stickyelements-form input[type="text"], #stickyelements-form input[type="tel"], #stickyelements-form input[type="email"]').val(""),$("#stickyelements-form textarea").val(""),$.cookie("closed_contactform","closed",{path:"/"}));return setTimeout(function(){$(".mse-form-success-message").slideUp("slow")},5e3),1==a.status&&""!=a.redirect_link&&(window.location=a.redirect_link),!1}}),!1}),$(".mystickyelements-on-click .mystickyelements-social-icon").on("click touch",function(k){var a,j,d,h,i,l=$(this).data("click"),m=g(),n=$(this);($(this).parent("li").hasClass("mystickyelements-contact-form")||("0"==l&&($(".mystickyelements-social-icon").data("click","0"),e=0),a=n,j=m,d=a.data("tab-setting"),h=a.data("click"),i=a.find("a").data("url"),"mobile"==j?function(a,d,h,g){if("hover"==d&&"enable"==a.data("mobile-behavior")){if(a.data("click","1"),0==e)b(a);else{c(a,g);return}}else if("click"==d&&"enable"==a.data("flyout")){if(a.data("click","1"),0==e)b(a);else{c(a,g);return}}else if("click"==d&&"disable"==a.data("flyout")){a.children("a").length?$(".mystickyelements-on-click .elements-active").removeClass("elements-active"):a.parent("li").addClass("elements-active"),f=1;return}else f=1}(a,d,h,i):function(a,g,h,d){if("enable"==a.data("flyout")){if(a.data("click","1"),0==e)b(a);else{c(a,d);return}}else if("disable"==a.data("flyout")){a.children("a").length?$(".mystickyelements-on-click .elements-active").removeClass("elements-active"):a.parent("li").addClass("elements-active"),f=1,a.find("a").attr("href",d);return}}(a,d,h,i),1!=f))&&($(this).parent("li").hasClass("elements-active")?($(this).parent("li").removeClass("elements-active"),$.cookie("closed_contactform","closed",{path:"/"}),k.preventDefault()):($(".mystickyelements-on-click .elements-active").removeClass("elements-active"),$(this).parent("li").addClass("elements-active")))}),$(".mystickyelements-on-hover .mystickyelements-social-icon").on("click",function(a){$(this).parent("li").hasClass("elements-active")&&0==$(this).children("a").length&&($(this).parent("li").removeClass("elements-hover-active"),a.preventDefault(),$(this).parent().parent().parent().parent(".mystickyelements-on-hover").removeClass("mystickyelements-on-click"))}),$(".mystickyelements-on-hover .mystickyelements-social-icon-li").on("mouseenter",function(){$(this).hasClass("elements-active"),$(this).hasClass("elements-active")||($(".mystickyelements-on-click .elements-active").removeClass("elements-active"),$(this).addClass("elements-active"),$(this).addClass("elements-hover-active"),$(this).parent().parent().parent(".mystickyelements-on-hover").addClass("mystickyelements-on-click"))}).on("mouseleave",function(){$(this).removeClass("elements-active"),$(this).removeClass("elements-hover-active"),$(this).parent().parent().parent(".mystickyelements-on-hover").removeClass("mystickyelements-on-click")}),$(".mystickyelements-on-hover ul li.mystickyelements-contact-form").on("mouseenter",function(){$(this).addClass("element-contact-active")}).on("mouseleave",function(){$(this).removeClass("element-contact-active")}),$(".element-contact-close").on("click touch",function(a){$(".mystickyelements-contact-form").removeClass("elements-active"),$(".mystickyelements-contact-form").removeClass("element-contact-active"),$.cookie("closed_contactform","closed",{path:"/"})}),$("#stickyelements-form input:not(#stickyelements-submit-form), #stickyelements-form textarea ").on("keyup",function(a){$(this).val()&&($(this).css("background-color","#EFF5F8"),$(this).css("border-color","#7761DF"))}),i(),$("li.mystickyelements-minimize").on("click",function(e){var c,b,a,d;$(this).toggleClass("element-minimize"),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?(b="mobile",a="mobile-",d="element-mobile-on"):(b="desktop",a="",d="element-desktop-on"),!0===$(this).hasClass("element-minimize")?($.cookie("minimize_"+b,"minimize",{path:"/"}),c=!0):($.cookie("minimize_"+b,"minimize_not",{path:"/"}),c=!1),$(".mystickyelements-position-"+a+"left ul li").each(function(){!0==$(this).hasClass(d)&&(!0==$(".mystickyelements-fixed").hasClass("mystickyelements-size-large")?$(this).animate({width:"toggle",left:!0===c?"-=80":""}):$(this).animate({width:"toggle",left:!0===c?"-=50":""}))}),$(".mystickyelements-position-"+a+"right ul li").each(function(){!0==$(this).hasClass(d)&&(!0==$(".mystickyelements-fixed").hasClass("mystickyelements-size-large")?$(this).animate({width:"toggle",left:!0===c?"+=80":""},300,function(){}):$(this).animate({width:"toggle",left:!0===c?"+=50":""},300,function(){}))}),$(".mystickyelements-position-"+a+"bottom ul li").each(function(){!0==$(this).hasClass(d)&&($(this).css("position","relative"),!0==$(".mystickyelements-fixed").hasClass("mystickyelements-size-large")?$(this).animate({height:"toggle",bottom:!0===c?"-=80":""},300,function(){$(this).css("position",!0===c?"relative":"static")}):$(this).animate({height:"toggle",bottom:!0===c?"-=60":""},300,function(){$(this).css("position",!0===c?"relative":"static")}))}),$(".mystickyelements-position-"+a+"top ul li").each(function(){!0==$(this).hasClass(d)&&($(this).css("position","relative"),!0==$(".mystickyelements-fixed").hasClass("mystickyelements-size-large")?$(this).animate({height:"toggle",top:!0===c?"-=80":""},300,function(){$(this).css("position",!0===c?"relative":"static")}):$(this).animate({height:"toggle",top:!0===c?"-=60":""},300,function(){$(this).css("position",!0===c?"relative":"static")}))}),!0===$("span.mystickyelements-minimize").hasClass("minimize-position-"+a+"left")?!0===$("li.mystickyelements-minimize").hasClass("element-minimize")?$(".mystickyelements-minimize.minimize-position-"+a+"left").html("&rarr;"):$(".mystickyelements-minimize.minimize-position-"+a+"left").html("&larr;"):!0===$("span.mystickyelements-minimize").hasClass("minimize-position-"+a+"bottom")?!0===$("li.mystickyelements-minimize").hasClass("element-minimize")?$(".mystickyelements-minimize.minimize-position-"+a+"bottom").html("&uarr;"):$(".mystickyelements-minimize.minimize-position-"+a+"bottom").html("&darr;"):!0===$("span.mystickyelements-minimize").hasClass("minimize-position-"+a+"top")?!0===$("li.mystickyelements-minimize").hasClass("element-minimize")?$(".mystickyelements-minimize.minimize-position-"+a+"top").html("&darr;"):$(".mystickyelements-minimize.minimize-position-"+a+"top").html("&uarr;"):!0===$("li.mystickyelements-minimize").hasClass("element-minimize")?$(".mystickyelements-minimize.minimize-position-"+a+"right").html("&larr;"):$(".mystickyelements-minimize.minimize-position-"+a+"right").html("&rarr;")}),$(".mystickyelements-fixed ul li").each(function(){$(this).hasClass("mystickyelements-custom-html-main")&&$(this).hasClass("mystickyelements-custom-html-iframe")&&($(this).find(".mystickyelements-custom-html").height(),$(".mystickyelements-fixed ul").height())}),setTimeout(function(){$(".mystickyelements-entry-effect-fade.entry-effect,.mystickyelements-entry-effect-slide-in.entry-effect").css("transition","all 0s ease 0s")},1e3),$(".mystickyelements-fixed ul li").on("click",function(){$(this).hasClass("mystickyelements-custom-html-iframe")?$(".mystickyelements-fixed").toggleClass("mystickyelements-custom-html-iframe-open"):$(".mystickyelements-fixed").removeClass("mystickyelements-custom-html-iframe-open")}),$(".mystickyelements-fixed").addClass("entry-effect"),$(window).width()>1024&&300>$(".mystickyelements-position-bottom .mystickyelements-lists").width()&&$(".mystickyelements-position-bottom .mystickyelements-contact-form .element-contact-form").width("300"),h(),1==$("#phone_formate").val()){var a=document.querySelector("#contact-form-phone");window.intlTelInput(a,{dropdownContainer:document.body,formatOnDisplay:!0,hiddenInput:"full_number",initialCountry:"auto",nationalMode:!0,separateDialCode:!0,utilsScript:mystickyelement_obj.plugin_url+"intl-tel-input-src/build/js/utils.js"}),$("#contact-form-phone").addClass("tel_formate")}}),$(window).on("resize",function(){i(),h()}),jQuery(document).on("click",".mystickyelements-social-text a",function(){e=0,j($(this))}),jQuery(document).on("click",".mystickyelements-social-icon a",function(){var b=g(),a=$(this);"mobile"==b?"hover"==$(this).data("tab-setting")&&"enable"!==$(this).data("mobile-behavior")?j(a):"click"==$(this).data("tab-setting")&&"enable"!==$(this).data("flyout")?j(a):e>1&&(j(a),e=0):"enable"!==$(this).data("flyout")?j(a):e>1&&(j(a),e=0)}),jQuery("body").mouseup(function(a){0===$(a.target).closest(".mystickyelement-lists-wrap").length&&(e=0,jQuery(".mystickyelements-social-icon-li").removeClass("elements-active"))}),jQuery(document).on("click",".iti--allow-dropdown",function(){"hover"==jQuery(this).closest(".mystickyelements-contact-form").data("tab-opt")&&jQuery(this).closest("#mystickyelements-contact-form").parent().closest(".mystickyelements-on-hover").length>0&&(jQuery(this).closest(".mystickyelements-contact-form").addClass("country-code-trigger"),jQuery(this).closest(".mystickyelements-contact-form").removeClass("element-contact-active"),jQuery(this).closest(".mystickyelements-contact-form").addClass("elements-active"))}),jQuery(document).on("click","ul.iti__country-list li",function(){$(".mystickyelements-contact-form").each(function(a){"hover"==jQuery(this).data("tab-opt")&&(jQuery(this).addClass("element-contact-active"),jQuery(this).removeClass("elements-active"))})})}(jQuery)