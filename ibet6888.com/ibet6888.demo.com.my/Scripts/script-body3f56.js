$(document).ready(function(){$("#my-menu").mmenu({extensions:["pagedim-black","border-none"],},{offCanvas:{pageSelector:"#mm-wrapper",},});$("noscript").prependTo($("body"));var degrees=0;$('.refresh-verify').click(function rotateMe(e){degrees+=360;$('.refresh-verify i').css({'transition-duration':'0.5s','transform':'rotate('+degrees+'deg)','-ms-transform':'rotate('+degrees+'deg)','-moz-transform':'rotate('+degrees+'deg)','-webkit-transform':'rotate('+degrees+'deg)','-o-transform':'rotate('+degrees+'deg)'});})
$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[role="tab"]').not('[data-toggle="collapse"]').not('.navbar-toggler').not('.mm-btn_next').click(function(event){if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){var target=$(this.hash);target=target.length?target:$('[name='+this.hash.slice(1)+']');if(target.length){event.preventDefault();$('html, body').animate({scrollTop:target.offset().top},1000,function(){var $target=$(target);$target.focus();if($target.is(":focus")){return false;}else{$target.attr('tabindex','-1');$target.focus();};});}}});setTimeout(function(){$('.same-height').matchHeight();$('.about-card').matchHeight();},200);$('.featured-slider').slick({slidesToShow:6,slidesToScroll:6,arrows:false,dots:true,responsive:[{breakpoint:767,settings:{slidesToShow:3,slidesToScroll:3,},},],});$('.news-slider').slick({slidesToShow:1,slidesToScroll:1,arrows:true,dots:true,});$('#newsModal').on('shown.bs.modal',function(e){setTimeout(function(){$('.news-slider').resize();},2000);setTimeout(function(){$('.loading').hide('fade');$('.news-slider').removeClass('invisible');},2200);})
$('#loginModal').on('shown.bs.modal',function(e){GetNewVcode('boxloginvcode','#BoxLoginCodeImg');});$('#callbackModal').on('shown.bs.modal',function(e){GetNewVcode('CBScode','#VcodeImg_CallbackService');});$('#fpEmailModal').on('shown.bs.modal',function(e){GetNewVcode('fp_vcode','#FPVcodeImg');});$('.promo-list').slick({responsive:[{breakpoint:3000,settings:"unslick",},{breakpoint:991,settings:{slidesToShow:2,slidesToScroll:2,arrows:false,dots:true,autoplay:true,},},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1,arrows:false,autoplay:true,centerMode:true,centerPadding:'70px',},},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,arrows:false,autoplay:true,centerMode:true,centerPadding:'30px',},},],});$('.marquee').marquee({duration:15000,gap:100,delayBeforeStart:0,direction:'left',duplicated:true,pauseOnHover:true,});$('.langpick').selectpicker({style:'btn-link',size:4,width:'fit',});$('.langpick').selectpicker('refresh');$('.form-dropdown').selectpicker({style:'btn-light',size:5,});$('.mobile-langpicker').selectpicker('mobile');$('[data-toggle="popover"]').popover({});$(".hoverpop").popover({trigger:"hover",}).on("mouseenter",function(){var _this=this;$(this).popover("show");$(".popover").on("mouseleave",function(){$(_this).popover('hide');});}).on("mouseleave",function(){var _this=this;setTimeout(function(){if(!$(".popover:hover").length){$(_this).popover("hide");}},100);});$(".satisfiction").click(function(){$('.satisfiction.active').removeClass('active');$(this).addClass("active");});$(".langpick.selectpicker").on('change',function(){var langpickvalue=$(this).val().trim();switch(langpickvalue){case '简体中文':window.location="language.php?lang=zh&link=";break;case 'English':window.location="language.php?lang=en&link=";break;default:window.location="language.php?lang=en&link=";}});$(".mobile-langpick.selectpicker").on('change',function(){var langpickvalue=$(this).val().trim();switch(langpickvalue){case '简体中文':window.location="language.php?lang=zh&link=";break;case 'English':window.location="language.php?lang=en&link=";break;default:window.location="language.php?lang=en&link=";}});});