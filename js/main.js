$(document).ready(function() {
	
	//open edit form
	$("#editEmployer").on("click", function() {
		$('.addEmployerPopup_overlay').css('display', 'block');
	});

	//delete worker and tab
	$(".deleteEmployer").on("click", function() {
		if (confirm("Вы действительно хотите удалить запись?")) 
			$(this).parent().remove();
	});
});