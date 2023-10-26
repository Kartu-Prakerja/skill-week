const e="https://public-prakerja.oss-ap-southeast-5.aliyuncs.com/skill_week/list_pelatihan_skillweek_3.json",a=new URLSearchParams(window.location.search);_.isNull(localStorage.getItem("course_list"))?$.getJSON(e).done((function(e){localStorage.setItem("course_list",JSON.stringify(e))})):localStorage.getItem("course_list");var t=_.isNull(localStorage.getItem("users"))?null:JSON.parse(localStorage.getItem("users")),s=localStorage.getItem("login-popup-skip"),i=document.querySelectorAll(".needs-validation");Array.prototype.slice.call(i).forEach((function(e){e.addEventListener("submit",(function(a){e.checkValidity()||(a.preventDefault(),a.stopPropagation()),e.classList.add("was-validated")}),!1)}));var l="<div class='col-12 col-md-12'><div class='alert alert-info' role='alert'><div class='d-flex'><div class='pe-3'><i class='bi bi-info-circle-fill fs-4'></i></div><div><h6 class='alert-heading'>Pelatihan tidak ditemukan</h6><p>Mohon periksa kembali kata kunci Anda dan pastikan ejaan dan tata bahasa yang benar. Anda juga dapat mencoba menggunakan kata kunci yang berbeda atau mencari di topik pelatihan yang berbeda.</p></div></div></div></div>",o=function(e,a,t){var s=a.course_type.toLowerCase()=="Online Self-Paced Learning".toLowerCase()?"text-bg-warning":"text-bg-help",i="/pelatihan/detail.html?title="+a.course_title.replace(/[^a-zA-Z0-9 ]/g,"").replace(/\s+/gi,"-").toLowerCase()+"&id="+a.course_id,l="100%"==a.course_discount||""==a.course_discount?"Gratis":"Rp "+Number(a.course_after_discount).toLocaleString("id"),o="0"==a.course_price?"-":"Rp "+Number(a.course_price).toLocaleString("id"),n="100%"==a.course_discount||""==a.course_discount?"":"color-secondary",r=null==t?"col-12 col-md-6 col-xl-4 col-xxl-3 mb-4 mb-lg-5":"wl-carousel-card pb-3",c="<div id='"+a.index+"' class='"+r+"'><div class='card pds-card'><div class='card-cover'><img loading='lazy' src='"+a.course_image+"' class='card-img-top' alt='"+a.course_title+"'><div class='card-cover-overlay'><div class='d-flex justify-content-between align-middle'><div class='align-self-center'><div class='card-company'><img loading='lazy' class='me-1 card-logo' src='"+a.logo_lp+"' alt='"+a.lp_name+"'><span class='course-lp-name'>"+a.lp_name+"</span></div></div><div class='align-self-center'><span class='badge rounded-pill text-capitalize "+s+"'>"+a.course_type.replace(/Online/g,"")+"</span></div></div></div></div><div class='card-body'><h6 class='mb-1 course-title text-capitalize' title='"+a.course_title+"'>"+a.course_title+"</h6><span class='mb-2 badge text-bg-light text-capitalize'>"+a.course_category+"</span><div><div class='course-real-price mb-1'><span>"+o+"</span> <span class='badge text-bg-ghost-success'>"+a.course_discount+"</span></div><div class='course-price card-price mb-1 "+n+"'>"+l+"</div></div><div class='mt-3 text-center'><a href='"+i+"' class='apply-course "+a.course_id+" btn btn-primary w-100 mb-2 text-truncate' rel='nofollow' data-event='skill_week_apply_course'>Selengkapnya</a></div>";$(e).append(c).ready((function(){}))},n=function(e,a){var t='<div class="col-12.col-sm-6 col-md-4 col-xl-3"><a class="text-capitalize card-company-list" href="pelatihan/index.html?topic=&keyword=&price=&lp='+a.lp_name.replace(/\s+/gi,"-").toLowerCase()+'" title="'+a.course_title+'"><img class="me-1 card-logo" height="40" src="'+a.lp_logo+'" alt="'+a.lp_name+'" loading="lazy"/><span class="lp-name">'+a.lp_name+"</span></a></div>";$(e).append(t)},r=function(e,a,t,s,i,l,r,c,d){$(e).unbind("click"),$(e).on("click",(function(){var p=$(e);t=s,s+=a,r+=1,$.each(i.slice(t,s),(function(e,a){d?n(l,a):o(l,a)})),u(p,c,r)}))},c=function(e,a,t,s){$(e).click((function(e){var i=$("#course-lists"),n=$("#load-more"),c=(i=$("#course-lists"),[]),d=[],p=[],m=a,h=$("#filter-keyword").val();$.each($(".filter-category:checked"),(function(e,a){c[e]=$(a).val()})),$.each($(".filter-price:checked"),(function(e,a){d[e]=$(a).val()})),$.each($(".filter-lp:checked"),(function(e,a){p[e]=$(a).val()})),_.isEmpty(d)||3==d.length||(_.contains(d,"diskon besar")&&_.contains(d,"20000")?m=_.filter(a,(function(e){return"0"!==e.course_after_discount})):_.contains(d,"diskon besar")&&_.contains(d,"0")?(d=_.contains(d,"0")?d.concat(""):d,m=_.filter(a,(function(e){return"20000"!==e.course_after_discount}))):m=_.contains(d,"diskon besar")?_.filter(a,(function(e){return"20000"!==e.course_after_discount&&"0"!==e.course_after_discount})):_.filter(m,(function(e){return this.keys.indexOf(e.course_after_discount)>-1}),{keys:d})),_.isEmpty(c)||(m=_.filter(m,(function(e){return this.keys.indexOf(e.course_category.toLowerCase())>-1}),{keys:c})),_.isEmpty(p)||(m=_.filter(m,(function(e){return this.keys.indexOf(e.lp_name.toLowerCase())>-1}),{keys:p}));var f=_.filter(m,(function(e){return-1!==e.course_title.toLowerCase().indexOf(h.toLowerCase())})),g=f.length,v=Math.ceil(g/12);i.html(""),$("#course-counter div").html("Ditemukan <b>"+g+"</b> pelatihan"),0!==f.length?$.each(f.slice(t,s),(function(e,a){o(i,a)})):i.html(l),r(n,12,t,s,f,i,1,v),u(n,v,1),$("#modalFilter").modal("hide");var b=c.join(","),k=d.join(","),y=p.join(",");window.history.replaceState(null,null,"?topic="+b.replace(/\s+/gi,"-").toLowerCase()+"&keyword="+h.replace(/\s+/gi,"-").toLowerCase()+"&price="+k.replace(/\s+/gi,"-").toLowerCase()+"&lp="+y.replace(/\s+/gi,"-").toLowerCase())}))},d=function(e,a,t,s,i){$(e).on("submit",(function(e){e.preventDefault();var a=$("#course-lists"),n=$("#load-more"),c=[],d=[],p=[],m=t,h=$(this).find("input").val();$.each($(".filter-category:checked"),(function(e,a){c[e]=$(a).val()})),$.each($(".filter-price:checked"),(function(e,a){d[e]=$(a).val()})),$.each($(".filter-lp:checked"),(function(e,a){p[e]=$(a).val()})),$.each($(".filter-category:checked"),(function(e,a){c[e]=$(a).val()})),$.each($(".filter-price:checked"),(function(e,a){d[e]=$(a).val()})),$.each($(".filter-lp:checked"),(function(e,a){p[e]=$(a).val()})),_.isEmpty(d)||3==d.length||(_.contains(d,"diskon besar")&&_.contains(d,"20000")?m=_.filter(t,(function(e){return"0"!==e.course_after_discount})):_.contains(d,"diskon besar")&&_.contains(d,"0")?(d=_.contains(d,"0")?d.concat(""):d,m=_.filter(t,(function(e){return"20000"!==e.course_after_discount}))):m=_.contains(d,"diskon besar")?_.filter(t,(function(e){return"20000"!==e.course_after_discount&&"0"!==e.course_after_discount})):_.filter(m,(function(e){return this.keys.indexOf(e.course_after_discount)>-1}),{keys:d})),_.isEmpty(c)||(m=_.filter(m,(function(e){return this.keys.indexOf(e.course_category.toLowerCase())>-1}),{keys:c})),_.isEmpty(p)||(m=_.filter(m,(function(e){return this.keys.indexOf(e.lp_name.toLowerCase())>-1}),{keys:p}));var f=_.filter(m,(function(e){return-1!==e.course_title.toLowerCase().indexOf(h.toLowerCase())})),g=f.length,v=Math.ceil(g/12);a.html(""),$("#course-counter div").html("Ditemukan <b>"+g+"</b> pelatihan"),0!==f.length?$.each(f.slice(s,i),(function(e,t){o(a,t)})):a.html(l),r(n,12,s,i,f,a,1,v),u(n,v,1);var b=c.join(","),k=d.join(","),y=p.join(",");window.history.replaceState(null,null,"?topic="+b.replace(/\s+/gi,"-").toLowerCase()+"&keyword="+h.replace(/\s+/gi,"-").toLowerCase()+"&price="+k.replace(/\s+/gi,"-").toLowerCase()+"&lp="+y.replace(/\s+/gi,"-").toLowerCase())})),$(a).on("click",(function(a){$(e).trigger("submit")}))};var u=function(e,a,t){a>0&&t<a?e.removeClass("visually-hidden"):e.addClass("visually-hidden")};function p(){var t=$("#course-lists"),s=$("#load-more"),i=$("#btn-apply-filter"),n=$("#form-search"),p=$("#button-search"),m=_.isEmpty(a.get("topic"))?"":a.get("topic").toLowerCase().replace(/-|%20/gi," ").split(","),h=_.isEmpty(a.get("price"))?"":a.get("price").toLowerCase().replace(/-|%20/gi," ").split(","),f=_.isEmpty(a.get("lp"))?"":a.get("lp").toLowerCase().replace(/-|%20/gi," ").split(","),g=_.isEmpty(a.get("keyword"))?"":a.get("keyword").replace(/-|%20/gi," ");_.isEmpty(h)&&_.isEmpty(h)&&_.isEmpty(f)||$("#button-addon1").attr("class","btn btn-primary"),t.length&&$.getJSON(e,(function(e){var a=_.shuffle(e);_.isEmpty(h)||3==h.length||(_.contains(h,"diskon besar")&&_.contains(h,"20000")?a=_.filter(a,(function(e){return"0"!==e.course_after_discount})):_.contains(h,"diskon besar")&&_.contains(h,"0")?(h=_.contains(h,"0")?h.concat(""):h,a=_.filter(a,(function(e){return"20000"!==e.course_after_discount}))):a=_.contains(h,"diskon besar")?_.filter(a,(function(e){return"20000"!==e.course_after_discount&&"0"!==e.course_after_discount})):_.filter(a,(function(e){return this.keys.indexOf(e.course_after_discount)>-1}),{keys:h})),_.isEmpty(m)||(a=_.filter(a,(function(e){return this.keys.indexOf(e.course_category.toLowerCase())>-1}),{keys:m})),_.isEmpty(f)||(a=_.filter(a,(function(e){return this.keys.indexOf(e.lp_name.toLowerCase())>-1}),{keys:f}));var v=null!==g?_.filter(a,(function(e){return-1!==e.course_title.toLowerCase().indexOf(g.toLowerCase())})):a;null!==g&&$("#filter-keyword").val(g);var b=v.length,k=Math.ceil(b/12);setTimeout((function(){var a;t.html(""),$("#course-counter div").html("Ditemukan <b>"+b+"</b> pelatihan"),_.isEmpty(v)?t.html(l):$.each(v.slice(0,12),(function(e,a){o(t,a)})),u(s,k,1),r(s,12,0,12,v,t,1,k),function(e,a,t,s){for(var i,l={},o={},n=[],r=[],c=0;i=e[c++];){var d=i.course_category.toLowerCase(),u=i.lp_name.toLowerCase();d in l||(l[d]=1,n.push(d)),u in o||(o[u]=1,r.push(u))}n=n.sort(),r=r.sort(),$("#course-LP, #course-category").html(""),_.each(n,(function(e,a){var t=-1!==_.indexOf(s,e)?"checked":"";$("#course-category").append('<div class="form-check"><input class="form-check-input filter-category" id="filter-category-'+a+'" type="checkbox" value="'+e+'" '+t+'><label class="form-check-label text-capitalize" for="filter-category-'+a+'">'+e+"</label></div>")})),_.each(r,(function(e,t){var s=-1!==_.indexOf(a,e)?"checked":"";$("#course-LP").append('<div class="form-check"><input class="form-check-input filter-lp" id="filter-lp-'+t+'" type="checkbox" value="'+e+'" '+s+'><label class="form-check-label text-capitalize" for="filter-lp-'+t+'">'+e+"</label></div>")})),_.each(t,(function(e){$('.filter-price[value="'+e+'"]').attr("checked",!0)})),_.isEmpty(a)&&_.isEmpty(t)&&_.isEmpty(s)||$("#btn-reset-filter").removeClass("disabled")}(e,f,h,m),a="input.form-check-input",$("#btn-reset-filter").click((function(e){$(this).addClass("disabled"),$("#button-addon1").attr("class","btn btn-outline-light"),$(a).prop("checked",!1)})),function(e,a){$(e).click((function(t){$(e).is(":checked")?($(a).removeClass("disabled"),$("#button-addon1").attr("class","btn btn-primary")):($(a).addClass("disabled"),$("#button-addon1").attr("class","btn btn-outline-light"))}))}(".form-check-input","#btn-reset-filter"),c(i,e,0,12),d(n,p,e,0,12)}),1500)})).fail((function(){}))}function m(){var a=$("#courseCarouselDiscount"),t=$("#courseCarouselTwenty"),s=$("#courseCarouselFree"),i=$("#course-provider-list"),l=$("#load-more-lp");(a.length||t.length||s.length)&&$.getJSON(e,(function(e){dataLimited=_.sample(_.filter(e,(function(e){return"0"!==e.course_after_discount&&"20000"!==e.course_after_discount})),10),dataTwenty=_.sample(_.filter(e,(function(e){return"20000"==e.course_after_discount})),10),dataFree=_.sample(_.filter(e,(function(e){return"0"==e.course_after_discount})),10),a.addClass("owl-carousel").html(""),t.addClass("owl-carousel").html(""),s.addClass("owl-carousel").html("");for(var c,d={},u=[],p=0;c=e[p++];){var m=c.lp_name.toLowerCase();m in d||(d[m]=1,u.push({lp_name:c.lp_name,lp_logo:c.logo_lp}))}u=_.sortBy(u,"lp_name"),i.html("");var h=u.length,f=Math.ceil(h/12);$.each(u.slice(0,12),(function(e,a){n(i,a)})),r(l,12,0,12,u,i,1,f,!0),$.each(dataLimited,(function(e,t){o(a,t,"home")})),$.each(dataTwenty,(function(e,a){o(t,a,"home")})),$.each(dataFree,(function(e,a){o(s,a,"home")}))})).done((function(){$(".owl-carousel").owlCarousel({loop:!0,margin:24,nav:!0,dots:!1,responsive:{0:{items:1.2,margin:16,nav:!1},600:{items:3,margin:16,nav:!1},1e3:{items:4,nav:!1},1200:{items:4,nav:!0}}})}))}function h(){var s=_.isEmpty(a.get("id"))?"ISW-P0005":a.get("id"),i=$("#detail-course"),l=$("#courseCarousel"),n=$("#breadcrumb-detail ol");i.length&&$.getJSON(e,(function(e){var a=_.findWhere(e,{course_id:s}),r=_.sample(_.reject(_.filter(e,(function(e){return-1!==e.course_category.toLowerCase().indexOf(a.course_category.toLowerCase())})),(function(e){return e.course_id==s})),10),c="/pelatihan/index.html?topic="+a.course_category.toLowerCase()+"&keyword=&price=&lp=",d=$(".similar-course");$("#get-voucher"),$("#getCourseLoginModal"),$("#getCourseNotLoginModal");n.html('<ol class="breadcrumb overflow-hidden fs-7 mb-0"><li class="breadcrumb-item"> <a href="/"><i class="bi bi-house-door"></i></a></li><li class="breadcrumb-item"> <a href="/pelatihan">Pelatihan </a></li><li class="breadcrumb-item active text-truncate">'+a.course_title+"</li></ol>");var u=_.isNull(localStorage.getItem("course_takens"))?[]:JSON.parse(localStorage.getItem("course_takens"));$.when(i.html("").append(function(e){var a,t="100%"==e.course_discount||""==e.course_discount?"Gratis":"Rp "+Number(e.course_after_discount).toLocaleString("id"),s="100%"==e.course_discount||""==e.course_discount?"":"color-secondary",i="0"==e.course_price?"":"Rp "+Number(e.course_price).toLocaleString("id"),l=JSON.parse(localStorage.getItem("course_takens")),o=""!==e.quota?e.quota+"<i>&nbsp;(Selama masih tersedia)</i>":"<span>Tidak terbatas<span>",n=Number(e.total)>=5?'<p class="text-secondary"><b class="fs-7">'+e.total+"</b>&nbsp; peserta mengambil pelatihan ini</p>":"";return a=_.contains(l,e.course_id)?'<button class="my-3 btn btn-secondary btn-lg w-100 disabled" data-bs-toggle="modal" data-bs-target="#">Voucher berhasil diambil</button>':""!==e.quota&&Number(e.quota)==e.total?'<button class="my-3 btn btn-secondary btn-lg w-100 disabled" data-bs-toggle="modal" data-bs-target="#">Voucher Habis</button>':'<button id="get-voucher" class="my-3 btn btn-primary btn-lg w-100" data-bs-toggle="modal" data-bs-target="#">Dapatkan Voucher Pelatihan </button>','<section class="section-detail-course"><div class="container pt-3 pb-5 px-4 px-md-0"><div class="row flex-row-reverse"><div class="col-12 col-md-4 col-lg-4"><div class="course-cover-sticky"><div class="course-cover"><img loading="lazy" class="w-100 rounded" src="'+e.course_image+'" alt=""/></div><div class="mt-3 d-flex justify-content-between"><div><div class="course-real-price mb-1"><span class="me-1">'+i+'</span><span class="badge text-bg-ghost-success">'+e.course_discount+'</span></div><div class="course-price card-price mb-1 fs-4 '+s+'">'+t+'</div></div><div><button class="btn btn-light share-button" type="button" title="Bagikan halaman ini"><i class="bi bi-share-fill">&nbsp;&nbsp;</i>Bagikan</button></div></div><div class="course-cta px-3 px-lg-0">'+a+"</div>"+n+'</div></div><div class="col-12 col-md-8 col-lg-8 pe-xl-4"><h1 class="mb-3">'+e.course_title+'</h1><a class="card-company-link d-inline-flex p-2 text-decoration-none border px-3" href="/pelatihan?topic=&keyword=&price=&lp='+e.lp_name+'"><img loading="lazy" class="me-1 card-logo" src="'+e.logo_lp+'" alt="'+e.lp_name+'"/><span class="lp-name fs-7 text-secondary">'+e.lp_name+'</span></a><div class="row mt-5 mb-4"> <div class="col-12 col-md-6 col-lg-4 mb-4 d-flex"> <i class="bi bi-person-badge"></i><div class="ps-2"> <h6 class="fs-7 mb-2">Instruktur</h6><p class="fs-7">'+e.instructure_name+'</p></div></div><div class="col-12 col-md-6 col-lg-4 mb-4 d-flex"> <i class="bi bi-clock"> </i><div class="ps-2"> <h6 class="fs-7 mb-2">Durasi Pelatihan</h6><p class="fs-7">'+e.duration+' (Menit)</p></div></div><div class="col-12 col-md-6 col-lg-4 mb-4 d-flex"> <i class="bi bi-person-video"> </i><div class="ps-2"> <h6 class="fs-7 mb-2">Metode Ajar</h6><span class="badge rounded-pill text-bg-warning">'+e.course_type+'</span></div></div><div class="col-12 col-md-6 col-lg-4 mb-4 d-flex"> <i class="bi bi-tag"> </i><div class="ps-2"> <h6 class="fs-7 mb-2">Kategori</h6><p class="fs-7">'+e.course_category+'</p></div></div><div class="col-12 col-md-6 col-lg-4 mb-4 d-flex"> <i class="bi bi-ticket-detailed"> </i><div class="ps-2"> <h6 class="fs-7 mb-2">Kuota Pelatihan</h6><p class="fs-7">'+o+'</p></div></div><div class="col-12 col-md-6 col-lg-4 mb-4 d-flex"> <i class="bi bi-link-45deg"></i><div class="ps-2 overflow-hidden"><h6 class="fs-7 mb-2">Link Pelatihan</h6><a class="fs-7 d-flex align-items-center" href="'+e.course_url+'" target="_blank" title="'+e.course_title+'"> <span class="pds-truncate">'+e.course_url+'</span><i class="bi bi-arrow-up-right-square-fill"></i></a></div></div></div><hr/><article><section class="py-3"><h4 class="mb-4">Deskripsi Pelatihan </h4><article id="description">'+e.description.replace(/\n/g,"</br>")+'</article></section><section class="py-3" id="CaraRedeemVoucher"><h4 class="mb-4">Cara Redeem Voucher</h4><article id="how-to-redeem">'+e.how_to_redeem.replace(/\n/g,"</br>")+"</article></section><hr/></article></div></div></div></section>"}(a))).then((function(){var e=$("#get-voucher"),i=$("#getCourseLoginModal"),l=$("#getCourseNotLoginModal"),o=$("#get-voucher-botton"),n=$(".share-button"),r=$(".share-dialog"),c=$(".close-button");n.click((function(){var e=$("#share-facebook"),t=$("#share-twitter"),s=$("#share-linkedin"),i=$("#share-email"),l=$("#copy-link"),o=$(".pen-url");e.attr("href","https://www.facebook.com/sharer/sharer.php?u="+window.location.href),t.attr("href","https://twitter.com/intent/tweet?text=Dapatkan voucher pelatihan "+a.course_title+" hanya di Indonesia Skills Week, dan jutaan voucher lainnya&url="+window.location.href+"&hashtags=IndonesiSKillsWeek"),s.attr("href","https://www.linkedin.com/shareArticle?mini=true&url="+window.location.href+"&title=Voucher pelatihan "+a.course_title+"&source=skillsweek.prakerja.go.id&summary=Dapatkan voucher pelatihan "+a.course_title+" melalui Indonesia Skills Week, dan kesempatan untuk mendapatkan jutaan voucher lainnya"),i.attr("href","mailto:contact@email.com?subject=Pelatihan"+a.course_title+" &body=Dapatkan voucher pelatihan "+a.course_title+" melalui Indonesia Skills Week, dan kesempatan untuk mendapatkan jutaan voucher lainnya!"),o.html(window.location.href),navigator.share?navigator.share({title:"Indonesia Skill Week - "+a.course_title,url:"CurrentURL"}).then((()=>{})).catch(console.error):(r.addClass("is-open"),l.click((function(){navigator.clipboard.writeText(o.text()),$("#toast-sucess-copy").toast("show"),$(".close-toast-copy").click((function(){$("#toast-sucess-copy").toast("hide")}))})))})),c.click((function(){r.removeClass("is-open")})),e.click((function(){_.isNull(localStorage.getItem("users"))?(l.modal("show"),l.find("img").attr("src",a.course_image),l.find("h6").html(a.course_title)):(i.modal("show"),i.find("#emailUserVoucher").val(t.email),i.find(".detail-course img").attr("src",a.course_image),i.find(".detail-course h6").html(a.course_title),i.find(".alert").addClass("alert-info").removeClass("alert-danger").html('<i class="fs-5 bi bi-info-circle-fill me-3"></i><div><div class="fs-7">Kode Voucher akan dikirim ke email kamu selama <b>kuota </b>pelatihan masih tersedia, silakan cek email secara berkala.</div></div>'),o.click((function(a){a.preventDefault(),_this=$(this),_this.addClass("disabled").html('<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"> </span><span class="sr-only"> Loading...</span>');var l={course_id:s};$.ajax({dataType:"json",contentType:"application/json",type:"POST",url:"https://api-proxy.prakerja.go.id/api/v1/general/voucher/ack",headers:{Authorization:t.token},data:JSON.stringify(l)}).done((function(a){_this.removeClass("disabled").html("Ambil Voucher"),i.modal("hide"),$("#success-toast").toast("show"),e.addClass("disabled btn-secondary").html("Voucher sudah diambil").removeClass("btn-primary"),u.push(s),localStorage.setItem("course_takens",JSON.stringify(u))})).fail((function(e){var a=e.responseJSON;_this.removeClass("disabled").html("Ambil Voucher"),(a.code="ERR40004")&&("[ERR40005] sign expired"==a.message?(i.find(".alert").addClass("alert-danger").removeClass("alert-info").html('<i class="fs-5 bi bi-exclamation-triangle-fill me-3"></i><div><h6 class="text-danger">Ambil Voucher Pelatihan Gagal</h6><div class="fs-7">Sesi Login sudah berakhir, silahkan login kembali untuk mengambil voucher pelatihan</div></div> '),$("#get-voucher-botton").click((function(){localStorage.removeItem("users"),window.location.reload()}))):i.find(".alert").addClass("alert-danger").removeClass("alert-info").html('<i class="fs-5 bi bi-exclamation-triangle-fill me-3"></i><div><h6 class="text-danger">Ambil Voucher Pelatihan Gagal</h6><div class="fs-7">'+a.message+".</div></div> "))}))})))}))})),l.html(""),d.attr("href",c),_.isEmpty(r)?l.html('<section class="section-course mb-4"><div class="container py-0 px-4 px-md-0"><div class="d-flex align-items-center justify-content-between mb-3"><h4>Pelatihan Serupa</h4></div><div class="d-flex similar-course-empty rounded justify-content-center"><div class="col-lg-8 d-lg-flex p-4 justify-content-center"><div class="p-md-3 mb-3 mb-lg-0"><img loading="lazy" src="img/img-ornament-1.svg" height="116" /></div><div class="p-md-3"><h5>Sepertinya tidak ditemukan pelatihan serupa</h5><p>Yuk cari pelatihan lainnya yang mungkin kamu tertarik untuk ikuti</p><a class="btn btn-primary" href="/pelatihan">Cari Pelatihan Lainnya</a></div></div></div></div></section>').css({display:"block"}):$.when($.each(r,(function(e,a){o(l,a,"detail")}))).then((function(){$(".owl-carousel").owlCarousel({loop:!0,margin:24,nav:!0,dots:!1,responsive:{0:{items:1.2,margin:16,nav:!1},600:{items:3,margin:16,nav:!1},1e3:{items:4,nav:!1},1200:{items:4,nav:!0}}})}))}))}function f(){var e=_.isNull(t)?"Masuk":t.email,a=$("#btn-login"),i=$("#btn-logout"),l=$("#loginModal"),o=$("#loginSuccessModal"),n=$("#loginAlreadyModal"),r=$(".login-dismiss"),c=$("#login-form"),d=$("#submit-login");_.isNull(t)?(a.find("span").removeClass("skeleton-box rounded-pill").html(e),a.click((function(){l.modal("show")})),_.isNull(s)&&(l.modal("show"),r.click((function(){localStorage.setItem("login-popup-skip",!0),c.find(".alert.alert-danger").addClass("visually-hidden"),d.removeClass("disabled").html("Masuk")}))),c.submit((function(e){e.preventDefault();var s={email:c.find("input#userEmail").val(),password:c.find("input#userPassword").val()};_.isEmpty(s.email)||_.isEmpty(s.password)||(d.addClass("disabled").html('<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"> </span><span class="sr-only"> Loading...</span>'),$.ajax({dataType:"json",contentType:"application/json",type:"POST",url:"https://api-ext.prakerja.go.id/api/v1/user/login-a17ab03c3d1d",data:JSON.stringify(s)}).done((function(e){var r=e.data;7!==r.stat.step?(d.removeClass("disabled").html("Masuk"),c.find(".alert.alert-danger").removeClass("visually-hidden").find(".alert.alert-danger .text-error").html("Lengkapi dan selesaikan proses daftar di Prakerja untuk bisa login pada Skillsweek")):(localStorage.setItem("users",JSON.stringify(_.extend(r,{email:s.email}))),a.find(".text-users").html(s.email),c.find(".alert.alert-danger").addClass("visually-hidden"),d.removeClass("disabled").html("Masuk"),l.modal("hide"),o.find("#emailUserVoucher").text(s.email),o.find(".email-account").text(s.email),o.modal("show"),$("#success-login").click((function(){window.location.reload()})),a.click((function(){n.find("#validEmailUser").val(t.email),n.find(".text-email").text("("+t.email+")"),n.modal("show"),i.click((function(){localStorage.removeItem("users"),localStorage.removeItem("course_takens"),window.location.reload()}))})))})).fail((function(e){c.find(".alert.alert-danger").removeClass("visually-hidden").find(".alert.alert-danger .text-error").html("Alamat email atau password salah. Mohon periksa kembali."),d.removeClass("disabled").html("Masuk")})))}))):(a.find("span").after(e).remove(),a.click((function(){n.find("#validEmailUser").val(t.email),n.find(".text-email").text("("+t.email+")"),n.modal("show"),i.click((function(){localStorage.removeItem("users"),localStorage.removeItem("course_takens"),window.location.reload()}))})))}!function(e){e(window).scroll((function(){var a=e(window).scrollTop();a>=60?e("header").addClass("header-fixed"):e("header").removeClass("header-fixed"),a>=400?e(".scroll-top").addClass("is-show"):e(".scroll-top").removeClass("is-show")})),e(".scroll-top").on("click",(function(){e(window).scrollTop(0)})),e(".menu").click((function(){e(this).toggleClass("open"),e(".navbar-custom").toggleClass("m-menu"),e("body").toggleClass("freeze")})),e(".navbar-custom").on("click",".nav-link",(function(a){e(".menu").removeClass("open"),e(".navbar-custom").removeClass("m-menu"),e("body").removeClass("freeze")})),e("#coworkingCarousel").owlCarousel({loop:!0,margin:24,nav:!1,autoplay:!0,responsive:{0:{items:1,margin:0}}}),e(".cws-carousel").owlCarousel({loop:!0,margin:24,nav:!0,autoplay:!0,responsive:{0:{items:1,margin:0}}}),e(".show-password").click((function(a){var t=a.currentTarget;e(t).hasClass("show-password-target")?function(e){e.removeClass("show-password-target").addClass("hide"),e.prev("input").attr("type","password"),e.children().addClass("bi-eye").removeClass("bi-eye-slash")}(e(t)):function(e){e.removeClass("hide").addClass("show-password-target"),e.prev("input").attr("type","text"),e.children().removeClass("bi-eye").addClass("bi-eye-slash")}(e(t))}));var a=e("#liveToastBtn"),t=e("#liveToast");if(a.length){var s=bootstrap.Toast.getOrCreateInstance(t);a.click((function(){s.show()}))}e(document).ready((function(){p(),m(),h(),f()}))}(jQuery);
//# sourceMappingURL=function-min.js.map