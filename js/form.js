$('._js-send').on('submit', function () {
    var form = $(this);
	form.find('input').css("box-shadow","0px 0px 0px 0px #bd0924 inset");
    $.ajax({
        type:"POST",
        enctype:'application/x-www-form-urlencoded',
        url:form.attr("action"),
        data:form.serialize(),
        success:function (data) {
            if (data.status == 'ok') {
				form.html('<h1 style="text-align:center;">Ваша заявка отправлена!</h1>');
            } else {
				form.find('input').css("box-shadow","0px 0px 0px 3px #3ed60f inset");
				$.each(data.errName, function(i, val){
					form.find('[name='+val+']').css("box-shadow","0px 0px 0px 3px #bd0924 inset");
				});
            }
        }
    });
    return false;
});