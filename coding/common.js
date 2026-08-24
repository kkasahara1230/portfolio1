$(function () {

    // ABOUT
    $(window).on("scroll", function () {

        const aboutTop = $(".about").offset().top;
        const scrollTop = $(window).scrollTop();
        const windowHeight = $(window).height();

        if (scrollTop + windowHeight > aboutTop + 100) {
            $(".about").addClass("is-show");
        }

    });


    // WORKS
    $(window).on("scroll", function () {

        $(".works-group").each(function () {

            const worksTop = $(this).offset().top;
            const scrollTop = $(window).scrollTop();
            const windowHeight = $(window).height();

            if (scrollTop + windowHeight > worksTop + 100) {
                $(this).addClass("is-show");
            }

        });

    });

});

// PAGE TRANSITION
$(function () {

    // ページ遷移用の要素を作成
    $("body").append('<div class="page-transition"></div>');

    $(".works-list a").on("click", function (e) {

        const url = $(this).attr("href");

        // 通常のリンク以外は処理しない
        if (!url || url === "#") {
            return;
        }

        e.preventDefault();

        $(".page-transition").addClass("is-active");

        setTimeout(function () {
            window.location.href = url;
        }, 500);

    });

});