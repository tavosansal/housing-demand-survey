import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('demographics');
  this.route('budget');
  this.route('location');
  this.route('housing-type');
  this.route('parking');
  this.route('amenities');
  this.route('thank-you');
});

export default Router;
