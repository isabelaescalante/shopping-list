$("#add").on("click", function(event) {
	event.preventDefault();
	let item = $("#itemText").val();
	if(item != "") {
			$("#list").append(`
			<div class="listItems"> 
				<li> 
					${item} 
				</li>
				<button id="check"> 
					Check 
				</button> 
				<button id="delete"> 
					Delete 
				</button> 
			</div>
		`);
	}
})

$("#list").on("click", "#check", function(event) {
    event.preventDefault();
    let item = $(this).parent().find("li");
    console.log("checked")
    if(item.attr("class") == "checked") {
    	item.removeClass("checked");
    }
    else {
    	item.addClass("checked");
    }
});

$("#list").on("click", "#delete", function(event) {
	event.preventDefault();
	$(this).parent().remove();
})
