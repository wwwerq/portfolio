"use strict";var ANIM_END="animationend oAnimationEnd Animationend webkitAnimationEnd",slideIndex=1;window.app={foundation:function(){$(document).foundation()},currentDiv:function(n){app.carousel(slideIndex=n),document.getElementById("slide1").className+=" animated bounceInLeft",document.getElementById("slide2").className+=" animated bounceInRight"},carousel:function(n){var e,t=document.getElementsByClassName("slide"),a=document.getElementsByClassName("dot");for(n>t.length&&(slideIndex=1),n<1&&(slideIndex=t.length),e=0;e<t.length;e++)t[e].style.visibility="hidden",t[e].style.display="none";for(e=0;e<a.length;e++)a[e].className=a[e].className.replace(" active","");t[slideIndex-1].style.visibility="visible",t[slideIndex-1].style.display="block",a[slideIndex-1].className+=" active"},toggleMenu:function(){$(".main-header nav > ul > li > a").click(function(){$("header.main-header").addClass("hidden")}),$(".nav-link").click(function(){$(".splash").addClass("hidden")}),$(".back > a").click(function(){$("header.main-header").removeClass("hidden"),$(".splash").removeClass("hidden")})},move:function(n,e,t){$(n).css(e,t)},scrollTo:function(){$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var n=$(this.hash);if(n=n.length?n:$("[name="+this.hash.slice(1)+"]"),n.length)return $("html, body").animate({scrollTop:n.offset().top},1e3),!1}})},animationOnScroll:function(){$("[data-anim]").each(function(n,e){var t=$(e).attr("data-anim"),a=$(e).attr("data-offset"),i=$(e).attr("data-delay"),o=$(e).attr("data-dur");$(e).attr("data-res");$(e).unbind().removeData().waypoint(function(){o&&$(e).css("animation-duration",o),setTimeout(function(){$(e).addClass(t),$(e).addClass("animated")},void 0!=i?1e3*parseFloat(i):0)},{offset:a||"80%"})})},scrolling:!1,inBounds:function(n,e){if(!n.length||app.scrolling)return!1;var t=n.position().top,a=n.position().top+n.outerHeight(),i=$(window).scrollTop(),o=$(window).scrollTop()+$(window).height(),l=$(window).height();if("center"==e){if(t<o-l/2&&a>o-l/2)return!0}else if(t<i+e&&a>i+e)return!0;return!1},init:function(){app.foundation(),app.scrollTo(),app.animationOnScroll(),app.toggleMenu(),app.carousel(1)}},$(function(){$(document).scrollTop(0),app.init(),$(window).resize(app.onResize),$(document).on("scroll ontouchstart",app.onScroll),$(window).trigger("resize"),$(window).trigger("scroll")});