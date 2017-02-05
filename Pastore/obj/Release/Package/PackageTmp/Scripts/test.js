(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-34016412-14', 'auto');
ga('send', 'pageview');

function Init(e) {
    1 != e && (_afterResize(), _slider_full(), _topNav(), _sideNav(), _stickyFooter(), _infiniteScroll()), _owl_carousel(), _flexslider(), _popover(), _lightbox(), _mixitup(), _animate(), _onepageNav(), _scrollTo(!1, 0), _parallax(), _video(), _youtubeBG(), _toggle(), _placeholder(), _wrotate(), _lazyload(), _misc(), _countDown(), _masonryGallery(), _toastr(!1, !1, !1, !1), _charts(), _select2(), _form(), _pickers(), _editors(), _pajinate(), _zoom(), _autosuggest(), _stepper(), _slimScroll(), _modalAutoLoad(), _bgimage(), _widget_flickr(), _widget_twitter(), _widget_facebook(), _widget_dribbble(), _widget_media(), $("a[data-toggle=tooltip], button[data-toggle=tooltip], span[data-toggle=tooltip]").tooltip()
}

function _afterResize() {
    $(window).load(function () {
        "use strict";
        $(window).resize(function () {
            window.afterResizeApp && clearTimeout(window.afterResizeApp), window.afterResizeApp = setTimeout(function () {
                _slider_full(), window.width = $(window).width(), $(".flexslider").length > 0 && $(".flexslider").resize()
            }, 300)
        })
    })
}

function loadScript(e, t) {
    if (_arr[e]) t && t();
    else {
        _arr[e] = !0;
        var a = document.getElementsByTagName("body")[0],
            r = document.createElement("script");
        r.type = "text/javascript", r.src = e, r.onload = t, a.appendChild(r)
    }
}

function _slider_full() {
    _headerHeight = 0, $("#header").hasClass("transparent") || $("#header").hasClass("translucent") ? _headerHeight = 0 : (_headerHeight = $("#header").outerHeight(), $("#topBar").length > 0 && (_headerHeight += $("#topBar").outerHeight())), _screenHeight = $(window).height() - _headerHeight, $("#slider.fullheight").height(_screenHeight)
}

function _topNav() {
    function e() {
        _scrollTop = $(document).scrollTop(), _scrollTop > 100 ? $("#toTop").is(":hidden") && $("#toTop").show() : $("#toTop").is(":visible") && $("#toTop").hide()
    }

    function t() {
        $("#sidepanel_overlay").unbind(), $("#sidepanel_overlay").bind("click", function () {
            $("a#sidepanel_btn").trigger("click")
        })
    }
    window.scrollTop = 0;
    var a = $("#header");
    $(window).scroll(function () {
        e()
    });
    var r = !1;
    if ($("#topMain a.dropdown-toggle").bind("click", function (e) {
            "#" == $(this).attr("href") && e.preventDefault(), r = $(this).parent().hasClass("resp-active"), $("#topMain").find(".resp-active").removeClass("resp-active"), r || $(this).parents("li").addClass("resp-active")
    }), $("li.search i.fa").click(function () {
            $("#header .search-box").is(":visible") ? $("#header .search-box").fadeOut(300) : ($(".search-box").fadeIn(300), $("#header .search-box form input").focus(), $("#header li.quick-cart div.quick-cart-box").is(":visible") && $("#header li.quick-cart div.quick-cart-box").fadeOut(300))
    }), 0 != $("#header li.search i.fa").size() && ($("#header .search-box, #header li.search i.fa").on("click", function (e) {
            e.stopPropagation()
    }), $("body").on("click", function () {
            $("#header li.search .search-box").is(":visible") && $("#header .search-box").fadeOut(300)
    })), $(document).bind("click", function () {
            $("#header li.search .search-box").is(":visible") && $("#header .search-box").fadeOut(300)
    }), $("#closeSearch").bind("click", function (e) {
            e.preventDefault(), $("#header .search-box").fadeOut(300)
    }), $("button#page-menu-mobile").bind("click", function () {
            $(this).next("ul").slideToggle(150)
    }), $("li.quick-cart>a").click(function (e) {
            e.preventDefault();
            var t = $("li.quick-cart div.quick-cart-box");
            t.is(":visible") ? t.fadeOut(300) : (t.fadeIn(300), $("li.search .search-box").is(":visible") && $(".search-box").fadeOut(300))
    }), 0 != $("li.quick-cart>a").size() && ($("li.quick-cart").on("click", function (e) {
            e.stopPropagation()
    }), $("body").on("click", function () {
            $("li.quick-cart div.quick-cart-box").is(":visible") && $("li.quick-cart div.quick-cart-box").fadeOut(300)
    })), $("#page-menu ul.menu-scrollTo>li").bind("click", function (e) {
            var t = $("a", this).attr("href");
            $("a", this).hasClass("external") || (e.preventDefault(), $("#page-menu ul.menu-scrollTo>li").removeClass("active"), $(this).addClass("active"), $(t).length > 0 && (_padding_top = 0, $("#header").hasClass("sticky") && (_padding_top = $(t).css("padding-top"), _padding_top = _padding_top.replace("px", "")), $("html,body").animate({
        scrollTop: $(t).offset().top - _padding_top
    }, 800, "easeInOutExpo")))
    }), a.hasClass("bottom") ? (a.addClass("dropup"), window.homeHeight = $(window).outerHeight() - 55, a.hasClass("sticky") && (window.isOnTop = !0, $(window).scroll(function () {
            $(document).scrollTop() > window.homeHeight / 2 ? a.removeClass("dropup") : a.addClass("dropup")
    }), $(window).scroll(function () {
            $(document).scrollTop() > window.homeHeight ? window.isOnTop === !0 && ($("#header").addClass("fixed"), a.removeClass("dropup"), window.isOnTop = !1) : window.isOnTop === !1 && ($("#header").removeClass("fixed"), a.addClass("dropup"), window.isOnTop = !0)
    }), $(window).resize(function () {
            window.homeHeight = $(window).outerHeight()
    }))) : a.hasClass("sticky") ? $(window).scroll(function () {
            if (window.width > 768) {
                var e = $(document).scrollTop();
                _topBar_H = $("#topBar").outerHeight() || 0, e > _topBar_H ? (a.addClass("fixed"), _header_H = a.outerHeight() || 0, a.hasClass("transparent") || a.hasClass("translucent") || $("body").css({
                    "padding-top": _header_H + "px"
    })) : (a.hasClass("transparent") || a.hasClass("translucent") || $("body").css({
                    "padding-top": "0px"
    }), a.removeClass("fixed"))
    }
    }) : a.hasClass("static"), $("#slidetop a.slidetop-toggle").bind("click", function () {
            $("#slidetop .container").slideToggle(150, function () {
                $("#slidetop .container").is(":hidden") ? $("#slidetop").removeClass("active") : $("#slidetop").addClass("active")
    })
    }), $(document).keyup(function (e) {
            27 == e.keyCode && $("#slidetop").hasClass("active") && $("#slidetop .container").slideToggle(150, function () {
                $("#slidetop").removeClass("active")
    })
    }), $("a#sidepanel_btn").bind("click", function (e) {
            e.preventDefault(), n = "right", $("#sidepanel").hasClass("sidepanel-inverse") && (n = "left"), $("#sidepanel").is(":hidden") ? ($("body").append('<span id="sidepanel_overlay"></span>'), "left" == n ? $("#sidepanel").stop().show().animate({
        left: "0px"
    }, 150) : $("#sidepanel").stop().show().animate({
        right: "0px"
    }, 150)) : ($("#sidepanel_overlay").remove(), "left" == n ? $("#sidepanel").stop().animate({
        left: "-300px"
    }, 300) : $("#sidepanel").stop().animate({
        right: "-300px"
    }, 300), setTimeout(function () {
                $("#sidepanel").hide()
    }, 500)), t()
    }), $("#sidepanel_close").bind("click", function (e) {
            e.preventDefault(), $("a#sidepanel_btn").trigger("click")
    }), $(document).keyup(function (e) {
            27 == e.keyCode && $("#sidepanel").is(":visible") && $("a#sidepanel_btn").trigger("click")
    }), $("#menu_overlay_open").length > 0) {
        var i = $("html").hasClass("ie9") ? !0 : !1;
        1 == i && $("#topMain").hide(), $("#menu_overlay_open").bind("click", function (e) {
            e.preventDefault(), $("body").addClass("show-menu"), 1 == i && $("#topMain").show()
        }), $("#menu_overlay_close").bind("click", function (e) {
            e.preventDefault(), $("body").hasClass("show-menu") && $("body").removeClass("show-menu"), 1 == i && $("#topMain").hide()
        }), $(document).keyup(function (e) {
            27 == e.keyCode && ($("body").hasClass("show-menu") && $("body").removeClass("show-menu"), 1 == i && $("#topMain").hide())
        })
    }
    if ($("#sidebar_vertical_btn").length > 0 && $("body").hasClass("menu-vertical-hide")) {
        if (_paddingStatusL = $("#mainMenu.sidebar-vertical").css("left"), _paddingStatusR = $("#mainMenu.sidebar-vertical").css("right"), parseInt(_paddingStatusL) < 0) var n = "left";
        else if (parseInt(_paddingStatusR) < 0) var n = "right";
        else var n = "left";
        $("#sidebar_vertical_btn").bind("click", function (e) {
            _paddingStatus = $("#mainMenu.sidebar-vertical").css(n), parseInt(_paddingStatus) < 0 ? "right" == n ? $("#mainMenu.sidebar-vertical").stop().animate({
                right: "0px"
            }, 200) : $("#mainMenu.sidebar-vertical").stop().animate({
                left: "0px"
            }, 200) : "right" == n ? $("#mainMenu.sidebar-vertical").stop().animate({
                right: "-263px"
            }, 200) : $("#mainMenu.sidebar-vertical").stop().animate({
                left: "-263px"
            }, 200)
        }), $(window).scroll(function () {
            _paddingStatus = parseInt($("#mainMenu.sidebar-vertical").css(n)), _paddingStatus >= 0 && ("right" == n ? $("#mainMenu.sidebar-vertical").stop().animate({
                right: "-263px"
            }, 200) : $("#mainMenu.sidebar-vertical").stop().animate({
                left: "-263px"
            }, 200))
        })
    }
    $("#topBar").length > 0 && $("#topNav ul").addClass("has-topBar"), $(window).scroll(function () {
        window.width < 769 && ($("#header li.quick-cart div.quick-cart-box").is(":visible") && $("#header li.quick-cart div.quick-cart-box").fadeOut(0), $("#header li.search .search-box").is(":visible") && $("#header .search-box").fadeOut(0))
    })
}

function _sideNav() {
    $("div.side-nav").each(function () {
        var e = $("ul", this);
        $("button", this).bind("click", function () {
            e.slideToggle(300)
        })
    }), $("div.side-nav>ul>li>a.dropdown-toggle").bind("click", function (e) {
        e.preventDefault(), $(this).next("ul").slideToggle(200), $(this).closest("li").toggleClass("active")
    })
}

function _animate() {
    if ($("body").hasClass("enable-animation")) {
        var e = new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 90,
            mobile: !1,
            live: !0
        });
        e.init()
    }
    $(".countTo").appear(function () {
        var e = $(this),
            t = e.attr("data-from") || 0,
            a = e.attr("data-speed") || 1300,
            r = e.attr("data-refreshInterval") || 60;
        e.countTo({
            from: parseInt(t),
            to: e.html(),
            speed: parseInt(a),
            refreshInterval: parseInt(r)
        })
    })
}

function _onepageNav() {
    var e = $("#topMain.nav-onepage");
    e.length > 0 && loadScript(plugin_path + "$.nav.min.js", function () {
        $(e).onePageNav({
            currentClass: "active",
            changeHash: !1,
            scrollSpeed: 750,
            scrollThreshold: .5,
            filter: ":not(.external)",
            easing: "easeInOutExpo"
        })
    })
}

function _owl_carousel() {
    var _container = $("div.owl-carousel");
    _container.length > 0 && loadScript(plugin_path + "owl-carousel/owl.carousel.min.js", function () {
        _container.each(function () {
            function progressBar(e) {
                $elem = e, buildProgressBar(), start()
            }

            function buildProgressBar() {
                $progressBar = $("<div>", {
                    id: "progressBar"
                }), $bar = $("<div>", {
                    id: "bar"
                }), $progressBar.append($bar).prependTo($elem)
            }

            function start() {
                percentTime = 0, isPause = !1, tick = setInterval(interval, 10)
            }

            function interval() {
                isPause === !1 && (percentTime += 1 / time, $bar.css({
                    width: percentTime + "%"
                }), percentTime >= 100 && $elem.trigger("owl.next"))
            }

            function pauseOnDragging() {
                isPause = !0
            }

            function moved() {
                clearTimeout(tick), start()
            }
            var slider = $(this),
                options = slider.attr("data-plugin-options"),
                $opt = eval("(" + options + ")");
            if ("true" == $opt.progressBar) var afterInit = progressBar;
            else var afterInit = !1;
            var defaults = {
                items: 5,
                itemsCustom: !1,
                itemsDesktop: [1199, 4],
                itemsDesktopSmall: [980, 3],
                itemsTablet: [768, 2],
                itemsTabletSmall: !1,
                itemsMobile: [479, 1],
                singleItem: !0,
                itemsScaleUp: !1,
                slideSpeed: 200,
                paginationSpeed: 800,
                rewindSpeed: 1e3,
                autoPlay: !1,
                stopOnHover: !1,
                navigation: !1,
                navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                rewindNav: !0,
                scrollPerPage: !1,
                pagination: !0,
                paginationNumbers: !1,
                responsive: !0,
                responsiveRefreshRate: 200,
                responsiveBaseWidth: window,
                baseClass: "owl-carousel",
                theme: "owl-theme",
                lazyLoad: !1,
                lazyFollow: !0,
                lazyEffect: "fade",
                autoHeight: !1,
                jsonPath: !1,
                jsonSuccess: !1,
                dragBeforeAnimFinish: !0,
                mouseDrag: !0,
                touchDrag: !0,
                transitionStyle: !1,
                addClassActive: !1,
                beforeUpdate: !1,
                afterUpdate: !1,
                beforeInit: !1,
                afterInit: afterInit,
                beforeMove: !1,
                afterMove: 0 == afterInit ? !1 : moved,
                afterAction: !1,
                startDragging: !1,
                afterLazyLoad: !1
            },
                config = $.extend({}, defaults, options, slider.data("plugin-options"));
            slider.owlCarousel(config).addClass("owl-carousel-init");
            var elem = $(this),
                time = 7
        })
    })
}

function _flexslider() {
    var e = $(".flexslider");
    e.length > 0 && loadScript(plugin_path + "slider.flexslider/$.flexslider-min.js", function () {
        if ($().flexslider) {
            var t = e.attr("data-controlNav"),
                a = e.attr("data-slideshowSpeed") || 7e3,
                r = e.attr("data-pauseOnHover") || !1;
            r = "true" == r ? !0 : !1, t = "thumbnails" == t ? "thumbnails" : "true" == t ? !0 : "false" == t ? !1 : !0, "thumbnails" == t || 0 == t ? _directionNav = !1 : _directionNav = !0, $(e).flexslider({
                animation: "slide",
                controlNav: t,
                slideshowSpeed: parseInt(a) || 7e3,
                directionNav: _directionNav,
                pauseOnHover: r,
                start: function (e) {
                    $(".flex-prev").html('<i class="fa fa-angle-left"></i>'), $(".flex-next").html('<i class="fa fa-angle-right"></i>')
                }
            }), e.resize()
        }
    })
}

function _popover() {
    $("a[data-toggle=popover]").bind("click", function (e) {
        $(".popover-title .close").remove(), e.preventDefault()
    });
    var e = !1,
        t = !1;
    $("a[data-toggle=popover], button[data-toggle=popover]").popover({
        html: !0,
        trigger: "manual"
    }).click(function (a) {
        $(this).popover("show"), t = !1, e = !0, a.preventDefault()
    }), $(document).click(function (a) {
        e & t ? ($("a[data-toggle=popover], button[data-toggle=popover]").popover("hide"), e = t = !1) : t = !0
    }), $("a[data-toggle=popover], button[data-toggle=popover]").popover({
        html: !0,
        trigger: "manual"
    }).click(function (e) {
        $(this).popover("show"), $(".popover-title").append('<button type="button" class="close">&times;</button>'), $(".close").click(function (e) {
            $("a[data-toggle=popover], button[data-toggle=popover]").popover("hide")
        }), e.preventDefault()
    })
}

function _lightbox() {
    var e = $(".lightbox");
    e.length > 0 && loadScript(plugin_path + "magnific-popup/$.magnific-popup.min.js", function () {
        return "undefined" == typeof $.magnificPopup ? !1 : ($.extend(!0, $.magnificPopup.defaults, {
            tClose: "Close",
            tLoading: "Loading...",
            gallery: {
                tPrev: "Previous",
                tNext: "Next",
                tCounter: "%curr% / %total%"
            },
            image: {
                tError: "Image not loaded!"
            },
            ajax: {
                tError: "Content not loaded!"
            }
        }), void e.each(function () {
            var e = $(this),
                t = e.attr("data-plugin-options"),
                a = {},
                r = {
                    type: "image",
                    fixedContentPos: !1,
                    fixedBgPos: !1,
                    mainClass: "mfp-no-margins mfp-with-zoom",
                    closeOnContentClick: !0,
                    closeOnBgClick: !0,
                    image: {
                        verticalFit: !0
                    },
                    zoom: {
                        enabled: !1,
                        duration: 300
                    },
                    gallery: {
                        enabled: !1,
                        navigateByImgClick: !0,
                        preload: [0, 1],
                        arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                        tPrev: "Previous",
                        tNext: "Next",
                        tCounter: '<span class="mfp-counter">%curr% / %total%</span>'
                    }
                };
            e.data("plugin-options") && (a = $.extend({}, r, t, e.data("plugin-options"))), $(this).magnificPopup(a)
        }))
    })
}

function _scrollTo(e, t) {
    0 == e ? ($("a.scrollTo").bind("click", function (e) {
        e.preventDefault();
        var t = $(this).attr("href"),
            a = $(this).attr("data-offset") || 0;
        "#" != t && "#top" != t && $("html,body").animate({
            scrollTop: $(t).offset().top - parseInt(a)
        }, 800, "easeInOutExpo"), "#top" == t && $("html,body").animate({
            scrollTop: 0
        }, 800, "easeInOutExpo")
    }), $("#toTop").bind("click", function (e) {
        e.preventDefault(), $("html,body").animate({
            scrollTop: 0
        }, 800, "easeInOutExpo")
    })) : $("html,body").animate({
        scrollTop: $(e).offset().top - t
    }, 800, "easeInOutExpo")
}

function _parallax() {
    $().parallax && ($(".parallax-1").parallax("50%", "0.1"), $(".parallax-2").parallax("50%", "0.2"), $(".parallax-3").parallax("50%", "0.3"), $(".parallax-4").parallax("50%", "0.4"));
    var e = $("#slider");
    if (e.length > 0 && e.hasClass("parallax-slider")) {
        e.offset().top;
        $(window).scroll(function () {
            var e = $(document).scrollTop();
            if (768 > e) {
                var t = $("#slider").height();
                $("#slider>div").css("top", .5 * e), $("#slider>div").css("opacity", 1 - e / t * 1)
            }
        })
    }
}

function _video() {
    if ($("section.section-video").length > 0) {
        var e = $("section.section-video .section-container-video>video");
        _w = $(window).width(), e.width(_w)
    }
}

function _youtubeBG() {
    var e = $("#YTPlayer");
    e.length > 0 && loadScript(plugin_path + "$.mb.YTPlayer.min.js", function () {
        if ($().mb_YTPlayer) {
            var e = !1;
            /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent), e === !1 ? ($(".player").mb_YTPlayer(), $("#video-volume").bind("click", function (e) {
                e.preventDefault(), $("#YTPlayer").toggleVolume()
            }), $("#video-volume").bind("click", function () {
                $("i.fa", this).hasClass("fa-volume-down") ? ($("i.fa", this).removeClass("fa-volume-down"), $("i.fa", this).removeClass("fa-volume-up"), $("i.fa", this).addClass("fa-volume-up")) : ($("i.fa", this).removeClass("fa-volume-up"), $("i.fa", this).removeClass("fa-volume-v"), $("i.fa", this).addClass("fa-volume-down"))
            })) : $(".player , #video-volume").hide()
        }
    })
}

function _mixitup() {
    var e = $(".mix-grid");
    e.length > 0 && loadScript(plugin_path + "mixitup/$.mixitup.min.js", function () {
        $().mixitup && (e.mixitup(), $("ul.mix-filter a").bind("click", function (e) {
            e.preventDefault()
        }))
    })
}

function _toggle() {
    var e = 25;
    $("div.toggle.active > p").addClass("preview-active"), $("div.toggle.active > div.toggle-content").slideDown(400), $("div.toggle > label").click(function (t) {
        var a = $(this).parent(),
            r = $(this).parents("div.toggle"),
            i = !1,
            n = r.hasClass("toggle-accordion");
        if (n && "undefined" != typeof t.originalEvent && r.find("div.toggle.active > label").trigger("click"), a.toggleClass("active"), a.find("> p").get(0)) {
            i = a.find("> p");
            var o = i.css("height"),
                s = i.css("height");
            i.css("height", "auto"), i.css("height", o)
        }
        var l = a.find("> div.toggle-content");
        a.hasClass("active") ? ($(i).animate({
            height: s
        }, 350, function () {
            $(this).addClass("preview-active")
        }), l.slideDown(350)) : ($(i).animate({
            height: e
        }, 350, function () {
            $(this).removeClass("preview-active")
        }), l.slideUp(350))
    })
}

function _placeholder() {
    -1 != navigator.appVersion.indexOf("MSIE") && $("[placeholder]").focus(function () {
        var e = $(this);
        e.val() == e.attr("placeholder") && (e.val(""), e.removeClass("placeholder"))
    }).blur(function () {
        var e = $(this);
        ("" == e.val() || e.val() == e.attr("placeholder")) && (e.addClass("placeholder"), e.val(e.attr("placeholder")))
    }).blur()
}

function _wrotate() {
    $(".word-rotator").each(function () {
        var e = $(this),
            t = e.find(".items"),
            a = t.find("> span"),
            r = a.eq(0),
            i = r.clone(),
            n = $(this).height(),
            o = 1,
            s = 0,
            l = $(this).attr("data-delay") || 2e3;
        t.append(i), e.height(n).addClass("active"), setInterval(function () {
            s = o * n, t.animate({
                top: -s + "px"
            }, 300, "easeOutQuad", function () {
                o++, o > a.length && (t.css("top", 0), o = 1)
            })
        }, l)
    });
    var e = $("span.rotate");
    e.length > 0 && loadScript(plugin_path + "text-rotator/$.simple-text-rotator.min.js", function () {
        e.each(function () {
            var e = $(this),
                t = e.attr("data-animation") || "fade",
                a = e.attr("data-speed") || 2e3;
            e.textrotator({
                animation: t,
                speed: parseInt(a)
            })
        })
    })
}

function _lazyload() {
    var e = $("img.lazy");
    e.length > 0 && loadScript(plugin_path + "lazyload/$.lazyload.min.js", function () {
        $().lazyload && e.each(function () {
            var e = $(this),
                t = e.attr("data-effect") || "fadeIn";
            e.lazyload({
                effect: t
            })
        })
    })
}

function _misc() {
    $("#portfolio").length > 0 && $("#portfolio .item-box .owl-carousel").each(function () {
        $(this).parent().parent().find(".item-box-desc").css({
            "padding-top": "29px"
        })
    }), $().masonry && $(".masonry").masonry();
    var e = $("#portfolio.portfolio-isotope");
    e.length > 0 && loadScript(plugin_path + "isotope/isotope.pkgd.min.js", function () {
        function e() {
            _dw = $(document).width(), t.hasClass("fullwidth") ? (_w = t.width(), _wItem = _w / _cols, _dw < 760 && (_wItem = _w / 2), _dw < 480 && (_wItem = $("#portfolio").width()), $("#portfolio>.portfolio-item").css({
                width: _wItem
            })) : (_mR = parseInt($("#portfolio>.portfolio-item").css("margin-right")), _w = $("#portfolio").closest(".container").width(), _wItem = _w / _cols - _mR, _dw < 760 && (_wItem = _w / 2 - _mR), _dw < 480 && (_wItem = _w), $("#portfolio.portfolio-isotope").css({
                width: _w
            }), $("#portfolio>.portfolio-item").css({
                width: _wItem
            })), $(".flexslider").length > 0 && $(".flexslider").resize()
        }
        if ($().isotope) {
            var t = $("#portfolio");
            t.hasClass("portfolio-isotope-2") ? _cols = 2 : t.hasClass("portfolio-isotope-3") ? _cols = 3 : t.hasClass("portfolio-isotope-4") ? _cols = 4 : t.hasClass("portfolio-isotope-5") ? _cols = 5 : t.hasClass("portfolio-isotope-6") ? _cols = 6 : _cols = 4, e(), $(window).load(function () {
                setTimeout(function () {
                    t.isotope({
                        masonry: {},
                        filter: "*",
                        animationOptions: {
                            duration: 750,
                            easing: "linear",
                            queue: !1
                        }
                    }), $("#portfolio_filter>li>a").bind("click", function (e) {
                        e.preventDefault(), $("#portfolio_filter>li.active").removeClass("active"), $(this).parent("li").addClass("active");
                        var a = $(this).attr("data-filter");
                        t.isotope({
                            filter: a,
                            animationOptions: {
                                duration: 750,
                                easing: "linear",
                                queue: !1
                            }
                        })
                    })
                }, 50);
                setTimeout(function () {
                    t.isotope("layout")
                }, 300)
            }), $(window).resize(function () {
                window.afterResizeApp2 && clearTimeout(window.afterResizeApp2), window.afterResizeApp2 = setTimeout(function () {
                    e(), setTimeout(function () {
                        t.isotope("layout")
                    }, 300)
                }, 300)
            })
        }
    });
    var t = $("#blog.blog-isotope");
    if (t.length > 0 && loadScript(plugin_path + "isotope/isotope.pkgd.min.js", function () {
            function e() {
                _dw = $(document).width(), t.hasClass("fullwidth") ? (_w = $(document).width(), _wItem = _w / _cols, _dw < 760 && (_wItem = _w / 2), _dw < 480 && (_wItem = $("#blog").width()), $("#blog>.blog-post-item").css({
        width: _wItem
    })) : (_mR = parseInt($("#blog>.blog-post-item").css("margin-right")), _w = $("#blog").closest(".container").width(), _wItem = _w / _cols - _mR, _dw < 760 && (_wItem = _w / 2 - _mR), _dw < 480 && (_wItem = _w), $("#blog.blog-isotope").css({
        width: _w
    }), $("#blog>.blog-post-item").css({
        width: _wItem
    })), $(".flexslider").length > 0 && $(".flexslider").resize()
    }
            if ($().isotope) {
                var t = $("#blog");
                t.hasClass("blog-isotope-2") ? _cols = 2 : t.hasClass("blog-isotope-3") ? _cols = 3 : t.hasClass("blog-isotope-4") ? _cols = 4 : _cols = 4, e(), $(window).load(function () {
                    setTimeout(function () {
                        t.isotope({
        masonry: {},
        filter: "*",
        animationOptions: {
        duration: 750,
        easing: "linear",
        queue: !1
    }
    }), $("#blog_filter>li>a").bind("click", function (e) {
                            e.preventDefault(), $("#blog_filter>li.active").removeClass("active"), $(this).parent("li").addClass("active");
                            var a = $(this).attr("data-filter");
                            t.isotope({
        filter: a,
        animationOptions: {
        duration: 750,
        easing: "linear",
        queue: !1
    }
    })
    })
    }, 50);
                    setTimeout(function () {
                        t.isotope("layout")
    }, 300)
    }), $(window).resize(function () {
                    window.afterResizeApp2 && clearTimeout(window.afterResizeApp2), window.afterResizeApp2 = setTimeout(function () {
                        e(), setTimeout(function () {
                            t.isotope("layout")
    }, 300)
    }, 300)
    })
    }
    }), $(".box-flip").length > 0 && ($(".box-flip").each(function () {
            _height1 = $(".box1", this).outerHeight(), _height2 = $(".box2", this).outerHeight(), _height1 >= _height2 ? _height = _height1 : _height = _height2, $(this).css({
                "min-height": _height + "px"
    }), $(".box1", this).css({
                "min-height": _height + "px"
    }), $(".box2", this).css({
                "min-height": _height + "px"
    })
    }), $(".box-flip").hover(function () {
            $(this).addClass("flip")
    }, function () {
            $(this).removeClass("flip")
    })), $("div.sticky-side").length > 0) {
        var a = $("div.sticky-side");
        _h = a.height() / 2, a.css({
            "margin-top": "-" + _h + "px"
        })
    }
    $(".incr").bind("click", function (e) {
        e.preventDefault();
        var t = $(this).attr("data-for"),
            a = parseInt($(this).attr("data-max")),
            r = parseInt($("#" + t).val());
        a > r && $("#" + t).val(r + 1)
    }), $(".decr").bind("click", function (e) {
        e.preventDefault();
        var t = $(this).attr("data-for"),
            a = parseInt($(this).attr("data-min")),
            r = parseInt($("#" + t).val());
        r > a && $("#" + t).val(r - 1)
    }), $("a.toggle-default").bind("click", function (e) {
        e.preventDefault();
        var t = $(this).attr("href");
        $(t).is(":hidden") ? ($(t).slideToggle(200), $("i.fa", this).removeClass("fa-plus-square").addClass("fa-minus-square")) : ($(t).slideToggle(200), $("i.fa", this).removeClass("fa-minus-square").addClass("fa-plus-square"))
    });
    var r = $("input[type=file]");
    r.length > 0 && loadScript(plugin_path + "custom.fle_upload.js"), $("textarea.word-count").on("keyup", function () {
        var e = $(this),
            t = this.value.match(/\S+/g).length,
            a = e.attr("data-maxlength") || 200;
        if (t > parseInt(a)) {
            var r = e.val().split(/\s+/, 200).join(" ");
            e.val(r + " ")
        } else {
            var i = e.attr("data-info");
            if ("" == i || void 0 == i) {
                var n = e.next("div");
                $("span", n).text(t + "/" + a)
            } else $("#" + i).text(t + "/" + a)
        }
    })
}

function _stickyFooter() {
    function e() {
        t = r.height(), a = $(window).scrollTop() + $(window).height() - t + "px", $(document.body).height() + t > $(window).height() ? r.css({
            position: "absolute"
        }).stop().animate({
            top: a
        }, 0) : r.css({
            position: "static"
        })
    }
    if ($("#footer").hasClass("sticky")) {
        var t = 0,
            a = 0,
            r = $("#footer.sticky");
        e(), $(window).scroll(e).resize(e)
    }
}

function _countDown() {
    var e = $(".countdown"),
        t = $(".countdown-download");
    (e.length > 0 || t.length > 0) && loadScript(plugin_path + "countdown/$.countdown.pack.min.js", function () {
        e.each(function () {
            var e = $(this),
                t = e.attr("data-from"),
                a = e.attr("data-labels");
            if (a && (a = a.split(",")), t) {
                var r = new Date(t);
                $(this).countdown({
                    until: new Date(r),
                    labels: a || ["Years", "Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"]
                })
            }
        }), t.bind("click", function (e) {
            e.preventDefault();
            var t = $(this),
                a = t.attr("data-for"),
                r = $("#" + a + " span.download-wait>.countdown"),
                i = parseInt(t.attr("data-seconds")),
                n = t.attr("href");
            return t.fadeOut(250, function () {
                $("#" + a).fadeIn(250, function () {
                    var e = new Date;
                    e.setSeconds(e.getSeconds() + i), r.countdown({
                        until: e,
                        format: "S",
                        expiryUrl: n,
                        onExpiry: function () {
                            $("#" + a + " span.download-message").removeClass("hide"), $("#" + a + " span.download-wait").addClass("hide")
                        }
                    })
                })
            }), !1
        })
    })
}

function _masonryGallery() {
    $(".masonry-gallery").length > 0 && $(".masonry-gallery").each(function () {
        var e = $(this),
            t = 4;
        e.hasClass("columns-2") ? t = 2 : e.hasClass("columns-3") ? t = 3 : e.hasClass("columns-4") ? t = 4 : e.hasClass("columns-5") ? t = 5 : e.hasClass("columns-6") && (t = 6);
        var a = e.find("a:eq(0)").outerWidth(),
            r = e.attr("data-img-big"),
            i = e.width(),
            n = i / t;
        n = Math.floor(n), n * t >= i && e.css({
            "margin-right": "-1px"
        }), 6 > t && e.children("a").css({
            width: n + "px"
        }), parseInt(r) > 0 && (r = Number(r) - 1, e.find("a:eq(" + r + ")").css({
            width: 2 * a + "px"
        }), loadScript(plugin_path + "isotope/isotope.pkgd.min.js", function () {
            setTimeout(function () {
                e.isotope({
                    masonry: {
                        columnWidth: a
                    }
                }), e.isotope("layout")
            }, 1e3)
        }))
    })
}

function _toastr(e, t, a, r) {
    var i = $(".toastr-notify");
    (i.length > 0 || 0 != e) && loadScript(plugin_path + "toastr/toastr.js", function () {
        i.bind("click", function (e) {
            e.preventDefault();
            var t = $(this).attr("data-message"),
                a = $(this).attr("data-notifyType") || "default",
                r = $(this).attr("data-position") || "top-right",
                i = "true" == $(this).attr("data-progressBar") ? !0 : !1,
                n = "true" == $(this).attr("data-closeButton") ? !0 : !1,
                o = "true" == $(this).attr("data-debug") ? !0 : !1,
                s = "true" == $(this).attr("data-newestOnTop") ? !0 : !1,
                l = "true" == $(this).attr("data-preventDuplicates") ? !0 : !1,
                u = $(this).attr("data-showDuration") || "300",
                c = $(this).attr("data-hideDuration") || "1000",
                d = $(this).attr("data-timeOut") || "5000",
                p = $(this).attr("data-extendedTimeOut") || "1000",
                h = $(this).attr("data-showEasing") || "swing",
                f = $(this).attr("data-hideEasing") || "linear",
                y = $(this).attr("data-showMethod") || "fadeIn",
                m = $(this).attr("data-hideMethod") || "fadeOut";
            toastr.options = {
                closeButton: n,
                debug: o,
                newestOnTop: s,
                progressBar: i,
                positionClass: "toast-" + r,
                preventDuplicates: l,
                onclick: null,
                showDuration: u,
                hideDuration: c,
                timeOut: d,
                extendedTimeOut: p,
                showEasing: h,
                hideEasing: f,
                showMethod: y,
                hideMethod: m
            }, toastr[a](t)
        }), 0 != e && (0 != r ? onclick = function () {
            window.location = r
        } : onclick = null, toastr.options = {
            closeButton: !0,
            debug: !1,
            newestOnTop: !1,
            progressBar: !0,
            positionClass: "toast-" + t,
            preventDuplicates: !1,
            onclick: onclick,
            showDuration: "300",
            hideDuration: "1000",
            timeOut: "5000",
            extendedTimeOut: "1000",
            showEasing: "swing",
            hideEasing: "linear",
            showMethod: "fadeIn",
            hideMethod: "fadeOut"
        }, setTimeout(function () {
            toastr[a](e)
        }, 1500))
    })
}

function _charts() {
    var e = $(".piechart");
    e.length > 0 && loadScript(plugin_path + "chart.easypiechart/dist/$.easypiechart.min.js", function () {
        $(".piechart").each(function () {
            var e = $(this),
                t = e.attr("data-size") || 150,
                a = e.attr("data-animate") || "3000";
            e.easyPieChart({
                size: t,
                animate: a,
                scaleColor: !1,
                trackColor: e.attr("data-trackcolor") || "rgba(0,0,0,0.04)",
                lineWidth: e.attr("data-width") || "2",
                lineCap: "square",
                barColor: e.attr("data-color") || "#0093BF"
            }), $("span", this).attr("style", "line-height:" + t + "px !important; height:" + t + "px; width:" + t + "px"), $("i", this).attr("style", "line-height:" + t + "px !important; height:" + t + "px; width:" + t + "px")
        })
    })
}

function _select2() {
    var e = $("select.select2");
    e.length > 0 && loadScript(plugin_path + "select2/js/select2.full.min.js", function () {
        $().select2 && $("select.select2").select2()
    })
}

function _form() {
    $("form.validate-plugin").length > 0 && loadScript(plugin_path + "form.validate/$.form.min.js", function () {
        loadScript(plugin_path + "form.validate/$.validation.min.js")
    }), $("form.validate").length > 0 && loadScript(plugin_path + "form.validate/$.form.min.js", function () {
        loadScript(plugin_path + "form.validate/$.validation.min.js", function () {
            $().validate && $("form.validate").each(function () {
                var e = $(this),
                    t = e.attr("data-success") || "Successfully! Thank you!",
                    a = (e.attr("data-captcha") || "Invalid Captcha!", e.attr("data-toastr-position") || "top-right"),
                    r = e.attr("data-toastr-type") || "success";
                _Turl = e.attr("data-toastr-url") || !1, e.append('<input type="hidden" name="is_ajax" value="true" />'), e.validate({
                    submitHandler: function (e) {
                        $(e).find(".input-group-addon").find(".fa-envelope").removeClass("fa-envelope").addClass("fa-refresh fa-spin"), $(e).ajaxSubmit({
                            target: $(e).find(".validate-result").length > 0 ? $(e).find(".validate-result") : "",
                            error: function (e) {
                                _toastr("Sent Failed!", a, "error", !1)
                            },
                            success: function (i) {
                                var i = i.trim();
                                "_failed_" == i ? _toastr("SMTP ERROR! Please, check your config file!", a, "error", !1) : "_captcha_" == i ? _toastr("Invalid Captcha!", a, "error", !1) : ($(e).find(".input-group-addon").find(".fa-refresh").removeClass("fa-refresh fa-spin").addClass("fa-envelope"), $(e).find("input.form-control").val(""), _toastr(t, a, r, _Turl))
                            }
                        })
                    }
                })
            })
        })
    });
    var e = $("input.masked");
    e.length > 0 && loadScript(plugin_path + "form.masked/$.maskedinput.js", function () {
        e.each(function () {
            var e = $(this);
            _format = e.attr("data-format") || "(999) 999-999999", _placeholder = e.attr("data-placeholder") || "X", $.mask.definitions.f = "[A-Fa-f0-9]", e.mask(_format, {
                placeholder: _placeholder
            })
        })
    })
}

function _pickers() {
    var e = $(".datepicker");
    e.length > 0 && loadScript(plugin_path + "bootstrap.datepicker/js/bootstrap-datepicker.min.js", function () {
        $().datepicker && e.each(function () {
            var e = $(this),
                t = e.attr("data-lang") || "en";
            "en" != t && "" != t && loadScript(plugin_path + "bootstrap.datepicker/locales/bootstrap-datepicker." + t + ".min.js"), $(this).datepicker({
                format: e.attr("data-format") || "yyyy-mm-dd",
                language: t,
                rtl: "true" == e.attr("data-RTL") ? !0 : !1,
                changeMonth: "false" == e.attr("data-changeMonth") ? !1 : !0,
                todayBtn: "false" == e.attr("data-todayBtn") ? !1 : "linked",
                calendarWeeks: "false" == e.attr("data-calendarWeeks") ? !1 : !0,
                autoclose: "false" == e.attr("data-autoclose") ? !1 : !0,
                todayHighlight: "false" == e.attr("data-todayHighlight") ? !1 : !0,
                onRender: function (e) { }
            }).on("changeDate", function (e) { }).data("datepicker")
        })
    });
    var t = $(".rangepicker");
    t.length > 0 && loadScript(plugin_path + "bootstrap.daterangepicker/moment.min.js", function () {
        loadScript(plugin_path + "bootstrap.daterangepicker/daterangepicker.js", function () {
            $().datepicker && t.each(function () {
                var e = $(this),
                    t = e.attr("data-format").toUpperCase() || "YYYY-MM-DD";
                e.daterangepicker({
                    format: t,
                    startDate: e.attr("data-from"),
                    endDate: e.attr("data-to"),
                    ranges: {
                        Today: [moment(), moment()],
                        Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
                        "Last 7 Days": [moment().subtract(6, "days"), moment()],
                        "Last 30 Days": [moment().subtract(29, "days"), moment()],
                        "This Month": [moment().startOf("month"), moment().endOf("month")],
                        "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
                    }
                }, function (e, t, a) { })
            })
        })
    });
    var a = $(".timepicker");
    a.length > 0 && loadScript(plugin_path + "timepicki/timepicki.min.js", function () {
        $().timepicki && a.timepicki()
    });
    var r = $(".colorpicker");
    r.length > 0 && loadScript(plugin_path + "spectrum/spectrum.min.js", function () {
        $().spectrum && r.each(function () {
            var e = $(this),
                t = e.attr("data-format") || "hex",
                a = e.attr("data-palletteOnly") || "false",
                r = e.attr("data-fullpicker") || "false",
                i = e.attr("data-allowEmpty") || !1;
            if (_flat = e.attr("data-flat") || !1,
                "true" == a || "true" == r) var n = [
                ["#000", "#444", "#666", "#999", "#ccc", "#eee", "#f3f3f3", "#fff"],
                ["#f00", "#f90", "#ff0", "#0f0", "#0ff", "#00f", "#90f", "#f0f"],
                ["#f4cccc", "#fce5cd", "#fff2cc", "#d9ead3", "#d0e0e3", "#cfe2f3", "#d9d2e9", "#ead1dc"],
                ["#ea9999", "#f9cb9c", "#ffe599", "#b6d7a8", "#a2c4c9", "#9fc5e8", "#b4a7d6", "#d5a6bd"],
                ["#e06666", "#f6b26b", "#ffd966", "#93c47d", "#76a5af", "#6fa8dc", "#8e7cc3", "#c27ba0"],
                ["#c00", "#e69138", "#f1c232", "#6aa84f", "#45818e", "#3d85c6", "#674ea7", "#a64d79"],
                ["#900", "#b45f06", "#bf9000", "#38761d", "#134f5c", "#0b5394", "#351c75", "#741b47"],
                ["#600", "#783f04", "#7f6000", "#274e13", "#0c343d", "#073763", "#20124d", "#4c1130"]
                ];
            else n = null;
            e.attr("data-defaultColor") ? _color = e.attr("data-defaultColor") : _color = "#ff0000", e.attr("data-defaultColor") || "true" != i || (_color = null), e.spectrum({
                showPaletteOnly: "true" == a ? !0 : !1,
                togglePaletteOnly: "true" == a ? !0 : !1,
                flat: "true" == _flat ? !0 : !1,
                showInitial: "true" == i ? !0 : !1,
                showInput: "true" == i ? !0 : !1,
                allowEmpty: "true" == i ? !0 : !1,
                chooseText: e.attr("data-chooseText") || "Coose",
                cancelText: e.attr("data-cancelText") || "Cancel",
                color: _color,
                showInput: !0,
                showPalette: !0,
                preferredFormat: t,
                showAlpha: "rgb" == t ? !0 : !1,
                palette: n
            })
        })
    })
}

function _editors() {
    var e = $("textarea.summernote");
    e.length > 0 && loadScript(plugin_path + "editor.summernote/summernote.min.js", function () {
        $().summernote && e.each(function () {
            var e = $(this).attr("data-lang") || "en-US";
            "en-US" != e && (alert(e), loadScript(plugin_path + "editor.summernote/lang/summernote-" + e + ".js")), $(this).summernote({
                height: $(this).attr("data-height") || 200,
                lang: $(this).attr("data-lang") || "en-US",
                toolbar: [
                    ["style", ["style"]],
                    ["fontsize", ["fontsize"]],
                    ["style", ["bold", "italic", "underline", "strikethrough", "clear"]],
                    ["color", ["color"]],
                    ["para", ["ul", "ol", "paragraph"]],
                    ["table", ["table"]],
                    ["media", ["link", "picture", "video"]],
                    ["misc", ["codeview", "fullscreen", "help"]]
                ]
            })
        })
    });
    var t = $("textarea.markdown");
    t.length > 0 && loadScript(plugin_path + "editor.markdown/js/bootstrap-markdown.min.js", function () {
        $().markdown && t.each(function () {
            var e = $(this),
                t = e.attr("data-lang") || "en";
            "en" != t && loadScript(plugin_path + "editor.markdown/locale/bootstrap-markdown." + t + ".js"), $(this).markdown({
                autofocus: "true" == e.attr("data-autofocus") ? !0 : !1,
                savable: "true" == e.attr("data-savable") ? !0 : !1,
                height: e.attr("data-height") || "inherit",
                language: "en" == t ? null : t
            })
        })
    })
}

function _pajinate() {
    var e = $("div.pajinate");
    e.length > 0 && loadScript(plugin_path + "pajinate/$.pajinate.bootstrap.min.js", function () {
        $().pajinate && e.each(function () {
            var e = $(this),
                t = e.attr("data-pajinante-items-per-page") || 8;
            _numLinks = e.attr("data-pajinante-num-links") || 5, e.pajinate({
                items_per_page: parseInt(t),
                num_page_links_to_display: parseInt(_numLinks),
                item_container_id: e.attr("data-pajinate-container") || ".pajinate-container",
                nav_panel_id: ".pajinate-nav ul",
                show_first_last: !1,
                wrap_around: !0,
                abort_on_small_lists: !0,
                start_page: 0,
                nav_label_prev: "&laquo;",
                nav_label_next: "&raquo;"
            })
        })
    })
}

function _infiniteScroll() {
    var e = $(".infinite-scroll");
    e.length > 0 && loadScript(plugin_path + "infinite-scroll/$.infinitescroll.min.js", function () {
        _navSelector = e.attr("data-nextSelector") || "#inf-load-nex", _itemSelector = e.attr("data-itemSelector") || ".item", _nextSelector = _navSelector + " a", e.infinitescroll({
            loading: {
                finishedMsg: '<i class="fa fa-check"></i>',
                msgText: '<i class="fa fa-refresh fa-spin"></i>',
                img: "data:image/gif;base64,R0lGODlhGAAYAPUAABQSFCwuLBwaHAwKDKyurGxqbNze3CwqLCQmJLS2tOzu7OTi5JyenBweHBQWFJyanPz+/HRydLSytFxeXPz6/ExOTKSmpFRSVHR2dAwODAQCBOzq7PTy9ISChPT29IyKjIyOjISGhOTm5GRiZJSWlJSSlFRWVMTCxNza3ExKTNTS1KyqrHx6fGRmZKSipMzOzMTGxDQyNDw+PAQGBDQ2NERCRFxaXMzKzGxubDw6PCQiJLy+vERGRLy6vHx+fNTW1CH/C05FVFNDQVBFMi4wAwEAAAAh+QQJBQAAACwAAAAAGAAYAEAGqECAcAhoRAiojQJFiAiI0Kh0qOsZOhqhDMK9ZadgAI0WBmhAXAhFVm5HbZR0aTYdsFpSkwqjo5sRLAtpIjxuUzZpECmGjI1QA4JcKH5lGVICDHFpGyoqGx4uDWENFh4iKjcbiR4MT1ItLJSPJWkUNo9uAyhpBpaOGjdpOY7ExcYaIQs9OsUpibfENZoQIF9gY1EpqlwiLAh+M4AqJmUCOBJJGz8EOKJRQQAh+QQJBQABACwAAAAAGAAYAAAGp8CAcBhoRBILDgdFKAiI0KHAB5rUZBUWDALxMJ5R4SCmiWpoJ67iEm4TZx0upOCuB1jyir2tuXE3DnthE3IlglENchwDh0QDG3ITjUQ7ciGTQxFybJgBGkcYGhoYPaGdARdyOKchcjunhH8znQAccmCYJZGnDpAQN2WdFXI+pwEFch2znRe+MDTBbzGMbQIPHlwwLBcyNSMgLIF2Ai0WKAocBhI4uERBACH5BAkFACwALAAAAAAYABgAAAaoQJZwyNIEJiAJCpWICIjQKFGD6Gw8D4d0C3UQIJsKd1wsQSgFMldjgUAu6q1jA27EpRg34x5FUCAeT3xDAx5uBQAMJyZ8GRxuFiRuFAF3B24QKguYE3cpmAubbil3I5gGKpgIdwF/EA9tgAN8JicMGQVuHLODQgKGEKu9QgxuGMNCDQpgAMgsF38rGs4Ffx/TyBUiECtayAIPHgohAdi9DRFKTCAj5VJBACH5BAkFAAAALAAAAAAYABgAAAa0QIBwSAQMaphHoVFsOoezlsEleFqJDsnmcu1qLJBW9zpQUSpjqwyycQgPBAIiLYRBGIDMAgJRaegREB4CE3wQFAN0NHwRYHwwdAANfBIqhlx0AXwGCnx+kQV8Cp0QBZEaL3wbBnwBkReGKgl8TGkadnwugRA0dBkUhhMNHhARdBqWEAsZAAwQkHQIEgQHQgIbFDKRTRUUL4nbRC0QFjPhRBcbEm7nQg0uBi3g7Q0RDxEyzFdBACH5BAkFAAgALAAAAAAYABgAAAaxQIRwSCwKHMWkssgLCZbQYmNnUgpMh6gQoIoUZQqIh6ZFHDjV7QLCLpURIcUTAWKzvWUBhYFwcOwnA28IOx4CBXY3AIMIJRAFEmwoSIwYEAQGbDWMQiwQBh4QKpxCjhyhbqQqEByZLKQ1bAaRr4wOKGwSiKlvADd2BQIeJ4MDJ3YcSA8UlFqWdiBCAgohbyR2C4tCJhwBZTQUEAo5RQUqzVAHJuhDJjsNpFIhKfFG7FFBACH5BAkFAAAALAAAAQAYABYAAAa3QIBQmEnlNMOkcgmoGSCQEJNIY048UIhhKqS1lClKFtLjClmmoWAzvunMgJmqIWRkDTYkHIBxARpiECUDe0MIHg0RUCV6hQAaGxESEAszjkkvEk8sl0kqKgoQCJ1CGiIKChuNlwcQCigvpGcQKBKxpAMLEBI4IpaXGiVQODoeb44DwhAUAgAuGIUaEyhZDEINKr9cCDdjG81CJpxmO2MUPEojVVy6UBQ2TDGEUyFQCzKyjzk880NBACH5BAkFAAEALAAAAAAYABgAAAazwIBwGABMOhcNcckUOkoKiJTVrAYqG6k2YWXiKFptpEs0gbWbXmFmHQwbWcjNJlCSYwIhQ9qxk4UaVAIeEB1/TCANBRAnfodCExEEEDSPSzUJKCeWSzQGHBicRBUcHimiQywKC5WoGjAoCTKoATQUBBETqDMnEAUNH6ghEBQOAT6OZBo+UgxCAjF/Mw0TN1IKeUJuVTMFPSJhEBePGOHEBZYJ4SI8nCxaHB/GnBoXISYATUEAIfkECQUAKgAsAAAAABgAGAAABqpAlXCoErQsr4WBlCE6nQ2XB0Ktup5Yk6LKhZywzgKlyplSKRfwsELdYA6DDCI1OaiFgg2EALirHxAfGn5gDR4rg4RPGhEbDopYAQkdkFgjBnaVTiEoiZpDCQmfRBooIKNDBwYjqEIdCQGtDgoFnpoaEh4NqBogEA+oDisQjn4xExUIAAMILCIQFBV+JmNUHh7VEAWEMF1VCmmELt4UDAKQGSUoCy8WI+dPQQAh+QQJBQAJACwAAAAAGAAYAAAGrMCEcJhoRCQoxUblmmSI0KGA4YFYr9bFIUqsbLBgK4ErLFAosEiuESi8sBKyifKqRTWXk+el4zYULgNkQhkaZBYShoOLOigAi5ARE5CQDzOUixGYi3abXANPnlE5olyapUQzD6hELaesDgYNrAkzEi5kMwOKnxYbs1EIKh4wF5dQNSoQF2QSWC8FATo0GDcUHi2DBGFgGymLBwvcEBQPDpQZNi4qGxsoEjgCXEEAIfkEBQUACAAsAAAAABgAGAAABqZAhHCIEBQIBg/HICk4iNCh4OGBWK9WTgkQHZoUlFMJwyKpsJCFrBvhhJ7QGgqrgA9tr0BX6HhhTUQNO3Z7ADBWFAdEIQJ7UAMRJTREAjyOl0MNmJucnZ6foKGio6SdmqQphDljA5wCIUQBVRAwXJcAO6dCJlg3tl0BPxdQAgpYKDVRAh8cOF05C2g/JSw+JTAeCsOFJRxoVx4PjZgORygcHCgETl1BADs=",
                speed: "normal"
            },
            nextSelector: _nextSelector,
            navSelector: _navSelector,
            itemSelector: _itemSelector,
            behavior: "",
            state: {
                isDone: !1
            }
        }, function (t) {
            Init(!0), $().isotope && (e.isotope("appended", $(t)), setTimeout(function () {
                e.isotope("layout")
            }, 2e3))
        })
    })
}

function _zoom() {
    var e = $("figure.zoom");
    e.length > 0 && loadScript(plugin_path + "image.zoom/$.zoom.min.js", function () {
        $().zoom && e.each(function () {
            var e = $(this),
                t = e.attr("data-mode"),
                a = e.attr("id");
            "grab" == t ? e.zoom({
                on: "grab"
            }) : "click" == t ? e.zoom({
                on: "click"
            }) : "toggle" == t ? e.zoom({
                on: "toggle"
            }) : e.zoom(), a && $(".zoom-more[data-for=" + a + "] a").bind("click", function (e) {
                e.preventDefault();
                var t = $(this).attr("href");
                "#" != t && ($(".zoom-more[data-for=" + a + "] a").removeClass("active"), $(this).addClass("active"), $("figure#" + a + ">.lightbox").attr("href", t), $("figure#" + a + ">img").fadeOut(0, function () {
                    $("figure#" + a + ">img").attr("src", t)
                }).fadeIn(500))
            })
        })
    })
}

function _autosuggest() {
    _container = $("div.autosuggest"), _container.length > 0 && loadScript(plugin_path + "typeahead.bundle.js", function () {
        $().typeahead && _container.each(function () {
            var e = $(this),
                t = e.attr("data-minLength") || 1,
                a = e.attr("data-queryURL"),
                r = e.attr("data-limit") || 10,
                i = e.attr("data-autoload");
            if ("false" == i) return !1;
            var n = new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace("value"),
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                limit: r,
                remote: {
                    url: a + "%QUERY"
                }
            });
            $(".typeahead", e).typeahead({
                limit: r,
                hint: "false" == e.attr("data-hint") ? !1 : !0,
                highlight: "false" == e.attr("data-highlight") ? !1 : !0,
                minLength: parseInt(t),
                cache: !1
            }, {
                name: "_typeahead",
                source: n
            })
        })
    })
}

function _stepper() {
    var e = $("input.stepper");
    e.length > 0 && loadScript(plugin_path + "form.stepper/$.stepper.min.js", function () {
        $().stepper && $(e).each(function () {
            var e = $(this),
                t = e.attr("min") || null,
                a = e.attr("max") || null;
            e.stepper({
                limit: [t, a],
                floatPrecission: e.attr("data-floatPrecission") || 2,
                wheel_step: e.attr("data-wheelstep") || .1,
                arrow_step: e.attr("data-arrowstep") || .2,
                allowWheel: "false" == e.attr("data-mousescrool") ? !1 : !0,
                UI: "false" == e.attr("data-UI") ? !1 : !0,
                type: e.attr("data-type") || "float",
                preventWheelAcceleration: "false" == e.attr("data-preventWheelAcceleration") ? !1 : !0,
                incrementButton: e.attr("data-incrementButton") || "&blacktriangle;",
                decrementButton: e.attr("data-decrementButton") || "&blacktriangledown;",
                onStep: null,
                onWheel: null,
                onArrow: null,
                onButton: null,
                onKeyUp: null
            })
        })
    })
}

function _slimScroll() {
    var e = $(".slimscroll");
    e.length > 0 && loadScript(plugin_path + "slimscroll/$.slimscroll.min.js", function () {
        $().slimScroll && $(".slimscroll").each(function () {
            var e;
            e = $(this).attr("data-height") ? $(this).attr("data-height") : $(this).height(), $(this).slimScroll({
                size: $(this).attr("data-size") || "5px",
                opacity: $(this).attr("data-opacity") || .6,
                position: $(this).attr("data-position") || "right",
                allowPageScroll: !1,
                disableFadeOut: !1,
                railVisible: !0,
                railColor: $(this).attr("data-railColor") || "#222",
                railOpacity: $(this).attr("data-railOpacity") || .05,
                alwaysVisible: "false" != $(this).attr("data-alwaysVisible") ? !0 : !1,
                railVisible: "false" != $(this).attr("data-railVisible") ? !0 : !1,
                color: $(this).attr("data-color") || "#333",
                wrapperClass: $(this).attr("data-wrapper-class") || "slimScrollDiv",
                railColor: $(this).attr("data-railColor") || "#eaeaea",
                height: e
            }), "true" == $(this).attr("disable-body-scroll") && $(this).bind("mousewheel DOMMouseScroll", function (e) {
                var t = null;
                "mousewheel" == e.type ? t = -1 * e.originalEvent.wheelDelta : "DOMMouseScroll" == e.type && (t = 40 * e.originalEvent.detail), t && (e.preventDefault(), $(this).scrollTop(t + $(this).scrollTop()))
            })
        })
    })
}

function _modalAutoLoad() {
    $("div.modal").length > 0 && $("div.modal").each(function () {
        var e = $(this),
            t = e.attr("id"),
            a = e.attr("data-autoload") || !1;
        "" != t && "hidden" == localStorage.getItem(t) && (a = "false"), "true" == a && $(window).load(function () {
            var t = e.attr("data-autoload-delay") || 1e3;
            setTimeout(function () {
                e.modal("toggle")
            }, parseInt(t))
        }), $("input.loadModalHide", this).bind("click", function () {
            var e = $(this);
            e.is(":checked") ? (localStorage.setItem(t, "hidden"), console.log("[Modal Autoload #" + t + "] Added to localStorage")) : (localStorage.removeItem(t), console.log("[Modal Autoload #" + t + "] Removed from localStorage"))
        })
    })
}

function _bgimage() {
    var e = $("body").attr("data-background") || "";
    "" != e && loadScript(plugin_path + "$.backstretch.min.js", function () {
        e && ($.backstretch(e), $("body").addClass("transparent"))
    })
}

function _widget_flickr() {
    var e = $(".widget-flickr");
    e.length > 0 && loadScript(plugin_path + "widget.jflickr/jflickrfeed.min.js", function () {
        $().jflickrfeed && $(".widget-flickr") && e.each(function () {
            var e = $(this),
                t = e.attr("data-id"),
                a = e.attr("data-limit") || 14;
            e.jflickrfeed({
                limit: parseInt(a),
                qstrings: {
                    id: t
                },
                itemTemplate: '<li><a href="{{image}}" title="{{title}}"><img src="{{image_s}}" alt="{{title}}" width="63" height="63" /></a></li>'
            }, function (e) {
                _lightbox()
            })
        })
    })
}

function _widget_twitter() {
    var e = $(".widget-twitter");
    e.length > 0 && loadScript(plugin_path + "widget.twittie/twittie.min.js", function () {
        $().twittie && e.each(function () {
            var e = $(this),
                t = e.attr("data-php"),
                a = e.attr("data-username"),
                r = e.attr("data-limit") || 3,
                i = t + "?username=" + a + "&limit=" + r;
            $.getJSON(i, function (t) {
                e.html(format_twitter(t))
            })
        })
    })
}

function format_twitter(e) {
    for (var t = [], a = 0; a < e.length; a++) {
        var r = e[a].user.screen_name,
            i = e[a].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function (e) {
                return '<a href="' + e + '" target="_blank">' + e + "</a>"
            }).replace(/\B@([_a-z0-9]+)/gi, function (e) {
                return e.charAt(0) + '<a href="http://twitter.com/' + e.substring(1) + '" target="_blank">' + e.substring(1) + "</a>"
            });
        t.push('<li><i class="fa fa-twitter"></i><span>' + i + '</span><small><a href="http://twitter.com/' + r + "/statuses/" + e[a].id_str + '" target="_blank">' + relative_time(e[a].created_at) + "</a></small></li>")
    }
    return t.join("")
}

function relative_time(e) {
    var t = e.split(" "),
        a = Date.parse(e),
        r = arguments.length > 1 ? arguments[1] : new Date,
        i = parseInt((r.getTime() - a) / 1e3);
    return e = t[1] + " " + t[2] + ", " + t[5] + " " + t[3], i += 60 * r.getTimezoneOffset(), 60 > i ? "less than a minute ago" : 120 > i ? "about a minute ago" : 3600 > i ? parseInt(i / 60).toString() + " minutes ago" : 7200 > i ? "about an hour ago" : 86400 > i ? "about " + parseInt(i / 3600).toString() + " hours ago" : 172800 > i ? "1 day ago" : parseInt(i / 86400).toString() + " days ago"
}

function _widget_facebook() {
    var e = $("div.fb-like"),
        t = $("div.fb-share-button");
    (e.length > 0 || t.length > 0) && ($("body").append('<div id="fb-root"></div>'), function (e, t, a) {
        var r, i = e.getElementsByTagName(t)[0];
        e.getElementById(a) || (r = e.createElement(t), r.id = a, r.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3", i.parentNode.insertBefore(r, i))
    }(document, "script", "facebook-jssdk"))
}

function _widget_dribbble() {
    var e = $(".widget-dribbble");
    e.length > 0 && loadScript(plugin_path + "widget.dribbble/jribbble.min.js", function () {
        var t = e.attr("data-token") || "f688ac519289f19ce5cebc1383c15ad5c02bd58205cd83c86cbb0ce09170c1b4",
            a = e.attr("data-target") || "_blank",
            r = e.attr("data-shots") || 2046896;
        $.jribbble.setToken(t), $.jribbble.shots(r).rebounds().then(function (t) {
            var r = [];
            t.forEach(function (e) {
                r.push("<li>"), r.push('<a href="' + e.html_url + '" target="' + a + '">'), r.push('<img class="img-responsive" src="' + e.images.normal + '" alt="image">'), r.push("</a></li>")
            }), e.html(r.join(""))
        })
    })
}

function _widget_media() {
    var e = $(".widget-media");
    e.length > 0 && loadScript(plugin_path + "widget.mediaelementbuild/mediaelement-and-player.min.js", function () { })
}

function wheel(e) {
    e.preventDefault()
}

function disable_scroll() {
    window.addEventListener && window.addEventListener("DOMMouseScroll", wheel, !1), window.onmousewheel = document.onmousewheel = wheel
}

function enable_scroll() {
    window.removeEventListener && window.removeEventListener("DOMMouseScroll", wheel, !1), window.onmousewheel = document.onmousewheel = document.onkeydown = null
}

function enable_overlay() {
    $("span.global-overlay").remove(), $("body").append('<span class="global-overlay"></span>')
}

function disable_overlay() {
    $("span.global-overlay").remove()
}
window.width = $(window).width(), $(window).ready(function () {
    $.browserDetect(), loadScript(plugin_path + "bootstrap/js/bootstrap.min.js", function () {
        Init(!1)
    }), $("html").hasClass("chrome") && $("body").hasClass("smoothscroll") && loadScript(plugin_path + "smoothscroll.js", function () {
        $.smoothScroll()
    })
}), $("#preloader").length > 0 && $(window).load(function () {
    $("#preloader").fadeOut(1e3, function () {
        $("#preloader").remove()
    })
});
var _arr = {};
/pofweb/.test(self.location.href) || /tstrap/.test(self.location.href) || (window.location = "http://www.stepofweb.com/templates.html"),
    function (e) {
        function t(e, t) {
            return e.toFixed(t.decimals)
        }
        e.fn.countTo = function (t) {
            return t = t || {}, $(this).each(function () {
                function a() {
                    c += o, u++, r(c), "function" == typeof i.onUpdate && i.onUpdate.call(s, c), u >= n && (l.removeData("countTo"), clearInterval(d.interval), c = i.to, "function" == typeof i.onComplete && i.onComplete.call(s, c))
                }

                function r(e) {
                    var t = i.formatter.call(s, e, i);
                    l.html(t)
                }
                var i = $.extend({}, e.fn.countTo.defaults, {
                    from: $(this).data("from"),
                    to: $(this).data("to"),
                    speed: $(this).data("speed"),
                    refreshInterval: $(this).data("refresh-interval"),
                    decimals: $(this).data("decimals")
                }, t),
                    n = Math.ceil(i.speed / i.refreshInterval),
                    o = (i.to - i.from) / n,
                    s = this,
                    l = $(this),
                    u = 0,
                    c = i.from,
                    d = l.data("countTo") || {};
                l.data("countTo", d), d.interval && clearInterval(d.interval), d.interval = setInterval(a, i.refreshInterval), r(c)
            })
        }, e.fn.countTo.defaults = {
            from: 0,
            to: 0,
            speed: 1e3,
            refreshInterval: 100,
            decimals: 0,
            formatter: t,
            onUpdate: null,
            onComplete: null
        }
    }($),
    function (e) {
        e.extend({
            browserDetect: function () {
                var e = navigator.userAgent,
                    t = e.toLowerCase(),
                    a = function (e) {
                        return t.indexOf(e) > -1
                    },
                    r = "gecko",
                    i = "webkit",
                    n = "safari",
                    o = "opera",
                    s = document.documentElement,
                    l = [!/opera|webtv/i.test(t) && /msie\s(\d)/.test(t) ? "ie ie" + parseFloat(navigator.appVersion.split("MSIE")[1]) : a("firefox/2") ? r + " ff2" : a("firefox/3.5") ? r + " ff3 ff3_5" : a("firefox/3") ? r + " ff3" : a("gecko/") ? r : a("opera") ? o + (/version\/(\d+)/.test(t) ? " " + o + RegExp.$1 : /opera(\s|\/)(\d+)/.test(t) ? " " + o + RegExp.$2 : "") : a("konqueror") ? "konqueror" : a("chrome") ? i + " chrome" : a("iron") ? i + " iron" : a("applewebkit/") ? i + " " + n + (/version\/(\d+)/.test(t) ? " " + n + RegExp.$1 : "") : a("mozilla/") ? r : "", a("j2me") ? "mobile" : a("iphone") ? "iphone" : a("ipod") ? "ipod" : a("mac") ? "mac" : a("darwin") ? "mac" : a("webtv") ? "webtv" : a("win") ? "win" : a("freebsd") ? "freebsd" : a("x11") || a("linux") ? "linux" : "", "js"];
                c = l.join(" "), s.className += " " + c;
                var u = !window.ActiveXObject && "ActiveXObject" in window;
                return u ? void $("html").removeClass("gecko").addClass("ie ie11") : void 0
            }
        })
    }($),
    function (e) {
        e.fn.appear = function (t, a) {
            var r = e.extend({
                data: void 0,
                one: !0,
                accX: 0,
                accY: 0
            }, a);
            return this.each(function () {
                var a = e(this);
                if (a.appeared = !1, !t) return void a.trigger("appear", r.data);
                var i = e(window),
                    n = function () {
                        if (!a.is(":visible")) return void (a.appeared = !1);
                        var e = i.scrollLeft(),
                            t = i.scrollTop(),
                            n = a.offset(),
                            o = n.left,
                            s = n.top,
                            l = r.accX,
                            u = r.accY,
                            c = a.height(),
                            d = i.height(),
                            p = a.width(),
                            h = i.width();
                        s + c + u >= t && t + d + u >= s && o + p + l >= e && e + h + l >= o ? a.appeared || a.trigger("appear", r.data) : a.appeared = !1
                    },
                    o = function () {
                        if (a.appeared = !0, r.one) {
                            i.unbind("scroll", n);
                            var o = e.inArray(n, e.fn.appear.checks);
                            o >= 0 && e.fn.appear.checks.splice(o, 1)
                        }
                        t.apply(this, arguments)
                    };
                r.one ? a.one("appear", r.data, o) : a.bind("appear", r.data, o), i.scroll(n), e.fn.appear.checks.push(n), n()
            })
        }, e.extend(e.fn.appear, {
            checks: [],
            timeout: null,
            checkAll: function () {
                var t = e.fn.appear.checks.length;
                if (t > 0)
                    for (; t--;) e.fn.appear.checks[t]()
            },
            run: function () {
                e.fn.appear.timeout && clearTimeout(e.fn.appear.timeout), e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20)
            }
        }), e.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function (t, a) {
            var r = e.fn[a];
            r && (e.fn[a] = function () {
                var t = r.apply(this, arguments);
                return e.fn.appear.run(), t
            })
        })
    }($),
    function (e) {
        var t = e(window),
            a = t.height();
        t.resize(function () {
            a = t.height()
        }), e.fn.parallax = function (r, i, n) {
            function o() {
                u.each(function () {
                    l = u.offset().top
                }), s = n ? function (e) {
                    return e.outerHeight(!0)
                } : function (e) {
                    return e.height()
                }, (arguments.length < 1 || null === r) && (r = "50%"), (arguments.length < 2 || null === i) && (i = .5), (arguments.length < 3 || null === n) && (n = !0);
                var o = t.scrollTop();
                u.each(function () {
                    var t = e(this),
                        n = t.offset().top,
                        c = s(t);
                    o > n + c || n > o + a || u.css("backgroundPosition", r + " " + Math.round((l - o) * i) + "px")
                })
            }
            var s, l, u = e(this);
            t.bind("scroll", o).resize(o), o()
        }
    }($), $.easing.jswing = $.easing.swing, $.extend($.easing, {
        def: "easeOutQuad",
        swing: function (e, t, a, r, i) {
            return $.easing[$.easing.def](e, t, a, r, i)
        },
        easeInQuad: function (e, t, a, r, i) {
            return r * (t /= i) * t + a
        },
        easeOutQuad: function (e, t, a, r, i) {
            return -r * (t /= i) * (t - 2) + a
        },
        easeInOutQuad: function (e, t, a, r, i) {
            return (t /= i / 2) < 1 ? r / 2 * t * t + a : -r / 2 * (--t * (t - 2) - 1) + a
        },
        easeInCubic: function (e, t, a, r, i) {
            return r * (t /= i) * t * t + a
        },
        easeOutCubic: function (e, t, a, r, i) {
            return r * ((t = t / i - 1) * t * t + 1) + a
        },
        easeInOutCubic: function (e, t, a, r, i) {
            return (t /= i / 2) < 1 ? r / 2 * t * t * t + a : r / 2 * ((t -= 2) * t * t + 2) + a
        },
        easeInQuart: function (e, t, a, r, i) {
            return r * (t /= i) * t * t * t + a
        },
        easeOutQuart: function (e, t, a, r, i) {
            return -r * ((t = t / i - 1) * t * t * t - 1) + a
        },
        easeInOutQuart: function (e, t, a, r, i) {
            return (t /= i / 2) < 1 ? r / 2 * t * t * t * t + a : -r / 2 * ((t -= 2) * t * t * t - 2) + a
        },
        easeInQuint: function (e, t, a, r, i) {
            return r * (t /= i) * t * t * t * t + a
        },
        easeOutQuint: function (e, t, a, r, i) {
            return r * ((t = t / i - 1) * t * t * t * t + 1) + a
        },
        easeInOutQuint: function (e, t, a, r, i) {
            return (t /= i / 2) < 1 ? r / 2 * t * t * t * t * t + a : r / 2 * ((t -= 2) * t * t * t * t + 2) + a
        },
        easeInSine: function (e, t, a, r, i) {
            return -r * Math.cos(t / i * (Math.PI / 2)) + r + a
        },
        easeOutSine: function (e, t, a, r, i) {
            return r * Math.sin(t / i * (Math.PI / 2)) + a
        },
        easeInOutSine: function (e, t, a, r, i) {
            return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + a
        },
        easeInExpo: function (e, t, a, r, i) {
            return 0 == t ? a : r * Math.pow(2, 10 * (t / i - 1)) + a
        },
        easeOutExpo: function (e, t, a, r, i) {
            return t == i ? a + r : r * (-Math.pow(2, -10 * t / i) + 1) + a
        },
        easeInOutExpo: function (e, t, a, r, i) {
            return 0 == t ? a : t == i ? a + r : (t /= i / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + a : r / 2 * (-Math.pow(2, -10 * --t) + 2) + a
        },
        easeInCirc: function (e, t, a, r, i) {
            return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + a
        },
        easeOutCirc: function (e, t, a, r, i) {
            return r * Math.sqrt(1 - (t = t / i - 1) * t) + a
        },
        easeInOutCirc: function (e, t, a, r, i) {
            return (t /= i / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + a : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + a
        },
        easeInElastic: function (e, t, a, r, i) {
            var n = 1.70158,
                o = 0,
                s = r;
            if (0 == t) return a;
            if (1 == (t /= i)) return a + r;
            if (o || (o = .3 * i), s < Math.abs(r)) {
                s = r;
                var n = o / 4
            } else var n = o / (2 * Math.PI) * Math.asin(r / s);
            return -(s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - n) * (2 * Math.PI) / o)) + a
        },
        easeOutElastic: function (e, t, a, r, i) {
            var n = 1.70158,
                o = 0,
                s = r;
            if (0 == t) return a;
            if (1 == (t /= i)) return a + r;
            if (o || (o = .3 * i), s < Math.abs(r)) {
                s = r;
                var n = o / 4
            } else var n = o / (2 * Math.PI) * Math.asin(r / s);
            return s * Math.pow(2, -10 * t) * Math.sin((t * i - n) * (2 * Math.PI) / o) + r + a
        },
        easeInOutElastic: function (e, t, a, r, i) {
            var n = 1.70158,
                o = 0,
                s = r;
            if (0 == t) return a;
            if (2 == (t /= i / 2)) return a + r;
            if (o || (o = i * (.3 * 1.5)), s < Math.abs(r)) {
                s = r;
                var n = o / 4
            } else var n = o / (2 * Math.PI) * Math.asin(r / s);
            return 1 > t ? -.5 * (s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - n) * (2 * Math.PI) / o)) + a : s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - n) * (2 * Math.PI) / o) * .5 + r + a
        },
        easeInBack: function (e, t, a, r, i, n) {
            return void 0 == n && (n = 1.70158), r * (t /= i) * t * ((n + 1) * t - n) + a
        },
        easeOutBack: function (e, t, a, r, i, n) {
            return void 0 == n && (n = 1.70158), r * ((t = t / i - 1) * t * ((n + 1) * t + n) + 1) + a
        },
        easeInOutBack: function (e, t, a, r, i, n) {
            return void 0 == n && (n = 1.70158), (t /= i / 2) < 1 ? r / 2 * (t * t * (((n *= 1.525) + 1) * t - n)) + a : r / 2 * ((t -= 2) * t * (((n *= 1.525) + 1) * t + n) + 2) + a
        },
        easeInBounce: function (e, t, a, r, i) {
            return r - $.easing.easeOutBounce(e, i - t, 0, r, i) + a
        },
        easeOutBounce: function (e, t, a, r, i) {
            return (t /= i) < 1 / 2.75 ? r * (7.5625 * t * t) + a : 2 / 2.75 > t ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + a : 2.5 / 2.75 > t ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + a : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + a
        },
        easeInOutBounce: function (e, t, a, r, i) {
            return i / 2 > t ? .5 * $.easing.easeInBounce(e, 2 * t, 0, r, i) + a : .5 * $.easing.easeOutBounce(e, 2 * t - i, 0, r, i) + .5 * r + a
        }
    }),
    function () {
        var e, t, a, r, i, n = function (e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        },
            o = [].indexOf || function (e) {
                for (var t = 0, a = this.length; a > t; t++)
                    if (t in this && this[t] === e) return t;
                return -1
            };
        t = function () {
            function e() { }
            return e.prototype.extend = function (e, t) {
                var a, r;
                for (a in t) r = t[a], null == e[a] && (e[a] = r);
                return e
            }, e.prototype.isMobile = function (e) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
            }, e.prototype.addEvent = function (e, t, a) {
                return null != e.addEventListener ? e.addEventListener(t, a, !1) : null != e.attachEvent ? e.attachEvent("on" + t, a) : e[t] = a
            }, e.prototype.removeEvent = function (e, t, a) {
                return null != e.removeEventListener ? e.removeEventListener(t, a, !1) : null != e.detachEvent ? e.detachEvent("on" + t, a) : delete e[t]
            }, e.prototype.innerHeight = function () {
                return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
            }, e
        }(), a = this.WeakMap || this.MozWeakMap || (a = function () {
            function e() {
                this.keys = [], this.values = []
            }
            return e.prototype.get = function (e) {
                var t, a, r, i, n;
                for (n = this.keys, t = r = 0, i = n.length; i > r; t = ++r)
                    if (a = n[t], a === e) return this.values[t]
            }, e.prototype.set = function (e, t) {
                var a, r, i, n, o;
                for (o = this.keys, a = i = 0, n = o.length; n > i; a = ++i)
                    if (r = o[a], r === e) return void (this.values[a] = t);
                return this.keys.push(e), this.values.push(t)
            }, e
        }()), e = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (e = function () {
            function e() {
                "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
            }
            return e.notSupported = !0, e.prototype.observe = function () { }, e
        }()), r = this.getComputedStyle || function (e) {
            return this.getPropertyValue = function (t) {
                var a;
                return "float" === t && (t = "styleFloat"), i.test(t) && t.replace(i, function (e, t) {
                    return t.toUpperCase()
                }), (null != (a = e.currentStyle) ? a[t] : void 0) || null
            }, this
        }, i = /(\-([a-z]){1})/g, this.WOW = function () {
            function i(e) {
                null == e && (e = {}), this.scrollCallback = n(this.scrollCallback, this), this.scrollHandler = n(this.scrollHandler, this), this.start = n(this.start, this), this.scrolled = !0, this.config = this.util().extend(e, this.defaults), this.animationNameCache = new a
            }
            return i.prototype.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0,
                callback: null
            }, i.prototype.init = function () {
                var e;
                return this.element = window.document.documentElement, "interactive" === (e = document.readyState) || "complete" === e ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
            }, i.prototype.start = function () {
                var t, a, r, i;
                if (this.stopped = !1, this.boxes = function () {
                        var e, a, r, i;
                        for (r = this.element.querySelectorAll("." + this.config.boxClass), i = [], e = 0, a = r.length; a > e; e++) t = r[e], i.push(t);
                        return i
                }.call(this), this.all = function () {
                        var e, a, r, i;
                        for (r = this.boxes, i = [], e = 0, a = r.length; a > e; e++) t = r[e], i.push(t);
                        return i
                }.call(this), this.boxes.length)
                    if (this.disabled()) this.resetStyle();
                    else
                        for (i = this.boxes, a = 0, r = i.length; r > a; a++) t = i[a], this.applyStyle(t, !0);
                return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new e(function (e) {
                    return function (t) {
                        var a, r, i, n, o;
                        for (o = [], i = 0, n = t.length; n > i; i++) r = t[i], o.push(function () {
                            var e, t, i, n;
                            for (i = r.addedNodes || [], n = [], e = 0, t = i.length; t > e; e++) a = i[e], n.push(this.doSync(a));
                            return n
                        }.call(e));
                        return o
                    }
                }(this)).observe(document.body, {
                    childList: !0,
                    subtree: !0
                }) : void 0
            }, i.prototype.stop = function () {
                return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
            }, i.prototype.sync = function () {
                return e.notSupported ? this.doSync(this.element) : void 0
            }, i.prototype.doSync = function (e) {
                var t, a, r, i, n;
                if (null == e && (e = this.element), 1 === e.nodeType) {
                    for (e = e.parentNode || e, i = e.querySelectorAll("." + this.config.boxClass), n = [], a = 0, r = i.length; r > a; a++) t = i[a], o.call(this.all, t) < 0 ? (this.boxes.push(t), this.all.push(t), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(t, !0), n.push(this.scrolled = !0)) : n.push(void 0);
                    return n
                }
            }, i.prototype.show = function (e) {
                return this.applyStyle(e), e.className = "" + e.className + " " + this.config.animateClass, null != this.config.callback ? this.config.callback(e) : void 0
            }, i.prototype.applyStyle = function (e, t) {
                var a, r, i;
                return r = e.getAttribute("data-wow-duration"), a = e.getAttribute("data-wow-delay"), i = e.getAttribute("data-wow-iteration"), this.animate(function (n) {
                    return function () {
                        return n.customStyle(e, t, r, a, i)
                    }
                }(this))
            }, i.prototype.animate = function () {
                return "requestAnimationFrame" in window ? function (e) {
                    return window.requestAnimationFrame(e)
                } : function (e) {
                    return e()
                }
            }(), i.prototype.resetStyle = function () {
                var e, t, a, r, i;
                for (r = this.boxes, i = [], t = 0, a = r.length; a > t; t++) e = r[t], i.push(e.style.visibility = "visible");
                return i
            }, i.prototype.customStyle = function (e, t, a, r, i) {
                return t && this.cacheAnimationName(e), e.style.visibility = t ? "hidden" : "visible", a && this.vendorSet(e.style, {
                    animationDuration: a
                }), r && this.vendorSet(e.style, {
                    animationDelay: r
                }), i && this.vendorSet(e.style, {
                    animationIterationCount: i
                }), this.vendorSet(e.style, {
                    animationName: t ? "none" : this.cachedAnimationName(e)
                }), e
            }, i.prototype.vendors = ["moz", "webkit"], i.prototype.vendorSet = function (e, t) {
                var a, r, i, n;
                n = [];
                for (a in t) r = t[a], e["" + a] = r, n.push(function () {
                    var t, n, o, s;
                    for (o = this.vendors, s = [], t = 0, n = o.length; n > t; t++) i = o[t], s.push(e["" + i + a.charAt(0).toUpperCase() + a.substr(1)] = r);
                    return s
                }.call(this));
                return n
            }, i.prototype.vendorCSS = function (e, t) {
                var a, i, n, o, s, l;
                for (i = r(e), a = i.getPropertyCSSValue(t), l = this.vendors, o = 0, s = l.length; s > o; o++) n = l[o], a = a || i.getPropertyCSSValue("-" + n + "-" + t);
                return a
            }, i.prototype.animationName = function (e) {
                var t;
                try {
                    t = this.vendorCSS(e, "animation-name").cssText
                } catch (a) {
                    t = r(e).getPropertyValue("animation-name")
                }
                return "none" === t ? "" : t
            }, i.prototype.cacheAnimationName = function (e) {
                return this.animationNameCache.set(e, this.animationName(e))
            }, i.prototype.cachedAnimationName = function (e) {
                return this.animationNameCache.get(e)
            }, i.prototype.scrollHandler = function () {
                return this.scrolled = !0
            }, i.prototype.scrollCallback = function () {
                var e;
                return !this.scrolled || (this.scrolled = !1, this.boxes = function () {
                    var t, a, r, i;
                    for (r = this.boxes, i = [], t = 0, a = r.length; a > t; t++) e = r[t], e && (this.isVisible(e) ? this.show(e) : i.push(e));
                    return i
                }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
            }, i.prototype.offsetTop = function (e) {
                for (var t; void 0 === e.offsetTop;) e = e.parentNode;
                for (t = e.offsetTop; e = e.offsetParent;) t += e.offsetTop;
                return t
            }, i.prototype.isVisible = function (e) {
                var t, a, r, i, n;
                return a = e.getAttribute("data-wow-offset") || this.config.offset, n = window.pageYOffset, i = n + Math.min(this.element.clientHeight, this.util().innerHeight()) - a, r = this.offsetTop(e), t = r + e.clientHeight, i >= r && t >= n
            }, i.prototype.util = function () {
                return null != this._util ? this._util : this._util = new t
            }, i.prototype.disabled = function () {
                return !this.config.mobile && this.util().isMobile(navigator.userAgent)
            }, i
        }()
    }.call(this), window.Modernizr = function (e, t, a) {
        function r(e) {
            v.cssText = e
        }

        function i(e, t) {
            return typeof e === t
        }

        function n(e, t) {
            return !!~("" + e).indexOf(t)
        }

        function o(e, t) {
            for (var r in e) {
                var i = e[r];
                if (!n(i, "-") && v[i] !== a) return "pfx" == t ? i : !0
            }
            return !1
        }

        function s(e, t, r) {
            for (var n in e) {
                var o = t[e[n]];
                if (o !== a) return r === !1 ? e[n] : i(o, "function") ? o.bind(r || t) : o
            }
            return !1
        }

        function l(e, t, a) {
            var r = e.charAt(0).toUpperCase() + e.slice(1),
                n = (e + " " + w.join(r + " ") + r).split(" ");
            return i(t, "string") || i(t, "undefined") ? o(n, t) : (n = (e + " " + b.join(r + " ") + r).split(" "), s(n, t, a))
        }
        var u, c, d, p = "2.7.1",
            h = {},
            f = !0,
            y = t.documentElement,
            m = "modernizr",
            g = t.createElement(m),
            v = g.style,
            j = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
            Q = "Webkit Moz O ms",
            w = Q.split(" "),
            b = Q.toLowerCase().split(" "),
            _ = {},
            A = [],
            C = A.slice,
            x = function (e, a, r, i) {
                var n, o, s, l, u = t.createElement("div"),
                    c = t.body,
                    d = c || t.createElement("body");
                if (parseInt(r, 10))
                    for (; r--;) s = t.createElement("div"), s.id = i ? i[r] : m + (r + 1), u.appendChild(s);
                return n = ["&#173;", '<style id="s', m, '">', e, "</style>"].join(""), u.id = m, (c ? u : d).innerHTML += n, d.appendChild(u), c || (d.style.background = "", d.style.overflow = "hidden", l = y.style.overflow, y.style.overflow = "hidden", y.appendChild(d)), o = a(u, e), c ? u.parentNode.removeChild(u) : (d.parentNode.removeChild(d), y.style.overflow = l), !!o
            },
            k = function () {
                function e(e, n) {
                    n = n || t.createElement(r[e] || "div"), e = "on" + e;
                    var o = e in n;
                    return o || (n.setAttribute || (n = t.createElement("div")), n.setAttribute && n.removeAttribute && (n.setAttribute(e, ""), o = i(n[e], "function"), i(n[e], "undefined") || (n[e] = a), n.removeAttribute(e))), n = null, o
                }
                var r = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return e
            }(),
            S = {}.hasOwnProperty;
        d = i(S, "undefined") || i(S.call, "undefined") ? function (e, t) {
            return t in e && i(e.constructor.prototype[t], "undefined")
        } : function (e, t) {
            return S.call(e, t)
        }, Function.prototype.bind || (Function.prototype.bind = function (e) {
            var t = this;
            if ("function" != typeof t) throw new TypeError;
            var a = C.call(arguments, 1),
                r = function () {
                    if (this instanceof r) {
                        var i = function () { };
                        i.prototype = t.prototype;
                        var n = new i,
                            o = t.apply(n, a.concat(C.call(arguments)));
                        return Object(o) === o ? o : n
                    }
                    return t.apply(e, a.concat(C.call(arguments)))
                };
            return r
        }), _.touch = function () {
            var a;
            return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? a = !0 : x(["@media (", j.join("touch-enabled),("), m, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (e) {
                a = 9 === e.offsetTop
            }), a
        }, _.csstransforms3d = function () {
            var e = !!l("perspective");
            return e && "webkitPerspective" in y.style && x("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (t, a) {
                e = 9 === t.offsetLeft && 3 === t.offsetHeight
            }), e
        }, _.csstransitions = function () {
            return l("transition")
        }, _.video = function () {
            var e = t.createElement("video"),
                a = !1;
            try {
                (a = !!e.canPlayType) && (a = new Boolean(a), a.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), a.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), a.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (r) { }
            return a
        };
        for (var I in _) d(_, I) && (c = I.toLowerCase(), h[c] = _[I](), A.push((h[c] ? "" : "no-") + c));
        return h.addTest = function (e, t) {
            if ("object" == typeof e)
                for (var r in e) d(e, r) && h.addTest(r, e[r]);
            else {
                if (e = e.toLowerCase(), h[e] !== a) return h;
                t = "function" == typeof t ? t() : t, "undefined" != typeof f && f && (y.className += " " + (t ? "" : "no-") + e), h[e] = t
            }
            return h
        }, r(""), g = u = null,
            function (e, t) {
                function a(e, t) {
                    var a = e.createElement("p"),
                        r = e.getElementsByTagName("head")[0] || e.documentElement;
                    return a.innerHTML = "x<style>" + t + "</style>", r.insertBefore(a.lastChild, r.firstChild)
                }

                function r() {
                    var e = v.elements;
                    return "string" == typeof e ? e.split(" ") : e
                }

                function i(e) {
                    var t = g[e[y]];
                    return t || (t = {}, m++, e[y] = m, g[m] = t), t
                }

                function n(e, a, r) {
                    if (a || (a = t), c) return a.createElement(e);
                    r || (r = i(a));
                    var n;
                    return n = r.cache[e] ? r.cache[e].cloneNode() : f.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !n.canHaveChildren || h.test(e) || n.tagUrn ? n : r.frag.appendChild(n)
                }

                function o(e, a) {
                    if (e || (e = t), c) return e.createDocumentFragment();
                    a = a || i(e);
                    for (var n = a.frag.cloneNode(), o = 0, s = r(), l = s.length; l > o; o++) n.createElement(s[o]);
                    return n
                }

                function s(e, t) {
                    t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (a) {
                        return v.shivMethods ? n(a, e, t) : t.createElem(a)
                    }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-]+/g, function (e) {
                        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                    }) + ");return n}")(v, t.frag)
                }

                function l(e) {
                    e || (e = t);
                    var r = i(e);
                    return v.shivCSS && !u && !r.hasCSS && (r.hasCSS = !!a(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), c || s(e, r), e
                }
                var u, c, d = "3.7.0",
                    p = e.html5 || {},
                    h = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    y = "_html5shiv",
                    m = 0,
                    g = {};
                ! function () {
                    try {
                        var e = t.createElement("a");
                        e.innerHTML = "<xyz></xyz>", u = "hidden" in e, c = 1 == e.childNodes.length || function () {
                            t.createElement("a");
                            var e = t.createDocumentFragment();
                            return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                        }()
                    } catch (a) {
                        u = !0, c = !0
                    }
                }();
                var v = {
                    elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: d,
                    shivCSS: p.shivCSS !== !1,
                    supportsUnknownElements: c,
                    shivMethods: p.shivMethods !== !1,
                    type: "default",
                    shivDocument: l,
                    createElement: n,
                    createDocumentFragment: o
                };
                e.html5 = v, l(t)
            }(this, t), h._version = p, h._prefixes = j, h._domPrefixes = b, h._cssomPrefixes = w, h.hasEvent = k, h.testProp = function (e) {
                return o([e])
            }, h.testAllProps = l, h.testStyles = x, h.prefixed = function (e, t, a) {
                return t ? l(e, t, a) : l(e, "pfx")
            }, y.className = y.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + A.join(" ") : ""), h
    }(this, this.document),
    function (e, t, a) {
        function r(e) {
            return "[object Function]" == m.call(e)
        }

        function i(e) {
            return "string" == typeof e
        }

        function n() { }

        function o(e) {
            return !e || "loaded" == e || "complete" == e || "uninitialized" == e
        }

        function s() {
            var e = g.shift();
            v = 1, e ? e.t ? f(function () {
                ("c" == e.t ? p.injectCss : p.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
            }, 0) : (e(), s()) : v = 0
        }

        function l(e, a, r, i, n, l, u) {
            function c(t) {
                if (!h && o(d.readyState) && (j.r = h = 1, !v && s(), d.onload = d.onreadystatechange = null, t)) {
                    "img" != e && f(function () {
                        w.removeChild(d)
                    }, 50);
                    for (var r in x[a]) x[a].hasOwnProperty(r) && x[a][r].onload()
                }
            }
            var u = u || p.errorTimeout,
                d = t.createElement(e),
                h = 0,
                m = 0,
                j = {
                    t: r,
                    s: a,
                    e: n,
                    a: l,
                    x: u
                };
            1 === x[a] && (m = 1, x[a] = []), "object" == e ? d.data = a : (d.src = a, d.type = e), d.width = d.height = "0", d.onerror = d.onload = d.onreadystatechange = function () {
                c.call(this, m)
            }, g.splice(i, 0, j), "img" != e && (m || 2 === x[a] ? (w.insertBefore(d, Q ? null : y), f(c, u)) : x[a].push(d))
        }

        function u(e, t, a, r, n) {
            return v = 0, t = t || "j", i(e) ? l("c" == t ? _ : b, e, t, this.i++, a, r, n) : (g.splice(this.i++, 0, e), 1 == g.length && s()), this
        }

        function c() {
            var e = p;
            return e.loader = {
                load: u,
                i: 0
            }, e
        }
        var d, p, h = t.documentElement,
            f = e.setTimeout,
            y = t.getElementsByTagName("script")[0],
            m = {}.toString,
            g = [],
            v = 0,
            j = "MozAppearance" in h.style,
            Q = j && !!t.createRange().compareNode,
            w = Q ? h : y.parentNode,
            h = e.opera && "[object Opera]" == m.call(e.opera),
            h = !!t.attachEvent && !h,
            b = j ? "object" : h ? "script" : "img",
            _ = h ? "script" : b,
            A = Array.isArray || function (e) {
                return "[object Array]" == m.call(e)
            },
            C = [],
            x = {},
            k = {
                timeout: function (e, t) {
                    return t.length && (e.timeout = t[0]), e
                }
            };
        p = function (e) {
            function t(e) {
                var t, a, r, e = e.split("!"),
                    i = C.length,
                    n = e.pop(),
                    o = e.length,
                    n = {
                        url: n,
                        origUrl: n,
                        prefixes: e
                    };
                for (a = 0; o > a; a++) r = e[a].split("="), (t = k[r.shift()]) && (n = t(n, r));
                for (a = 0; i > a; a++) n = C[a](n);
                return n
            }

            function o(e, i, n, o, s) {
                var l = t(e),
                    u = l.autoCallback;
                l.url.split(".").pop().split("?").shift(), l.bypass || (i && (i = r(i) ? i : i[e] || i[o] || i[e.split("/").pop().split("?")[0]]), l.instead ? l.instead(e, i, n, o, s) : (x[l.url] ? l.noexec = !0 : x[l.url] = 1, n.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : a, l.noexec, l.attrs, l.timeout), (r(i) || r(u)) && n.load(function () {
                    c(), i && i(l.origUrl, s, o), u && u(l.origUrl, s, o), x[l.url] = 2
                })))
            }

            function s(e, t) {
                function a(e, a) {
                    if (e) {
                        if (i(e)) a || (d = function () {
                            var e = [].slice.call(arguments);
                            p.apply(this, e), h()
                        }), o(e, d, t, 0, u);
                        else if (Object(e) === e)
                            for (l in s = function () {
                                    var t, a = 0;
                                    for (t in e) e.hasOwnProperty(t) && a++;
                                    return a
                            }(), e) e.hasOwnProperty(l) && (!a && !--s && (r(d) ? d = function () {
                                var e = [].slice.call(arguments);
                                p.apply(this, e), h()
                            } : d[l] = function (e) {
                                return function () {
                                    var t = [].slice.call(arguments);
                                    e && e.apply(this, t), h()
                                }
                            }(p[l])), o(e[l], d, t, l, u))
                    } else !a && h()
                }
                var s, l, u = !!e.test,
                    c = e.load || e.both,
                    d = e.callback || n,
                    p = d,
                    h = e.complete || n;
                a(u ? e.yep : e.nope, !!c), c && a(c)
            }
            var l, u, d = this.yepnope.loader;
            if (i(e)) o(e, 0, d, 0);
            else if (A(e))
                for (l = 0; l < e.length; l++) u = e[l], i(u) ? o(u, 0, d, 0) : A(u) ? p(u) : Object(u) === u && s(u, d);
            else Object(e) === e && s(e, d)
        }, p.addPrefix = function (e, t) {
            k[e] = t
        }, p.addFilter = function (e) {
            C.push(e)
        }, p.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", d = function () {
            t.removeEventListener("DOMContentLoaded", d, 0), t.readyState = "complete"
        }, 0)), e.yepnope = c(), e.yepnope.executeStack = s, e.yepnope.injectJs = function (e, a, r, i, l, u) {
            var c, d, h = t.createElement("script"),
                i = i || p.errorTimeout;
            h.src = e;
            for (d in r) h.setAttribute(d, r[d]);
            a = u ? s : a || n, h.onreadystatechange = h.onload = function () {
                !c && o(h.readyState) && (c = 1, a(), h.onload = h.onreadystatechange = null)
            }, f(function () {
                c || (c = 1, a(1))
            }, i), l ? h.onload() : y.parentNode.insertBefore(h, y)
        }, e.yepnope.injectCss = function (e, a, r, i, o, l) {
            var u, i = t.createElement("link"),
                a = l ? s : a || n;
            i.href = e, i.rel = "stylesheet", i.type = "text/css";
            for (u in r) i.setAttribute(u, r[u]);
            o || (y.parentNode.insertBefore(i, y), f(a, 0))
        }
    }(this, document), Modernizr.load = function () {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };