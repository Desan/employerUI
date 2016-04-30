$(document).ready(function() {
	
	function addUser(user) {

		var card = $("<div></div>")
			.addClass("card");
		for (var prop in user) {
			var field = $('<p></p>').text(user[prop]);
			card.append(field);
		};

		var tab = $("<li></li>")
			.text(user.userName)
			.addClass("button")
			.on('click', function() {
				card.siblings().removeClass('card-active');
				card.addClass('card-active');
			});


		var del = $('<img class="black-cross deleteWorker" src="img/x-icon.svg" alt="X">')
			.on('click', function() {
				if (confirm("Вы действительно хотите удалить запись?")) {
					tab.remove();
					card.remove();
				}
			});

		tab.append(del);



		$(".staff_list").prepend(tab);
		$('.staff_card').prepend(card);


	};

	addUser({userName: "Иванов", userEmail: "none", comment: "1"});
	addUser({userName: "Петров", userEmail: "none", comment: "2"});


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

});