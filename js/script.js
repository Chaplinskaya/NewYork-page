//menu.onclick = function myFunction() {
//	var x = document.getElementById('myTopnav');
	
//
//	if (x.className === "top-nav") {
//		x.className += " responsive";
//		document.header.style.paddingBottom = "0px";
//	} else {
//		x.className = "top-nav";
//	}
//}
$(document).ready(function() {
    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.menu'),
          menulink = document.querySelectorAll('.menu__link');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
		menu.classList.toggle('active');
    });
	menulink.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('active');
        });
    });

    //closeElem.addEventListener('click', () => {
        //menu.classList.remove('active');
    //});
    //menulink.forEach(item => {
        //item.classList.add('active');
        //item.addEventListener('click', () => {
            //menu.classList.remove('active');
        //});
    });

 $(document).ready(function() {
	$( ".button-portfolio" ).click(function() {
		$( ".portfolio-container" ).show();
		$( ".show-photo" ).show();
		$( ".hide-photo" ).show( 1000 );
		$(this).hide();
			$(".close_button").show();
		});
		
	$( ".close_button" ).click(function() {
		$( ".show-photo").show( 1000 );
		$(".hide-photo").hide( 1000 );
		$( ".button-portfolio" ).show();
		$(".close_button").hide();
	});
	});		
		
	
$('.testimonials-container').slick({
	dots: true,
	speed: 700,
	arrows: false,
	slidesToShow: 1,
	infinite: true,
	nextArrow: false,
	prevArrow: false,
	adaptiveHeight: true
	});
