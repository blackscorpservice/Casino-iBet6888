var errorFocus;var mobileSelect;var setUpHelperModal;$(document).ready(function(){var controlNav=function(){if($('.navigation').length>0){var nav=$('.navigation');var isOpen=false;nav.find('.close-btn,.navigation-block').on('click',function(){nav.find('.menu-inner').removeClass('menu-is-open');nav.find('.navigation-block').fadeOut();isOpen=false;})
$('header .lnk-menu').on('click',function(){nav.find('.menu-inner').addClass('menu-is-open');nav.find('.navigation-block').fadeIn();isOpen=true;})
var currentTouchClientX=[];var timeStrat=0;var touchTimmer;document.addEventListener("touchmove",function(e){if(isOpen==true){currentTouchClientX.push(e.touches[0].clientX);if(currentTouchClientX[0]-currentTouchClientX[currentTouchClientX.length-1]>=60){nav.find('.close-btn,.navigation-block').trigger('click');timeStrat=0;}
if(timeStrat==0){timeStrat=1;touchTimmer=setTimeout(function(){currentTouchClientX=[];},1000)}}});}};var goTop=function(){$('.go-top-btn').on('click',function(){var $body=(window.opera)?(document.compatMode=="CSS1Compat"?$('html'):$('body')):$('html,body');$body.animate({scrollTop:0},600);})};var languageChange=function(){$('#language-change').on('click',function(){$('#language-change-select').on('change',function(){location=location;})});};var verificationCodeRefresh=function(){if($(".lnk-refresh").length>0){$(".lnk-refresh").on("click",function(){$(this).addClass("refreshclick").one('webkitAnimationEnd mozAnimationEnd oAnimationEnd msAnimationEnd animationend',function(){$(this).removeClass("refreshclick");});});}};var touchCheck=function(){};mobileSelect=function(){$('.mobile-select-box').each(function(i,row){var input=$(row).find('.mobile-select');var defaultPlaceholder=input.find('option:selected').text();var text=$(this).append('<span class="mobile-select-text">'+defaultPlaceholder+'</span>').find('.mobile-select-text');input.on('change',function(){if($(this).val()!=''&&$(this).val()!=null){text.removeClass('mobile-placeholder');}else{text.addClass('mobile-placeholder');}
var placeholder=input.find('option:selected').text();text.text(placeholder);}).trigger('change');})};var mobileDate=function(){$('.mobile-date-box').each(function(i,row){var input=$(row).find('.mobile-date');var defaultPlaceholder=input.attr('data-placeholder');var text=$(this).append('<span class="mobile-date-text">'+defaultPlaceholder+'</span>').find('.mobile-date-text');input.on('change',function(){if($(this).val()!=''&&$(this).val()!=null){text.removeClass('mobile-placeholder');text.text($(this).val());}else{text.addClass('mobile-placeholder');text.text(defaultPlaceholder);}}).trigger('change');})};var closefestival=function(){if($('.close-festival-btn').length>0){$('.close-festival-btn').on('click',function(){$(this).parent().remove();});};};setUpHelperModal=function(){var helper=$('.helper');if(helper.length>0){helper.imModal();helper.each(function(index,row){if($(row).attr('id')==='IndexHelper'){var pathname=window.location.pathname.split('/');var pageName=pathname[pathname.length-1];if(pageName==='index-login.html'||pageName==='index.html'){$(row).show();}}else{$(row).show();}});}}
var closeAd=function(){if($('.close-ad-btn').length>0){$('.close-ad-btn').on('click',function(){$(this).parent().remove();});};};errorFocus=function(){var errorDom=$('.validate-error');var $body=(window.opera)?(document.compatMode=="CSS1Compat"?$('html'):$('body')):$('html,body');$body.animate({scrollTop:errorDom.offset().top-(errorDom.height()/2)},600);};var appInit=function(){w3.includeHTML(function(){if(window.pageInit){pageInit();}
controlNav();languageChange();goTop();verificationCodeRefresh();touchCheck();closeAd();setUpHelperModal();closefestival();});}
fancyboxImage();appInit();featuredGames();});var fancyboxImage=function(){$('.message-image').each(function(){var src=$(this).attr('src');$(this).replaceWith(`<a data-fancybox="gallery" href="${src}" class="img-photo"><img src="${src}" class="img-responsive"></a>`);});};var getFileData=function(myFile){var file=myFile.files[0];var filename=file.name;$('.file-name').html(filename);}
var numberFormat=function(number,decimals,decPoint,thousandsSep,roundtag){number=(`${number}`).replace(/[^0-9+-Ee.]/g,'');roundtag=roundtag||'ceil';var n=!isFinite(+number)?0:+number,prec=!isFinite(+decimals)?0:Math.abs(decimals),sep=(typeof thousandsSep==='undefined')?',':thousandsSep,dec=(typeof decPoint==='undefined')?'.':decPoint,s='',toFixedFix=function(n,prec){var k=Math.pow(10,prec);return `${parseFloat(Math[roundtag](parseFloat((n*k).toFixed(prec*2))).toFixed(prec*2))/k}`;};s=(prec?toFixedFix(n,prec):`${Math.round(n)}`).split('.');var re=/(-?\d+)(\d{3})/;while(re.test(s[0])){s[0]=s[0].replace(re,`$1${sep}$2`);}
if((s[1]||'').length<prec){s[1]=s[1]||'';s[1]+=new Array(prec-s[1].length+1).join('0');}
return s.join(dec);}
var openRemindModal=function(){$('#remind-modal .im-modal').addClass('im-modal-open');}
var setRemindModalCloseEvent=function(){$('#remind-modal .im-modal-bg,#remind-modal .im-modal-close-handle').click(function(){$('#remind-modal .im-modal').removeClass('im-modal-open');})}
setRemindModalCloseEvent();function featuredGames(){var swiper=new Swiper('.featured-games',{slidesPerView:3,slidesPerGroup:3,spaceBetween:15,loop:true,pagination:{el:'.swiper-pagination',clickable:true,},});}