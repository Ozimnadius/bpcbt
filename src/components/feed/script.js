window.addEventListener('load', function () {
    document.querySelector('.feed__form').addEventListener('submit', function (e){
        e.preventDefault();
        sendFeedData(this);
    });
});

function sendFeedData(form) {
    let data = $(form).serialize();

    $.ajax({
        dataType: "json",
        type: "POST",
        url: '/php/ajax.php',
        data: data,
        success: function (result) {
            if (result.status) {
                form.classList.add('sended');
            } else {
                alert('Что-то пошло не так, попробуйте еще раз!!!');
            }
        },
        error: function (result) {
            alert('Что-то пошло не так, попробуйте еще раз!!!');
        }
    });
}