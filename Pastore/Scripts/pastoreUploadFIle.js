;(function ($) {
    $.support.fileinput = window.FileReader && window.File && window.FileList;
    $.support.formdata = window.FormData;
    $.support.blobslice = window.Blob && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice);
    $.support.urlApi = (window && URL && window.URL.createObjectURL && window.URL.revokeObjectURL);

    $.widget('pastore.uploadFile', {
        options: {
            submitButtonId: "submitButtonId",
            add: function (e, data) {
                var $this = $(this);
                $this.closest('form').data('data', data);
            },
            processData: false,
            contentType: false,
            cache: false,
            timeout: 0
        },
        _loadFile: function (element) {

        },
        _initDataSettings: function (options) {
            if (!options.data) {
                options.data = new FormData($(options.form)[0]);
            }
        },
        _initFormSettings: function (options) {
            if (!options.form || !options.form.length) {
                if (!options.form.length) {
                    options.form = $(this.options.fileInput.prop('form'));
                }
            }
            if (!options.url) {
                options.url = options.form.prop('action') || location.href;
            }
            options.type = (options.type ||
                ($.type(options.form.prop('method')) === 'string' &&
                    options.form.prop('method')) || ''
                ).toUpperCase();
            if (options.type !== 'POST' && options.type !== 'PUT' &&
                    options.type !== 'PATCH') {
                options.type = 'POST';
            }
            if (!options.formAcceptCharset) {
                options.formAcceptCharset = options.form.attr('accept-charset');
            }
        },
        _getAJAXSettings: function (data) {
            var options = $.extend({}, this.options, data);
            this._initFormSettings(options);
            this._initDataSettings(options);
            return options;
        },
        _addConvenienceMethods: function (e, data) {
            var that = this;
            data.submit = function () {
                    data.jqXHR = this.jqXHR = that._onSend(e, this);
                return this.jqXHR;
            };
        },
        _onAdd: function(e,data){
            var that = this,
                files = data.files;
            $.each(files, function (index, element) {
                var newData = $.extend({}, data);
                newData.files = [element];
                //that._initResponseObject(newData);
                that._addConvenienceMethods(e, newData);
                that._loadFile(newData);
                that._trigger(
                    'add',
                    $.Event('add', { delegatedEvent: e }),
                    newData
                );
            });
        },
        _onSend: function (e, data) {
            var that = this;
            var options = that._getAJAXSettings(data);
            var send = function () {
                jqXHR = ($.ajax(options))
                    .done(function (result, textStatus, jqXHR) {
                        var response = result;
                    })
                    .fail(function (jqXHR, textStatus, errorThrown) {

                    });
                return jqXHR
            };
            return send();
        },
        _onChange: function (e) {
            var that = this,
                data = {
                    fileinput: $(e.target),
                    form: $(e.target.form)
                };
            this._getFileInputFiles(data.fileinput).always(function (files) {
                data.files = files;
                that._onAdd(e, data);
            });
        },
        _getSingleFileInputFiles: function (fileInput) {
            fileInput = $(fileInput);
            files = $.makeArray(fileInput.prop('files'));
            return $.Deferred().resolve(files).promise();
        },
        _getFileInputFiles: function(fileinput){
            if(fileinput.length === 1){
                return this._getSingleFileInputFiles(fileinput);
            }
            return $.when.apply(
                $,
                $.map(fileInput, this._getSingleFileInputFiles)
            ).pipe(function () { 
                return Array.prototype.concat.apply(
                    [],
                    arguments
                );
            });
        },
        _startHandler: function (e) {
            e.preventDefault();
            var button = $(e.currentTarget);
            var data = button.closest('form').data('data');
            if(data && data.submit)
            {
                data.submit();
            }
        },
        _initEventHandlers: function(){
            if($.support.fileinput)
            {
                this._on(this.options.fileinput, {
                    change: this._onChange
                });
                if (this.options.submitButtonId)
                {
                    var submitButton = this.element.siblings('#' + this.options.submitButtonId);
                    this._on(submitButton, {
                        'click': this._startHandler
                    });
                }
            }
        },
        _initSpecialOptions: function () {
            var options = this.options;
            if (options.fileinput === undefined) {
                options.fileinput = this.element.is('input[type="file"]') ? this.element :
                    this.element.find('input[type="file"]');
            }
        },
        _create: function () {
            this._initSpecialOptions();
            this._initEventHandlers();
        }
    });
})(jQuery);