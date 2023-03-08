$(document).ready(function () {
    $(".profileIcon").hover(function (e) { 
        $('.profileMenu').toggle();
    });
 });

$(document).ready(function () {
    $(".mobileMenu").click(function (e) { 
        $('.mobile-menu').toggle();
    });
 });
$(document).ready(function () {
    $(".teamBtn").click(function (e) { 
        $('.sub-menu-1').toggle();
        $(".aaa").toggleClass("active");
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






