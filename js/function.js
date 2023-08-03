// general variable 
const loadItem = 12;
const courseListURL = "https://public-prakerja.oss-ap-southeast-5.aliyuncs.com/skill_week/list_pelatihan_skillweek.json";
const queryParams = new URLSearchParams(window.location.search);
var currentPage = 1;

// empty state template
var emptyState = "<div class='col-12 col-md-12'>" +
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
var templateCourse = function(target, data, cardClass){ 
    var pills = data.course_type.toLowerCase() == "Daring LMS (online)".toLowerCase() ? "text-bg-warning" : "text-bg-help";
    var course_form_request = 'https://docs.google.com/forms/d/e/1FAIpQLScc3v4je6bcRHA_0H5ItpjaY_x8ump5K9pdc27ylti4pQo0xQ/viewform?usp=pp_url&entry.841678428=' + data.course_title.split(" ").join("+");
    var notif_course_request = 'https://docs.google.com/forms/d/e/1FAIpQLScOs8Qwc9w0ZlFgAOqSes5EpyhkaK46atcT52t8bBXXmuQKUA/viewform?usp=sf_link'
    var finalPrice = data.course_discount == '100%' ? 'Gratis' : "Rp " + data.course_after_discount;
    var colorPrice = data.course_discount != '100%' ? 'color-secondary' : '';
    var listClass = cardClass == undefined ? 'col-12 col-md-6 col-xl-4 col-xxl-3 mb-4 mb-lg-5' : 'wl-carousel-card pb-3'
    var template = "<div id='" + data.index +"' class='"+ listClass +"'>" +
        "<div class='card pds-card'>" +
            "<div class='card-cover'>" +
                "<img loading='lazy' src='" + data.course_image + "' class='card-img-top' alt='"+ data.course_title +"'>" +
                "<div class='card-cover-overlay'>" +
                    "<div class='d-flex justify-content-between align-middle'>" +
                        "<div class='align-self-center'>" +
                            "<div class='card-company'><img class='me-1 card-logo' src='" + data.lp_logo +"' alt='"+ data.lp_name +"'><span class='course-lp-name'>"+ data.lp_name +"</span></div>" +
                        "</div>" +
                        "<div class='align-self-center'><span class='badge rounded-pill text-capitalize " + pills +"'>"+ data.course_type +"</span></div>" +
                    "</div>" +        
                "</div>" +
            "</div>" +
            "<div class='card-body'>" +
                "<h6 class='mb-2 course-title text-capitalize' title='"+ data.course_title +"'>"+ data.course_title +"</h6>" +
                "<div>" +
                    "<div class='course-real-price mb-1'><span>Rp "+ data.course_price +"</span> <span class='badge text-bg-ghost-success'>"+ data.course_discount +"</span></div>" +
                    "<div class='course-price card-price mb-1 " + colorPrice +"'>"+ finalPrice +"</div>" +
                "</div>" +
                "<div class='mt-3 text-center'>" +
                    "<a href='"+ notif_course_request +"&utm_source=skillsweek&utm_medium=landing-page&utm_content=button' class='apply-course btn btn-primary w-100 mb-2' target='_blank' rel='nofollow' data-event='skill_week_apply_course'>Ingatkan Saya</a>" +
                    "<a id='detail-course"+ data.index +"' href='#deskripsi-pelatihan-"+ data.index +"' class='see-detail-course me-2 link-secondary' target='_blank' rel='nofollow' data-index='"+ data.index +"' data-event='skill_week_click_course_detail text-link'>Deskripsi Pelatihan</a>" +
                '</div>'
            "</div>" +
        "</div>" +
    "</div>";
    $(target).append(template).ready(function () {
        // trigger modal
        btnDescription('#detail-course' + data.index, data);
    });
}

// 
/** function on click course description  */
var btnDescription = function (target, data) {
    // handle or prevent multiple time init the function
    $(target).unbind('click');
    $(target).on('click', function (e) {
        // to cancel the redirect pages
        e.preventDefault();
        var _this = $(this);
        var index = _this.data('index');
        var description = data.description;
        var title = data.course_title;
        var course_form_request = 'https://docs.google.com/forms/d/e/1FAIpQLScc3v4je6bcRHA_0H5ItpjaY_x8ump5K9pdc27ylti4pQo0xQ/viewform?usp=pp_url&entry.841678428=' + data.course_title.split(" ").join("+");
        
        // manage the content
        $('#deskripsiPelatihanModal .modal-title').html(title);
        $('#deskripsiPelatihanModal article p').html(description);
        $('#deskripsiPelatihanModal #modal-link-voucher').attr('href', course_form_request);

        // trigger the modal
        $('#deskripsiPelatihanModal').modal('show');
    });
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

        // loop the content and add to the course list
        $.each(data.slice(start, end), function(i, list) {
            templateCourse(appendTarget, list);
        })
        // re run logig check load more or hide when it reach max paging
        checkLoadMore(_this, paging, currentPage)
    });
}

/** function to filter courses by topic */
var filterSelect = function(target, data, start, end) {
    $(target).on("change", function(e) {
        var appendTarget = $('#course-lists');
        var loadMoreTarget = $('#load-more');
        var appendTarget = $('#course-lists');
        var filter = $(this).find(':selected').text();
        var keyword = $('#filter-keyword').val();

        // to check the datalist based on current filter & keyword applied
        if (filter !== 'Semua Topik Pelatihan') {
            var dataFilter = _.filter(data, function(list) { return list.course_category.toLowerCase().indexOf(filter.toLowerCase()) !== -1; })
            var dataKeyword = _.filter(dataFilter, function(list) { return list.course_title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1; })
        } else {
            var dataKeyword = _.filter(data, function(list) { return list.course_title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1; })
        }

        var dataLength = dataKeyword.length;
        var paging = Math.ceil(dataLength/loadItem);

        // remove existing course list
        appendTarget.html('');
        // replacing counter for number of courses
        $('#course-counter div').html('Ditemukan <b>' + dataLength + '</b> pelatihan');
        
        // conditional check based on data length
        if (dataKeyword.length !== 0) {
            // loop the content and add to the course list
            $.each(dataKeyword.slice(start, end), function(i, list) {
                templateCourse(appendTarget, list);
            });
        } else {
            appendTarget.html(emptyState);
        }

        // load more and check the rest of data
        btnLoadMore(loadMoreTarget, loadItem, start, end, dataKeyword, appendTarget, currentPage, paging);
        checkLoadMore(loadMoreTarget, paging, currentPage);

        // final push to the url current state with filter and keyword search
        window.history.replaceState(null, null, "?topic="+ filter.replace(/\s+/gi, '-').toLowerCase() +"&keyword="+ keyword.replace(/\s+/gi, '-').toLowerCase())
    })
}

/** function to filter courses by keyword */
var filterKeyword = function(formSeaerch, buttonSearch, data, start, end) {
    $(formSeaerch).on('submit', function(e) { 
        e.preventDefault();
        var appendTarget = $('#course-lists');
        var loadMoreTarget = $('#load-more');
        var filterCategory = $('#filter-category');
        var filter = filterCategory.find(':selected').text();
        var keyword = $(this).find('input').val();

        // conditional filter
        if (filter !== 'Semua Topik Pelatihan') {
            var dataFilter = _.filter(data, function(list) { return list.course_category.toLowerCase().indexOf(filter.toLowerCase()) !== -1; })
            var dataKeyword = _.filter(dataFilter, function(list) { return list.course_title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1; })
        } else {
            var dataKeyword = _.filter(data, function(list) { return list.course_title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1; })
        }
        
        // define pagination
        var dataLength = dataKeyword.length;
        var paging = Math.ceil(dataLength/loadItem);
        
        // remove existing content
        appendTarget.html('');
        $('#course-counter div').html('Ditemukan <b>' + dataLength + '</b> pelatihan');
        
        // checking keyword then append with selected filter
        if (dataKeyword.length !== 0) {
            // implement append data
            $.each(dataKeyword.slice(start, end), function(i, list) {
                templateCourse(appendTarget, list);
            });
        } else {
            appendTarget.html(emptyState);
        }

        // check condition load more and checking load more
        btnLoadMore(loadMoreTarget, loadItem, start, end, dataKeyword, appendTarget, currentPage, paging);
        checkLoadMore(loadMoreTarget, paging, currentPage);

        // final push to the url current state with filter and keyword search
        window.history.replaceState(null, null, "?topic="+ filter.replace(/\s+/gi, '-').toLowerCase() +"&keyword="+ keyword.replace(/\s+/gi, '-').toLowerCase())
    });

    // to trigger the submit button
    $(buttonSearch).on('click', function(e) { 
        $(formSeaerch).trigger('submit')
    });
}

/** function to get unique option */
var optionList = function(data, filter) {
    var lookup = {};
    var result = [];

    // to get the list of category insert to array
    for (var item, i = 0; item = data[i++];) {
        var category = item.course_category;
        if (!(category in lookup)) {
            lookup[category] = 1;
            result.push(category);
        }
    }
    result = result.sort();
    $.each(result, function(i, value) {
        var selected = filter.toLowerCase() == value.toLowerCase() ? 'selected' : '';
        $('#filter-category').append('<option value="'+ value +'" '+ selected +'>'+ value + '</option>');
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
        var lp_name = _this.parents('div.card-cover').find('.course-lp-name').html();
        if(window.DataLayer !== undefined) {
            dataLayer.push({'event': events, 'course_title': course_title, 'price': price, 'lp_name' : lp_name});
        }
    })
}

/** function to init the content at the first time */
function courseLoaderInit(){
    $(document).ready(function(){
        var appendTarget = $('#course-lists');
        var loadMoreTarget = $('#load-more');
        var filterCategory = $('#filter-category');
        var formSeaerch = $('#form-search');
        var buttonSearch = $('#button-search');
        var loadItem = 12;
        var currentPage = 1;
        var filter = queryParams.get('topic') !== null ? (queryParams.get('topic')).replace(/-|%20/gi, ' ') : '';
        var keyword = queryParams.get('keyword') !== null ? (queryParams.get('keyword')).replace(/-|%20/gi, ' ') : '';
        
        if (appendTarget !== undefined) {
            $.getJSON(courseListURL, function(courses){
                // get query param by 
                var data = _.shuffle(courses)
                if (filter !== null || filter.toLowerCase() == 'Semua Topik Pelatihan'.toLowerCase()) {
                    var dataFilter = _.filter(data, function(list) { return list.course_category.toLowerCase().indexOf(filter.toLowerCase()) !== -1; })
                    var dataKeyword = keyword !== null ? _.filter(dataFilter, function(list) { return list.course_title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1; }) : dataFilter;
                } else {
                    var dataKeyword = keyword !== null ? _.filter(dataFilter, function(list) { return list.course_title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1; }) : dataFilter;
                }
    
                if (keyword !== null) {
                    $('#filter-keyword').val(keyword);
                }
                
                var dataLength = dataKeyword.length;
                var paging = Math.ceil(dataLength/loadItem);
                var start = 0;
                var end = loadItem;
    
                setTimeout(function() {
                    // remove existing content
                    appendTarget.html('');
                    // counting the data
                    $('#course-counter div').html('Ditemukan <b>' + dataLength + '</b> pelatihan');
                    
                    // loop the content and add to the course list
                    $.each(dataKeyword.slice(start, end), function(i, list) {
                        // console.log(list.course_title.includes('Meningkatkan Kemampuan').toLowerCase())
                        templateCourse(appendTarget, list);
                    })
    
                    // loadmore more button show / hide
                    checkLoadMore(loadMoreTarget, paging, currentPage);
                    btnLoadMore(loadMoreTarget, loadItem, start, end, dataKeyword, appendTarget, currentPage, paging);
                    
                    // load option
                    optionList(data, filter);
    
                    // filter implementation
                    filterSelect(filterCategory, data, start, end);
                    filterKeyword(formSeaerch, buttonSearch, data, start, end);
    
                    // invoke function push event GA
                    pushEvents('.see-detail-course');
                    pushEvents('.apply-course');
    
                }, 1500)
            }).fail(function(){
                console.log("An error has occurred.");
            });
        }
    });
}

// function to load course on homepage
function courseLoaderHome() {
    $(document).ready(function(){
        var appendTarget = $('#courseCarousel');
        if (appendTarget !== undefined) {
            $.getJSON(courseListURL, function(data){
                dataToDisplay = _.sample(data, 10)
                appendTarget.html('').addClass('owl-carousel');
                $.each(dataToDisplay, function(i, list) {
                    templateCourse(appendTarget, list, 'home');
                })
            }).done(function() {
                $(appendTarget).owlCarousel({
                    loop:true,
                    margin:24,
                    nav:true,
                    dots: false,
                    responsive:{
                        0:{
                            items:1,
                            margin: 16
                        },
                        600:{
                            items:3,
                            margin: 16
                        },
                        1000:{
                            items:4
                        }
                    }
                });
            })
        }  
    })
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

    $('#coworkingCarousel').owlCarousel({
        loop:true,
        margin:24,
        nav:true,
        autoplay: true,
        responsive:{
            0:{
                items:1,
                margin: 0
            }
        }
    });

    // run init course loader
    courseLoaderInit();

    // run init course home
    courseLoaderHome();
 })(jQuery);