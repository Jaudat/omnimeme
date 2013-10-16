// any helpers (handlebars or otherwise) that are used often in view files

//http://www.paypertise.com/meteorjs/iron-router-tutorial
//https://github.com/EventedMind/iron-router

Router.configure({
  layout: 'layout',

  notFoundTemplate: 'notFound',

  loadingTemplate: 'loading',

  layoutTemplate : 'layout',

  yieldTemplates: { 
    /* render the templated named footer to the 'footer' yield */
    'footer': { to: 'layout_footer' },

    /* render the template named sidebar to the 'sidebar' yield */
    'menu': { to: 'layout_menu' }
  }
});

Router.map(function() {
  this.route('home', {
  	path: '/' });
  this.route('second')
});

