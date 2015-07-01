$(function(){
    $("#hadouken-sound")[0].load();
    $(".ryu").mouseover(function() {
	$("#rready").show();
	$("#rstill").hide();
	/*alert('mouseenter event firing');*/
    })
    .mouseleave(function() {
	$("#rstill").show();
	$("#rready").hide();
    })
    
	.mousedown(function(){
	    playHadouken();
	    $("#rready").hide();
	    $("#rthrow").show();
	    $("#hadouken").finish().show().animate(
		{"left": "1020px"},
		500,
		function() {
		    $(this).hide();
		    $(this).css("left","520px");
	    }
	);
    })
    .mouseup(function(){
	$("#rready").show();
	$("#rthrow").hide();
    });


    $(document).keydown(function(event){
	if (event.which == 88){
	    $(".fighting").hide();
	    $(".showoff").show();
	}
    })
	.keyup(function(event){
	    if (event.which == 88){
		$(".showoff").hide();
		$("#rstill").show();
	    }
	})
})

function playHadouken () {
    $("#hadouken-sound")[0].volume = 0.5;

    $("#hadouken-sound")[0].play();
}
