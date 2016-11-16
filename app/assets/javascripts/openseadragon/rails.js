//= require openseadragon/jquery

(function($) {
  function initOpenSeadragon() {
    $('picture[data-openseadragon]').openseadragon();
  }


  $(document).on('page:load', initOpenSeadragon);
  $(document).ready(initOpenSeadragon);

  console.log('commented out Turbolinks');
  // var handler = 'ready';
  // if (typeof Turbolinks !== 'undefined' && Turbolinks.supported) {
  //   // Turbolinks 5
  //   if (Turbolinks.BrowserAdapter) {
  //     handler = 'turbolinks:load';
  //   } else {
  //     // Turbolinks < 5
  //     handler = 'page:load ready';
  //   }
  // }
  // $(document).on(handler, initOpenSeadragon);
})(jQuery);
