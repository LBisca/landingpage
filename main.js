$(document).ready(function(){let e=1,s=document.getElementById("slider").children.length;$("#slider-bar-progress").addClass("progressing");let a=setInterval(()=>{l()},4e3);const l=()=>{$("#slider-bar-progress").toggleClass("progressing"),$(`#slide_${e}`).removeClass("hidden"),$(`#slide-description_${e}`).removeClass("hidden"),$("#header-detail").addClass("rotate"),setTimeout(()=>{$("#header-detail").removeClass("rotate")},550),setTimeout(()=>{$("#slider-bar-progress").toggleClass("progressing")},100);for(let a=0;a<s;a++)a!==e&&($(`#slide-description_${a}`).addClass("hidden"),$(`#slide_${a}`).addClass("hidden"));e<s-1?e++:e=0};$("#next-slide").click(()=>{l(),console.log("click"),clearInterval(a),a=setInterval(()=>{l()},4e3)});let t=1,r=1,o=$(`#carousel-holder_${t}`).children().length;console.log(o);const d=e=>{t!==e+1&&($(".btn-navigate-carousel").toggleClass("fade"),setTimeout(()=>{$(".btn-navigate-carousel").toggleClass("fade")},500)),t=e+1,o=$(`#carousel-holder_${t}`).children().length,r=1,$("#menu-holder").find(".carousel-holder").each((s,a)=>{s!==e?($(a).removeClass("active"),$(a).css("display","none")):($(a).css("display","flex"),setTimeout(()=>{$(a).addClass("active")},100)),$(a).find(".carousel").each((e,s)=>{$(s).removeClass("active right left far"),0===e&&$(s).addClass("active"),1===e&&$(s).addClass("right"),e>1&&$(s).addClass("right far")})}),$(".carousel-menu").find("P").each((s,a)=>{s!==e?$(a).removeClass("active"):$(a).addClass("active")}),i()},i=()=>{r<o?setTimeout(()=>{$(".next").addClass("active")},400):r===o&&$(".next").removeClass("active"),r>1?setTimeout(()=>{$(".previous").addClass("active")},400):1===r&&$(".previous").removeClass("active")};$(".next").click(()=>{$(`.carousel_${r-1}`).addClass("left far"),$(`.carousel_${r}`).addClass("left"),$(`.carousel_${r}`).removeClass("active"),$(`.carousel_${r+1}`).removeClass("right left"),$(`.carousel_${r+2}`).removeClass("far"),$(`.carousel_${r+1}`).addClass("active"),r++,$(".btn-navigate-carousel").toggleClass("fade"),setTimeout(()=>{$(".btn-navigate-carousel").toggleClass("fade")},400),i()}),$(".previous").click(()=>{$(`.carousel_${r+1}`).addClass("right far"),$(`.carousel_${r}`).addClass("right"),$(`.carousel_${r}`).removeClass("active"),$(`.carousel_${r-1}`).removeClass("right left"),$(`.carousel_${r-2}`).removeClass("far"),$(`.carousel_${r-1}`).addClass("active"),r--,$(".btn-navigate-carousel").toggleClass("fade"),setTimeout(()=>{$(".btn-navigate-carousel").toggleClass("fade")},400),i()}),$("#menu_1").click(()=>{d(0)}),$("#menu_2").click(()=>{d(1)}),$("#menu_3").click(()=>{d(2)})});