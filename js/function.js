/** function load course */
var templateCourse = function(target, data){ 
    var pills = data.course_type == "Online" ? "text-bg-help" : "text-bg-warning";
    var template = "<div class='col-12 col-md-6 col-xl-4 col-xxl-3 mb-4 mb-lg-5'>" +
        "<div class='card pds-card'>" +
            "<div class='card-cover'>" +
                "<img src='" + data.course_image + "' class='card-img-top' alt='"+ data.course_name +"'>" +
                "<div class='card-cover-overlay'>" +
                    "<span class='badge rounded-pill " + pills +"'>"+ data.course_type +"</span>" +
                "</div>" +
            "</div>" +
            "<div class='card-body'>" +
                "<h6 class='mb-2 course-title' title='"+ data.course_name +"'>"+ data.course_name +"</h6>" +
                "<div>" +
                    "<div class='course-price card-price mb-1 color-secondary'>"+ data.course_price +"</div>" +
                    "<div class='card-company'>" +
                        "<img class='me-1' src='"+ data.lp_logo +"' alt='"+ data.lp_name +"'>" +
                        "<span class='course-lp-name'>"+ data.lp_name +"</span>" +
                    "</div>" +
                "</div>" +
                "<div class='d-flex mt-3'>" +
                    "<a href='"+ data.course_form_request +"' class='see-detail-course btn btn-outline-primary me-2' target='_blank' rel='nofollow' data-event='skill_week_click_course_detail'>Lihat Pelatihan</a>" +
                    "<a href='"+ data.course_url +"' class='apply-course btn btn-primary' target='_blank' rel='nofollow' data-event='skill_week_apply_course'>Ikut Pelatihan</a>" +
                '</div>'
            "</div>" +
        "</div>" +
    "</div>";
    $(target).append(template);
}

/** function to invoke load more */
var btnLoadMore = function(target, loadItem, start, end, data, appendTarget, currentPage, paging) {
    $(target).on('click', function () {
        var _this = $(target); 
        start = end;
        end = end + loadItem;
        currentPage = currentPage + 1;
        
        $.each(data.slice(start, end), function(i, list) {
            templateCourse(appendTarget, list);
        })
        // re run logig check load more or hide when it reach max paging
        checkLoadMore(_this, paging, currentPage)
    });
}

/** function to check visiblity load more button */
var checkLoadMore = function(target, paging, currentPage) {
    
    if (paging > 0 && currentPage < paging) {
        target.removeClass('visually-hidden')
    } else {
        target.addClass('visually-hidden')
    }
}

// Push event GA function
var pushEvents = function(target) {
    $(target).on('click', function(e) {
        var _this = $(this);
        var events = _this.attr('data-event');
        var price = _this.parents('div.card-body').find('.course-price').html();
        var course_name = _this.parents('div.card-body').find('h6.course-title').html();
        var lp_name = _this.parents('div.card-body').find('.course-lp-name').html();
        if(window.DataLayer !== undefined) {
            dataLayer.push({'event': events, 'course_name': course_name, 'price': price, 'lp_name' : lp_name});
        }
    })
}

/** function to init the content at the first time */
function courseLoader(a){
    $(document).ready(function(){
        var appendTarget = $('#course-lists');
        var loadMoreTarget = $('#load-more');
        var loadItem = 8;
        var currentPage = 1;

        $.getJSON("js/course.json", function(data){
            var dataLength = data.length;
            var paging = Math.ceil(dataLength/loadItem);
            var start = 0;
            var end = loadItem;
            setTimeout(function() {
                appendTarget.html('');
                $.each(data.slice(start, end), function(i, list) {
                    templateCourse(appendTarget, list);
                })
                // loadmore more button show / hide
                checkLoadMore(loadMoreTarget, paging, currentPage);
                btnLoadMore(loadMoreTarget, loadItem, start, end, data, appendTarget, currentPage, paging);
                // // invoke function push event GA
                pushEvents('.see-detail-course');
                pushEvents('.apply-course');
            }, 1500)
        }).fail(function(){
            console.log("An error has occurred.");
        });
    });
}

/** init function */
(function($){
    // scroll function
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 60) {
            $('header').addClass("header-fixed");
        } else {
            $('header').removeClass("header-fixed");
        }
    });

    // run course loader
    courseLoader();
 })(jQuery);