$(document).ready(function() {

//Плавный скрол на форму
	$(".order-button").mPageScroll2id();


//AJAX отправка формы
var form = document.querySelector(".form-container");
var order = document.querySelector(".order-confirm");
var button = document.querySelector(".order-button");

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			// console.log(this);
			form.classList.add("hidden");
			order.classList.remove("hidden");
			button.href="#order";
			// order.classList.add("show");
			// alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			// $("#order").trigger("reset");
		});
		return false;
	});

});

$(window).scroll(function() {

		var st = $(this).scrollTop();

		$(".promo").css(
			"background-position", "0 " + st/14 + "%"
			// "transform" : "translate("
		);

});


var body = document.body,
    timer;

window.addEventListener('scroll', function() {
  clearTimeout(timer);
  if(!body.classList.contains('disable-hover')) {
    body.classList.add('disable-hover')
  }

  timer = setTimeout(function(){
    body.classList.remove('disable-hover')
  },500);
}, false);




			//
      // link.addEventListener("submit", function(event) {
			// 	event.preventDefault();
			//
			// 	popup.style.height="400px";
			//
      // });
