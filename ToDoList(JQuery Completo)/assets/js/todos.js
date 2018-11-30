//Check off specific todos by clicking

//$("li").click(function(){
$("ul").on("click", "li", function(){ //possiamo aggiungere listener solo su elementi esistenti
	//aggiungiamo quindi un listener a tutto <ul>

	//$(this).css("color", "gray");
	//$(this).css("textDecoration", "line-through");
	//riassunte nelle linee sotto

	// if ($(this).css("color") === "rgb(128, 128, 128)") {
	// 	$(this).css({
	// 		color: "black",
	// 		textDecoration: "none"
	// 	});
	// }
	// else {
	// 	$(this).css({
	// 		color: "gray",
	// 		textDecoration: "line-through"
	// 	});
	// }
	//riassunto tutto in toggleClass

	$(this).toggleClass("completed");
});

//click on X to delete Todo
//$("span").on("click", function(event){ //refactored in (vedi sotto)
$("ul").on("click", "span", function(event){ //stesso discorso degli <li> sugli eventi listeners

	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	}); //get rid of <li>

	event.stopPropagation();
});

$('input[type = text]').keypress(function(event){
	if (event.which === 13){
		//grab new todo text from input
		var todoText = $(this).val();
		//create new li and add to ul
		$('ul').append("<li><span><i class=\"fas fa-trash-alt\"></i></span>" + todoText +  "</li>");
		//clear the text inside input
		$(this).val("");
	}
});

//clicking plus shows input
$(".fa-plus").on("click", function(){
	$('input[type = text]').fadeToggle();
})