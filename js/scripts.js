var toggler = document.getElementById('toggler');
toggler.onclick = function(e){
  e.preventDefault();
  toggler.classList.toggle('toggler--close');
  document.getElementById('nav').classList.toggle('nav--visible');
}

  jQuery("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 0;
    jQuery('html,body').stop().animate({ scrollTop: jQuery(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });

  jQuery(document).ready(function() {

      jQuery('a[href="#header-top"]').click(function(){
          jQuery('html, body').animate({scrollTop:0}, 'slow');
          return false;
      });

  });

  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 1600) {
      jQuery('.totop').addClass('show');
    }
    else {
      jQuery('.totop').removeClass('show');
    }
  });

  jQuery(document).ready(function(){
      jQuery('.exampleModalbtn').on('click', function(event) {
        event.preventDefault();
        jQuery('#exampleModal').arcticmodal();
      });
  });

  jQuery(document).ready(function() {
    jQuery('#modal-phone').mask('+7(999)999-99-99');
  });


// form mail
jQuery(document).ready(function() {
    jQuery("#form").submit(function() { //устанавливаем событие отправки для формы с id=form
            var form_data = jQuery(this).serialize(); //собераем все данные из формы
            jQuery.ajax({
            type: "POST", //Метод отправки
            url: "form.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                   //код в этом блоке выполняется при успешной отправке сообщения
                   alert("Ваше сообщение отправлено!");
            }
        });
    });
});
