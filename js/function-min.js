var e="<div class='col-12 col-md-9'><div class='alert alert-info' role='alert'><div class='d-flex'><div class='pe-3'><i class='bi bi-info-circle-fill fs-4'></i></div><div><h6 class='alert-heading'>Pelatihan tidak ditemukan</h6><p>Mohon periksa kembali kata kunci Anda dan pastikan ejaan dan tata bahasa yang benar. Anda juga dapat mencoba menggunakan kata kunci yang berbeda atau mencari di topik pelatihan yang berbeda.</p></div></div></div></div>",a=function(e,a){var t="Online - LMS"==a.course_type?"text-bg-warning":"text-bg-help",o="https://docs.google.com/forms/d/e/1FAIpQLScc3v4je6bcRHA_0H5ItpjaY_x8ump5K9pdc27ylti4pQo0xQ/viewform?usp=pp_url&entry.841678428="+a.course_title.split(" ").join("+"),i="<div class='col-12 col-md-6 col-xl-4 col-xxl-3 mb-4 mb-lg-5'><div class='card pds-card'><div class='card-cover'><img loading='lazy' src='"+a.course_image+"' class='card-img-top' alt='"+a.course_title+"'><div class='card-cover-overlay'><div class='d-flex justify-content-between'><div><div class='card-company'><img class='me-1' src='"+a.lp_logo+"' alt='"+a.lp_name+"'><span class='course-lp-name'>"+a.lp_name+"</span></div></div><div><span class='badge rounded-pill "+t+"'>"+a.course_type+"</span></div></div></div></div><div class='card-body'><h6 class='mb-2 course-title text-capitalize' title='"+a.course_title+"'>"+a.course_title+"</h6><div><div class='course-price card-price mb-1 color-secondary'>"+a.course_price+"</div></div><div class='mt-3 text-center'><a href='"+o+"&utm_source=skillsweek&utm_medium=landing-page&utm_content=button' class='apply-course btn btn-primary w-100 mb-2' target='_blank' rel='nofollow' data-event='skill_week_apply_course'>Dapatkan Voucher Pelatihan</a></div>";$(e).append(i)},t=function(e,t,o,i,s,c,r,l){$(e).unbind("click"),$(e).on("click",(function(){var d=$(e);o=i,i+=t,r+=1,$.each(s.slice(o,i),(function(e,t){a(c,t)})),n(d,l,r)}))},o=function(o,i,s,c){$(o).on("change",(function(o){var r=$("#course-lists"),l=$("#load-more"),d=(r=$("#course-lists"),$(this).find(":selected").text()),u=$("#filter-keyword").val();if("Semua Kategori"!==d)var f=_.filter(i,(function(e){return-1!==e.course_category.toLowerCase().indexOf(d.toLowerCase())})),v=_.filter(f,(function(e){return-1!==e.course_title.toLowerCase().indexOf(u.toLowerCase())}));else v=_.filter(i,(function(e){return-1!==e.course_title.toLowerCase().indexOf(u.toLowerCase())}));var p=v.length,m=Math.ceil(p/12);r.html(""),0!==v.length?$.each(v.slice(s,c),(function(e,t){a(r,t)})):r.html(e),t(l,12,s,c,v,r,1,m),n(l,m,1)}))},i=function(o,i,s,c,r){$(o).on("submit",(function(o){o.preventDefault();var i=$("#course-lists"),l=$("#load-more"),d=$("#filter-category").find(":selected").text(),u=$(this).find("input").val();if("Semua Kategori"==d)var f=_.filter(s,(function(e){return-1!==e.course_category.toLowerCase().indexOf(d.toLowerCase())})),v=_.filter(f,(function(e){return-1!==e.course_title.toLowerCase().indexOf(u.toLowerCase())}));else v=_.filter(s,(function(e){return-1!==e.course_title.toLowerCase().indexOf(u.toLowerCase())}));var p=v.length,m=Math.ceil(p/12);i.html(""),0!==v.length?$.each(v.slice(c,r),(function(e,t){a(i,t)})):i.html(e),t(l,12,c,r,v,i,1,m),n(l,m,1)})),$(i).on("click",(function(e){$(o).trigger("submit")}))},n=function(e,a,t){a>0&&t<a?e.removeClass("visually-hidden"):e.addClass("visually-hidden")},s=function(e){$(e).on("click",(function(e){var a=$(this),t=a.attr("data-event"),o=a.parents("div.card-body").find(".course-price").html(),i=a.parents("div.card-body").find("h6.course-title").html(),n=a.parents("div.card-body").find(".course-lp-name").html();void 0!==window.DataLayer&&dataLayer.push({event:t,course_title:i,price:o,lp_name:n})}))};function c(e){$(document).ready((function(){var e=$("#course-lists"),c=$("#load-more"),r=$("#filter-category"),l=$("#form-search"),d=$("#button-search");$.getJSON("js/course.json",(function(u){var f=u.length,v=Math.ceil(f/12);setTimeout((function(){e.html(""),$.each(u.slice(0,12),(function(t,o){a(e,o)})),n(c,v,1),t(c,12,0,12,u,e,1,v),function(e){for(var a,t={},o=[],i=0;a=e[i++];){var n=a.course_category;n in t||(t[n]=1,o.push(n))}o=o.sort(),$.each(o,(function(e,a){$("#filter-category").append('<option value="'+a+'">'+a+"</option>")}))}(u),o(r,u,0,12),i(l,d,u,0,12),s(".see-detail-course"),s(".apply-course")}),1500)})).fail((function(){}))}))}!function(e){e(window).scroll((function(){var a=e(window).scrollTop();a>=60?e("header").addClass("header-fixed"):e("header").removeClass("header-fixed"),a>=400?e(".scroll-top").addClass("is-show"):e(".scroll-top").removeClass("is-show")})),e(".scroll-top").on("click",(function(){e(window).scrollTop(0)})),e(".menu").click((function(){e(this).toggleClass("open"),e(".navbar-custom").toggleClass("m-menu"),e("body").toggleClass("freeze")})),e(".navbar-custom").on("click",".nav-link",(function(a){e(".menu").removeClass("open"),e(".navbar-custom").removeClass("m-menu"),e("body").removeClass("freeze")})),c()}(jQuery);
//# sourceMappingURL=function-min.js.map