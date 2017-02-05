(function ($) {
    var defaults = {
        widthSlide: 300,
        heightSlide: 168.75,
        backface: 'visible',
        position: 'horizontal',
        prevSelector: 'prevSlide',
        nextSelector: 'nextSlide'
    };
    const MIN_COUNT_SLIDES = 3;
    function PastoreSlider3d(element,options) {
        this.element = element;
        this.config = $.extend({}, options, defaults);
        this.init();
    }
    PastoreSlider3d.prototype.init = function () {
        var $slider3d = $(this.element),
            countSlides = $slider3d.children().length,
            $wrapper = $slider3d.closest('.slider3d_wrapper'),
            baseAngle,
            currentPosition = 0,
            radius,
            widthSlide,
            heightSlide,
            backface;
        
        if (countSlides >= MIN_COUNT_SLIDES)
        {
            radius = Math.round(this.config.widthSlide / 2) / Math.tan(Math.PI / countSlides);
            baseAngle = 360 / countSlides;
            widthSlide = this.config.widthSlide;
            heightSlide = this.config.heightSlide;
            backface = this.config.backface;
            $wrapper.css({
                'height': heightSlide + 'px',
                'width': widthSlide + 'px',
                'perspective': '900px',
                'margin': '0 auto'
            });
            $slider3d.css({
                'transform-style': 'preserve-3d',
                'position': 'relative',
                'transform': 'translateZ(-' + radius + 'px)'
            });
            $slider3d.children().each(function (index) {
                $(this).css({
                    'position': 'absolute',
                    'transform': 'rotateY(' + baseAngle * index + 'deg) translateZ(' + radius + 'px)',
                    'height': heightSlide + 'px',
                    'width': widthSlide + 'px',
                    'transition': 'transform 1s',
                    'backface-visibility': backface
                });
            });
            if (this.config.prevSelector.indexOf('prevSlide') != -1) {
                $('.' + this.config.prevSelector).css({
                    'position': 'absolute',
                    'top': '50%',
                    'left': '-70px'
                });
            }
            if (this.config.nextSelector.indexOf('nextSlide') != -1) {
                $('.' + this.config.nextSelector).css({
                    'position': 'absolute',
                    'top': '50%',
                    'right': '-70px'
                });
            }
            $wrapper.on('click', '.' + this.config.prevSelector, function () {
                $slider3d.children().each(function (index) {
                    $(this).css({
                        'transform': 'rotateY(' + ((baseAngle * index) - baseAngle + (baseAngle*currentPosition)) + 'deg) translateZ(' + radius + 'px)',
                    });
                });
                currentPosition--;
            });
            $wrapper.on('click', '.' + this.config.nextSelector, function () {
                $slider3d.children().each(function (index) {
                    $(this).css({
                        'transform': 'rotateY(' + ((baseAngle * index) + baseAngle + (baseAngle * currentPosition)) + 'deg) translateZ(' + radius + 'px)',
                    });
                });
                currentPosition++;
            });
        }
        else{
            return new Error('Count of slides shoulde be 3 or more');
        }
    }
    $.fn.pastoreSlider3d = function (options) {
        return this.each(function () {
            new PastoreSlider3d(this,options);
        });
    };
})(jQuery)

