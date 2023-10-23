"use strict";var e="/v3/",a="https://public-prakerja.oss-ap-southeast-5.aliyuncs.com/skill_week/list_pelatihan_skillweek_3.json",s=new URLSearchParams(window.location.search),t=(_.isNull(localStorage.getItem("course_list"))?$.getJSON(a).done((function(e){localStorage.setItem("course_list",JSON.stringify(e))})):localStorage.getItem("course_list"),_.isNull(localStorage.getItem("users"))?null:JSON.parse(localStorage.getItem("users"))),i=localStorage.getItem("login-popup-skip"),l=document.querySelectorAll(".needs-validation");Array.prototype.slice.call(l).forEach((function(e){e.addEventListener("submit",(function(a){e.checkValidity()||(a.preventDefault(),a.stopPropagation()),e.classList.add("was-validated")}),!1)}));var o="<div class='col-12 col-md-12'><div class='alert alert-info' role='alert'><div class='d-flex'><div class='pe-3'><i class='bi bi-info-circle-fill fs-4'></i></div><div><h6 class='alert-heading'>Pelatihan tidak ditemukan</h6><p>Mohon periksa kembali kata kunci Anda dan pastikan ejaan dan tata bahasa yang benar. Anda juga dapat mencoba menggunakan kata kunci yang berbeda atau mencari di topik pelatihan yang berbeda.</p></div></div></div></div>",r=function(a,s,t){var i=s.course_type.toLowerCase()=="Online Self-Paced Learning".toLowerCase()?"text-bg-warning":"text-bg-help",l=e+"pelatihan/detail.html?title="+s.course_title.replace(/\s+/gi,"-").toLowerCase()+"&id="+s.course_id,o="100%"==s.course_discount?"Gratis":"Rp "+Number(s.course_after_discount).toLocaleString("id"),r="100%"!=s.course_discount?"color-secondary":"",n=null==t?"col-12 col-md-6 col-xl-4 col-xxl-3 mb-4 mb-lg-5":"wl-carousel-card pb-3",c="<div id='"+s.index+"' class='"+n+"'><div class='card pds-card'><div class='card-cover'><img loading='lazy' src='"+s.course_image+"' class='card-img-top' alt='"+s.course_title+"'><div class='card-cover-overlay'><div class='d-flex justify-content-between align-middle'><div class='align-self-center'><div class='card-company'><img class='me-1 card-logo' src='"+s.lp_logo+"' alt='"+s.lp_name+"'><span class='course-lp-name'>"+s.lp_name+"</span></div></div><div class='align-self-center'><span class='badge rounded-pill text-capitalize "+i+"'>"+s.course_type.replace(/Online/g,"")+"</span></div></div></div></div><div class='card-body'><h6 class='mb-1 course-title text-capitalize' title='"+s.course_title+"'>"+s.course_title+"</h6><span class='mb-2 badge text-bg-light text-capitalize'>"+s.course_category+"</span><div><div class='course-real-price mb-1'><span>Rp "+Number(s.course_price).toLocaleString("id")+"</span> <span class='badge text-bg-ghost-success'>"+s.course_discount+"</span></div><div class='course-price card-price mb-1 "+r+"'>"+o+"</div></div><div class='mt-3 text-center'><a href='"+l+"' class='apply-course btn btn-primary w-100 mb-2 text-truncate' rel='nofollow' data-event='skill_week_apply_course'>Selengkapnya</a></div>";$(a).append(c).ready((function(){}))},n=function(e,a,s,t,i,l,o,n){$(e).unbind("click"),$(e).on("click",(function(){var c=$(e);s=t,t+=a,o+=1,$.each(i.slice(s,t),(function(e,a){r(l,a)})),u(c,n,o)}))},c=function(e,a,s,t){$(e).click((function(e){var i=$("#course-lists"),l=$("#load-more"),c=(i=$("#course-lists"),[]),d=[],p=[],m=a,h=$("#filter-keyword").val();$.each($(".filter-category:checked"),(function(e,a){c[e]=$(a).val()})),$.each($(".filter-price:checked"),(function(e,a){d[e]=$(a).val()})),$.each($(".filter-lp:checked"),(function(e,a){p[e]=$(a).val()})),_.isEmpty(d)||(m=_.filter(m,(function(e){return this.keys.indexOf(e.course_after_discount)>-1}),{keys:d})),_.isEmpty(c)||(m=_.filter(m,(function(e){return this.keys.indexOf(e.course_category.toLowerCase())>-1}),{keys:c})),_.isEmpty(p)||(m=_.filter(m,(function(e){return this.keys.indexOf(e.lp_name.toLowerCase())>-1}),{keys:p}));var f=_.filter(m,(function(e){return-1!==e.course_title.toLowerCase().indexOf(h.toLowerCase())})),v=f.length,g=Math.ceil(v/12);i.html(""),$("#course-counter div").html("Ditemukan <b>"+v+"</b> pelatihan"),0!==f.length?$.each(f.slice(s,t),(function(e,a){r(i,a)})):i.html(o),n(l,12,s,t,f,i,1,g),u(l,g,1),$("#modalFilter").modal("hide");var b=c.join(","),y=d.join(","),k=p.join(",");window.history.replaceState(null,null,"?topic="+b.replace(/\s+/gi,"-").toLowerCase()+"&keyword="+h.replace(/\s+/gi,"-").toLowerCase()+"&price="+y.replace(/\s+/gi,"-").toLowerCase()+"&lp="+k.replace(/\s+/gi,"-").toLowerCase())}))},d=function(e,a,s,t,i){$(e).on("submit",(function(e){e.preventDefault();var a=$("#course-lists"),l=$("#load-more"),c=[],d=[],p=[],m=s,h=$(this).find("input").val();$.each($(".filter-category:checked"),(function(e,a){c[e]=$(a).val()})),$.each($(".filter-price:checked"),(function(e,a){d[e]=$(a).val()})),$.each($(".filter-lp:checked"),(function(e,a){p[e]=$(a).val()})),$.each($(".filter-category:checked"),(function(e,a){c[e]=$(a).val()})),$.each($(".filter-price:checked"),(function(e,a){d[e]=$(a).val()})),$.each($(".filter-lp:checked"),(function(e,a){p[e]=$(a).val()})),_.isEmpty(d)||(m=_.filter(m,(function(e){return this.keys.indexOf(e.course_after_discount)>-1}),{keys:d})),_.isEmpty(c)||(m=_.filter(m,(function(e){return this.keys.indexOf(e.course_category.toLowerCase())>-1}),{keys:c})),_.isEmpty(p)||(m=_.filter(m,(function(e){return this.keys.indexOf(e.lp_name.toLowerCase())>-1}),{keys:p}));var f=_.filter(m,(function(e){return-1!==e.course_title.toLowerCase().indexOf(h.toLowerCase())})),v=f.length,g=Math.ceil(v/12);a.html(""),$("#course-counter div").html("Ditemukan <b>"+v+"</b> pelatihan"),0!==f.length?$.each(f.slice(t,i),(function(e,s){r(a,s)})):a.html(o),n(l,12,t,i,f,a,1,g),u(l,g,1);var b=c.join(","),y=d.join(","),k=p.join(",");window.history.replaceState(null,null,"?topic="+b.replace(/\s+/gi,"-").toLowerCase()+"&keyword="+h.replace(/\s+/gi,"-").toLowerCase()+"&price="+y.replace(/\s+/gi,"-").toLowerCase()+"&lp="+k.replace(/\s+/gi,"-").toLowerCase())})),$(a).on("click",(function(a){$(e).trigger("submit")}))};var u=function(e,a,s){a>0&&s<a?e.removeClass("visually-hidden"):e.addClass("visually-hidden")},p=function(e){$(e).on("click",(function(e){var a=$(this),s=a.attr("data-event"),t=a.parents("div.card-body").find(".course-price").html(),i=a.parents("div.card-body").find("h6.course-title").html(),l=a.parents("div.card-cover").find(".course-lp-name").html();void 0!==window.DataLayer&&dataLayer.push({event:s,course_title:i,price:t,lp_name:l})}))};function m(){var e=$("#course-lists"),t=$("#load-more"),i=$("#btn-apply-filter"),l=$("#form-search"),m=$("#button-search"),h=_.isEmpty(s.get("topic"))?"":s.get("topic").toLowerCase().replace(/-|%20/gi," ").split(","),f=_.isEmpty(s.get("price"))?"":s.get("price").toLowerCase().replace(/-|%20/gi," ").split(","),v=_.isEmpty(s.get("lp"))?"":s.get("lp").toLowerCase().replace(/-|%20/gi," ").split(","),g=_.isEmpty(s.get("keyword"))?"":s.get("keyword").replace(/-|%20/gi," ");_.isEmpty(f)&&_.isEmpty(f)&&_.isEmpty(v)||$("#button-addon1").attr("class","btn btn-primary"),e.length&&$.getJSON(a,(function(a){var s=_.shuffle(a);_.isEmpty(f)||(s=_.filter(s,(function(e){return this.keys.indexOf(e.course_after_discount)>-1}),{keys:f})),_.isEmpty(h)||(s=_.filter(s,(function(e){return this.keys.indexOf(e.course_category.toLowerCase())>-1}),{keys:h})),_.isEmpty(v)||(s=_.filter(s,(function(e){return this.keys.indexOf(e.lp_name.toLowerCase())>-1}),{keys:v}));var b=null!==g?_.filter(s,(function(e){return-1!==e.course_title.toLowerCase().indexOf(g.toLowerCase())})):s;null!==g&&$("#filter-keyword").val(g);var y=b.length,k=Math.ceil(y/12);setTimeout((function(){var s;e.html(""),$("#course-counter div").html("Ditemukan <b>"+y+"</b> pelatihan"),_.isEmpty(b)?e.html(o):$.each(b.slice(0,12),(function(a,s){r(e,s)})),u(t,k,1),n(t,12,0,12,b,e,1,k),function(e,a,s,t){for(var i,l={},o={},r=[],n=[],c=0;i=e[c++];){var d=i.course_category.toLowerCase(),u=i.lp_name.toLowerCase();d in l||(l[d]=1,r.push(d)),u in o||(o[u]=1,n.push(u))}r=r.sort(),n=n.sort(),$("#course-LP, #course-category").html(""),_.each(r,(function(e,a){var s=-1!==_.indexOf(t,e)?"checked":"";$("#course-category").append('<div class="form-check"><input class="form-check-input filter-category" id="filter-category-'+a+'" type="checkbox" value="'+e+'" '+s+'><label class="form-check-label text-capitalize" for="filter-category-'+a+'">'+e+"</label></div>")})),_.each(n,(function(e,s){var t=-1!==_.indexOf(a,e)?"checked":"";$("#course-LP").append('<div class="form-check"><input class="form-check-input filter-lp" id="filter-lp-'+s+'" type="checkbox" value="'+e+'" '+t+'><label class="form-check-label text-capitalize" for="filter-lp-'+s+'">'+e+"</label></div>")})),_.each(s,(function(e){$('.filter-price[value="'+e+'"]').attr("checked",!0)})),_.isEmpty(a)&&_.isEmpty(s)&&_.isEmpty(t)||$("#btn-reset-filter").removeClass("disabled")}(a,v,f,h),s="input.form-check-input",$("#btn-reset-filter").click((function(e){$(this).addClass("disabled"),$("#button-addon1").attr("class","btn btn-outline-light"),$(s).prop("checked",!1)})),function(e,a){$(e).click((function(s){$(e).is(":checked")?($(a).removeClass("disabled"),$("#button-addon1").attr("class","btn btn-primary")):($(a).addClass("disabled"),$("#button-addon1").attr("class","btn btn-outline-light"))}))}(".form-check-input","#btn-reset-filter"),c(i,a,0,12),d(l,m,a,0,12),p(".see-detail-course"),p(".apply-course")}),1500)})).fail((function(){}))}function h(){var e=$("#courseCarouselDiscount"),s=$("#courseCarouselTwenty"),t=$("#courseCarouselFree"),i=$("#course-provider-list"),l=$("#load-more-lp");(e.length||s.length||t.length)&&$.getJSON(a,(function(a){dataLimited=_.sample(_.filter(a,(function(e){return"0"!==e.course_after_discount&&"20000"!==e.course_after_discount})),10),dataTwenty=_.sample(_.filter(a,(function(e){return"20000"==e.course_after_discount})),10),dataFree=_.sample(_.filter(a,(function(e){return"0"==e.course_after_discount})),10),e.addClass("owl-carousel").html(""),s.addClass("owl-carousel").html(""),t.addClass("owl-carousel").html("");for(var o,c={},d=[],u=0;o=a[u++];){var p=o.lp_name.toLowerCase();p in c||(c[p]=1,d.push({lp_name:o.lp_name,lp_logo:o.lp_logo}))}d=_.sortBy(d,"lp_name"),i.html("");var m=d.length,h=Math.ceil(m/12);$.each(d.slice(0,12),(function(e,s){i.append('<div class="col-12.col-sm-6 col-md-4 col-xl-3"><a class="text-capitalize card-company-list" href="pelatihan/index.html?topic=&keyword=&price=&lp='+s.lp_name.replace(/\s+/gi,"-").toLowerCase()+'" title="'+a.course_title+'"><img class="me-1 card-logo" height="40" src="'+s.lp_logo+'" alt="'+s.lp_name+'"/><span class="lp-name">'+s.lp_name+"</span></a></div>")})),n(l,12,0,12,d,i,1,h),$.each(dataLimited,(function(a,s){r(e,s,"home")})),$.each(dataTwenty,(function(e,a){r(s,a,"home")})),$.each(dataFree,(function(e,a){r(t,a,"home")}))})).done((function(){$(".owl-carousel").owlCarousel({loop:!0,margin:24,nav:!0,dots:!1,responsive:{0:{items:1.2,margin:16,nav:!1},600:{items:3,margin:16,nav:!1},1e3:{items:4,nav:!1},1200:{items:4,nav:!0}}})}))}function f(){var i=_.isEmpty(s.get("id"))?"ISW-P0005":s.get("id"),l=$("#detail-course"),o=$("#courseCarousel"),n=$("#breadcrumb-detail ol");l.length&&$.getJSON(a,(function(a){var s=_.findWhere(a,{course_id:i}),c=_.sample(_.reject(_.filter(a,(function(e){return-1!==e.course_category.toLowerCase().indexOf(s.course_category.toLowerCase())})),(function(e){return e.course_id==i})),10),d=e+"pelatihan/index.html?topic="+a.course_category+"&keyword=&price=&lp=",u=$(".similar-course");$("#get-voucher"),$("#getCourseLoginModal"),$("#getCourseNotLoginModal");n.html('<ol class="breadcrumb overflow-hidden fs-7 mb-0"><li class="breadcrumb-item"> <a href="/v3/"><i class="bi bi-house-door"></i></a></li><li class="breadcrumb-item"> <a href="/v3/pelatihan">Pelatihan </a></li><li class="breadcrumb-item active text-truncate">'+s.course_title+"</li></ol>");var p=_.isNull(localStorage.getItem("course_takens"))?[]:JSON.parse(localStorage.getItem("course_takens"));$.when(l.html("").append(function(a){var s="100%"==a.course_discount?"Gratis":"Rp "+Number(a.course_after_discount).toLocaleString("id"),t=JSON.parse(localStorage.getItem("course_takens")),i=_.contains(t,a.course_id)?'<button class="my-3 btn btn-secondary btn-lg w-100 disabled" data-bs-toggle="modal" data-bs-target="#">Voucher berhasil diambil</button>':'<button id="get-voucher" class="my-3 btn btn-primary btn-lg w-100" data-bs-toggle="modal" data-bs-target="#">Dapatkan Voucher Pelatihan </button>';return'<section class="section-detail-course"><div class="container pt-3 pb-5 px-4 px-md-0"><div class="row flex-row-reverse"><div class="col-12 col-md-4 col-lg-4"><div class="course-cover-sticky"><div class="course-cover"><img class="w-100 rounded" src="'+a.course_image+'" alt=""/></div><div class="mt-3 d-flex justify-content-between"><div><div class="course-real-price mb-1"><span class="me-1">Rp '+a.course_price+'</span><span class="badge text-bg-ghost-success">'+a.course_discount+'</span></div><div class="course-price card-price mb-1 color-secondary fs-4">'+s+'</div></div><div><button class="btn btn-light share-button" type="button" title="Bagikan halaman ini"><i class="bi bi-share-fill">&nbsp;&nbsp;</i>Bagikan</button></div></div><div class="course-cta px-3 px-lg-0">'+i+'</div></div></div><div class="col-12 col-md-8 col-lg-8 pe-xl-4"><h1 class="mb-3">'+a.course_title+'</h1><a class="card-company-link d-inline-flex p-2 text-decoration-none border px-3" href="'+e+"pelatihan?topic=&keyword=&price=&lp="+a.lp_name+'"><img class="me-1 card-logo" src="'+a.lp_logo+'" alt="'+a.lp_name+'"/><span class="lp-name fs-7 text-secondary">'+a.lp_name+'</span></a><div class="row mt-5 mb-4"> <div class="col-12 col-md-6 col-lg-4 mb-4 d-flex"> <i class="bi bi-person-badge"></i><div class="ps-2"> <h6 class="fs-7 mb-2">Instruktur</h6><p class="fs-7">'+a.instructure_name+'</p></div></div><div class="col-12 col-md-6 col-lg-4 mb-4 d-flex"> <i class="bi bi-clock"> </i><div class="ps-2"> <h6 class="fs-7 mb-2">Durasi Pelatihan</h6><p class="fs-7">'+a.duration+' (Menit)</p></div></div><div class="col-12 col-md-6 col-lg-4 mb-4 d-flex"> <i class="bi bi-person-video"> </i><div class="ps-2"> <h6 class="fs-7 mb-2">Metode Ajar</h6><span class="badge rounded-pill text-bg-warning">'+a.course_type+'</span></div></div><div class="col-12 col-md-6 col-lg-4 mb-4 d-flex"> <i class="bi bi-tag"> </i><div class="ps-2"> <h6 class="fs-7 mb-2">Kategori</h6><p class="fs-7">'+a.course_category+'</p></div></div><div class="col-12 col-md-6 col-lg-4 mb-4 d-flex"> <i class="bi bi-ticket-detailed"> </i><div class="ps-2"> <h6 class="fs-7 mb-2">Kuota Pelatihan</h6><p class="fs-7">'+a.quota+'<i>&nbsp;(Selama masih tersedia)</i></p></div></div><div class="col-12 col-md-6 col-lg-4 mb-4 d-flex"> <i class="bi bi-link-45deg"></i><div class="ps-2 overflow-hidden"><h6 class="fs-7 mb-2">Link Pelatihan</h6><a class="fs-7 d-flex align-items-center" href="'+a.course_url+'" target="_blank" title="'+a.course_title+'"> <span class="pds-truncate">'+a.course_url+'</span><i class="bi bi-arrow-up-right-square-fill"></i></a></div></div></div><hr/><article><section class="py-3"><h4 class="mb-4">Deskripsi Pelatihan </h4><article id="description">'+a.description.replace(/\n/g,"</br>")+'</article></section><section class="py-3" id="CaraRedeemVoucher"><h4 class="mb-4">Cara Redeem Voucher</h4><article id="how-to-redeem">'+a.how_to_redeem.replace(/\n/g,"</br>")+"</article></section><hr/></article></div></div></div></section>"}(s))).then((function(){var e=$("#get-voucher"),a=$("#getCourseLoginModal"),l=$("#getCourseNotLoginModal"),o=$("#get-voucher-botton");e.click((function(){_.isNull(localStorage.getItem("users"))?(l.modal("show"),l.find("img").attr("src",s.course_image),l.find("h6").html(s.course_title)):(a.modal("show"),a.find("#emailUserVoucher").val(t.email),a.find(".detail-course img").attr("src",s.course_image),a.find(".detail-course h6").html(s.course_title),a.find(".alert").addClass("alert-info").removeClass("alert-danger").html('<i class="fs-5 bi bi-info-circle-fill me-3"></i><div><div class="fs-7">Kode Voucher akan dikirim ke email kamu selama <b>kuota </b>pelatihan masih tersedia, silakan cek email secara berkala.</div></div>'),o.click((function(s){s.preventDefault(),_this=$(this),_this.addClass("disabled").html('<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"> </span><span class="sr-only"> Loading...</span>');var l={course_id:i};$.ajax({dataType:"json",contentType:"application/json",type:"POST",url:"https://api-proxy.prakerja.go.id/api/v1/general/voucher/ack",headers:{Authorization:t.token},data:JSON.stringify(l)}).done((function(s){_this.removeClass("disabled").html("Ambil Voucher"),a.modal("hide"),$("#success-toast").toast("show"),e.addClass("disabled btn-secondary").html("Voucher sudah diambil").removeClass("btn-primary"),p.push(i),localStorage.setItem("course_takens",JSON.stringify(p))})).fail((function(e){var s=e.responseJSON;_this.removeClass("disabled").html("Ambil Voucher"),(s.code="ERR40004")&&a.find(".alert").addClass("alert-danger").removeClass("alert-info").html('<i class="fs-5 bi bi-exclamation-triangle-fill me-3"></i><div><h6 class="text-danger">Ambil Voucher Pelatihan Gagal</h6><div class="fs-7">'+s.message+".</div></div> ")}))})))}))})),o.html(""),u.attr("href",d),_.isEmpty(c)?o.html('<section class="section-course mb-4"><div class="container py-0 px-4 px-md-0"><div class="d-flex align-items-center justify-content-between mb-3"><h4>Pelatihan Serupa</h4></div><div class="d-flex similar-course-empty rounded justify-content-center"><div class="col-lg-8 d-lg-flex p-4 justify-content-center"><div class="p-md-3 mb-3 mb-lg-0"><img src="undefinedimg/img-ornament-1.svg" height="116" /></div><div class="p-md-3"><h5>Sepertinya tidak ditemukan pelatihan serupa</h5><p>Yuk cari pelatihan lainnya yang mungkin kamu tertarik untuk ikuti</p><a class="btn btn-primary" href="/pelatihan">Cari Pelatihan Lainnya</a></div></div></div></div></section>').css({display:"block"}):$.when($.each(c,(function(e,a){r(o,a,"detail")}))).then((function(){$(".owl-carousel").owlCarousel({loop:!1,margin:24,nav:!0,dots:!1,responsive:{0:{items:1.2,margin:16,nav:!1},600:{items:3,margin:16,nav:!1},1e3:{items:4,nav:!1},1200:{items:4,nav:!0}}})}))}))}function v(){var e=_.isNull(t)?"Masuk":t.email,a=$("#btn-login"),s=$("#btn-logout"),l=$("#loginModal"),o=$("#loginSuccessModal"),r=$("#loginAlreadyModal"),n=$(".login-dismiss"),c=$("#login-form"),d=$("#submit-login");_.isNull(t)?(a.find("span").removeClass("skeleton-box rounded-pill").html(e),a.click((function(){l.modal("show")})),_.isNull(i)&&(l.modal("show"),n.click((function(){localStorage.setItem("login-popup-skip",!0),c.find(".alert.alert-danger").addClass("visually-hidden"),d.removeClass("disabled").html("Masuk")}))),c.submit((function(e){e.preventDefault();var i={email:c.find("input#userEmail").val(),password:c.find("input#userPassword").val()};_.isEmpty(i.email)||_.isEmpty(i.password)||(d.addClass("disabled").html('<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"> </span><span class="sr-only"> Loading...</span>'),$.ajax({dataType:"json",contentType:"application/json",type:"POST",url:"https://api-ext.prakerja.go.id/api/v1/user/login-a17ab03c3d1d",data:JSON.stringify(i)}).done((function(e){var n=e.data;7!==n.stat.step?(d.removeClass("disabled").html("Masuk"),c.find(".alert.alert-danger").removeClass("visually-hidden").find(".alert.alert-danger .text-error").html("Lengkapi dan selesaikan proses daftar di Prakerja untuk bisa login pada Skillsweek")):(localStorage.setItem("users",JSON.stringify(_.extend(n,{email:i.email}))),a.find(".text-users").html(i.email),c.find(".alert.alert-danger").addClass("visually-hidden"),d.removeClass("disabled").html("Masuk"),l.modal("hide"),o.find("#emailUserVoucher").text(i.email),o.find(".email-account").text(i.email),o.modal("show"),$("#success-login").click((function(){window.location.reload()})),a.click((function(){r.find("#validEmailUser").val(t.email),r.find(".text-email").text("("+t.email+")"),r.modal("show"),s.click((function(){localStorage.removeItem("users"),localStorage.removeItem("course_takens"),window.location.reload()}))})))})).fail((function(e){c.find(".alert.alert-danger").removeClass("visually-hidden").find(".alert.alert-danger .text-error").html("Alamat email atau password salah. Mohon periksa kembali."),d.removeClass("disabled").html("Masuk")})))}))):(a.find("span").after(e).remove(),a.click((function(){r.find("#validEmailUser").val(t.email),r.find(".text-email").text("("+t.email+")"),r.modal("show"),s.click((function(){localStorage.removeItem("users"),localStorage.removeItem("course_takens"),window.location.reload()}))})))}!function(e){e(window).scroll((function(){var a=e(window).scrollTop();a>=60?e("header").addClass("header-fixed"):e("header").removeClass("header-fixed"),a>=400?e(".scroll-top").addClass("is-show"):e(".scroll-top").removeClass("is-show")})),e(".scroll-top").on("click",(function(){e(window).scrollTop(0)})),e(".menu").click((function(){e(this).toggleClass("open"),e(".navbar-custom").toggleClass("m-menu"),e("body").toggleClass("freeze")})),e(".navbar-custom").on("click",".nav-link",(function(a){e(".menu").removeClass("open"),e(".navbar-custom").removeClass("m-menu"),e("body").removeClass("freeze")})),e("#coworkingCarousel").owlCarousel({loop:!0,margin:24,nav:!1,autoplay:!0,responsive:{0:{items:1,margin:0}}}),e(".cws-carousel").owlCarousel({loop:!0,margin:24,nav:!0,autoplay:!0,responsive:{0:{items:1,margin:0}}}),e(".show-password").click((function(a){var s=a.currentTarget;e(s).hasClass("show-password-target")?function(e){e.removeClass("show-password-target").addClass("hide"),e.prev("input").attr("type","password"),e.children().addClass("bi-eye").removeClass("bi-eye-slash")}(e(s)):function(e){e.removeClass("hide").addClass("show-password-target"),e.prev("input").attr("type","text"),e.children().removeClass("bi-eye").addClass("bi-eye-slash")}(e(s))}));var a=e("#liveToastBtn"),s=e("#liveToast");if(a.length){var t=bootstrap.Toast.getOrCreateInstance(s);a.click((function(){t.show()}))}e(document).ready((function(){m(),h(),f(),v()}))}(jQuery);
//# sourceMappingURL=function-min.js.map