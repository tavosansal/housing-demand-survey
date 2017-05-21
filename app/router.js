import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('demographics');
  this.route('budget');
  this.route('neighborhood');
  this.route('housing-type');
  this.route('housing-size');
  this.route('housing-quality');
  this.route('parking');
  this.route('amenities');
  this.route('thank-you');
});

export default Router;
