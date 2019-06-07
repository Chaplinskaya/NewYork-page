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

$(function()
{
	$('.top-nav, #myTopnav').click(function()
	{
		$('#myTopnav').toggleClass('responsive');
	})
	$(document).click(function(event)
{
	if($(event.target).closest(".top-nav").
		length ) return;
		$('#myTopnav').removeClass(' responsive');
	event.stopPropagation();
});
		})

