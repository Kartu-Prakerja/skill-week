"use strict";var e="https://public-prakerja.oss-ap-southeast-5.aliyuncs.com/skill_week/list_pelatihan_skillweek.json",t=new URLSearchParams(window.location.search),a="<div class='col-12 col-md-12'><div class='alert alert-info' role='alert'><div class='d-flex'><div class='pe-3'><i class='bi bi-info-circle-fill fs-4'></i></div><div><h6 class='alert-heading'>Pelatihan tidak ditemukan</h6><p>Mohon periksa kembali kata kunci Anda dan pastikan ejaan dan tata bahasa yang benar. Anda juga dapat mencoba menggunakan kata kunci yang berbeda atau mencari di topik pelatihan yang berbeda.</p></div></div></div></div>",i=function(e,t,a){var i=t.course_type.toLowerCase()=="Daring LMS (online)".toLowerCase()?"text-bg-warning":"text-bg-help",s=(t.course_title.split(" ").join("+"),"100%"==t.course_discount?"Gratis":"Rp "+Number(t.course_after_discount).toLocaleString("id")),l="100%"!=t.course_discount?"color-secondary":"",c=null==a?"col-12 col-md-6 col-xl-4 col-xxl-3 mb-4 mb-lg-5":"wl-carousel-card pb-3",r="<div id='"+t.index+"' class='"+c+"'><div class='card pds-card'><div class='card-cover'><img loading='lazy' src='"+t.course_image+"' class='card-img-top' alt='"+t.course_title+"'><div class='card-cover-overlay'><div class='d-flex justify-content-between align-middle'><div class='align-self-center'><div class='card-company'><img class='me-1 card-logo' src='"+t.lp_logo+"' alt='"+t.lp_name+"'><span class='course-lp-name'>"+t.lp_name+"</span></div></div><div class='align-self-center'><span class='badge rounded-pill text-capitalize "+i+"'>"+t.course_type+"</span></div></div></div></div><div class='card-body'><h6 class='mb-1 course-title text-capitalize' title='"+t.course_title+"'>"+t.course_title+"</h6><span class='mb-2 badge text-bg-light text-capitalize'>"+t.course_category+"</span><div><div class='course-real-price mb-1'><span>Rp "+Number(t.course_price).toLocaleString("id")+"</span> <span class='badge text-bg-ghost-success'>"+t.course_discount+"</span></div><div class='course-price card-price mb-1 "+l+"'>"+s+"</div></div><div class='mt-3 text-center'><a href='detailpelatihan.html' class='apply-course btn btn-primary w-100 mb-2 text-truncate' rel='nofollow' data-event='skill_week_apply_course'>Selengkapnya</a></div>";$(e).append(r).ready((function(){o("#detail-course"+t.index,t)}))},o=function(e,t){$(e).unbind("click"),$(e).on("click",(function(e){e.preventDefault();$(this).data("index");var a=t.description,i=t.course_title,o=t.course_url,s="https://docs.google.com/forms/d/e/1FAIpQLScc3v4je6bcRHA_0H5ItpjaY_x8ump5K9pdc27ylti4pQo0xQ/viewform?usp=pp_url&entry.841678428="+t.course_title.split(" ").join("+");$("#deskripsiPelatihanModal .modal-title").html(i),$("#deskripsiPelatihanModal .course-url .link-pelatihan").attr({href:o,title:i}).html(o),$("#deskripsiPelatihanModal .course-descriptions p").html(a),$("#deskripsiPelatihanModal #modal-link-voucher").attr("href",s),$("#deskripsiPelatihanModal").modal("show")}))},s=function(e,t,a,o,s,l,c,n){$(e).unbind("click"),$(e).on("click",(function(){var d=$(e);a=o,o+=t,c+=1,$.each(s.slice(a,o),(function(e,t){i(l,t)})),r(d,n,c)}))},l=function(e,t,o,l){$(e).click((function(e){var c=$("#course-lists"),n=$("#load-more"),d=(c=$("#course-lists"),[]),u=[],p=[],f=t,h=$("#filter-keyword").val();$.each($(".filter-category:checked"),(function(e,t){d[e]=$(t).val()})),$.each($(".filter-price:checked"),(function(e,t){u[e]=$(t).val()})),$.each($(".filter-lp:checked"),(function(e,t){p[e]=$(t).val()})),_.isEmpty(u)||(f=_.filter(f,(function(e){return this.keys.indexOf(e.course_after_discount)>-1}),{keys:u})),_.isEmpty(d)||(f=_.filter(f,(function(e){return this.keys.indexOf(e.course_category.toLowerCase())>-1}),{keys:d})),_.isEmpty(p)||(f=_.filter(f,(function(e){return this.keys.indexOf(e.lp_name.toLowerCase())>-1}),{keys:p}));var m=_.filter(f,(function(e){return-1!==e.course_title.toLowerCase().indexOf(h.toLowerCase())})),v=m.length,g=Math.ceil(v/12);c.html(""),$("#course-counter div").html("Ditemukan <b>"+v+"</b> pelatihan"),0!==m.length?$.each(m.slice(o,l),(function(e,t){i(c,t)})):c.html(a),s(n,12,o,l,m,c,1,g),r(n,g,1),$("#modalFilter").modal("hide");var y=d.join(","),k=u.join(","),b=p.join(",");window.history.replaceState(null,null,"?topic="+y.replace(/\s+/gi,"-").toLowerCase()+"&keyword="+h.replace(/\s+/gi,"-").toLowerCase()+"&price="+k.replace(/\s+/gi,"-").toLowerCase()+"&lp="+b.replace(/\s+/gi,"-").toLowerCase())}))},c=function(e,t,o,l,c){$(e).on("submit",(function(e){e.preventDefault();var t=$("#course-lists"),n=$("#load-more"),d=[],u=[],p=[],f=o,h=$(this).find("input").val();$.each($(".filter-category:checked"),(function(e,t){d[e]=$(t).val()})),$.each($(".filter-price:checked"),(function(e,t){u[e]=$(t).val()})),$.each($(".filter-lp:checked"),(function(e,t){p[e]=$(t).val()})),$.each($(".filter-category:checked"),(function(e,t){d[e]=$(t).val()})),$.each($(".filter-price:checked"),(function(e,t){u[e]=$(t).val()})),$.each($(".filter-lp:checked"),(function(e,t){p[e]=$(t).val()})),_.isEmpty(u)||(f=_.filter(f,(function(e){return this.keys.indexOf(e.course_after_discount)>-1}),{keys:u})),_.isEmpty(d)||(f=_.filter(f,(function(e){return this.keys.indexOf(e.course_category.toLowerCase())>-1}),{keys:d})),_.isEmpty(p)||(f=_.filter(f,(function(e){return this.keys.indexOf(e.lp_name.toLowerCase())>-1}),{keys:p}));var m=_.filter(f,(function(e){return-1!==e.course_title.toLowerCase().indexOf(h.toLowerCase())})),v=m.length,g=Math.ceil(v/12);t.html(""),$("#course-counter div").html("Ditemukan <b>"+v+"</b> pelatihan"),0!==m.length?$.each(m.slice(l,c),(function(e,a){i(t,a)})):t.html(a),s(n,12,l,c,m,t,1,g),r(n,g,1);var y=d.join(","),k=u.join(","),b=p.join(",");window.history.replaceState(null,null,"?topic="+y.replace(/\s+/gi,"-").toLowerCase()+"&keyword="+h.replace(/\s+/gi,"-").toLowerCase()+"&price="+k.replace(/\s+/gi,"-").toLowerCase()+"&lp="+b.replace(/\s+/gi,"-").toLowerCase())})),$(t).on("click",(function(t){$(e).trigger("submit")}))};var r=function(e,t,a){t>0&&a<t?e.removeClass("visually-hidden"):e.addClass("visually-hidden")},n=function(e){$(e).on("click",(function(e){var t=$(this),a=t.attr("data-event"),i=t.parents("div.card-body").find(".course-price").html(),o=t.parents("div.card-body").find("h6.course-title").html(),s=t.parents("div.card-cover").find(".course-lp-name").html();void 0!==window.DataLayer&&dataLayer.push({event:a,course_title:o,price:i,lp_name:s})}))};function d(){$(document).ready((function(){var a=$("#course-lists"),o=$("#load-more"),d=$("#btn-apply-filter"),u=$("#form-search"),p=$("#button-search"),f=(null!==t.get("topic")&&t.get("topic").replace(/-|%20/gi," "),null!==t.get("price")&&t.get("price").replace(/-|%20/gi," "),null!==t.get("lp")&&t.get("lp").replace(/-|%20/gi," "),null!==t.get("keyword")?t.get("keyword").replace(/-|%20/gi," "):"");void 0!==a&&$.getJSON(e,(function(e){var t=_.shuffle(e),h=null!==f?_.filter(t,(function(e){return-1!==e.course_title.toLowerCase().indexOf(f.toLowerCase())})):dataFilter;null!==f&&$("#filter-keyword").val(f);var m=h.length,v=Math.ceil(m/12);setTimeout((function(){var e;a.html(""),$("#course-counter div").html("Ditemukan <b>"+m+"</b> pelatihan"),$.each(h.slice(0,12),(function(e,t){i(a,t)})),r(o,v,1),s(o,12,0,12,h,a,1,v),function(e){for(var t,a={},i={},o=[],s=[],l=0;t=e[l++];){var c=t.course_category.toLowerCase(),r=t.lp_name.toLowerCase();c in a||(a[c]=1,o.push(c)),r in i||(i[r]=1,s.push(r))}o=o.sort(),s=s.sort(),$("#course-LP, #course-category").html(""),$.each(o,(function(e,t){$("#course-category").append('<div class="form-check"><input class="form-check-input filter-category" id="filter-category-'+e+'" type="checkbox" value="'+t+'"><label class="form-check-label text-capitalize" for="filter-category-'+e+'">'+t+"</label></div>")})),$.each(s,(function(e,t){$("#course-LP").append('<div class="form-check"><input class="form-check-input filter-lp" id="filter-lp-'+e+'" type="checkbox" value="'+t+'"><label class="form-check-label text-capitalize" for="filter-lp-'+e+'">'+t+"</label></div>")}))}(t),e="input.form-check-input",$("#btn-reset-filter").click((function(t){$(this).addClass("disabled"),$("#button-addon1").attr("class","btn btn-outline-light"),$(e).prop("checked",!1)})),function(e,t){$(e).click((function(a){$(e).is(":checked")?($(t).removeClass("disabled"),$("#button-addon1").attr("class","btn btn-primary")):($(t).addClass("disabled"),$("#button-addon1").attr("class","btn btn-outline-light"))}))}(".form-check-input","#btn-reset-filter"),l(d,t,0,12),c(u,p,t,0,12),n(".see-detail-course"),n(".apply-course")}),1500)})).fail((function(){}))}))}function u(){$(document).ready((function(){var t=$("#courseCarousel");void 0!==t&&$.getJSON(e,(function(e){dataToDisplay=_.sample(e,10),t.html("").addClass("owl-carousel"),$.each(dataToDisplay,(function(e,a){i(t,a,"home")})),n(".see-detail-course"),n(".apply-course")})).done((function(){$(t).owlCarousel({loop:!0,margin:24,nav:!0,dots:!1,responsive:{0:{items:1.2,margin:16,nav:!1},600:{items:3,margin:16},1e3:{items:4}}})}))}))}!function(e){e(window).scroll((function(){var t=e(window).scrollTop();t>=60?e("header").addClass("header-fixed"):e("header").removeClass("header-fixed"),t>=400?e(".scroll-top").addClass("is-show"):e(".scroll-top").removeClass("is-show")})),e(".scroll-top").on("click",(function(){e(window).scrollTop(0)})),e(".menu").click((function(){e(this).toggleClass("open"),e(".navbar-custom").toggleClass("m-menu"),e("body").toggleClass("freeze")})),e(".navbar-custom").on("click",".nav-link",(function(t){e(".menu").removeClass("open"),e(".navbar-custom").removeClass("m-menu"),e("body").removeClass("freeze")})),e("#coworkingCarousel").owlCarousel({loop:!0,margin:24,nav:!1,autoplay:!0,responsive:{0:{items:1,margin:0}}}),e(".cws-carousel").owlCarousel({loop:!0,margin:24,nav:!0,autoplay:!0,responsive:{0:{items:1,margin:0}}}),e(".show-password").click((function(t){var a=t.currentTarget;e(a).hasClass("show-password-target")?function(e){e.removeClass("show-password-target").addClass("hide"),e.prev("input").attr("type","password"),e.children().addClass("bi-eye").removeClass("bi-eye-slash")}(e(a)):function(e){e.removeClass("hide").addClass("show-password-target"),e.prev("input").attr("type","text"),e.children().removeClass("bi-eye").addClass("bi-eye-slash")}(e(a))}));var t=document.getElementById("liveToastBtn"),a=document.getElementById("liveToast");if(t){var i=bootstrap.Toast.getOrCreateInstance(a);t.addEventListener("click",(function(){i.show()}))}d(),u()}(jQuery);
//# sourceMappingURL=function-min.js.map