jQuery(function($){
    $('.close-box').on('click', function (){
        $('.my-custom-box').slideUp();
    });
    $('.yt-modal-btn').onl('click', function (){
        $('#video-modal').modal('show');
    });
});