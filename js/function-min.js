var e="<div class='col-12 col-md-9'><div class='alert alert-info' role='alert'><div class='d-flex'><div class='pe-3'><i class='bi bi-info-circle-fill fs-4'></i></div><div><h6 class='alert-heading'>Pelatihan tidak ditemukan</h6><p>Mohon periksa kembali kata kunci Anda dan pastikan ejaan dan tata bahasa yang benar. Anda juga dapat mencoba menggunakan kata kunci yang berbeda atau mencari di topik pelatihan yang berbeda.</p></div></div></div></div>",a=function(e,a){var i=a.course_type.toLowerCase()=="Daring LMS (online)".toLowerCase()?"text-bg-warning":"text-bg-help",o="https://docs.google.com/forms/d/e/1FAIpQLScc3v4je6bcRHA_0H5ItpjaY_x8ump5K9pdc27ylti4pQo0xQ/viewform?usp=pp_url&entry.841678428="+a.course_title.split(" ").join("+"),s="100%"==a.course_discount?"Gratis":"Rp "+a.course_after_discount,n="100%"!=a.course_discount?"color-secondary":"",l="<div id='"+a.index+"' class='col-12 col-md-6 col-xl-4 col-xxl-3 mb-4 mb-lg-5'><div class='card pds-card'><div class='card-cover'><img loading='lazy' src='"+a.course_image+"' class='card-img-top' alt='"+a.course_title+"'><div class='card-cover-overlay'><div class='d-flex justify-content-between'><div><div class='card-company'><img class='me-1' src='"+a.lp_logo+"' alt='"+a.lp_name+"'><span class='course-lp-name'>"+a.lp_name+"</span></div></div><div><span class='badge rounded-pill text-capitalize "+i+"'>"+a.course_type+"</span></div></div></div></div><div class='card-body'><h6 class='mb-2 course-title text-capitalize' title='"+a.course_title+"'>"+a.course_title+"</h6><div><div class='course-real-price mb-1'><span>Rp "+a.course_price+"</span> <span class='badge text-bg-ghost-success'>"+a.course_discount+"</span></div><div class='course-price card-price mb-1 "+n+"'>"+s+"</div></div><div class='mt-3 text-center'><a href='"+o+"&utm_source=skillsweek&utm_medium=landing-page&utm_content=button' class='apply-course btn btn-primary w-100 mb-2' target='_blank' rel='nofollow' data-event='skill_week_apply_course'>Dapatkan Voucher Pelatihan</a><a href='#deskripsi-pelatihan' class='see-detail-course me-2 link-secondary' target='_blank' rel='nofollow' data-index='"+a.index+"' data-event='skill_week_click_course_detail text-link'>Deskripsi Pelatihan</a></div>";$(e).append(l).ready((function(){t(".see-detail-course",a)}))},t=function(e,a){$(e).unbind("click"),$(e).on("click",(function(e){e.preventDefault();$(this).data("index");var t=a.description,i=a.course_title,o="https://docs.google.com/forms/d/e/1FAIpQLScc3v4je6bcRHA_0H5ItpjaY_x8ump5K9pdc27ylti4pQo0xQ/viewform?usp=pp_url&entry.841678428="+a.course_title.split(" ").join("+");$("#deskripsiPelatihanModal .modal-title").html(i),$("#deskripsiPelatihanModal article p").html(t),$("#deskripsiPelatihanModal #modal-link-voucher").attr("href",o),$("#deskripsiPelatihanModal").modal("show")}))},i=function(e,t,i,o,s,l,c,r){$(e).unbind("click"),$(e).on("click",(function(){var d=$(e);i=o,o+=t,c+=1,$.each(s.slice(i,o),(function(e,t){a(l,t)})),n(d,r,c)}))},o=function(t,o,s,l){$(t).on("change",(function(t){var c=$("#course-lists"),r=$("#load-more"),d=(c=$("#course-lists"),$(this).find(":selected").text()),u=$("#filter-keyword").val();if("Semua Topik Pelatihan"!==d)var p=_.filter(o,(function(e){return-1!==e.course_category.toLowerCase().indexOf(d.toLowerCase())})),f=_.filter(p,(function(e){return-1!==e.course_title.toLowerCase().indexOf(u.toLowerCase())}));else f=_.filter(o,(function(e){return-1!==e.course_title.toLowerCase().indexOf(u.toLowerCase())}));var v=f.length,m=Math.ceil(v/12);c.html(""),0!==f.length?$.each(f.slice(s,l),(function(e,t){a(c,t)})):c.html(e),i(r,12,s,l,f,c,1,m),n(r,m,1)}))},s=function(t,o,s,l,c){$(t).on("submit",(function(t){t.preventDefault();var o=$("#course-lists"),r=$("#load-more"),d=$("#filter-category").find(":selected").text(),u=$(this).find("input").val();if("Semua Topik Pelatihan"!==d)var p=_.filter(s,(function(e){return-1!==e.course_category.toLowerCase().indexOf(d.toLowerCase())})),f=_.filter(p,(function(e){return-1!==e.course_title.toLowerCase().indexOf(u.toLowerCase())}));else f=_.filter(s,(function(e){return-1!==e.course_title.toLowerCase().indexOf(u.toLowerCase())}));var v=f.length,m=Math.ceil(v/12);o.html(""),0!==f.length?$.each(f.slice(l,c),(function(e,t){a(o,t)})):o.html(e),i(r,12,l,c,f,o,1,m),n(r,m,1)})),$(o).on("click",(function(e){$(t).trigger("submit")}))},n=function(e,a,t){a>0&&t<a?e.removeClass("visually-hidden"):e.addClass("visually-hidden")},l=function(e){$(e).on("click",(function(e){var a=$(this),t=a.attr("data-event"),i=a.parents("div.card-body").find(".course-price").html(),o=a.parents("div.card-body").find("h6.course-title").html(),s=a.parents("div.card-body").find(".course-lp-name").html();void 0!==window.DataLayer&&dataLayer.push({event:t,course_title:o,price:i,lp_name:s})}))};function c(e){$(document).ready((function(){var e=$("#course-lists"),t=$("#load-more"),c=$("#filter-category"),r=$("#form-search"),d=$("#button-search");$.getJSON("https://public-prakerja.oss-ap-southeast-5.aliyuncs.com/skill_week/list_pelatihan_skillweek.json",(function(u){var p=u.length,f=Math.ceil(p/12);setTimeout((function(){e.html(""),$.each(u.slice(0,12),(function(t,i){a(e,i)})),n(t,f,1),i(t,12,0,12,u,e,1,f),function(e){for(var a,t={},i=[],o=0;a=e[o++];){var s=a.course_category;s in t||(t[s]=1,i.push(s))}i=i.sort(),$.each(i,(function(e,a){$("#filter-category").append('<option value="'+a+'">'+a+"</option>")}))}(u),o(c,u,0,12),s(r,d,u,0,12),l(".see-detail-course"),l(".apply-course")}),1500)})).fail((function(){}))}))}!function(e){e(window).scroll((function(){var a=e(window).scrollTop();a>=60?e("header").addClass("header-fixed"):e("header").removeClass("header-fixed"),a>=400?e(".scroll-top").addClass("is-show"):e(".scroll-top").removeClass("is-show")})),e(".scroll-top").on("click",(function(){e(window).scrollTop(0)})),e(".menu").click((function(){e(this).toggleClass("open"),e(".navbar-custom").toggleClass("m-menu"),e("body").toggleClass("freeze")})),e(".navbar-custom").on("click",".nav-link",(function(a){e(".menu").removeClass("open"),e(".navbar-custom").removeClass("m-menu"),e("body").removeClass("freeze")})),c()}(jQuery);
//# sourceMappingURL=function-min.js.map