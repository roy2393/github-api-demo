/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your incidents ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojavatar', 'config/config'],
 function(oj, ko, $) {
  
    function HomeViewModel() {
      var self = this;
      // Below are a subset of the ViewModel methods invoked by the ojModule binding
      // Please reference the ojModule jsDoc for additional available methods.
      var access_token;
      self.username = ko.observable('');
      self.name = ko.observable('');
      self.profilePic = ko.observable('');
      /**
       * Optional ViewModel method invoked when this ViewModel is about to be
       * used for the View transition.  The application can put data fetch logic
       * here that can return a Promise which will delay the handleAttached function
       * call below until the Promise is resolved.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @return {Promise|undefined} - If the callback returns a Promise, the next phase (attaching DOM) will be delayed until
       * the promise is resolved
       */
      self.handleActivated = function(info) {
        // Implement if needed
        console.log(info.element.baseURI);
        var URI = info.element.baseURI;
        var param = URI.split('code=');
        console.log(param[1]);
        var urlParams = '?client_id='+CLIENT_ID+'&client_secret='+CLIENT_SECRET;
        console.log(urlParams);
        var login = $.ajax({
                url: 'https://github.com/login/oauth/access_token',
                type: 'post',
                data: {client_id : 'f0402855f297dac6c711',
                       client_secret : 'a316ba72ed335a96250e60b2a7e3c85bec251cbb',
                      code : param[1]},
                success: function(data) {
                    console.log(data);
                    access_token = data;
                },
                error: function(jqXHR, exception) {
                    console.log(jqXHR);
                }
            });

        $.when(login).done(function(){
          $.ajax({
                url: 'https://api.github.com/user?'+access_token,
                type: 'get',
                success: function(data) {
                    console.log(data);
                    self.username(data.login);
                    self.name(data.name);
                    self.profilePic(data.avatar_url);
                },
                error: function(jqXHR, exception) {
                    console.log(jqXHR);
                }
            });
        })

      };

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @param {boolean} info.fromCache - A boolean indicating whether the module was retrieved from cache.
       */
      self.handleAttached = function(info) {
        // Implement if needed
      };


      /**
       * Optional ViewModel method invoked after the bindings are applied on this View. 
       * If the current View is retrieved from cache, the bindings will not be re-applied
       * and this callback will not be invoked.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       */
      self.handleBindingsApplied = function(info) {
        // Implement if needed
      };

      /*
       * Optional ViewModel method invoked after the View is removed from the
       * document DOM.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @param {Array} info.cachedNodes - An Array containing cached nodes for the View if the cache is enabled.
       */
      self.handleDetached = function(info) {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new HomeViewModel();
  }
);
