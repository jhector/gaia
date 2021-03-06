'use strict';
/* global LazyLoader */
/* exported fbLoader */

var fbLoader = (function() {

  var loaded = false;

  var loadFb = function loadFb() {
    if (loaded) {
      return;
    }

    loaded = true;
    var iframesFragment = document.createDocumentFragment();

    var oauth = document.createElement('iframe');
    oauth.id = 'iframe_oauth';
    oauth.hidden = true;
    iframesFragment.appendChild(oauth);

    var extensions = document.createElement('iframe');
    extensions.id = 'iframe_extensions';
    iframesFragment.appendChild(extensions);

    document.body.appendChild(iframesFragment);

    var scripts = [
      '/shared/js/contacts/import/utilities/misc.js',
      '/shared/js/contacts/import/import_status_data.js',
      '/contacts/js/service_extensions.js',
      '/shared/pages/import/js/parameters.js',
      '/shared/js/fb/fb_request.js',
      '/shared/js/contacts/import/facebook/fb_data.js',
      '/shared/js/contacts/import/facebook/fb_utils.js',
      '/shared/js/contacts/import/facebook/fb_query.js',
      '/shared/js/fb/fb_reader_utils.js',
      '/shared/js/contacts/import/facebook/fb_contact_utils.js',
      '/shared/js/contacts/import/facebook/fb_contact.js',
      '/contacts/js/fb/fb_link.js',
      '/contacts/js/fb/fb_messaging.js'
    ];

    LazyLoader.load(scripts, function() {
      var event = new CustomEvent('facebookLoaded');
      window.dispatchEvent(event);
    });
  };

  return {
    load: loadFb,
    get loaded() { return loaded; }
  };

})();
