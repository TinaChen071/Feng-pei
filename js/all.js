// $(document).ready(function () {
//     $(".profileIcon").hover(function (e) { 
//         $('.profileMenu').toggle();
//     });
//  });

$(document).ready(function () {
    $(".mobileMenu").click(function (e) { 
        $('.mobile-menu').toggle();
    });
 });
 $(window).resize(function() {
  if(screen.width>768) {
    $('.mobile-menu').hide();
  }
}); 

// arrow icon
// $(document).ready(function () {
//   $('.mainMenu > li > a').click(function (e) { 
//         $(".arrow").toggleClass("active");
//     });
//  });
 // mobile navbar
$(document).ready(function() {
  $('.mainMenu > li > a').click(function(event) {
    
     event.preventDefault();
      
     $(this).parent().siblings().find('ul').slideUp();
     // 將 this 以外的全部隱藏 > 找到父元素 > 找到 ul 關閉
     $(this).parent().find('ul').slideToggle();
        // 找出自己的 ul 做摺疊效果  
   });
});
$(document).ready(function () {
  $('.mainMenu > li > ul > li > a').click(function(event) {
    
    event.preventDefault();
     
    $(this).parent().siblings().find('ul').slideUp();
    // 將 this 以外的全部隱藏 > 找到父元素 > 找到 ul 關閉
    $(this).parent().find('ul').slideToggle();
       // 找出自己的 ul 做摺疊效果  
  });
});
// $(document).ready(function () {
//     $(".ddd").mouseenter(function () {
//         $('.mobile__menu--hover').removeClass('hidden');
//         }
//     );
//     $(".mobile__menu--hover").mouseout(function () {
//         $('.mobile__menu--hover').addClass("hidden");
//         }
//     );
//  });

// modal
// $(function(){

//     $('#modal__btn').on('click',function(){
//         $(".modal").removeClass("hidden");
//     });
    
//     $('.js-modal-close').on('click',function(){
//         $(".modal").addClass("hidden");
//     });

//     // 點畫面外
//     $("body").on('click',function(){
//         $(".modal").toggle();
//       });
//   });
// 點擊畫面外關閉
  $("body").click(function(){
    $(".modal").hide();
    $(".modal-favorite").hide();
  });

   
  // 點擊DIV時、不向上層冒泡。
  $(".modal__btn").click(function(e){
    e.stopPropagation();
  });
   
  // 點擊按鈕時顯示或隱藏DIV
  $(".modal__btn").click(function(e){
    e.stopPropagation();
    $(".modal").toggle();
  });
  // 加入收藏
  $(".modal__fav__btn").click(function(e){
    e.stopPropagation();
    $(".modal-favorite").toggle();
  });

// superfish menu
$(document).ready(function(){
    $("ul.sf-menu").superfish({
      hoverClass:  'sfHover', //當滑鼠掠過時的class
      pathClass:   'overideThisToUse', // 啟用的選單項的class
      pathLevels:  1,    // 選單級數
      delay:     800,    // 下拉選單在滑鼠離開時自動隱藏時間。預設是800毫秒
      animation:   {opacity:'show'}, // 動畫效果，參考Jquery的動畫jQuery's .animate()
      speed:     'normal',  // 動畫速度， 參考Jquery的動畫jQuery's .animate()
      dropShadows:  true,   // 陰影效果，關閉用‘false'
      onInit:    function(){},  // 初始化的回撥函式
      onBeforeShow: function(){}, // 子選單顯示前回調函式
      onShow:    function(){}, // 子選單顯示時回撥函式
      onHide:    function(){}  // 子選單隱藏時回撥函式
    });
   });


// Swiper
$(document).ready(function () {
    
      const swiper = new Swiper('.swiper', {
      // Optional parameters
      // direction: 'vertical',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

     // auto play
      autoplay: {
      delay: 3000,
      },

      // And if we need scrollbar
    //   scrollbar: {
    //     el: '.swiper-scrollbar',
    //   },
    });
    
});

// Sub Product Sort
$("#menu-button").click(function(e){
  e.stopPropagation();
  $("#drop-menu").toggle();
});

// Sub Product Sort 點擊畫面外關閉
$("body").click(function(){
  $("#drop-menu").hide();
});









