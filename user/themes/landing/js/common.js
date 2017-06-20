$(document).ready(function() {

	$(".order-button").mPageScroll2id();

	$("#order").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});

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


var link = document.querySelector(".form-button");
var popup = document.querySelector(".popup-ok");

      link.addEventListener("submit", function(event) {
				event.preventDefault();

				popup.style.height="400px";

      });
