const e="https://public-prakerja.oss-ap-southeast-5.aliyuncs.com/skill_week/list_pelatihan_skillweek.json",a=new URLSearchParams(window.location.search);var t="<div class='col-12 col-md-12'><div class='alert alert-info' role='alert'><div class='d-flex'><div class='pe-3'><i class='bi bi-info-circle-fill fs-4'></i></div><div><h6 class='alert-heading'>Pelatihan tidak ditemukan</h6><p>Mohon periksa kembali kata kunci Anda dan pastikan ejaan dan tata bahasa yang benar. Anda juga dapat mencoba menggunakan kata kunci yang berbeda atau mencari di topik pelatihan yang berbeda.</p></div></div></div></div>",i=function(e,a,t){var i=a.course_type.toLowerCase()=="Daring LMS (online)".toLowerCase()?"text-bg-warning":"text-bg-help",o="https://docs.google.com/forms/d/e/1FAIpQLScc3v4je6bcRHA_0H5ItpjaY_x8ump5K9pdc27ylti4pQo0xQ/viewform?usp=pp_url&entry.841678428="+a.course_title.split(" ").join("+"),c="100%"==a.course_discount?"Gratis":"Rp "+a.course_after_discount,s="100%"!=a.course_discount?"color-secondary":"",n=null==t?"col-12 col-md-6 col-xl-4 col-xxl-3 mb-4 mb-lg-5":"wl-carousel-card pb-3",r="<div id='"+a.index+"' class='"+n+"'><div class='card pds-card'><div class='card-cover'><img loading='lazy' src='"+a.course_image+"' class='card-img-top' alt='"+a.course_title+"'><div class='card-cover-overlay'><div class='d-flex justify-content-between align-middle'><div class='align-self-center'><div class='card-company'><img class='me-1 card-logo' src='"+a.lp_logo+"' alt='"+a.lp_name+"'><span class='course-lp-name'>"+a.lp_name+"</span></div></div><div class='align-self-center'><span class='badge rounded-pill text-capitalize "+i+"'>"+a.course_type+"</span></div></div></div></div><div class='card-body'><h6 class='mb-1 course-title text-capitalize' title='"+a.course_title+"'>"+a.course_title+"</h6><span class='mb-2 badge border bg-light bg-gradient text-dark text-capitalize'>"+a.course_category+"</span><div><div class='course-real-price mb-1'><span>Rp "+a.course_price+"</span> <span class='badge text-bg-ghost-success'>"+a.course_discount+"</span></div><div class='course-price card-price mb-1 "+s+"'>"+c+"</div></div><div class='mt-3 text-center'><a href='"+o+"&utm_source=skillsweek&utm_medium=landing-page&utm_content=button' class='apply-course btn btn-primary w-100 mb-2' target='_blank' rel='nofollow' data-event='skill_week_apply_course'>Dapatkan Voucher Pelatihan</a><a id='detail-course"+a.index+"' href='#deskripsi-pelatihan-"+a.index+"' class='see-detail-course me-2 link-secondary' target='_blank' rel='nofollow' data-index='"+a.index+"' data-event='skill_week_click_course_detail text-link'>Deskripsi Pelatihan</a></div>";$(e).append(r).ready((function(){l("#detail-course"+a.index,a)}))},l=function(e,a){$(e).unbind("click"),$(e).on("click",(function(e){e.preventDefault();$(this).data("index");var t=a.description,i=a.course_title,l="https://docs.google.com/forms/d/e/1FAIpQLScc3v4je6bcRHA_0H5ItpjaY_x8ump5K9pdc27ylti4pQo0xQ/viewform?usp=pp_url&entry.841678428="+a.course_title.split(" ").join("+");$("#deskripsiPelatihanModal .modal-title").html(i),$("#deskripsiPelatihanModal article p").html(t),$("#deskripsiPelatihanModal #modal-link-voucher").attr("href",l),$("#deskripsiPelatihanModal").modal("show")}))},o=function(e,a,t,l,o,c,s,r){$(e).unbind("click"),$(e).on("click",(function(){var d=$(e);t=l,l+=a,s+=1,$.each(o.slice(t,l),(function(e,a){i(c,a)})),n(d,r,s)}))},c=function(e,a,l,c){$(e).click((function(e){var s=$("#course-lists"),r=$("#load-more"),d=(s=$("#course-lists"),[]),u=[],p=[],f=a,h=$("#filter-keyword").val();$.each($(".filter-category:checked"),(function(e,a){d[e]=$(a).val()})),$.each($(".filter-price:checked"),(function(e,a){u[e]=$(a).val()})),$.each($(".filter-lp:checked"),(function(e,a){p[e]=$(a).val()})),_.isEmpty(u)||(f=_.filter(f,(function(e){return this.keys.indexOf(e.course_after_discount)>-1}),{keys:u})),_.isEmpty(d)||(f=_.filter(f,(function(e){return this.keys.indexOf(e.course_category.toLowerCase())>-1}),{keys:d})),_.isEmpty(p)||(f=_.filter(f,(function(e){return this.keys.indexOf(e.lp_name.toLowerCase())>-1}),{keys:p}));var m=_.filter(f,(function(e){return-1!==e.course_title.toLowerCase().indexOf(h.toLowerCase())})),v=m.length,g=Math.ceil(v/12);s.html(""),$("#course-counter div").html("Ditemukan <b>"+v+"</b> pelatihan"),0!==m.length?$.each(m.slice(l,c),(function(e,a){i(s,a)})):s.html(t),o(r,12,l,c,m,s,1,g),n(r,g,1),$("#modalFilter").modal("hide");var k=d.join(","),y=u.join(","),b=p.join(",");window.history.replaceState(null,null,"?topic="+k.replace(/\s+/gi,"-").toLowerCase()+"&keyword="+h.replace(/\s+/gi,"-").toLowerCase()+"&price="+y.replace(/\s+/gi,"-").toLowerCase()+"&lp="+b.replace(/\s+/gi,"-").toLowerCase())}))},s=function(e,a,l,c,s){$(e).on("submit",(function(e){e.preventDefault();var a=$("#course-lists"),r=$("#load-more"),d=[],u=[],p=[],f=l,h=$(this).find("input").val();$.each($(".filter-category:checked"),(function(e,a){d[e]=$(a).val()})),$.each($(".filter-price:checked"),(function(e,a){u[e]=$(a).val()})),$.each($(".filter-lp:checked"),(function(e,a){p[e]=$(a).val()})),$.each($(".filter-category:checked"),(function(e,a){d[e]=$(a).val()})),$.each($(".filter-price:checked"),(function(e,a){u[e]=$(a).val()})),$.each($(".filter-lp:checked"),(function(e,a){p[e]=$(a).val()})),_.isEmpty(u)||(f=_.filter(f,(function(e){return this.keys.indexOf(e.course_after_discount)>-1}),{keys:u})),_.isEmpty(d)||(f=_.filter(f,(function(e){return this.keys.indexOf(e.course_category.toLowerCase())>-1}),{keys:d})),_.isEmpty(p)||(f=_.filter(f,(function(e){return this.keys.indexOf(e.lp_name.toLowerCase())>-1}),{keys:p}));var m=_.filter(f,(function(e){return-1!==e.course_title.toLowerCase().indexOf(h.toLowerCase())})),v=m.length,g=Math.ceil(v/12);a.html(""),$("#course-counter div").html("Ditemukan <b>"+v+"</b> pelatihan"),0!==m.length?$.each(m.slice(c,s),(function(e,t){i(a,t)})):a.html(t),o(r,12,c,s,m,a,1,g),n(r,g,1);var k=d.join(","),y=u.join(","),b=p.join(",");window.history.replaceState(null,null,"?topic="+k.replace(/\s+/gi,"-").toLowerCase()+"&keyword="+h.replace(/\s+/gi,"-").toLowerCase()+"&price="+y.replace(/\s+/gi,"-").toLowerCase()+"&lp="+b.replace(/\s+/gi,"-").toLowerCase())})),$(a).on("click",(function(a){$(e).trigger("submit")}))};var n=function(e,a,t){a>0&&t<a?e.removeClass("visually-hidden"):e.addClass("visually-hidden")},r=function(e){$(e).on("click",(function(e){var a=$(this),t=a.attr("data-event"),i=a.parents("div.card-body").find(".course-price").html(),l=a.parents("div.card-body").find("h6.course-title").html(),o=a.parents("div.card-cover").find(".course-lp-name").html();void 0!==window.DataLayer&&dataLayer.push({event:t,course_title:l,price:i,lp_name:o})}))};function d(){$(document).ready((function(){var t=$("#course-lists"),l=$("#load-more"),d=$("#btn-apply-filter"),u=$("#form-search"),p=$("#button-search"),f=(null!==a.get("topic")&&a.get("topic").replace(/-|%20/gi," "),null!==a.get("price")&&a.get("price").replace(/-|%20/gi," "),null!==a.get("lp")&&a.get("lp").replace(/-|%20/gi," "),null!==a.get("keyword")?a.get("keyword").replace(/-|%20/gi," "):"");void 0!==t&&$.getJSON(e,(function(e){var a=_.shuffle(e),h=null!==f?_.filter(a,(function(e){return-1!==e.course_title.toLowerCase().indexOf(f.toLowerCase())})):dataFilter;null!==f&&$("#filter-keyword").val(f);var m=h.length,v=Math.ceil(m/12);setTimeout((function(){var e;t.html(""),$("#course-counter div").html("Ditemukan <b>"+m+"</b> pelatihan"),$.each(h.slice(0,12),(function(e,a){i(t,a)})),n(l,v,1),o(l,12,0,12,h,t,1,v),function(e){for(var a,t={},i={},l=[],o=[],c=0;a=e[c++];){var s=a.course_category.toLowerCase(),n=a.lp_name.toLowerCase();s in t||(t[s]=1,l.push(s)),n in i||(i[n]=1,o.push(n))}l=l.sort(),o=o.sort(),$.each(l,(function(e,a){$("#course-category").append('<div class="form-check"><input class="form-check-input filter-category" id="filter-category-'+e+'" type="checkbox" value="'+a+'"><label class="form-check-label text-capitalize" for="filter-category-'+e+'">'+a+"</label></div>")})),$.each(o,(function(e,a){$("#course-LP").append('<div class="form-check"><input class="form-check-input filter-lp" id="filter-lp-'+e+'" type="checkbox" value="'+a+'"><label class="form-check-label text-capitalize" for="filter-lp-'+e+'">'+a+"</label></div>")}))}(a),e="input.form-check-input",$("#btn-reset-filter").click((function(a){$(this).addClass("disabled"),$(e).prop("checked",!1)})),function(e,a){$(e).click((function(t){$(e).is(":checked")?($(a).removeClass("disabled"),$("#button-addon1").attr("class","btn btn-info")):($(a).addClass("disabled"),$("#button-addon1").attr("class","btn btn-outline-light"))}))}(".form-check-input","#btn-reset-filter"),c(d,a,0,12),s(u,p,a,0,12),r(".see-detail-course"),r(".apply-course")}),1500)})).fail((function(){}))}))}function u(){$(document).ready((function(){var a=$("#courseCarousel");void 0!==a&&$.getJSON(e,(function(e){dataToDisplay=_.sample(e,10),a.html("").addClass("owl-carousel"),$.each(dataToDisplay,(function(e,t){i(a,t,"home")}))})).done((function(){$(a).owlCarousel({loop:!0,margin:24,nav:!0,dots:!1,responsive:{0:{items:1.2,margin:16},600:{items:3,margin:16},1e3:{items:4}}})}))}))}!function(e){e(window).scroll((function(){var a=e(window).scrollTop();a>=60?e("header").addClass("header-fixed"):e("header").removeClass("header-fixed"),a>=400?e(".scroll-top").addClass("is-show"):e(".scroll-top").removeClass("is-show")})),e(".scroll-top").on("click",(function(){e(window).scrollTop(0)})),e(".menu").click((function(){e(this).toggleClass("open"),e(".navbar-custom").toggleClass("m-menu"),e("body").toggleClass("freeze")})),e(".navbar-custom").on("click",".nav-link",(function(a){e(".menu").removeClass("open"),e(".navbar-custom").removeClass("m-menu"),e("body").removeClass("freeze")})),e("#coworkingCarousel").owlCarousel({loop:!0,margin:24,nav:!0,autoplay:!0,responsive:{0:{items:1,margin:0}}}),e(".cws-carousel").owlCarousel({loop:!0,margin:24,nav:!0,autoplay:!0,responsive:{0:{items:1,margin:0}}}),d(),u()}(jQuery);
//# sourceMappingURL=function-min.js.map