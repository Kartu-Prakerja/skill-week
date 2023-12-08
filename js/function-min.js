const e="https://public-prakerja.oss-ap-southeast-5.aliyuncs.com/skill_week/list_pelatihan_skillweek_4.json",a=new URLSearchParams(window.location.search);var t=_.isNull(localStorage.getItem("course_list"))?$.getJSON(e).done((function(e){localStorage.setItem("course_list",JSON.stringify(e))})):JSON.parse(localStorage.getItem("course_list")),s=_.isNull(localStorage.getItem("users"))?null:JSON.parse(localStorage.getItem("users")),i=localStorage.getItem("login-popup-skip"),r=document.querySelectorAll(".needs-validation");Array.prototype.slice.call(r).forEach((function(e){e.addEventListener("submit",(function(a){e.checkValidity()||(a.preventDefault(),a.stopPropagation()),e.classList.add("was-validated")}),!1)}));var o="<div class='col-12 col-md-12'><div class='alert alert-info' role='alert'><div class='d-flex'><div class='pe-3'><i class='bi bi-info-circle-fill fs-4'></i></div><div><h6 class='alert-heading'>Pelatihan tidak ditemukan</h6><p>Mohon periksa kembali kata kunci Anda dan pastikan ejaan dan tata bahasa yang benar. Anda juga dapat mencoba menggunakan kata kunci yang berbeda atau mencari di topik pelatihan yang berbeda.</p></div></div></div></div>",c=function(e,a,t,s){var i=a.course_type.toLowerCase()=="Online Self-Paced Learning".toLowerCase()?"text-bg-warning":"text-bg-help",r=s?'<img src="'+a.course_image+'" class="card-img-top" alt="'+a.course_title+'">':'<img class="owl-lazy" data-src="https://raw.githubusercontent.com/Kartu-Prakerja/skill-week/main/img/img-placeholder.webp" data-src-retina="'+a.course_image+'" class="card-img-top" alt="'+a.course_title+'">',o=s?"<img class='me-1 card-logo' src='"+a.logo_lp+"' alt='"+a.lp_name+"'>":"<img class='me-1 card-logo owl-lazy' data-src='https://raw.githubusercontent.com/Kartu-Prakerja/skill-week/main/img/img-placeholder-logo.webp' data-src-retina='"+a.logo_lp+"' alt='"+a.lp_name+"'>",c="/pelatihan/detail.html?title="+a.course_title.replace(/[^a-zA-Z0-9 ]/g,"").replace(/\s+/gi,"-").toLowerCase()+"&id="+a.course_id,l="100%"==a.course_discount||""==a.course_discount?"Gratis":"Rp "+Number(a.course_after_discount).toLocaleString("id"),n="0"==a.course_price?"-":"Rp "+Number(a.course_price).toLocaleString("id"),u="100%"==a.course_discount||""==a.course_discount?"":"color-secondary",d=null==t?"col-12 col-md-6 col-xl-4 col-xxl-3 mb-4 mb-lg-5":"wl-carousel-card pb-3",p=Number(a.total)>=5?"<span class='mb-2 ml-2 badge text-bg-light trending text-capitalize'>&#128293; Trending</span>":"",m="<div id='"+a.course_id+"' class='"+d+"'><div class='card pds-card'><div class='card-cover'>"+r+"<div class='card-cover-overlay'><div class='d-flex justify-content-between align-middle'><div class='align-self-center'><div class='card-company'>"+o+"<span class='course-lp-name'>"+a.lp_name+"</span></div></div><div class='align-self-center'><span class='badge rounded-pill text-capitalize "+i+"'>"+a.course_type.replace(/Online/g,"")+"</span></div></div></div></div><div class='card-body'><h6 class='mb-1 course-title text-capitalize' title='"+a.course_title+"'>"+a.course_title+"</h6><span class='mb-2 badge text-bg-light text-capitalize'>"+a.course_category+"</span>"+p+"<div><div class='course-real-price mb-1'><span>"+n+"</span> <span class='badge text-bg-ghost-success'>"+a.course_discount+"</span></div><div class='course-price card-price mb-1 "+u+"'>"+l+"</div></div><div class='mt-3 text-center'><a href='"+c+"' class='apply-course "+a.course_id+" btn btn-primary w-100 mb-2 text-truncate' rel='nofollow' data-event='skill_week_apply_course'>Selengkapnya</a></div>";$(e).append(m).ready((function(){$(".apply-course").unbind("click"),$(".apply-course").click((function(e){e.preventDefault(),mixpanel.track("See Detail Course",{course_id:a.course_id,course_title:a.course_title,course_category:a.course_category,course_price:a.course_price,course_discount:a.course_discount,course_price_after_discount:a.course_after_discount,course_lp:a.lp_name,source:t}),window.location.href=$(this).attr("href")}))}))},l=function(e,a,t,s){a.course_type.toLowerCase(),"Online Self-Paced Learning".toLowerCase();var i=$("html").attr("page-class"),r='<img src="'+a.course_image+'" class="card-img-top" alt="'+a.course_title+'">',o=(s?(a.logo_lp,a.lp_name):(a.logo_lp,a.lp_name),"/pelatihan/detail.html?title="+a.course_title.replace(/[^a-zA-Z0-9 ]/g,"").replace(/\s+/gi,"-").toLowerCase()+"&id="+a.course_id),c="100%"==a.course_discount||""==a.course_discount?"Gratis":"Rp "+Number(a.course_after_discount).toLocaleString("id"),l=("0"==a.course_price||Number(a.course_price).toLocaleString("id"),"100%"==a.course_discount||a.course_discount,'<a class="course-list-card d-flex align-items-center course-recommend-searc" href="'+o+'">'+r+'<span class="d-block w-100"><span class="course-title">'+a.course_title+'</span><span class="d-flex justify-content-between"><span class="course-price">'+c+'</span><span class="course-institution">'+a.lp_name+"</span></span></span></a>");$(e).append(l).ready((function(){$(".course-recommend-search").unbind("click"),$(".course-recommend-search").click((function(e){e.preventDefault(),mixpanel.track("See Detail Course",{course_id:a.course_id,course_title:a.course_title,course_category:a.course_category,course_price:a.course_price,course_discount:a.course_discount,course_price_after_discount:a.course_after_discount,course_lp:a.lp_name,source:i}),window.location.href=$(this).attr("href")}))}))},n=function(e,a){var t='<div class="col-12.col-sm-6 col-md-4 col-xl-3"><a class="text-capitalize card-company-list" href="pelatihan/index.html?topic=&keyword=&price=&lp='+a.lp_name.replace(/\s+/gi,"-").toLowerCase()+'" title="'+a.course_title+'"><img class="me-1 card-logo" height="40" src="'+a.lp_logo+'" alt="'+a.lp_name+'" loading="lazy"/><span class="lp-name">'+a.lp_name+"</span></a></div>";$(e).append(t)},u=function(e,a,t,s,i,r,o,l,u){$(e).unbind("click"),$(e).on("click",(function(){var d=$(e);t=s,s+=a,o+=1,$.each(i.slice(t,s),(function(e,a){u?n(r,a):c(r,a,null,!0)})),m(d,l,o)}))},d=function(e,a,t,s){$(e).click((function(e){var i=$("#course-lists"),r=$("#load-more"),l=(i=$("#course-lists"),[]),n=[],d=[],p=a,h=$("#filter-keyword").val();$.each($(".filter-category:checked"),(function(e,a){l[e]=$(a).val()})),$.each($(".filter-price:checked"),(function(e,a){n[e]=$(a).val()})),$.each($(".filter-lp:checked"),(function(e,a){d[e]=$(a).val()})),_.isEmpty(n)||3==n.length||(_.contains(n,"diskon besar")&&_.contains(n,"20000")?p=_.filter(a,(function(e){return"0"!==e.course_after_discount})):_.contains(n,"diskon besar")&&_.contains(n,"0")?(n=_.contains(n,"0")?n.concat(""):n,p=_.filter(a,(function(e){return"20000"!==e.course_after_discount}))):p=_.contains(n,"diskon besar")?_.filter(a,(function(e){return"20000"!==e.course_after_discount&&"0"!==e.course_after_discount})):_.filter(p,(function(e){return this.keys.indexOf(e.course_after_discount)>-1}),{keys:n})),_.isEmpty(l)||(p=_.filter(p,(function(e){return this.keys.indexOf(e.course_category.toLowerCase())>-1}),{keys:l})),_.isEmpty(d)||(p=_.filter(p,(function(e){return this.keys.indexOf(e.lp_name.toLowerCase())>-1}),{keys:d}));var f=_.filter(p,(function(e){return-1!==e.course_title.toLowerCase().indexOf(h.toLowerCase())}));mixpanel.track("Filter Course Option",{filter_price:n,filter_category:l,filter_lp:d,filter_keyword:h});var g=f.length,v=Math.ceil(g/12);i.html(""),$("#course-counter div").html("Ditemukan <b>"+g+"</b> pelatihan"),0!==f.length?$.each(f.slice(t,s),(function(e,a){c(i,a,null,!0)})):i.html(o),u(r,12,t,s,f,i,1,v),m(r,v,1),$("#modalFilter").modal("hide");var b=l.join(","),k=n.join(","),y=d.join(",");window.history.replaceState(null,null,"?topic="+b.replace(/\s+/gi,"-").toLowerCase()+"&keyword="+h.replace(/\s+/gi,"-").toLowerCase()+"&price="+k.replace(/\s+/gi,"-").toLowerCase()+"&lp="+y.replace(/\s+/gi,"-").toLowerCase())}))},p=function(e,a,t,s,i){$(e).on("submit",(function(e){e.preventDefault();var a=$("#course-lists"),r=$("#load-more"),l=[],n=[],d=[],p=t,h=$(this).find("input").val();$.each($(".filter-category:checked"),(function(e,a){l[e]=$(a).val()})),$.each($(".filter-price:checked"),(function(e,a){n[e]=$(a).val()})),$.each($(".filter-lp:checked"),(function(e,a){d[e]=$(a).val()})),$.each($(".filter-category:checked"),(function(e,a){l[e]=$(a).val()})),$.each($(".filter-price:checked"),(function(e,a){n[e]=$(a).val()})),$.each($(".filter-lp:checked"),(function(e,a){d[e]=$(a).val()})),_.isEmpty(n)||3==n.length||(_.contains(n,"diskon besar")&&_.contains(n,"20000")?p=_.filter(t,(function(e){return"0"!==e.course_after_discount})):_.contains(n,"diskon besar")&&_.contains(n,"0")?(n=_.contains(n,"0")?n.concat(""):n,p=_.filter(t,(function(e){return"20000"!==e.course_after_discount}))):p=_.contains(n,"diskon besar")?_.filter(t,(function(e){return"20000"!==e.course_after_discount&&"0"!==e.course_after_discount})):_.filter(p,(function(e){return this.keys.indexOf(e.course_after_discount)>-1}),{keys:n})),_.isEmpty(l)||(p=_.filter(p,(function(e){return this.keys.indexOf(e.course_category.toLowerCase())>-1}),{keys:l})),_.isEmpty(d)||(p=_.filter(p,(function(e){return this.keys.indexOf(e.lp_name.toLowerCase())>-1}),{keys:d}));var f=_.filter(p,(function(e){return-1!==e.course_title.toLowerCase().indexOf(h.toLowerCase())}));mixpanel.track("Filter Course Keyword",{fiter_keyword:h,filter_price:n,filter_category:l,filter_lp:d});var g=f.length,v=Math.ceil(g/12);a.html(""),$("#course-counter div").html("Ditemukan <b>"+g+"</b> pelatihan"),0!==f.length?$.each(f.slice(s,i),(function(e,t){c(a,t,null,!0)})):a.html(o),u(r,12,s,i,f,a,1,v),m(r,v,1);var b=l.join(","),k=n.join(","),y=d.join(",");window.history.replaceState(null,null,"?topic="+b.replace(/\s+/gi,"-").toLowerCase()+"&keyword="+h.replace(/\s+/gi,"-").toLowerCase()+"&price="+k.replace(/\s+/gi,"-").toLowerCase()+"&lp="+y.replace(/\s+/gi,"-").toLowerCase())})),$(a).on("click",(function(a){$(e).trigger("submit")}))};var m=function(e,a,t){a>0&&t<a?e.removeClass("visually-hidden"):e.addClass("visually-hidden")};function h(){$(document).ready((function(){var t=$("#course-lists"),s=$("#load-more"),i=$("#btn-apply-filter"),r=$("#form-search"),l=$("#button-search"),n=_.isEmpty(a.get("topic"))?"":a.get("topic").toLowerCase().replace(/-|%20/gi," ").split(","),h=_.isEmpty(a.get("price"))?"":a.get("price").toLowerCase().replace(/-|%20/gi," ").split(","),f=_.isEmpty(a.get("lp"))?"":a.get("lp").toLowerCase().replace(/-|%20/gi," ").split(","),g=_.isEmpty(a.get("keyword"))?"":a.get("keyword").replace(/-|%20/gi," ");_.isEmpty(h)&&_.isEmpty(h)&&_.isEmpty(f)||$("#button-addon1").attr("class","btn btn-primary"),t.length&&$.getJSON(e,(function(e){var a=_.shuffle(e);_.isEmpty(h)||3==h.length||(_.contains(h,"diskon besar")&&_.contains(h,"20000")?a=_.filter(a,(function(e){return"0"!==e.course_after_discount})):_.contains(h,"diskon besar")&&_.contains(h,"0")?(h=_.contains(h,"0")?h.concat(""):h,a=_.filter(a,(function(e){return"20000"!==e.course_after_discount}))):a=_.contains(h,"diskon besar")?_.filter(a,(function(e){return"20000"!==e.course_after_discount&&"0"!==e.course_after_discount})):_.filter(a,(function(e){return this.keys.indexOf(e.course_after_discount)>-1}),{keys:h})),_.isEmpty(n)||(a=_.filter(a,(function(e){return this.keys.indexOf(e.course_category.toLowerCase())>-1}),{keys:n})),_.isEmpty(f)||(a=_.filter(a,(function(e){return this.keys.indexOf(e.lp_name.toLowerCase())>-1}),{keys:f}));var v=null!==g?_.filter(a,(function(e){return-1!==e.course_title.toLowerCase().indexOf(g.toLowerCase())})):a;null!==g&&$("#filter-keyword").val(g);var b=v.length,k=Math.ceil(b/12);setTimeout((function(){var a;t.html(""),$("#course-counter div").html("Ditemukan <b>"+b+"</b> pelatihan"),_.isEmpty(v)?t.html(o):$.each(v.slice(0,12),(function(e,a){c(t,a,null,!0)})),m(s,k,1),u(s,12,0,12,v,t,1,k),function(e,a,t,s){for(var i,r={},o={},c=[],l=[],n=0;i=e[n++];){var u=i.course_category.toLowerCase(),d=i.lp_name.toLowerCase();u in r||(r[u]=1,c.push(u)),d in o||(o[d]=1,l.push(d))}c=c.sort(),l=l.sort(),$("#course-LP, #course-category").html(""),_.each(c,(function(e,a){var t=-1!==_.indexOf(s,e)?"checked":"";$("#course-category").append('<div class="form-check"><input class="form-check-input filter-category" id="filter-category-'+a+'" type="checkbox" value="'+e+'" '+t+'><label class="form-check-label text-capitalize" for="filter-category-'+a+'">'+e+"</label></div>")})),_.each(l,(function(e,t){var s=-1!==_.indexOf(a,e)?"checked":"";$("#course-LP").append('<div class="form-check"><input class="form-check-input filter-lp" id="filter-lp-'+t+'" type="checkbox" value="'+e+'" '+s+'><label class="form-check-label text-capitalize" for="filter-lp-'+t+'">'+e+"</label></div>")})),_.each(t,(function(e){$('.filter-price[value="'+e+'"]').attr("checked",!0)})),_.isEmpty(a)&&_.isEmpty(t)&&_.isEmpty(s)||$("#btn-reset-filter").removeClass("disabled")}(e,f,h,n),a="input.form-check-input",$("#btn-reset-filter").click((function(e){$(this).addClass("disabled"),$("#button-addon1").attr("class","btn btn-outline-light"),$(a).prop("checked",!1)})),function(e,a){$(e).click((function(t){$(e).is(":checked")?($(a).removeClass("disabled"),$("#button-addon1").attr("class","btn btn-primary")):($(a).addClass("disabled"),$("#button-addon1").attr("class","btn btn-outline-light"))}))}(".form-check-input","#btn-reset-filter"),d(i,e,0,12),p(r,l,e,0,12)}),1500)})).fail((function(){}))}))}function f(){var a=$("#courseCarouselDiscount"),t=$("#courseCarouselTwenty"),s=$("#courseCarouselFree"),i=$("#course-provider-list"),r=$("#load-more-lp");(a.length||t.length||s.length)&&$.getJSON(e,(function(e){dataLimited=_.sample(_.filter(e,(function(e){return"0"!==e.course_after_discount&&"20000"!==e.course_after_discount})),10),dataTwenty=_.sample(_.filter(e,(function(e){return"20000"==e.course_after_discount})),10),dataFree=_.sample(_.filter(e,(function(e){return"0"==e.course_after_discount})),10),a.addClass("owl-carousel").html(""),t.addClass("owl-carousel").html(""),s.addClass("owl-carousel").html("");for(var o,l={},d=[],p=0;o=e[p++];){var m=o.lp_name.toLowerCase();m in l||(l[m]=1,d.push({lp_name:o.lp_name,lp_logo:o.logo_lp}))}d=_.sortBy(d,"lp_name"),i.html("");var h=d.length,f=Math.ceil(h/12);$.each(d.slice(0,12),(function(e,a){n(i,a)})),u(r,12,0,12,d,i,1,f,!0),$.each(dataLimited,(function(e,t){c(a,t,"home")})),$.each(dataTwenty,(function(e,a){c(t,a,"home")})),$.each(dataFree,(function(e,a){c(s,a,"home")}))})).done((function(){$(".owl-carousel").owlCarousel({loop:!0,margin:24,nav:!0,dots:!1,lazyLoad:!0,responsive:{0:{items:1.2,margin:16,nav:!1},600:{items:3,margin:16,nav:!1},1e3:{items:3.75,nav:!1},1200:{items:4.2,nav:!0}}})}))}function g(){var t=_.isEmpty(a.get("id"))?"ISW-P0005":a.get("id"),i=$("#detail-course"),r=$("#courseCarousel"),o=$("#breadcrumb-detail ol");i.length&&$.getJSON(e,(function(e){var a=_.findWhere(e,{course_id:t}),l=_.sample(_.reject(_.filter(e,(function(e){return-1!==e.course_category.toLowerCase().indexOf(a.course_category.toLowerCase())})),(function(e){return e.course_id==t})),10),n="/pelatihan/index.html?topic="+a.course_category.toLowerCase()+"&keyword=&price=&lp=",u=$(".similar-course");$("#get-voucher"),$("#getCourseLoginModal"),$("#getCourseNotLoginModal");o.html('<ol class="breadcrumb overflow-hidden fs-7 mb-0"><li class="breadcrumb-item"> <a href="/"><i class="bi bi-house-door"></i></a></li><li class="breadcrumb-item"> <a href="/pelatihan">Pelatihan </a></li><li class="breadcrumb-item active text-truncate">'+a.course_title+"</li></ol>");var d=_.isNull(localStorage.getItem("course_takens"))?[]:JSON.parse(localStorage.getItem("course_takens"));$.when(i.html("").append(function(e){var a,t="100%"==e.course_discount||""==e.course_discount?"Gratis":"Rp "+Number(e.course_after_discount).toLocaleString("id"),s="100%"==e.course_discount||""==e.course_discount?"":"color-secondary",i="0"==e.course_price?"":"Rp "+Number(e.course_price).toLocaleString("id"),r=JSON.parse(localStorage.getItem("course_takens")),o=""!==e.quota?e.quota+"<i>&nbsp;(Selama masih tersedia)</i>":"<span>Tidak terbatas<span>",c=Number(e.total)>=5?'<p class="text-secondary"><b class="fs-7">&#128293; '+e.total+"</b>&nbsp;peserta mengambil pelatihan ini</p>":"";a=_.contains(r,e.course_id)?'<button class="my-3 btn btn-secondary btn-lg w-100 disabled" data-bs-toggle="modal" data-bs-target="#">Voucher berhasil diambil</button>':""!==e.quota&&Number(e.quota)==e.total?'<button class="my-3 btn btn-secondary btn-lg w-100 disabled" data-bs-toggle="modal" data-bs-target="#">Voucher Habis</button>':'<button id="get-voucher" class="my-3 btn btn-primary btn-lg w-100" data-bs-toggle="modal" data-bs-target="#">Dapatkan Voucher Pelatihan </button>';var l="";if(!_.isEmpty(e.cs_call_center)||!_.isEmpty(e.cs_email)||!_.isEmpty(e.cs_wa)){var n="",u="",d="";_.each(e.cs_call_center.trim().split(","),(function(e){if(!_.isEmpty(e))return n+='<a class="btn btn-ghost-primary btn-contact-center" data-service="call center" target="_blank" href="tel:'+e+'"> <i class="bi bi-telephone-fill me-2"></i>'+e+"</a>"})),_.each(e.cs_wa.trim().split(","),(function(e){if(!_.isEmpty(e))return u+='<a class="btn btn-ghost-success btn-contact-center" data-service="whatsapp" target="_blank" href="https://wa.me/'+e+'"> <i class="bi bi-whatsapp me-2"></i>'+e+"</a>"})),_.each(e.cs_email.trim().split(","),(function(e){if(!_.isEmpty(e))return d+='<a class="btn btn-ghost-light btn-contact-center" data-service="email" target="_blank" href="mailto:'+e+'"> <i class="bi bi-envelope-at me-2"></i>'+e+"</a>"}));var p=_.isEmpty(e.cs_call_center)?"":'<div class="pt-2 pb-2"><h6>Telepon </h6>'+n+"</div>";l='<section class="py-3"><h4>Contact Center</h4>'+(_.isEmpty(e.cs_wa)?"":'<div class="pt-2 pb-2"><h6>Whatsapp </h6>'+u+"</div>")+p+(_.isEmpty(e.cs_email)?"":'<div class="pt-2 pb-2"><h6>Email </h6>'+d+"</div>")+"</section>"}return'<section class="section-detail-course"><div class="container pt-3 pb-5 px-4 px-md-0"><div class="row flex-row-reverse"><div class="col-12 col-md-4 col-lg-4"><div class="course-cover-sticky"><div class="course-cover"><img loading="lazy" class="w-100 rounded" src="'+e.course_detail_image+'" alt=""/></div><div class="mt-3 d-flex justify-content-between"><div><div class="course-real-price mb-1"><span class="me-1">'+i+'</span><span class="badge text-bg-ghost-success">'+e.course_discount+'</span></div><div class="course-price card-price mb-1 fs-4 '+s+'">'+t+'</div></div><div><button class="btn btn-light share-button" type="button" title="Bagikan halaman ini"><i class="bi bi-share-fill">&nbsp;&nbsp;</i>Bagikan</button></div></div><div class="course-cta px-3 px-lg-0">'+a+"</div>"+c+'</div></div><div class="col-12 col-md-8 col-lg-8 pe-xl-4"><h1 class="mb-3">'+e.course_title+'</h1><a class="card-company-link d-inline-flex p-2 text-decoration-none border px-3" href="/pelatihan?topic=&keyword=&price=&lp='+e.lp_name+'"><img loading="lazy" class="me-1 card-logo" src="'+e.logo_lp+'" alt="'+e.lp_name+'"/><span class="lp-name fs-7 text-secondary">'+e.lp_name+'</span></a><div class="row mt-5 mb-4"> <div class="col-12 col-md-6 col-lg-4 mb-4 d-flex"> <i class="bi bi-person-badge"></i><div class="ps-2"> <h6 class="fs-7 mb-2">Instruktur</h6><p class="fs-7">'+e.instructure_name+'</p></div></div><div class="col-12 col-md-6 col-lg-4 mb-4 d-flex"> <i class="bi bi-clock"> </i><div class="ps-2"> <h6 class="fs-7 mb-2">Durasi Pelatihan</h6><p class="fs-7">'+e.duration+' (Menit)</p></div></div><div class="col-12 col-md-6 col-lg-4 mb-4 d-flex"> <i class="bi bi-person-video"> </i><div class="ps-2"> <h6 class="fs-7 mb-2">Metode Ajar</h6><span class="badge rounded-pill text-bg-warning">'+e.course_type+'</span></div></div><div class="col-12 col-md-6 col-lg-4 mb-4 d-flex"> <i class="bi bi-tag"> </i><div class="ps-2"> <h6 class="fs-7 mb-2">Kategori</h6><p class="fs-7">'+e.course_category+'</p></div></div><div class="col-12 col-md-6 col-lg-4 mb-4 d-flex"> <i class="bi bi-ticket-detailed"> </i><div class="ps-2"> <h6 class="fs-7 mb-2">Kuota Pelatihan</h6><p class="fs-7">'+o+'</p></div></div><div class="col-12 col-md-6 col-lg-4 mb-4 d-flex"> <i class="bi bi-link-45deg"></i><div class="ps-2 overflow-hidden"><h6 class="fs-7 mb-2">Link Pelatihan</h6><a class="fs-7 d-flex align-items-center" href="'+e.course_url+'" target="_blank" title="'+e.course_title+'"> <span class="pds-truncate">'+e.course_url+'</span><i class="bi bi-arrow-up-right-square-fill"></i></a></div></div></div><hr/><article><section class="py-3"><h4 class="mb-4">Deskripsi Pelatihan </h4><article id="description">'+e.description.replace(/\n/g,"</br>")+'</article></section><section class="py-3" id="CaraRedeemVoucher"><h4 class="mb-4">Cara Redeem Voucher</h4><article id="how-to-redeem">'+e.how_to_redeem.replace(/\n/g,"</br>")+"</article></section>"+l+"<hr/></article></div></div></div></section>"}(a))).then((function(){var e=$("#get-voucher"),i=$("#getCourseLoginModal"),r=$("#getCourseNotLoginModal"),o=$("#get-voucher-botton"),c=$(".share-button"),l=$(".share-dialog"),n=$(".close-button");$(".btn-contact-center").click((function(e){var s=$(this),i=s.attr("data-service"),r=s.text();mixpanel.track("Contact Center",{course_id:t,course_title:a.course_title,course_category:a.course_category,course_price:a.course_price,course_discount:a.course_discount,course_price_after_discount:a.course_after_discount,course_lp:a.lp_name,channel:i,data_contact_center:r})})),c.click((function(){var e=$("#share-facebook"),s=$("#share-twitter"),i=$("#share-linkedin"),r=$("#share-email"),o=$("#copy-link"),c=$(".pen-url");mixpanel.track("Click Share Button",{course_id:t,course_title:a.course_title,course_category:a.course_category,course_price:a.course_price,course_discount:a.course_discount,course_price_after_discount:a.course_after_discount,course_lp:a.lp_name}),e.attr("href","https://www.facebook.com/sharer/sharer.php?u="+window.location.href),s.attr("href","https://twitter.com/intent/tweet?text=Dapatkan voucher pelatihan "+a.course_title+" hanya di Indonesia Skills Week, dan jutaan voucher lainnya&url="+window.location.href+"&hashtags=IndonesiSKillsWeek"),i.attr("href","https://www.linkedin.com/shareArticle?mini=true&url="+window.location.href+"&title=Voucher pelatihan "+a.course_title+"&source=skillsweek.prakerja.go.id&summary=Dapatkan voucher pelatihan "+a.course_title+" melalui Indonesia Skills Week, dan kesempatan untuk mendapatkan jutaan voucher lainnya"),r.attr("href","mailto:contact@email.com?subject=Pelatihan"+a.course_title+" &body=Dapatkan voucher pelatihan "+a.course_title+" melalui Indonesia Skills Week, dan kesempatan untuk mendapatkan jutaan voucher lainnya!"),c.html(window.location.href),navigator.share?navigator.share({title:"Indonesia Skill Week - "+a.course_title,url:window.location.href}).then((()=>{})).catch(console.error):(l.addClass("is-open"),$("#target-share a").click((function(){social=$(this).attr("data-share"),mixpanel.track("Share To Social",{course_id:t,course_title:a.course_title,course_category:a.course_category,course_price:a.course_price,course_discount:a.course_discount,course_price_after_discount:a.course_after_discount,course_lp:a.lp_name,url:window.location.href,social_media:social})})),o.click((function(){navigator.clipboard.writeText(c.text()),$("#toast-sucess-copy").toast("show"),$(".close-toast-copy").click((function(){$("#toast-sucess-copy").toast("hide")})),mixpanel.track("Copy URL",{course_id:t,course_title:a.course_title,course_category:a.course_category,course_price:a.course_price,course_discount:a.course_discount,course_price_after_discount:a.course_after_discount,course_lp:a.lp_name,url:window.location.href})})))})),n.click((function(){l.removeClass("is-open")})),e.click((function(){_.isNull(localStorage.getItem("users"))?(r.modal("show"),r.find("img").attr("src",a.course_image),r.find("h6").html(a.course_title)):(i.modal("show"),i.find("#emailUserVoucher").val(s.email),i.find(".detail-course img").attr("src",a.course_image),i.find(".detail-course h6").html(a.course_title),i.find(".alert").addClass("alert-info").removeClass("alert-danger").html('<i class="fs-5 bi bi-info-circle-fill me-3"></i><div><div class="fs-7">Kode Voucher akan dikirim ke email kamu selama <b>kuota </b>pelatihan masih tersedia, silakan cek email secara berkala.</div></div>'),o.click((function(r){r.preventDefault(),_this=$(this),_this.addClass("disabled").html('<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"> </span><span class="sr-only"> Loading...</span>');var o={course_id:t};mixpanel.track("Get Voucher Request",{course_id:t,course_title:a.course_title,course_category:a.course_category,course_price:a.course_price,course_discount:a.course_discount,course_price_after_discount:a.course_after_discount,course_lp:a.lp_name}),$.ajax({dataType:"json",contentType:"application/json",type:"POST",url:"https://api-proxy.prakerja.go.id/api/v1/general/voucher/ack",headers:{Authorization:s.token},data:JSON.stringify(o)}).done((function(s){_this.removeClass("disabled").html("Ambil Voucher"),i.modal("hide"),$("#success-toast").toast("show"),e.addClass("disabled btn-secondary").html("Voucher sudah diambil").removeClass("btn-primary"),d.push(t),localStorage.setItem("course_takens",JSON.stringify(d)),mixpanel.track("Get Voucher Success",{course_id:t,course_title:a.course_title,course_category:a.course_category,course_price:a.course_price,course_discount:a.course_discount,course_price_after_discount:a.course_after_discount,course_lp:a.lp_name})})).fail((function(e){var s=e.responseJSON;_this.removeClass("disabled").html("Ambil Voucher"),(s.code="ERR40004")&&("[ERR40005] sign expired"==s.message?(i.find(".alert").addClass("alert-danger").removeClass("alert-info").html('<i class="fs-5 bi bi-exclamation-triangle-fill me-3"></i><div><h6 class="text-danger">Ambil Voucher Pelatihan Gagal</h6><div class="fs-7">Sesi Login sudah berakhir, silahkan login kembali untuk mengambil voucher pelatihan</div></div> '),$("#get-voucher-botton").click((function(){localStorage.removeItem("users"),mixpanel.reset(),window.location.reload()}))):i.find(".alert").addClass("alert-danger").removeClass("alert-info").html('<i class="fs-5 bi bi-exclamation-triangle-fill me-3"></i><div><h6 class="text-danger">Ambil Voucher Pelatihan Gagal</h6><div class="fs-7">'+s.message+".</div></div> ")),mixpanel.track("Get Voucher Failed",{course_id:t,course_title:a.course_title,course_category:a.course_category,course_price:a.course_price,course_discount:a.course_discount,course_price_after_discount:a.course_after_discount,course_lp:a.lp_name,error_message:s.message})}))})))}))})),r.html(""),u.attr("href",n),_.isEmpty(l)?r.html('<section class="section-course mb-4"><div class="container py-0 px-4 px-md-0"><div class="d-flex align-items-center justify-content-between mb-3"><h4>Pelatihan Serupa</h4></div><div class="d-flex similar-course-empty rounded justify-content-center"><div class="col-lg-8 d-lg-flex p-4 justify-content-center"><div class="p-md-3 mb-3 mb-lg-0"><img loading="lazy" src="img/img-ornament-1.svg" height="116" /></div><div class="p-md-3"><h5>Sepertinya tidak ditemukan pelatihan serupa</h5><p>Yuk cari pelatihan lainnya yang mungkin kamu tertarik untuk ikuti</p><a class="btn btn-primary" href="/pelatihan">Cari Pelatihan Lainnya</a></div></div></div></div></section>').css({display:"block"}):$.when($.each(l,(function(e,a){c(r,a,"detail")}))).then((function(){$(".owl-carousel").owlCarousel({loop:!0,margin:24,nav:!0,dots:!1,lazyLoad:!0,responsive:{0:{items:1.2,margin:16,nav:!1},600:{items:3,margin:16,nav:!1},1e3:{items:4,nav:!1},1200:{items:4,nav:!0}}})}))}))}function v(){var e=_.isNull(s)?"Masuk":s.email,a=$("#btn-login"),t=$("#login"),r=$("#profile"),o=$("#btn-logout"),c=$("#loginModal"),l=$("#loginSuccessModal"),n=$("#loginAlreadyModal"),u=$(".login-dismiss"),d=$("#login-form"),p=$("#submit-login");$(".register-account").click((function(e){var a=$(this).attr("data-source");mixpanel.track("Create Account",{source:a})})),_.isNull(s)?(a.find("span").removeClass("skeleton-box rounded-pill").html(e),t.removeClass("hidden"),a.click((function(){c.modal("show")})),_.isNull(i)&&(c.modal("show"),u.click((function(){localStorage.setItem("login-popup-skip",!0),d.find(".alert.alert-danger").addClass("visually-hidden"),p.removeClass("disabled").html("Masuk")}))),d.submit((function(e){e.preventDefault();var t={email:d.find("input#userEmail").val(),password:d.find("input#userPassword").val()};_.isEmpty(t.email)||_.isEmpty(t.password)||(p.addClass("disabled").html('<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"> </span><span class="sr-only"> Loading...</span>'),$.ajax({dataType:"json",contentType:"application/json",type:"POST",url:"https://api-ext.prakerja.go.id/api/v1/user/login-a17ab03c3d1d",data:JSON.stringify(t)}).done((function(e){var i=e.data;7!==i.stat.step?(p.removeClass("disabled").html("Masuk"),d.find(".alert.alert-danger").removeClass("visually-hidden").find(".alert.alert-danger .text-error").html("Lengkapi dan selesaikan proses daftar di Prakerja untuk bisa login pada Skillsweek")):(localStorage.setItem("users",JSON.stringify(_.extend(i,{email:t.email}))),mixpanel.track("Login Success",{email:t.email}),d.find(".alert.alert-danger").addClass("visually-hidden"),p.removeClass("disabled").html("Masuk"),c.modal("hide"),l.find("#emailUserVoucher").text(t.email),l.find(".email-account").text(t.email),l.modal("show"),$("#success-login").click((function(){window.location.reload()})),a.click((function(){n.find("#validEmailUser").val(s.email),n.find(".text-email").text("("+s.email+")"),n.modal("show"),o.click((function(){mixpanel.track("Logout Success",{email:t.email}),localStorage.removeItem("users"),mixpanel.reset(),localStorage.removeItem("course_takens"),window.location.reload()}))})))})).fail((function(e){d.find(".alert.alert-danger").removeClass("visually-hidden").find(".alert.alert-danger .text-error").html("Alamat email atau password salah. Mohon periksa kembali."),p.removeClass("disabled").html("Masuk")})))}))):(r.removeClass("hidden"),a.click((function(){n.find("#validEmailUser").val(s.email),n.find(".text-email").text("("+s.email+")"),n.modal("show"),o.click((function(){localStorage.removeItem("users"),mixpanel.reset(),localStorage.removeItem("course_takens"),window.location.reload()}))})),o.click((function(){localStorage.removeItem("users"),mixpanel.reset(),localStorage.removeItem("course_takens"),window.location.reload()})))}function b(e){var a=$("#user-profile"),t=$("#course-list"),i=$("#active-course-container"),r=$("#empty-list"),o=$("#loginModal"),c=$(".section-profile");a.length&&(_.isNull(s)?(o.modal("show"),c.find("p").html("Untuk mendapatkan Voucher Pelatihan, masuk ke Indonesia Skill Weeks dengan menggunakan email yang sudah terdaftar sebagai peserta di Prakerja."),c.find("button").attr("class","btn btn-primary").html("Masuk"),i.addClass("hidden")):($(".text-email").html("("+s.email+")"),$.ajax({dataType:"json",contentType:"application/json",type:"GET",url:"https://api-proxy.prakerja.go.id/api/v1/general/voucher/list",headers:{Authorization:s.token}}).done((function(a){_.isNull(a.voucher)?(r.removeClass("hidden"),i.addClass("hidden")):(t.html(""),_.each(a.voucher,(function(a,s){var i,r,o,c,l,n,u,d,p,m,h,f=_.findWhere(e,{course_id:a.CourseID});_.isUndefined(f)||(i=t,o="profile",c=!0,l=(r=f).course_type.toLowerCase()=="Online Self-Paced Learning".toLowerCase()?"text-bg-warning":"text-bg-help",n=c?'<img src="'+r.course_image+'" class="card-img-top" alt="'+r.course_title+'">':'<img class="owl-lazy" data-src="https://raw.githubusercontent.com/Kartu-Prakerja/skill-week/main/img/img-placeholder.webp" data-src-retina="'+r.thumbnail_pelatihan_detail_oss+'" class="card-img-top" alt="'+r.course_title+'">',u=c?"<img class='me-1 card-logo' src='"+r.logo_lp+"' alt='"+r.lp_name+"'>":"<img class='me-1 card-logo owl-lazy' data-src='https://raw.githubusercontent.com/Kartu-Prakerja/skill-week/main/img/img-placeholder-logo.webp' data-src-retina='"+r.logo_lp+"' alt='"+r.lp_name+"'>",d="/pelatihan/detail.html?title="+r.course_title.replace(/[^a-zA-Z0-9 ]/g,"").replace(/\s+/gi,"-").toLowerCase()+"&id="+r.course_id,p="100%"==r.course_discount||""==r.course_discount?"Gratis":"Rp "+Number(r.course_after_discount).toLocaleString("id"),m="0"==r.course_price?"-":"Rp "+Number(r.course_price).toLocaleString("id"),"100%"==r.course_discount||r.course_discount,h='<div class="card pds-card pds-card-list mb-3"><div class="card-cover">'+n+'<div class="card-cover-overlay"><div class="d-flex justify-content-between align-middle"><div class="align-self-center"><div class="card-company"> '+u+'<span class="course-lp-name">'+r.lp_name+'</span></div></div><div class="align-self-center"> <span class="badge rounded-pill text-capitalize '+l+'">'+r.course_type.replace(/Online/g,"")+'</span></div></div></div></div><div class="card-body"><h6 class="mb-1 course-title text-capitalize" title="'+r.course_title+'">'+r.course_title+'</h6><span class="mb-2 badge text-bg-light text-capitalize">'+r.course_category+'</span><div class="d-md-flex"><div class="course-real-price mb-1 me-md-3"><span>'+m+'</span><span class="badge text-bg-ghost-success">'+r.course_discount+'</span></div><div class="course-price card-price mb-1">'+p+'</div></div><div class="pds-card-list-footer mt-3 text-center"> <a class="btn btn-primary w-100 mb-2 text-truncate" href="'+d+'" title="">Selengkapnya</a></div></div></div>',$(i).append(h).ready((function(){$(".apply-course").unbind("click"),$(".apply-course").click((function(e){e.preventDefault(),mixpanel.track("See Detail Course",{course_id:r.course_id,course_title:r.course_title,course_category:r.course_category,course_price:r.course_price,course_discount:r.course_discount,course_price_after_discount:r.course_after_discount,course_lp:r.lp_name,source:o}),window.location.href=$(this).attr("href")}))})))})))})).fail((function(e){localStorage.removeItem("users"),mixpanel.reset(),o.modal("show"),c.find("p").html("Untuk mendapatkan Voucher Pelatihan, masuk ke Indonesia Skill Weeks dengan menggunakan email yang sudah terdaftar sebagai peserta di Prakerja."),c.find("button").attr("class","btn btn-primary").html("Masuk"),i.addClass("hidden")}))))}function k(e){var t=$("#form-search-global"),s=$("html").attr("page-class");if(t.length){var i=t.find("button"),r=_.isEmpty(a.get("keyword"))?"":a.get("keyword").replace(/-|%20/gi," "),o=$("#recomendSearchLimited article"),c=$("#recomendSearchTwenty article"),n=$("#recomendSearchFree article");t.find("input.modal-search-input").val(r),t.submit((function(e){e.preventDefault(),r=t.find("input.modal-search-input").val(),mixpanel.track("Search Course",{keyword:r,source:s}),window.location.replace("/pelatihan/index.html?&keyword="+r.replace(/\s+/gi,"-").toLowerCase()+"&price=&lp=&topic=")})),i.click((function(){t.trigger("submit")})),dataLimited=_.sample(_.filter(e,(function(e){return"0"!==e.course_after_discount&&"20000"!==e.course_after_discount})),5),dataTwenty=_.sample(_.filter(e,(function(e){return"20000"==e.course_after_discount})),5),dataFree=_.sample(_.filter(e,(function(e){return"0"==e.course_after_discount})),5),o.html(""),c.html(""),n.html(""),$.each(dataLimited,(function(e,a){l(o,a)})),$.each(dataTwenty,(function(e,a){l(c,a)})),$.each(dataFree,(function(e,a){l(n,a)}))}}!function(e){e(window).scroll((function(){var a=e(window).scrollTop();a>=60?e("header").addClass("header-fixed"):e("header").removeClass("header-fixed"),a>=400?e(".scroll-top").addClass("is-show"):e(".scroll-top").removeClass("is-show")})),e(".scroll-top").on("click",(function(){e(window).scrollTop(0)})),e(".menu").click((function(){e(this).toggleClass("open"),e(".navbar-custom").toggleClass("m-menu"),e("body").toggleClass("freeze")})),e(".navbar-custom").on("click",".nav-link",(function(a){e(".menu").removeClass("open"),e(".navbar-custom").removeClass("m-menu"),e("body").removeClass("freeze")})),e(".modal-search-trigger").click((function(){e(".modal-search").fadeIn().toggleClass("is-show"),e(".modal-search-input").focus(),e("body").toggleClass("freeze")})),e(".modal-search-close").click((function(){e(".modal-search").fadeOut().toggleClass("is-show"),e("body").toggleClass("freeze")})),e(".testimony-carousel").owlCarousel({loop:!0,autoplay:!0,center:!0,dots:!0,lazyLoad:!0,responsive:{1e3:{items:3,margin:0},0:{items:1,margin:0}}}),e(".howto-carousel").owlCarousel({dots:!1,autoplay:!1,responsive:{1200:{items:5,margin:0,loop:!1},1e3:{items:3.5,margin:0},800:{items:3.2,margin:0,loop:!0},600:{items:2.2,margin:0,loop:!0},0:{items:1.5,margin:0,loop:!0}}}),e(".show-password").click((function(a){var t=a.currentTarget;e(t).hasClass("show-password-target")?function(e){e.removeClass("show-password-target").addClass("hide"),e.prev("input").attr("type","password"),e.children().addClass("bi-eye").removeClass("bi-eye-slash")}(e(t)):function(e){e.removeClass("hide").addClass("show-password-target"),e.prev("input").attr("type","text"),e.children().removeClass("bi-eye").addClass("bi-eye-slash")}(e(t))}));var a=e("#liveToastBtn"),s=e("#liveToast");if(a.length){var i=bootstrap.Toast.getOrCreateInstance(s);a.click((function(){i.show()}))}e(document).ready((function(){h(),f(),g(),v(),b(t),k(t)}))}(jQuery);
//# sourceMappingURL=function-min.js.map