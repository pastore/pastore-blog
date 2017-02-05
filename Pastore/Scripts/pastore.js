$(function () {
    //open search
    $('.open_search i.fa')
        .on('click',
            function() {
                $('.search_box').is(":visible") ? $('.search_box').fadeOut(300) : $('.search_box').fadeIn(300);
            });
    //close search
    $('.close_search')
        .on('click',
            function(e) {
                e.preventDefault();
                $('.search_box').fadeOut(300);
            });
});

(function(window) {
    var sidePanel,
    isFixed = false,
    lastPositionWindowScroll = 0,
    fixedPositionWindowScroll = 0;
    window.addEventListener("DOMContentLoaded", function () {
        sidePanel = document.querySelector(".js_category_fixed");
    });
    window.addEventListener("scroll", function (e) {
        var topLineContent = document.querySelector(".js_top_line_content");
        var homeBody = document.querySelector("body");
        var offsetTopSidePanel = sidePanel.getBoundingClientRect().top;
        var fixedPositionTop = 80;

        //make fixed header
        if (this.scrollY > 0) {
            homeBody.style.paddingTop = "60px";
            topLineContent.classList.add("top_line_content--small");
            topLineContent.closest(".top_line").classList.add("fixed");
        } else {
            homeBody.style.paddingTop = "0";
            topLineContent.classList.remove("top_line_content--small");
            topLineContent.closest(".top_line").classList.remove("fixed");
        }
        //make fixed sidepanel 
        if (offsetTopSidePanel <= fixedPositionTop) {
            if (!isFixed) {
                isFixed = true;
                fixedPositionWindowScroll = this.scrollY;
            }
            sidePanel.classList.add("fixed");
            sidePanel.style.top = fixedPositionTop + "px";
            if (lastPositionWindowScroll > this.scrollY) {
                if (this.scrollY < fixedPositionWindowScroll) {
                    isFixed = false;
                    sidePanel.classList.remove("fixed");
                    sidePanel.style.top = "";
                }
            }
        } else {
            isFixed = false;
            sidePanel.classList.remove("fixed");
            sidePanel.style.top = "";
        }
        lastPositionWindowScroll = this.scrollY;
    });
})(window);

(function(window) {
    var button, navTopMenu;
    window.addEventListener("DOMContentLoaded", function () {
        button = document.querySelector(".js_open_top_nav_menu");
        navTopMenu = document.querySelector(".js_top_nav_list");
        var absoluteLinks = [].slice.call(document.querySelectorAll(".top_nav_item--absolute"));
        button.addEventListener("click", function (e) {
            e.preventDefault();
            var counter = 61;
            if (hasClass(navTopMenu, "open")) {
                navTopMenu.classList.remove("open");
            } else {
                navTopMenu.classList.add("open");
                absoluteLinks.forEach(function (element) {
                    element.style.top = counter + "px";
                    counter += 41;
                });
            }
        });
    });
    window.addEventListener("resize", function() {
        var that = this;
        if (that.innerWidth > 767) {
            navTopMenu.classList.remove("open");
        }
    });
})(window);

function hasClass(element, cls) {
    return (" " + element.className + " ").indexOf(" " + cls + " ") > -1;
}
