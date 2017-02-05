"use strict";

;(function (window) {
    function extend(a, b) {
        for (var key in b) {
            if (b.hasOwnProperty(key)) {
                a[key] = b[key];
            }
        }
        return a;
    }

    function pastoreSelect(el, options) {
        this.el = el;
        extend(this.options, options);
        this._init();
    }
    function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }
    pastoreSelect.prototype.options = {
        onChange: function (val) { return false; }
    }
    pastoreSelect.prototype._init = function () {
        if (this.el.hasAttribute("multiple")) {
            this.selMultiple = true;
        } else {
            this.selMultiple = false;
        }
        this._createSelect();
        this.selOpts = [].slice.call(this.selEl.querySelectorAll('li[data-option]'));
        this.selOptsCount = this.selOpts.length;
        this.current = this.el.selectedIndex != -1 ? this.el.selectedIndex : this.selOpts.indexOf(this.selEl.querySelector('li.ps_selected'));
        this.selPlaceholder = this.selEl.querySelector('.pastore_select__placeholder');
        this._initEvents();
    }
    pastoreSelect.prototype._createSelect = function () {
        this.el.style.display = "none";
        var createOptionHtml = function (el) {
            var optClass = "";
            if (el.querySelector("option[selected]")) {
                optClass += 'ps_selected';
            }
            return '<li ' + optClass + ' data-option data-value="' + el.value + '">' + el.textContent + '</li>';
        };
        var options = '';
        [].slice.call(this.el.children)
        .forEach(function (el) {
            if (el.disabled) { return; }
            options += createOptionHtml(el);
        });
        var placeHolderElement = document.createElement("div");
        placeHolderElement.className = "pastore_select__placeholder";
        placeHolderElement.innerHTML = this._setPlaceholder();
        var ulElement = document.createElement("ul");
        ulElement.className = "pastore_select__options";
        ulElement.innerHTML = options;
        this.selEl = document.createElement("div");
        this.selEl.className = this.el.className;
        this.selEl.appendChild(placeHolderElement);
        this.selEl.appendChild(ulElement);
        this.el.parentNode.appendChild(this.selEl);
        this.selEl.insertBefore(this.el, placeHolderElement);
    };
    pastoreSelect.prototype._setPlaceholder = function () {
        var elSelPlacHolder = "";
        var placeholder = this.el.getAttribute('data-placeholder');
        if (this.selMultiple) {
            var createSelectedOptionHtml = function (el) {
                return '<li data-selected data-selectedvalue="' + el.value + '"><span>' +
                    el.textContent + '</span><span class="fa fa-times placeholder__close"></span></li>';
            };
            var selectedOptions = '';
            [].slice.call(this.el.options).forEach(function (el) {
                if (el.selected) {
                    selectedOptions += createSelectedOptionHtml(el);
                }
            });
            if (selectedOptions !== "") {
                elSelPlacHolder = "<ul class='placeholder__selected_options'>" + selectedOptions + "</ul>";
            }
            else {
                elSelPlacHolder = placeholder;
            }
        } else {
            var opt = this.el.querySelector("option[selected]")
                ||  this.el.querySelector("option[value='" + this.el.value + "']")
                || (this.selOpts && this.current !== -1 ? this.selOpts[this.current] : "");
            elSelPlacHolder = opt ? opt.textContent : placeholder || this.el.querySelector("option");
        }
        return elSelPlacHolder;
    };

    pastoreSelect.prototype._initEvents = function() {
        var self = this;
        this.selOpts.forEach(function (opt, idx) {
            opt.addEventListener("click",
                function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    self.current = idx;
                    self._changeOption();
                    self._toggleSelect();
                });
        });
        this.selPlaceholder.addEventListener('click', function (e) {
            e = e || window.event;
            e.preventDefault();
            e.stopPropagation();
            var target = e.target || e.srcElement;
            if (classReg('placeholder__close').test(target.className)) {
                var ul = target.parentNode.parentNode;
                var optValue = target.parentNode.getAttribute("data-selectedvalue");
                ul.removeChild(target.parentNode);
                if (self.selMultiple) {
                    [].slice.call(self.el.options).forEach(function (el) {
                        if (el.value == optValue) {
                            el.selected = false;
                        }
                    });
                }
                if (!self._isOpen()) {
                    self.selPlaceholder.innerHTML = self._setPlaceholder();
                }
            }
            else {
                self._toggleSelect();
            }
        });
        document.addEventListener("click", function () {
            if(self._isOpen()){
                self._toggleSelect();
            }
        });
        this.el.addEventListener("updated", function () {
            var createOptionHtml = function (el) {
                var optClass = "";
                if (el.querySelector("option[selected]")) {
                    optClass += 'ps_selected';
                }
                return '<li ' + optClass + ' data-option data-value="' + el.value + '">' + el.textContent + '</li>';
            };
            var options = '';
            [].slice.call(self.el.children)
            .forEach(function (el) {
                if (el.disabled) { return; }
                options += createOptionHtml(el);
            });
            var selEl = self.selEl.querySelector(".pastore_select__options");
            selEl.innerHTML = options;
            self.selPlaceholder.innerHTML = self._setPlaceholder();
            self.selOpts = [].slice.call(self.selEl.querySelectorAll("li[data-option]"));
            self.selOpts.forEach(function (opt, idx) {
                opt.addEventListener("click",
                    function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        self.current = idx;
                        self._changeOption();
                        self._toggleSelect();
                    });
            });
        });
    }
    
    pastoreSelect.prototype._changeOption = function () {
        
        var opt = this.selOpts[this.current];
        var optValue = opt.getAttribute("data-value");
        this.selPlaceholder.textContent = opt.textContent;
        if (this.selMultiple) {
            [].slice.call(this.el.options).forEach(function (el) {
                if (el.value == optValue) {
                    el.selected = true;
                } 
            });
        } else {
            this.el.value = optValue;
            this.el.options[this.current].selected = true;
            this.selOpts[this.current].selected = true;
        }
        if (classReg("input-validation-error").test(this.el.className)) {
            this.el.className = this.el.className.replace(classReg('input-validation-error'), ' ');
        }
        var oldOpt = this.selEl.querySelector('ps_selected');
        if (oldOpt) {
            oldOpt.className = oldOpt.className.replace(classReg('ps_selected')," ");
        }
        opt.className = opt.className + " ps_selected";
        this.options.onChange(this.el.value);
        this.el.dispatchEvent(new Event("change"));
    }

    pastoreSelect.prototype._toggleSelect = function () {
        if (this._isOpen()) {
            this.selPlaceholder.innerHTML = this._setPlaceholder();
            this.selEl.className = this.selEl.className.replace(classReg('pastore_select--active'), ' ');
        } else {
            this.selPlaceholder.innerHTML = this._setPlaceholder();
            if (!classReg('pastore_select--active').test(this.selEl.className)) {
                this.selEl.className = this.selEl.className + ' pastore_select--active';
            }
        }
    };
    pastoreSelect.prototype._isOpen = function () {
        return classReg('pastore_select--active').test(this.selEl.className);
    };

    window.pastoreSelect = pastoreSelect;
})(window);