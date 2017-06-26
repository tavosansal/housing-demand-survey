import Ember from 'ember';

export default Ember.Route.extend({
  timeframes: ['Less than 1 year', '1 - 2 years', '2 + years'],

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('timeframes', this.timeframes);
  },

  actions: {
    continue() {
      this.transitionTo('budget');
    }
  }
});
