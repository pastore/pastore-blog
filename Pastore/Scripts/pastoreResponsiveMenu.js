var responsiveMenu = function (container, visualMenu, hiddenMenu, switchButton, marginButton, amountSkipElements) {
    if (!(this instanceof responsiveMenu)) {
        return new responsiveMenu(container, visualMenu, hiddenMenu, switchButton, marginButton, amountSkipElements);
    }
    var that = this;
    //parent block
    that.container = document.querySelector(container);
    if (!this.container) {
        throw new Error('No element found for "' + container + '".');
    }
    //visual menu
    that.visualMenu = document.querySelector(container + " > " + visualMenu);
    if (!this.visualMenu) {
        throw new Error('No element found for "' + visualMenu + '".');
    }
    //hidden menu
    that.hiddenMenu = document.querySelector(container + " > " + hiddenMenu);
    if (!this.hiddenMenu) {
        throw new Error('No element found for "' + hiddenMenu + '".');
    }
    //button for collapse and expand menu
    that.switchButton = document.querySelector(container + " > " + switchButton);
    if (!this.switchButton) {
        throw new Error('No element found for "' + switchButton + '".');
    }
    var breaks = [];
    //set margin for switch button
    that.marginButton = marginButton || 31;
    //amount not hidden elements
    that.amountSkipElements = amountSkipElements || 2;
    //create array children blocks of container except first three 
    that.arrayAdditionalBlocks = [].slice.call(that.container.children, 3);

    var utils = {
        setOffsetLeft: function (obj) {
            obj.offsetLeft = obj.arrayAdditionalBlocks.length > 0
                ? obj.arrayAdditionalBlocks[0].offsetLeft
                : obj.container.offsetWidth;
        },
        setAvailableSpace: function (obj) {
            obj.availableSpace = obj.switchButton.style.display === "none" || obj.switchButton.style.display === ""
                ? obj.offsetLeft - obj.marginButton
                : obj.offsetLeft - obj.marginButton - obj.switchButton.offsetWidth;
        }
    };

    //get offset between button and border
    utils.setOffsetLeft(that);
    utils.setAvailableSpace(that);
    //set width for visual menu
    var visualMenuWidth = that.visualMenu.offsetWidth;
    var visualMenuChildren = [].slice.call(that.visualMenu.children);

    that.init = function () {
        var temp1 = "";
        for (var i = visualMenuChildren.length; that.amountSkipElements <= i ; --i) {
            if (visualMenuWidth > that.availableSpace) {
                breaks.push(visualMenuWidth);
                if (i === visualMenuChildren.length) {
                    if (that.switchButton.style.display === "" || that.switchButton.style.display === "none") {
                        that.switchButton.style.display = "flex";
                    }
                }
                visualMenuWidth -= visualMenuChildren[i - 1].offsetWidth;
                that.offsetLeft -= visualMenuChildren[i - 1].offsetWidth;

                temp1 += visualMenuChildren[i - 1].outerHTML;
                visualMenuChildren[i - 1].remove();
            } else {
                break;
            }
            utils.setOffsetLeft(that);
            that.offsetLeft -= visualMenuChildren[i - 1].offsetWidth;
            utils.setAvailableSpace(that);
        }
        that.hiddenMenu.insertAdjacentHTML("afterBegin", temp1);
    };
    that.update = function () {
        //get offset between button and border
        utils.setOffsetLeft(that);
        utils.setAvailableSpace(that);
        //set width for visual menu
        visualMenuWidth = that.visualMenu.offsetWidth;
        visualMenuChildren = [].slice.call(that.visualMenu.children);
        var hiddenMenuChildren = [].slice.call(that.hiddenMenu.children);
        var temp1 = "";
        if (visualMenuWidth > that.availableSpace) {
            breaks.push(visualMenuWidth);
            if (that.switchButton.style.display === "" || that.switchButton.style.display === "none") {
                that.switchButton.style.display = "flex";
            }
            visualMenuWidth -= visualMenuChildren[visualMenuChildren.length - 1].offsetWidth;
            that.offsetLeft -= visualMenuChildren[visualMenuChildren.length - 1].offsetWidth;

            that.hiddenMenu.appendChild(visualMenuChildren[visualMenuChildren.length - 1]);
            visualMenuChildren[visualMenuChildren.length - 1].remove();
        } else {
            if (that.availableSpace > breaks[breaks.length - 1]) {
                that.visualMenu.appendChild(hiddenMenuChildren[0]);
                hiddenMenuChildren[0].remove();
            }
            if (hiddenMenuChildren.length === 0) {
                that.switchButton.style.display = "none";
            }
        }
    };
    that.switchButton.addEventListener("click", function () {
        if (that.hiddenMenu.style.display === "" || that.hiddenMenu.style.display === "none") {
            that.hiddenMenu.style.display = "block";
        } else {
            that.hiddenMenu.style.display = "none";
        }
    });
    window.addEventListener("resize", that.update);
};