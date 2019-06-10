$(function ($) {
   
    function Header() {


        var sideBt = '.menu-left';
        var sideBar = '.sidebar';
        $(sideBar).addClass('hide-obj');
       
        var init = function () {
           onNavBarClick();
        }

        var onNavBarClick = function () {
            $(sideBt).click(function (e) {
                if ($(sideBar).hasClass('show-obj')) {

                    console.log('click hide');
                    $(sideBar).removeClass('show-obj');
                    $(sideBar).addClass('hide-obj');
                    $('.menu-left span').text('MENU');
                } else {
                    console.log('click show');
                    $(sideBar).removeClass('hide-obj');
                    $(sideBar).addClass('show-obj');
                    $('.menu-left span').text('CLOSE');
                }

               
            });
        }
       init();
    }


   function Hilight() {

        var init = function () {
             addSlide();
        }

       var addSlide = function () {
           trace('----add slide---');
           var swiper = new Swiper('#swiper-hilight', {
               slidesPerView: 1,
               loop: true,
               
                spaceBetween: 10,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            });

         
        }
        init();
    }


    function Product() {

        var init = function () {
            addSlide();
        }

        var addSlide = function () {
            trace('----add slide product---');
            var swiper = new Swiper('.swiper-product', {
                direction: 'vertical',
                pagination: {
                    el: '.pag-product',
                    clickable: true,
                },
              
            });


        }
        init();
    }






    function trace(str) {
        console.log(str);

    }
   
    new Header();
    new Hilight();
    new Product();


}(jQuery));
