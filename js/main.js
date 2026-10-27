$(document).ready(function(){

    // 인포그래픽과 블로그 썸네일 클릭 시 이미지 확대
    $('.Portfolio_box').eq(1)
    .add($('.Portfolio_box').eq(2))
    .find('.Portfolio_img_box img')
    .on('click', function(){

        // 클릭한 이미지의 경로와 설명 가져오기
        const imgSrc = $(this).attr('src');
        const imgAlt = $(this).attr('alt');

        // 모달에 이미지 경로와 설명 넣기
        $('.Portfolio_modal img')
        .attr('src', imgSrc)
        .attr('alt', imgAlt);

        // 모달 열기
        $('.Portfolio_modal').addClass('active');

    });

    // X 버튼을 누르면 닫기
    $('.modal_close').on('click', function() {
        $('.Portfolio_modal').removeClass('active');
    });

    // 어두운 배경을 누르면 닫기
    $('.Portfolio_modal').on('click', function(e) {
        if($(e.target).hasClass('Portfolio_modal')) {
            $('.Portfolio_modal').removeClass('active');
        }
    });

    // ESC 키를 누르면 닫기
    $(document).on('keydown', function(e){
        if (e.key === 'Escape') {
            $('.Portfolio_modal').removeClass('active');
        }
    });






    
}); // end


