$(function(){
    $(".ryu").mouseover(function() {
	$(".fighting").hide();
	$("#rready").show();
    })
    .mouseleave(function() {
	$(".fighting").hide();
	$("#rstill").show();
    })
    
	.mousedown(function(){
	    playHadouken();
	    $(".fighting").hide();
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
	$(".fighting").hide();
	$("#rready").show();
    });


    $(document).keydown(function(event){
	if (event.which == 88){
	    $(".fighting").hide();
	    $(".showoff").show();
	}
    })
	.keyup(function(event){
	    if (event.which == 88){
		$(".fighting").hide();
		$("#rstill").show();
	    }
	})
})

function playHadouken () {
    
    $("#hadouken-sound")[0].volume = 0.5;
    $("#hadouken-sound")[0].load();
    $("#hadouken-sound")[0].play();
}
