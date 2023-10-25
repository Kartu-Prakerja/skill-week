/**
 * TASK LIST
 * 1. HANDLE LOGIN USER (√)
 * 1.1 MUNCULIN POPUP UNTUK USER KALAU BELUM LOGIN (√)
 * 1.1.1 KALAU USER SKIP GAK PERLU MUNCULIN POP-UP (√)
 * 1.2 CEK LOCAL STORAGE UNTUK LOGIN USER (√)
 * 1.2.1 SIMPAN KE LOCAL STORAGE KALAU USER SUDAH LOGIN (√)
 * 1.2.2 SET WAKTU UNTUK NGE TIMEOUT LOCALSTORAGE
 * 1.2.3 HAPUS LOCAL STORAGE KALAU USER MAU GANTI AKUN DAN HAPUS SESSION POPUP UNTUK MINTA USER LOGIN KEMBALI (√)
 * 1.3 POP UP KONFIRMASI UNTUK AMBIL VOUCHER (√)
 * 
 * 2. SIMPAN PELATIHAN YANG SUDAH DIAMBIL PESERTA (FLAG PELATIHAN MANA YANG SUDAH DIAMBIL) (√)
 * 2.1 HANDLE PROSES SUBMISSION PELATIHAN YANG MAU DI AMBIL PESERTA (√)
 * 
 * 3. DETAIL PELATIHAN (√)
 * 3.1 HANDLE DEFAULT CONTENT UNTUK PELATIHAN YANG TIDAK DITEMUKAN (404) PAGE
 * 3.2 HANDLE SHARE CONTENT
 * 
 * 4. HANDLE FILTER & SEARCH
 * 4.1 STORE KE LOCAL STORAGE UNTUK DAFTAR PELATIHAN (√)
 * 4.2 HANDLE PANGGIL KE LOCAL STORAGE / AMBIL DARI JSON (√)
 */

// general variable 
const sharerURL = 'https://gist.github.com/tZilTM/6eecb26cd8dca3f9f800128c726d6761';
const BaseURL = '/'
const loadItem = 12;
const courseListURL = "https://public-prakerja.oss-ap-southeast-5.aliyuncs.com/skill_week/list_pelatihan_skillweek_3.json";
const checkLogin = "https://api-ext.prakerja.go.id/api/v1/user/login-a17ab03c3d1d";
const checkVoucher = 'https://api-proxy.prakerja.go.id/api/v1/general/voucher/ack';
const queryParams = new URLSearchParams(window.location.search);
var dataCourse = !_.isNull(localStorage.getItem('course_list')) ? localStorage.getItem('course_list') : $.getJSON(courseListURL).done(function(courses) { localStorage.setItem('course_list', JSON.stringify(courses)) })
var currentPage = 1;
var dataUser = !_.isNull(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : null;
var isPopupSkip = localStorage.getItem('login-popup-skip');
var forms = document.querySelectorAll('.needs-validation');

// Loop over them and prevent submission
Array.prototype.slice.call(forms)
.forEach(function (form) {
  form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }

    form.classList.add('was-validated')
  }, false)
})


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
    var pills = data.course_type.toLowerCase() == "Online Self-Paced Learning".toLowerCase() ? "text-bg-warning" : "text-bg-help";
    // var course_form_request = 'https://docs.google.com/forms/d/e/1FAIpQLScc3v4je6bcRHA_0H5ItpjaY_x8ump5K9pdc27ylti4pQo0xQ/viewform?usp=pp_url&entry.841678428=' + data.course_title.split(" ").join("+");
    // var notif_course_request = 'https://docs.google.com/forms/d/e/1FAIpQLScOs8Qwc9w0ZlFgAOqSes5EpyhkaK46atcT52t8bBXXmuQKUA/viewform?usp=sf_link';
    var course_detail = BaseURL +'pelatihan/detail.html?title=' + data.course_title.replace(/\s+/gi, '-').toLowerCase() +'&id='+ data.course_id;
    var finalPrice = (data.course_discount == '100%' || data.course_discount == '') ? 'Gratis' : "Rp " + Number(data.course_after_discount).toLocaleString('id');
    var course_price = data.course_price == '0' ? "-" : "Rp " + Number(data.course_price).toLocaleString('id')
    var colorPrice = (data.course_discount == '100%' || data.course_discount == '') ? '' : 'color-secondary';
    var listClass = cardClass == undefined ? 'col-12 col-md-6 col-xl-4 col-xxl-3 mb-4 mb-lg-5' : 'wl-carousel-card pb-3'
    var template = "<div id='" + data.index +"' class='"+ listClass +"'>" +
        "<div class='card pds-card'>" +
            "<div class='card-cover'>" +
                "<img loading='lazy' src='" + data.course_image + "' class='card-img-top' alt='"+ data.course_title +"'>" +
                "<div class='card-cover-overlay'>" +
                    "<div class='d-flex justify-content-between align-middle'>" +
                        "<div class='align-self-center'>" +
                            "<div class='card-company'><img loading='lazy' class='me-1 card-logo' src='" + data.logo_lp +"' alt='"+ data.lp_name +"'><span class='course-lp-name'>"+ data.lp_name +"</span></div>" +
                        "</div>" +
                        "<div class='align-self-center'><span class='badge rounded-pill text-capitalize " + pills +"'>"+ (data.course_type).replace(/Online/g,'') +"</span></div>" +
                        // "<div class='align-self-center'><span class='badge rounded-pill text-capitalize " + pills +"'>Daring LMS</span></div>" +
                    "</div>" +        
                "</div>" +
            "</div>" +
            "<div class='card-body'>" +
                "<h6 class='mb-1 course-title text-capitalize' title='"+ data.course_title +"'>"+ data.course_title +"</h6>" +
                "<span class='mb-2 badge text-bg-light text-capitalize'>"+ data.course_category + "</span>" +
                "<div>" +
                    "<div class='course-real-price mb-1'><span>"+ course_price +"</span> <span class='badge text-bg-ghost-success'>"+ data.course_discount +"</span></div>" +
                    "<div class='course-price card-price mb-1 " + colorPrice +"'>"+ finalPrice +"</div>" +
                "</div>" +
                "<div class='mt-3 text-center'>" +
                    "<a href='"+ course_detail +"' class='apply-course btn btn-primary w-100 mb-2 text-truncate' rel='nofollow' data-event='skill_week_apply_course'>Selengkapnya</a>" +
                    // "<a id='detail-course"+ data.index +"' href='#deskripsi-pelatihan-"+ data.index +"' class='see-detail-course me-2 link-secondary' target='_blank' rel='nofollow' data-index='"+ data.index +"' data-event='skill_week_click_course_detail text-link'>Deskripsi Pelatihan</a>" +
                '</div>'
            "</div>" +
        "</div>" +
    "</div>";
    $(target).append(template).ready(function () {
        // trigger modal
        // skipped because already have the page detail
        // btnDescription('#detail-course' + data.index, data);
    });
}

var templateLP = function(target, data) {
    var template = '<div class="col-12.col-sm-6 col-md-4 col-xl-3">' +
                        '<a class="text-capitalize card-company-list" href="'+ 'pelatihan/index.html?topic=&keyword=&price=&lp=' + data.lp_name.replace(/\s+/gi, '-').toLowerCase() +'" title="'+ data.course_title  +'">' + 
                            '<img class="me-1 card-logo" height="40" src="'+ data.lp_logo +'" alt="'+ data.lp_name +'" loading="lazy"/>' + 
                            '<span class="lp-name">'+ data.lp_name  +'</span>' +
                        '</a>'+
                    '</div>'
    $(target).append(template);
}

var templateDetail = function(data) {
    //var finalPrice = data.course_discount == '100%' ? 'Gratis' : "Rp " + Number(data.course_after_discount).toLocaleString('id');
    var finalPrice = (data.course_discount == '100%' || data.course_discount == '') ? 'Gratis' : "Rp " + Number(data.course_after_discount).toLocaleString('id');
    var colorPrice = (data.course_discount == '100%' || data.course_discount == '') ? '' : 'color-secondary';
    var course_price = data.course_price == '0' ? "" : "Rp " + Number(data.course_price).toLocaleString('id')
    var courseTakens = JSON.parse(localStorage.getItem('course_takens'));
    var quota = data.quota !== '' ? data.quota + '<i>&nbsp;(Selama masih tersedia)</i>' : '<span>Tidak terbatas<span>';
    var getVoucherbtn;
    if(_.contains(courseTakens, data.course_id)) {
        getVoucherbtn = '<button class="my-3 btn btn-secondary btn-lg w-100 disabled" data-bs-toggle="modal" data-bs-target="#">Voucher berhasil diambil</button>'
     } else if (data.quota !== '' && Number(data.quota) == data.total) {
        getVoucherbtn = '<button class="my-3 btn btn-secondary btn-lg w-100 disabled" data-bs-toggle="modal" data-bs-target="#">Voucher Habis</button>'
     } else {
        getVoucherbtn = '<button id="get-voucher" class="my-3 btn btn-primary btn-lg w-100" data-bs-toggle="modal" data-bs-target="#">Dapatkan Voucher Pelatihan </button>'
     }

    return '<section class="section-detail-course">' +
    '<div class="container pt-3 pb-5 px-4 px-md-0">' +
      '<div class="row flex-row-reverse">' +
        '<div class="col-12 col-md-4 col-lg-4"><div class="course-cover-sticky"><div class="course-cover"><img loading="lazy" class="w-100 rounded" src="'+ data.course_image +'" alt=""/></div>' +
          '<div class="mt-3 d-flex justify-content-between">' +
            '<div>' +
                '<div class="course-real-price mb-1"><span class="me-1">'+ course_price +'</span><span class="badge text-bg-ghost-success">'+ data.course_discount +'</span></div>' +
                '<div class="course-price card-price mb-1 fs-4 '+ colorPrice +'">'+ finalPrice +'</div>' +
            '</div>' +
            '<div>' +
                // '<button class="btn btn-light share-button" type="button" title="Bagikan halaman ini"><i class="bi bi-share-fill">&nbsp;&nbsp;</i>Bagikan</button>' +
            '</div>' +
          '</div>' +
          '<div class="course-cta px-3 px-lg-0">'+ getVoucherbtn +'</div>' +
            //'<p class="text-secondary"><b class="fs-7">103</b>&nbsp; peserta mengambil pelatihan ini</p>' +
          
        '</div></div>' +
        '<div class="col-12 col-md-8 col-lg-8 pe-xl-4">' +
          '<h1 class="mb-3">'+ data.course_title +'</h1>'+
          '<a class="card-company-link d-inline-flex p-2 text-decoration-none border px-3" href="'+ BaseURL +'pelatihan?topic=&keyword=&price=&lp='+data.lp_name+'"><img loading="lazy" class="me-1 card-logo" src="'+ data.logo_lp +'" alt="'+ data.lp_name +'"/><span class="lp-name fs-7 text-secondary">'+ data.lp_name +'</span></a>' +
          '<div class="row mt-5 mb-4"> ' +
            '<div class="col-12 col-md-6 col-lg-4 mb-4 d-flex"> <i class="bi bi-person-badge"></i>' +
              '<div class="ps-2"> ' +
                '<h6 class="fs-7 mb-2">Instruktur</h6>' +
                '<p class="fs-7">'+ data.instructure_name +'</p>' +
              '</div>' +
            '</div>' +
            '<div class="col-12 col-md-6 col-lg-4 mb-4 d-flex"> <i class="bi bi-clock"> </i>' +
              '<div class="ps-2"> ' +
                '<h6 class="fs-7 mb-2">Durasi Pelatihan</h6>' +
                '<p class="fs-7">'+ data.duration +' (Menit)</p>' +
              '</div>' +
            '</div>' +
            '<div class="col-12 col-md-6 col-lg-4 mb-4 d-flex"> <i class="bi bi-person-video"> </i>' +
              '<div class="ps-2"> ' +
                '<h6 class="fs-7 mb-2">Metode Ajar</h6><span class="badge rounded-pill text-bg-warning">'+ data.course_type+ '</span>' +
              '</div>' +
            '</div>' +
            '<div class="col-12 col-md-6 col-lg-4 mb-4 d-flex"> <i class="bi bi-tag"> </i>' +
              '<div class="ps-2"> ' +
                '<h6 class="fs-7 mb-2">Kategori</h6>' +
                '<p class="fs-7">'+ data.course_category +'</p>' +
              '</div>' +
            '</div>' +
            '<div class="col-12 col-md-6 col-lg-4 mb-4 d-flex"> <i class="bi bi-ticket-detailed"> </i>' +
              '<div class="ps-2"> ' +
                '<h6 class="fs-7 mb-2">Kuota Pelatihan</h6>' +
                '<p class="fs-7">' + quota + '</p>' +
              '</div>' +
            '</div>' +
            '<div class="col-12 col-md-6 col-lg-4 mb-4 d-flex"> <i class="bi bi-link-45deg"></i>' +
              '<div class="ps-2 overflow-hidden">' +
                '<h6 class="fs-7 mb-2">Link Pelatihan</h6><a class="fs-7 d-flex align-items-center" href="'+ data.course_url +'" target="_blank" title="'+ data.course_title +'"> <span class="pds-truncate">'+ data.course_url +'</span><i class="bi bi-arrow-up-right-square-fill"></i></a>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<hr/>' +
          '<article>' +
            '<section class="py-3">' +
              '<h4 class="mb-4">Deskripsi Pelatihan </h4>' +
              '<article id="description">'+ (data.description).replace(/\n/g,'</br>') +'</article>' +
            '</section>' +
            '<section class="py-3" id="CaraRedeemVoucher">' +
              '<h4 class="mb-4">Cara Redeem Voucher</h4>' +
              '<article id="how-to-redeem">'+ (data.how_to_redeem).replace(/\n/g,'</br>') +'</article>' +
            '</section>' +
            '<hr/>' +
          '</article>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</section>'
}

var templateBreadCrumb = function(data) {
    return '<ol class="breadcrumb overflow-hidden fs-7 mb-0">' +
    '<li class="breadcrumb-item"> <a href="'+ BaseURL +'"><i class="bi bi-house-door"></i></a></li>' +
    '<li class="breadcrumb-item"> <a href="'+ BaseURL +'pelatihan">Pelatihan </a></li>' +
    '<li class="breadcrumb-item active text-truncate">'+ data.course_title +'</li>' +
    '</ol>'
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
        var course_url = data.course_url;
        var course_form_request = 'https://docs.google.com/forms/d/e/1FAIpQLScc3v4je6bcRHA_0H5ItpjaY_x8ump5K9pdc27ylti4pQo0xQ/viewform?usp=pp_url&entry.841678428=' + data.course_title.split(" ").join("+");
        
        // manage the content
        $('#deskripsiPelatihanModal .modal-title').html(title);
        $('#deskripsiPelatihanModal .course-url .link-pelatihan').attr({'href': course_url, 'title' : title }).html(course_url)
        $('#deskripsiPelatihanModal .course-descriptions p').html(description);
        $('#deskripsiPelatihanModal #modal-link-voucher').attr('href', course_form_request);

        // trigger the modal
        $('#deskripsiPelatihanModal').modal('show');
    });
}

/** function to invoke load more */
var btnLoadMore = function(target, loadItem, start, end, data, appendTarget, currentPage, paging, isListLp) {
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
            if (!isListLp) {
                templateCourse(appendTarget, list);
            } else {
                templateLP(appendTarget, list)
            }
        })
        // re run logig check load more or hide when it reach max paging
        checkLoadMore(_this, paging, currentPage)
    });
}

/** function to filter courses by topic */
var filterCourse = function(target, data, start, end) {
    $(target).click(function(e) {
        // console.log(data, 'data');
        var appendTarget = $('#course-lists');
        var loadMoreTarget = $('#load-more');
        var appendTarget = $('#course-lists');
        var filterCategory = [], filterPrice = [], filterLP = [], dataFilter = data
        var keyword = $('#filter-keyword').val();

        console.log(dataFilter)

        $.each($('.filter-category:checked'), function (i, e) { filterCategory[i] = $(e).val()})
        $.each($('.filter-price:checked'), function (i, e) { filterPrice[i] = $(e).val()})
        $.each($('.filter-lp:checked'), function (i, e) { filterLP[i] = $(e).val()})

        // to check the datalist based on current filter & keyword applied
        if (!_.isEmpty(filterPrice)) {
            filterPrice = _.contains(filterPrice, '0') ? filterPrice.concat("") : filterPrice;
            dataFilter = _.filter(dataFilter, function(list) { return this.keys.indexOf(list.course_after_discount) > -1; }, {"keys" : filterPrice})
        } 
        if (!_.isEmpty(filterCategory)) {
            dataFilter = _.filter(dataFilter, function(list) { return this.keys.indexOf(list.course_category.toLowerCase()) > -1; }, {"keys" : filterCategory})
        }  
        if (!_.isEmpty(filterLP)) {
            dataFilter = _.filter(dataFilter, function(list) { return this.keys.indexOf(list.lp_name.toLowerCase()) > -1; }, {"keys" : filterLP})
        }
        var dataKeyword = _.filter(dataFilter, function(list) { return list.course_title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1; })

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

        // hide filter
        $('#modalFilter').modal('hide')

        // final push to the url current state with filter and keyword search
        var filterCategoryJoin =  filterCategory.join(",");
        var filterPriceJoin = filterPrice.join(",");
        var filterLPJoin = filterLP.join(",");

        window.history.replaceState(null, null, "?topic="+ filterCategoryJoin.replace(/\s+/gi, '-').toLowerCase() +"&keyword="+ keyword.replace(/\s+/gi, '-').toLowerCase() +"&price="+ filterPriceJoin.replace(/\s+/gi, '-').toLowerCase() +"&lp="+ filterLPJoin.replace(/\s+/gi, '-').toLowerCase())
    })
}

/** function to filter courses by keyword */
var filterKeyword = function(formSeaerch, buttonSearch, data, start, end) {
    $(formSeaerch).on('submit', function(e) { 
        e.preventDefault();
        var appendTarget = $('#course-lists');
        var loadMoreTarget = $('#load-more');
        var filterCategory = [], filterPrice = [], filterLP = [], dataFilter = data
        var keyword = $(this).find('input').val();

        // console.log(keyword)

        $.each($('.filter-category:checked'), function (i, e) { filterCategory[i] = $(e).val()})
        $.each($('.filter-price:checked'), function (i, e) { filterPrice[i] = $(e).val()})
        $.each($('.filter-lp:checked'), function (i, e) { filterLP[i] = $(e).val()})
        // var keyword = $(this).find('input').val();


        $.each($('.filter-category:checked'), function (i, e) { filterCategory[i] = $(e).val()})
        $.each($('.filter-price:checked'), function (i, e) { filterPrice[i] = $(e).val()})
        $.each($('.filter-lp:checked'), function (i, e) { filterLP[i] = $(e).val()})

        // to check the datalist based on current filter & keyword applied
        if (!_.isEmpty(filterPrice)) {
            dataFilter = _.filter(dataFilter, function(list) { return this.keys.indexOf(list.course_after_discount) > -1; }, {"keys" : filterPrice})
        } 
        if (!_.isEmpty(filterCategory)) {
            dataFilter = _.filter(dataFilter, function(list) { return this.keys.indexOf(list.course_category.toLowerCase()) > -1; }, {"keys" : filterCategory})
        }  
        if (!_.isEmpty(filterLP)) {
            dataFilter = _.filter(dataFilter, function(list) { return this.keys.indexOf(list.lp_name.toLowerCase()) > -1; }, {"keys" : filterLP})
        }
        var dataKeyword = _.filter(dataFilter, function(list) { return list.course_title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1; })
        
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
        var filterCategoryJoin =  filterCategory.join(",");
        var filterPriceJoin = filterPrice.join(",");
        var filterLPJoin = filterLP.join(",");

        window.history.replaceState(null, null, "?topic="+ filterCategoryJoin.replace(/\s+/gi, '-').toLowerCase() +"&keyword="+ keyword.replace(/\s+/gi, '-').toLowerCase() +"&price="+ filterPriceJoin.replace(/\s+/gi, '-').toLowerCase() +"&lp="+ filterLPJoin.replace(/\s+/gi, '-').toLowerCase())
    });

    // to trigger the submit button
    $(buttonSearch).on('click', function(e) { 
        $(formSeaerch).trigger('submit')
    });
}

/** function to get unique option */
var optionList = function(data, filterLP, filterPrice, filterCategory) {
    var lookupCategory = {}, lookupCourseLP = {};
    var resultCategory = [], resultCourseLP = [];

    // to get the list of category insert to array
    for (var item, i = 0; item = data[i++];) {
        var category = item.course_category.toLowerCase();
        var courseLP = item.lp_name.toLowerCase();
        
        if (!(category in lookupCategory)) {
            lookupCategory[category] = 1;
            resultCategory.push(category);
        }

        if (!(courseLP in lookupCourseLP)) {
            lookupCourseLP[courseLP] = 1;
            resultCourseLP.push(courseLP);
        }
    }
    // list result category
    resultCategory = resultCategory.sort();
    resultCourseLP = resultCourseLP.sort();
    $('#course-LP, #course-category').html('');
    // append data to list category
    _.each(resultCategory, function(value, i) {
        var checked = _.indexOf(filterCategory, value) !== -1 ? 'checked' : '';
        $('#course-category').append('<div class="form-check">' +
                '<input class="form-check-input filter-category" id="filter-category-'+ i +'" type="checkbox" value="'+ value +'" '+ checked +'>' +
                '<label class="form-check-label text-capitalize" for="filter-category-'+ i +'">'+ value +'</label>' +
            '</div>'
        );
    })

    // append data to list LP
    _.each(resultCourseLP, function(value, i) {
        var checked = _.indexOf(filterLP, value) !== -1 ? 'checked' : '';
        // $('#filter-category').append('<option value="'+ value +'" '+ checked +'>'+ value + '</option>');
        $('#course-LP').append('<div class="form-check">' +
                '<input class="form-check-input filter-lp" id="filter-lp-'+ i +'" type="checkbox" value="'+ value +'" '+ checked +'>' +
                '<label class="form-check-label text-capitalize" for="filter-lp-'+ i +'">'+ value +'</label>' +
            '</div>'
        );
    })

    // loop price selected
    _.each(filterPrice, function(value) {
        $('.filter-price[value="'+ value +'"]').attr('checked', true);
    })
    
    if(!_.isEmpty(filterLP) || !_.isEmpty(filterPrice) || !_.isEmpty(filterCategory)) {
        $('#btn-reset-filter').removeClass('disabled')
    }

    // resultCourseLP
}

function resetFilter(param, target) {
    $(param).click(function (e) {
        $(this).addClass('disabled');
        $('#button-addon1').attr('class', 'btn btn-outline-light');
        $(target).prop("checked", false);
    });
}

function filterWatcher(param, target) {
    $(param).click(function (e) {
        if ($(param).is(':checked')) {
            $(target).removeClass('disabled');
            $('#button-addon1').attr('class', 'btn btn-primary')
        } else {
            $(target).addClass('disabled');
            $('#button-addon1').attr('class', 'btn btn-outline-light')
        }
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
        var course_title = _this.parents('div.card-body').find('h6.course-title').html();
        var lp_name = _this.parents('div.card-cover').find('.course-lp-name').html();
        if(window.DataLayer !== undefined) {
            dataLayer.push({'event': events, 'course_title': course_title, 'price': price, 'lp_name' : lp_name});
        }
    })
}

var pushEventsFilter = function(target) {
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
    // $(document).ready(function(){
        var appendTarget = $('#course-lists');
        var loadMoreTarget = $('#load-more');
        var applyFilter = $('#btn-apply-filter');
        var formSeaerch = $('#form-search');
        var buttonSearch = $('#button-search');
        var loadItem = 12;
        var currentPage = 1;
        var filterTopic = !_.isEmpty(queryParams.get('topic')) ? ((queryParams.get('topic').toLowerCase()).replace(/-|%20/gi, ' ')).split(',') : '';
        var filterPrice = !_.isEmpty(queryParams.get('price')) ? ((queryParams.get('price').toLowerCase()).replace(/-|%20/gi, ' ')).split(',') : '';
        var filterLP = !_.isEmpty(queryParams.get('lp')) ? ((queryParams.get('lp').toLowerCase()).replace(/-|%20/gi, ' ')).split(',') : '';
        var keyword = !_.isEmpty(queryParams.get('keyword')) ? (queryParams.get('keyword')).replace(/-|%20/gi, ' ') : '';

        if (!_.isEmpty(filterPrice) || !_.isEmpty(filterPrice) || !_.isEmpty(filterLP)) {
            $('#button-addon1').attr('class', 'btn btn-primary')
        }
        
        if (appendTarget.length) {
            $.getJSON(courseListURL, function(courses){
                // get query param by 
                var data = _.shuffle(courses)

                if (!_.isEmpty(filterPrice)) {
                    data = _.filter(data, function(list) { return this.keys.indexOf(list.course_after_discount) > -1; }, {"keys" : filterPrice})
                } 
                if (!_.isEmpty(filterTopic)) {
                    data = _.filter(data, function(list) { return this.keys.indexOf(list.course_category.toLowerCase()) > -1; }, {"keys" : filterTopic})
                }  
                if (!_.isEmpty(filterLP)) {
                    data = _.filter(data, function(list) { return this.keys.indexOf(list.lp_name.toLowerCase()) > -1; }, {"keys" : filterLP})
                }
                var dataKeyword = keyword !== null ? _.filter(data, function(list) { return list.course_title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1; }) : data;


                // if (!_.isEmpty(filterTopic) || !_.isEmpty(filterPrice) || !_.isEmpty(filterLP)) {
                //     var dataFilter = _.filter(data, function(list) { return list.course_category.toLowerCase().indexOf(filterTopic.toLowerCase()) !== -1; })
                //     var dataKeyword = keyword !== null ? _.filter(dataFilter, function(list) { return list.course_title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1; }) : dataFilter;
                // } else {
                //     var dataKeyword = keyword !== null ? _.filter(data, function(list) { return list.course_title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1; }) : dataFilter;
                // }
                
                // var dataKeyword = keyword !== null ? _.filter(data, function(list) { return list.course_title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1; }) : dataFilter;
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
                    if (!_.isEmpty(dataKeyword)) {
                        $.each(dataKeyword.slice(start, end), function(i, list) {
                            templateCourse(appendTarget, list);
                        })
                    } else {
                        appendTarget.html(emptyState);
                    }
    
                    // loadmore more button show / hide
                    checkLoadMore(loadMoreTarget, paging, currentPage);
                    btnLoadMore(loadMoreTarget, loadItem, start, end, dataKeyword, appendTarget, currentPage, paging);
                    
                    // load option
                    optionList(courses, filterLP, filterPrice, filterTopic);

                    // trigger reset filter
                    resetFilter('#btn-reset-filter', 'input.form-check-input');
                    
                    // reset button function to enable or disabled
                    filterWatcher(".form-check-input", "#btn-reset-filter");
                    
                    // filter implementation
                    filterCourse(applyFilter, courses, start, end);
                    filterKeyword(formSeaerch, buttonSearch, courses, start, end);
    
                    // invoke function push event GA
                    pushEvents('.see-detail-course');
                    pushEvents('.apply-course');
    
                }, 1500)
            }).fail(function(){
                console.log("An error has occurred.");
            });
        }
    // });
}

// function to load course on homepage
function courseLoaderHome() {
    // $(document).ready(function(){
    var appendLimited = $('#courseCarouselDiscount');
    var appendTwenty = $('#courseCarouselTwenty');
    var appendFree = $('#courseCarouselFree');
    var appendTarget = $('#course-provider-list');
    var loadMoreTarget = $('#load-more-lp');
    var loadItem = 12;
    var currentPage = 1;
    
    // check if this content is available on landing page or not
    if (appendLimited.length || appendTwenty.length || appendFree.length) {
        $.getJSON(courseListURL, function(data){
            dataLimited = _.sample(_.filter(data, function(list) { return list.course_after_discount !== "0" && list.course_after_discount !== "20000"}), 10);
            dataTwenty = _.sample(_.filter(data, function(list) { return list.course_after_discount == "20000"}), 10);
            dataFree = _.sample(_.filter(data, function(list) { return list.course_after_discount == "0"}), 10);
            appendLimited.addClass('owl-carousel').html('');
            appendTwenty.addClass('owl-carousel').html('');
            appendFree.addClass('owl-carousel').html('');

            var lookupCourseLP = {};
            var resultCourseLP = [];

            // to get the list of category insert to array
            for (var item, i = 0; item = data[i++];) {
                var courseLP = item.lp_name.toLowerCase();

                if (!(courseLP in lookupCourseLP)) {
                    lookupCourseLP[courseLP] = 1;
                    resultCourseLP.push({
                        "lp_name" : item.lp_name,
                        "lp_logo" : item.logo_lp
                    });
                }
            }
            // list result lp
            resultCourseLP = _.sortBy(resultCourseLP, 'lp_name');
            appendTarget.html('');

            var dataLength = resultCourseLP.length;
            var paging = Math.ceil(dataLength/loadItem);
            var start = 0;
            var end = loadItem;

            // append data to list LP
        
            $.each(resultCourseLP.slice(start, end), function(i, list) {
                templateLP(appendTarget, list);
            })

            btnLoadMore(loadMoreTarget, loadItem, start, end, resultCourseLP, appendTarget, currentPage, paging, true);

            $.each(dataLimited, function(i, list) {
                templateCourse(appendLimited, list, 'home');
            });

            $.each(dataTwenty, function(i, list) {
                templateCourse(appendTwenty, list, 'home');
            });

            $.each(dataFree, function(i, list) {
                templateCourse(appendFree, list, 'home');
            });
            
            // invoke function push event GA
            // pushEvents('.see-detail-course');
            // pushEvents('.apply-course');
        }).done(function() {
            $('.owl-carousel').owlCarousel({
                loop:true,
                margin:24,
                nav:true,
                dots: false,
                responsive:{
                    0:{
                        items:1.2,
                        margin: 16,
                        nav:false,
                    },
                    600:{
                        items:3,
                        margin: 16,
                        nav:false,
                    },
                    1000:{
                        items:4,
                        nav:false
                    },
                    1200:{
                        items:4,
                        nav:true
                    }
                }
            });
        })
    }  
    // })
}

function courseLoaderDetail () {
    // $(document).ready(function(){
    var courseId = !_.isEmpty(queryParams.get('id')) ? queryParams.get('id') : 'ISW-P0005'; // ISW-P0005 == default
    var appendDetail = $('#detail-course');
    var appendSimilar = $('#courseCarousel');
    var appendBreadCrumb = $('#breadcrumb-detail ol');
    
    if (appendDetail.length) {
        $.getJSON(courseListURL, function(courses){
            var detail = _.findWhere(courses, { 'course_id': courseId });
            var similar = _.sample(_.reject(_.filter(courses, function(list) { return list.course_category.toLowerCase().indexOf((detail.course_category).toLowerCase()) !== -1; }), function(list) {return list.course_id == courseId }),10);
            var similarCourseLink = BaseURL + 'pelatihan/index.html?topic='+ (detail.course_category).toLowerCase() +'&keyword=&price=&lp=';
            var similarButton = $('.similar-course');
            var getVoucherButton = $('#get-voucher');
            var requestFormLogin = $('#getCourseLoginModal');
            var requestFormNotLogin = $('#getCourseNotLoginModal');
            // appendDetail.html('').append(templateDetail(detail));
            appendBreadCrumb.html(templateBreadCrumb(detail));
            var courseTakens = _.isNull(localStorage.getItem('course_takens')) ? [] : JSON.parse(localStorage.getItem('course_takens'));
            $.when(
                appendDetail.html('').append(templateDetail(detail))
            ).then(function() {
                var getVoucherButton = $('#get-voucher');
                var requestFormLogin = $('#getCourseLoginModal');
                var requestFormNotLogin = $('#getCourseNotLoginModal');
                var requetVoucher = $('#get-voucher-botton');
                var shareBtn = $('.share-button');
                var shareDialog = $('.share-dialog');
                var closeButton = $('.close-button');

                shareBtn.click(function() {
                    if (navigator.share) { 
                        navigator.share({
                            title: 'WebShare API Demo',
                            url: 'CurrentURL'
                            }).then(() => {
                            console.log('Thanks for sharing!');
                            })
                            .catch(console.error);
                    } else {
                        shareDialog.addClass('is-open');
                    }
                })

                closeButton.click(function() {
                    shareDialog.removeClass('is-open');
                })

                getVoucherButton.click(function() {
                    if (!_.isNull(localStorage.getItem('users'))) {
                        requestFormLogin.modal('show');
                        requestFormLogin.find('#emailUserVoucher').val(dataUser.email);
                        requestFormLogin.find('.detail-course img').attr('src', detail.course_image);
                        requestFormLogin.find('.detail-course h6').html(detail.course_title);
                        requestFormLogin.find('.alert').addClass('alert-info').removeClass('alert-danger').html('<i class="fs-5 bi bi-info-circle-fill me-3"></i><div><div class="fs-7">Kode Voucher akan dikirim ke email kamu selama <b>kuota </b>pelatihan masih tersedia, silakan cek email secara berkala.</div></div>')
                        requetVoucher.click(function(event) {
                            event.preventDefault();
                            _this = $(this);
                            _this.addClass('disabled').html('<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"> </span><span class="sr-only"> Loading...</span>');
                            var dataPost = {
                                course_id : courseId
                            }
                            $.ajax({
                                dataType: "json",
                                contentType : "application/json",
                                type: "POST",
                                url: checkVoucher,
                                headers: {
                                    'Authorization' : dataUser.token
                                },
                                data: JSON.stringify(dataPost)
                            }).done(function (response) {
                                // return the button process and hide the modal
                                _this.removeClass('disabled').html('Ambil Voucher');
                                requestFormLogin.modal('hide');
                                // show toast success
                                $('#success-toast').toast('show');
                                // set buton request to disabled
                                getVoucherButton.addClass('disabled btn-secondary').html('Voucher sudah diambil').removeClass('btn-primary');
                                // push val to variable
                                courseTakens.push(courseId);
                                // set course taken to localstorage
                                localStorage.setItem('course_takens',JSON.stringify(courseTakens));

                            }).fail(function(responses) {
                                var response = responses.responseJSON;
                                _this.removeClass('disabled').html('Ambil Voucher');
                                if(response.code = 'ERR40004') {
                                    requestFormLogin.find('.alert').addClass('alert-danger').removeClass('alert-info').html('<i class="fs-5 bi bi-exclamation-triangle-fill me-3"></i><div><h6 class="text-danger">Ambil Voucher Pelatihan Gagal</h6><div class="fs-7">'+ response.message +'.</div></div> ')
                                }
                            })
                        })
                    } else {
                        requestFormNotLogin.modal('show');
                        requestFormNotLogin.find('img').attr('src', detail.course_image);
                        requestFormNotLogin.find('h6').html(detail.course_title);
                    }
                })
            })
            
            appendSimilar.html('');
            similarButton.attr('href', similarCourseLink);
            
            if (!_.isEmpty(similar)) {
                $.when(
                    $.each(similar, function(i, list) {
                        templateCourse(appendSimilar, list, 'detail');
                    })
                ).then(function() {
                    $('.owl-carousel').owlCarousel({
                        loop:true,
                        margin:24,
                        nav:true,
                        dots: false,
                        responsive:{
                            0:{
                                items:1.2,
                                margin: 16,
                                nav:false,
                            },
                            600:{
                                items:3,
                                margin: 16,
                                nav:false,
                            },
                            1000:{
                                items:4,
                                nav:false
                            },
                            1200:{
                                items:4,
                                nav:true
                            }
                        }
                    });
                })
            } else {
                appendSimilar.html('<section class="section-course mb-4"><div class="container py-0 px-4 px-md-0"><div class="d-flex align-items-center justify-content-between mb-3"><h4>Pelatihan Serupa</h4></div><div class="d-flex similar-course-empty rounded justify-content-center"><div class="col-lg-8 d-lg-flex p-4 justify-content-center"><div class="p-md-3 mb-3 mb-lg-0"><img loading="lazy" src="img/img-ornament-1.svg" height="116" /></div><div class="p-md-3"><h5>Sepertinya tidak ditemukan pelatihan serupa</h5><p>Yuk cari pelatihan lainnya yang mungkin kamu tertarik untuk ikuti</p><a class="btn btn-primary" href="/pelatihan">Cari Pelatihan Lainnya</a></div></div></div></div></section>').css({"display": "block"})
            }

        })
    }

    // })
    // $(target).html('').append(templateDetail)
}

function homeCheckLogin() {
    var loginText = !_.isNull(dataUser) ? dataUser.email : 'Masuk';
    var loginButton = $('#btn-login');
    var logoutButton = $('#btn-logout');
    var loginModal = $('#loginModal');
    var successLoginModal = $('#loginSuccessModal');
    var afterLoginModal = $('#loginAlreadyModal');
    var loginSkip = $('.login-dismiss');
    var formLogin = $("#login-form");
    var btnFormLogin = $('#submit-login');

    // trigger popup
    if (_.isNull(dataUser)) {
        // set wording to login
        loginButton.find('span').removeClass('skeleton-box rounded-pill').html(loginText)
        
        // handle login
        loginButton.click(function() {
            loginModal.modal('show');
        });
        
        // handle popup and skipped popup
        if(_.isNull(isPopupSkip)) {
            loginModal.modal('show');
            loginSkip.click(function() {
                localStorage.setItem('login-popup-skip', true);
                formLogin.find('.alert.alert-danger').addClass('visually-hidden');
                btnFormLogin.removeClass('disabled').html('Masuk');
            })
        }

        formLogin.submit(function(e) {
            e.preventDefault();
            var dataPost = {
                "email": formLogin.find('input#userEmail').val(),
                "password": formLogin.find('input#userPassword').val()
            };

            if(!_.isEmpty(dataPost.email) && !_.isEmpty(dataPost.password)) {
                
                btnFormLogin.addClass('disabled').html('<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"> </span><span class="sr-only"> Loading...</span>');

                $.ajax({
                    dataType: "json",
                    contentType : "application/json",
                    type: "POST",
                    url: checkLogin,
                    data: JSON.stringify(dataPost)
                }).done(function (response) {
                    var data = response.data
                    if(data.stat.step !== 7) {
                        btnFormLogin.removeClass('disabled').html('Masuk');
                        formLogin.find('.alert.alert-danger').removeClass('visually-hidden').find('.alert.alert-danger .text-error').html('Lengkapi dan selesaikan proses daftar di Prakerja untuk bisa login pada Skillsweek')
                    } else {
                        localStorage.setItem('users',  JSON.stringify(_.extend(data, {email : dataPost.email})));
                        loginButton.find('.text-users').html(dataPost.email);

                        formLogin.find('.alert.alert-danger').addClass('visually-hidden');
                        btnFormLogin.removeClass('disabled').html('Masuk');
                        // hide modal login
                        loginModal.modal('hide');
                        // show success login modal
                        successLoginModal.find('#emailUserVoucher').text(dataPost.email);
                        successLoginModal.find('.email-account').text(dataPost.email);
                        successLoginModal.modal('show');
                        $('#success-login').click(function(){
                            window.location.reload()
                        })

                        loginButton.click(function() {
                            afterLoginModal.find('#validEmailUser').val(dataUser.email)
                            afterLoginModal.find('.text-email').text('(' + dataUser.email + ')');
                            afterLoginModal.modal('show');
                            logoutButton.click(function() {
                                localStorage.removeItem('users');
                                localStorage.removeItem('course_takens');
                                window.location.reload();
                            })
                        });
                    }
                }).fail(function(data) {
                    formLogin.find('.alert.alert-danger').removeClass('visually-hidden').find('.alert.alert-danger .text-error').html('Alamat email atau password salah. Mohon periksa kembali.');
                    btnFormLogin.removeClass('disabled').html('Masuk');
                })
            }

        })

        // btnFormLogin.click(function() {
        //     console.log('form submit')
        //     // formLogin.trigger('submit');
        // })
        
    } else {
        loginButton.find('span').after(loginText).remove();
        // handle login
        loginButton.click(function() {
            afterLoginModal.find('#validEmailUser').val(dataUser.email)
            afterLoginModal.find('.text-email').text('(' + dataUser.email + ')');
            afterLoginModal.modal('show');
            logoutButton.click(function() {
                localStorage.removeItem('users');
                localStorage.removeItem('course_takens');
                window.location.reload();
            })
        });
        
    }
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
        nav:false,
        autoplay: true,
        responsive:{
            0:{
                items:1,
                margin: 0
            }
        }
    });

    $('.cws-carousel').owlCarousel({
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

    // show hide password 
    $('.show-password').click(function(e){
        var target = e.currentTarget
        $(target).hasClass('show-password-target')?hidePassword($(target)):showPassword($(target))
    })
    function hidePassword(e){
        e.removeClass('show-password-target').addClass('hide')
        e.prev('input').attr('type','password')
        e.children().addClass('bi-eye').removeClass('bi-eye-slash')
    }
    function showPassword(e){
        e.removeClass('hide').addClass('show-password-target')
        e.prev('input').attr('type','text')
        e.children().removeClass('bi-eye').addClass('bi-eye-slash')
    }
    
    var toastTrigger = $('#liveToastBtn');
    var toastLiveExample = $('#liveToast');

    if (toastTrigger.length) {
        var toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastTrigger.click(function(){
            toastBootstrap.show()
        })
    }

    $(document).ready(function(){
        // run init course loader on page course
        courseLoaderInit();

        // run init course home
        courseLoaderHome();
        
        // run detail courses
        courseLoaderDetail(dataCourse);

        // run popup
        homeCheckLogin();
    })

 })(jQuery);


// function shareCourse(){
//     const shareButton = document.querySelector('.share-button');
//     const shareDialog = document.querySelector('.share-dialog');
//     const closeButton = document.querySelector('.close-button');

//     shareButton.addEventListener('click', event => {
//     if (navigator.share) { 
//     navigator.share({
//         title: 'WebShare API Demo',
//         url: 'CurrentURL'
//         }).then(() => {
//         console.log('Thanks for sharing!');
//         })
//         .catch(console.error);
//         } else {
//             shareDialog.addClass('is-open');
//         }
//     });
    
//     $(shareDialog).click(function(){
//         shareDialog.removeClass('is-open');
//     });
// }

// shareCourse();
 
