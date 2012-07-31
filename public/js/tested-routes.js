define(function(require) {

//var tpl = require('text!templates/wishes/wish.mustache'),
var homeTpl = require('text!templates/home.mustache'),
    CreateWishHomepageView = require('views/wishes/create_wish_homepage'),
    Router = require('router')


Router.prototype.home = function(){
  $('body').attr('id','home')
  var wishView = new CreateWishHomepageView({user: this.user})
  $('#app').html(homeTpl)
  $('.home-form', '#app').html(wishView.render().el)
  document.title = 'Ruby Rate'
  _gaq.push(['_trackPageview', '/home'])
}

Router.prototype.reset_home = function(){
  $('body').removeAttr('id')
}


return Router 

});
