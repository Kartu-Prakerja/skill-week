// general variable 
const loadItem = 12;
var currentPage = 1;

var emptyState = "<div class='col-12 col-md-9'>" +
    "<div class='alert alert-info' role='alert'>" +
        "<div class='d-flex'>" +
            "<div class='pe-3'><i class='bi bi-info-circle-fill fs-4'></i></div>" +
            "<div>"+
                "<h6 class='alert-heading'>Pelatihan tidak ditemukan</h6>" +
                "<p>Mohon periksa kembali kata kunci Anda dan pastikan ejaan dan tata bahasa yang benar. Anda juga dapat mencoba menggunakan kata kunci yang berbeda atau mencari di topik pelatihan yang berbeda.</p>"+
            "</div>"+
        "</div>"+
    "</div>"+
    "</div>";

/** function load course */
var templateCourse = function(target, data){ 
    // temporary remove detail pelatihan "<a href='"+ data.course_url +"?utm_source=skillsweek&utm_medium=landing-page&utm_content=button' class='see-detail-course me-2 link-secondary' target='_blank' rel='nofollow' data-event='skill_week_click_course_detail text-link'>Deskripsi Pelatihan</a>" +
    var pills = data.course_type == "Online - LMS" ? "text-bg-warning" : "text-bg-help";
    var course_form_request = 'https://docs.google.com/forms/d/e/1FAIpQLScc3v4je6bcRHA_0H5ItpjaY_x8ump5K9pdc27ylti4pQo0xQ/viewform?usp=pp_url&entry.841678428=' + data.course_title.split(" ").join("+");
    var template = "<div class='col-12 col-md-6 col-xl-4 col-xxl-3 mb-4 mb-lg-5'>" +
        "<div class='card pds-card'>" +
            "<div class='card-cover'>" +
                "<img loading='lazy' src='" + data.course_image + "' class='card-img-top' alt='"+ data.course_title +"'>" +
                "<div class='card-cover-overlay'>" +
                    "<div class='d-flex justify-content-between'>" +
                        "<div>" +
                            "<div class='card-company'><img class='me-1' src='" + data.lp_logo +"' alt='"+ data.lp_name +"'><span class='course-lp-name'>"+ data.lp_name +"</span></div>" +
                        "</div>" +
                        "<div><span class='badge rounded-pill " + pills +"'>"+ data.course_type +"</span></div>" +
                    "</div>" +        
                "</div>" +
            "</div>" +
            "<div class='card-body'>" +
                "<h6 class='mb-2 course-title text-capitalize' title='"+ data.course_title +"'>"+ data.course_title +"</h6>" +
                "<div>" +
                    "<div class='course-price card-price mb-1 color-secondary'>"+ data.course_price +"</div>" +
                "</div>" +
                "<div class='mt-3 text-center'>" +
                    "<a href='"+ course_form_request +"&utm_source=skillsweek&utm_medium=landing-page&utm_content=button' class='apply-course btn btn-primary w-100 mb-2' target='_blank' rel='nofollow' data-event='skill_week_apply_course'>Dapatkan Voucher Pelatihan</a>" +
                '</div>'
            "</div>" +
        "</div>" +
    "</div>";
    $(target).append(template);
}

/** function to invoke load more */
var btnLoadMore = function(target, loadItem, start, end, data, appendTarget, currentPage, paging) {
    // to unbind the previous event or duplicate event
    $(target).unbind('click');

    // bind the current one
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

var filterSelect = function(target, data, start, end) {
    $(target).on("change", function(e) {
        var appendTarget = $('#course-lists');
        var loadMoreTarget = $('#load-more');
        var appendTarget = $('#course-lists');
        var filter = $(this).find(':selected').text();
        var keyword = $('#filter-keyword').val();

        if (filter !== 'Semua Kategori') {
            var dataFilter = _.filter(data, function(list) { return list.course_category.toLowerCase().indexOf(filter.toLowerCase()) !== -1; })
            var dataKeyword = _.filter(dataFilter, function(list) { return list.course_title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1; })
        } else {
            var dataKeyword = _.filter(data, function(list) { return list.course_title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1; })
        }

        var dataLength = dataKeyword.length;
        var paging = Math.ceil(dataLength/loadItem);

        appendTarget.html('');
        
        if (dataKeyword.length !== 0) {
            // implement append data
            $.each(dataKeyword.slice(start, end), function(i, list) {
                templateCourse(appendTarget, list);
            });
        } else {
            appendTarget.html(emptyState);
        }

        btnLoadMore(loadMoreTarget, loadItem, start, end, dataKeyword, appendTarget, currentPage, paging);
        checkLoadMore(loadMoreTarget, paging, currentPage);
    })
}


var filterKeyword = function(formSeaerch, buttonSearch, data, start, end) {
    $(formSeaerch).on('submit', function(e) { 
        e.preventDefault();
        var appendTarget = $('#course-lists');
        var loadMoreTarget = $('#load-more');
        var filterCategory = $('#filter-category');
        var filter = filterCategory.find(':selected').text();
        var keyword = $(this).find('input').val();

        // conditional filter
        if (filter == 'Semua Kategori') {
            var dataFilter = _.filter(data, function(list) { return list.course_category.toLowerCase().indexOf(filter.toLowerCase()) !== -1; })
            var dataKeyword = _.filter(dataFilter, function(list) { return list.course_title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1; })
        } else {
            var dataKeyword = _.filter(data, function(list) { return list.course_title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1; })
        }

        // define pagination
        var dataLength = dataKeyword.length;
        var paging = Math.ceil(dataLength/loadItem);

        appendTarget.html('');
        
        if (dataKeyword.length !== 0) {
            // implement append data
            $.each(dataKeyword.slice(start, end), function(i, list) {
                templateCourse(appendTarget, list);
            });
        } else {
            appendTarget.html(emptyState);
        }

        btnLoadMore(loadMoreTarget, loadItem, start, end, dataKeyword, appendTarget, currentPage, paging);
        checkLoadMore(loadMoreTarget, paging, currentPage);
    });

    $(buttonSearch).on('click', function(e) { 
        $(formSeaerch).trigger('submit')
    });
}

var optionList = function(data) {
    var lookup = {};
    var result = [];

    for (var item, i = 0; item = data[i++];) {
        var category = item.course_category;
        if (!(category in lookup)) {
            lookup[category] = 1;
            result.push(category);
        }
    }
    result = result.sort();
    $.each(result, function(i, value) {
        $('#filter-category').append('<option value="'+ value +'">'+ value + '</option>');
    })
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
        var course_title = _this.parents('div.card-body').find('h6.course-title').html();
        var lp_name = _this.parents('div.card-body').find('.course-lp-name').html();
        if(window.DataLayer !== undefined) {
            dataLayer.push({'event': events, 'course_title': course_title, 'price': price, 'lp_name' : lp_name});
        }
    })
}

/** function to init the content at the first time */
function courseLoader(a){
    $(document).ready(function(){
        var appendTarget = $('#course-lists');
        var loadMoreTarget = $('#load-more');
        var filterCategory = $('#filter-category');
        var formSeaerch = $('#form-search');
        var buttonSearch = $('#button-search');
        var loadItem = 12;
        var currentPage = 1;

        $.getJSON("js/course.json", function(data){
            var dataLength = data.length;
            var paging = Math.ceil(dataLength/loadItem);
            var start = 0;
            var end = loadItem;
            setTimeout(function() {
                appendTarget.html('');
                $.each(data.slice(start, end), function(i, list) {
                    // console.log(list.course_title.includes('Meningkatkan Kemampuan').toLowerCase())
                    templateCourse(appendTarget, list);
                })

                // loadmore more button show / hide
                checkLoadMore(loadMoreTarget, paging, currentPage);
                btnLoadMore(loadMoreTarget, loadItem, start, end, data, appendTarget, currentPage, paging);
                
                // load option
                optionList(data);

                // filter implementation
                filterSelect(filterCategory, data, start, end);
                filterKeyword(formSeaerch, buttonSearch, data, start, end);

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

        // for scroll-top trigger
        if (scroll >= 400) {
            $('.scroll-top').addClass("is-show");
        } else {
            $('.scroll-top').removeClass("is-show");
        }

    });

    // Scroll to top 
    $(".scroll-top").on("click", function() {
        $(window).scrollTop(0);
    });

    // Menu toggle
    $('.menu').click (function(){
        $(this).toggleClass('open');
        $('.navbar-custom').toggleClass('m-menu');
        $('body').toggleClass('freeze');
      });

      $(".navbar-custom").on("click", ".nav-link", function(event){
        $('.menu').removeClass('open');
        $('.navbar-custom').removeClass('m-menu');
        $('body').removeClass('freeze');
    });

    // run course loader
    courseLoader();
 })(jQuery);