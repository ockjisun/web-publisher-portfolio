$(document).ready(function(){

    // 향수 상세페이지 전체 이미지 모달
    $('.Portfolio_box').eq(1).find('span').on('click', function(){

        // 상세페이지 모달 열기
        $('.DetailPage_modal').addClass('active');

        // 뒤에 있는 사이트 스크롤 방지
        $('body').css('overflow', 'hidden');
    });

    // 상세페이지 모달 닫기 함수
    function closeDetailPageModal() {

        $('.DetailPage_modal').removeClass('active');

        // 사이트 스크롤 복구
        $('body').css('overflow', '');
    }

    // X 버튼 클릭 시 닫기
    $('.DetailPage_close').on('click', function(){

        closeDetailPageModal();
    });

    // 모달 바깥쪽 클릭 시 닫기
    $('.DetailPage_modal').on('click', function(e){

        if($(e.target).hasClass('DetailPage_modal')){
            closeDetailPageModal()
        }
    });

    //블로그 썸네일 클릭 시 이미지 확대
    $('.Portfolio_box').eq(2)
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

      // ESC 키를 누르면 닫기
    $(document).on('keydown', function(e){
        if (e.key === 'Escape') {

            $('.Portfolio_modal').removeClass('active');
            $('.DetailPage_modal').removeClass('active');
            $('.CardNews_modal').removeClass('active');

            // 사이트 스크롤 복구
            $('body').css('overflow', '');
        }
    });

    // 새로고침하면 페이지 맨 위에서 시작
    if('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    window.addEventListener('load', function(){
        window.scrollTo(0, 0);
    });

    // GNB 클릭 시 해당 섹션으로 이동
    $('.gnb a').on('click', function(e) {
        e.preventDefault();

        const target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top - 80
        }, 500);
    });

    // 푸터 로고 클릭 시 맨 위로 이동
    $('.footer_logo').on('click', function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false; // 기본 링크 동작과 이벤트 전파를 추가로 막음
    });

    // 헤더 로고 클릭 시 페이지 새로고침
    $('.logo').on('click', function(){
        window.location.href = window.location.pathname;
    });

}); // end


