$(document).ready(function(){

    // 인포그래픽과 블로그 썸네일 클릭 시 이미지 확대
    $('.Portfolio_box').eq(1)
    .add($('.Portfolio_box').eq(2))
    .find('.Portfolio_img_box img, span')
    .on('click', function(){

        // 클릭한 이미지의 경로와 설명 가져오기
        const imgSrc = $(this)
        .closest('.Portfolio_box')
        .find('.Portfolio_img_box img')
        .attr('src');

        // 클릭한 작품의 이미지 설명 가져오기
        const imgAlt = $(this)
        .closest('.Portfolio_box')
        .find('.Portfolio_img_box img')
        .attr('alt');

        // 모달에 이미지 적용하기
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

    // 카드뉴스 이미지 또는 안내 글자 클릭 시 모달 열기
    $('.Portfolio_box').eq(3)
    .find('.Portfolio_img_box img, span')
    .on('click', function(){
        $('.CardNews_modal').addClass('active');

        // 홈페이지 스크롤 막기
        $('body').css('overflow', 'hidden');
    });

    // 카드뉴스 모달 닫기 함수
    function closeCardNewsModal() {
        $('.CardNews_modal').removeClass('active');
        $('body').css('overflow', '');
    }

    // X 버튼을 누르면 카드뉴스 모달 닫기
    $('.CardNews_close').on('click', function(){
        closeCardNewsModal();
    });

    // 어두운 배경을 누르면 카드뉴스 모달 닫기
    $('.CardNews_modal').on('click', function(e){
        if ($(e.target).hasClass('CardNews_modal')) {
            closeCardNewsModal();
        }
    });

    // ESC 키를 누르면 카드뉴스 모달 닫기
    $(document).on('keydown', function(e) {
        if(e.key === 'Escape') {
            closeCardNewsModal();
        }
    });





    
}); // end


