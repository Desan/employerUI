$(document).ready(function() {
	
	function addUser(user) {
		var tab = $("<li></li>").text(user.userName);
		var del = $('<img class="black-cross deleteWorker" src="img/x-icon.svg" alt="X">');
		tab.addClass("button");
		tab.append(del);
		$(".staff_list").prepend(tab);
		del.on('click', function() {
			if (confirm("Вы действительно хотите удалить запись?")) 
				tab.remove();
		});
	};

	addUser({userName: "Лева", userEmail: "none", comment: "none"});

	//open edit form
	$("#addEmployer").on("click", function() {
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
		deleteUser($(this));
	});
});