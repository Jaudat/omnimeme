// any helpers (handlebars or otherwise) that are used often in view files

//http://www.paypertise.com/meteorjs/iron-router-tutorial
//https://github.com/EventedMind/iron-router

Router.configure({
  //layout: 'main_layout',

  notFoundTemplate: 'notFound',

  loadingTemplate: 'loading',

  yieldTemplates: { 
    /* render the templated named footer to the 'footer' yield */
    'footer': { to: 'layout_footer' },

    /* render the template named sidebar to the 'sidebar' yield */
    'menu': { to: 'layout_menu' }
  }
});

Router.map(function() {
  
  this.route('webfeed', {
  	layoutTemplate : 'main_layout',
  	path: '/' });
  
  this.route('about', {
  	layoutTemplate : 'static_layout',
  	path : '/about'
  });
  
  this.route('contact', {
  	layoutTemplate : 'static_layout',
  	path : '/contact'
  });

  this.route('publish', {
  	layoutTemplate : 'static_layout',
  	path : '/publish'
  });

  this.route('privacy', {
  	layoutTemplate : 'static_layout',
  	path : '/privacy'
  });

});

