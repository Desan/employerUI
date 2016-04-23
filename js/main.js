$(document).ready(function() {
	
	var base = [
		{userName: "Вася", userEmail: "none@none.no", comment: ""},
		{userName: "Петя", userEmail: "none@none.no", comment: ""},
		{userName: "Коля", userEmail: "none@none.no", comment: ""}
	];

	function reloadUsers() {
		for (var i = 0; i < base.length; i++) {
			console.log('<span class="button" >' + base[i].userName);
		};
	}

	reloadUsers();

	//open edit form
	$("#addEmployer").on("click", function() {
		var userName, userEmail, comment = "";
		$('.popup_overlay').css('display', 'block');
	});

	//close edit form
	$(".closeWindow, .popup_overlay").on("click", function() {
		$('.popup_overlay').css('display', 'none');
	});

	// prevent events from getting pass .window
	$(".window").click(function(event){
		event.stopPropagation();
	});

	//delete worker and tab
	$(".deleteWorker").on("click", function() {
		if (confirm("Вы действительно хотите удалить запись?")) 
			$(this).parent().remove();
	});
});