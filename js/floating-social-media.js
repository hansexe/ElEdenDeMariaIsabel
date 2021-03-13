//Social floating button
$('.main-btn').on('click', function () {
    $('.float-btn ul').toggleClass('toggled');
});


function openMessenger() {
    window.open('https://m.me/quintamisabel', 'messenger', 'top=0, left=' + (screen.width - 500) + ', width='+ screen.width + ', height=' + screen.height);
    document.body.classList.add('inactive');
    setTimeout(function () {
        checkFocus = setInterval(function () {
            if (document.hasFocus()) {
                document.body.classList.remove('inactive');
                clearInterval(checkFocus);
            }
        }, 1)
    }, 1000);
}