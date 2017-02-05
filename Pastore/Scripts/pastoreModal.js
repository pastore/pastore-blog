(function ($) {
    var defaults = {
        animatedOpenClass: 'lightSpeedIn',
        animatedCloseClass: 'bounceOut',
        duration: 1
    };
    function PastoreModal(element, options) {
        this.element = element;
        this.config = $.extend({}, options, defaults);
        this.init();
    }
    PastoreModal.prototype.init = function () {
        var $modal = $(this.element);
        var $configModal = this.config;
        $modal.addClass('animated');
        $modal.addClass($configModal.animatedOpenClass);
        $modal.show();
        $modal.on('click', '.modal_container__close', function () {
            $modal.removeClass($configModal.animatedOpenClass)
                .addClass($configModal.animatedCloseClass)
                .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    $modal.removeClass($configModal.animatedCloseClass).hide();

                });
        });
    }
    $.fn.pastoreModal = function (options) {
        return this.each(function () {
            new PastoreModal(this,options);
        });
    }
})(jQuery)