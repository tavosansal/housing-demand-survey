import Ember from 'ember';

export default Ember.Route.extend({
  surveyRecord: Ember.inject.service(),

  timeframes: ['Less than 1 year', '1 - 2 years', '2 + years'],


  activate() {
    this.get('surveyRecord').set('visitedDemographics', true);
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('timeframes', this.timeframes);
  },

  actions: {
    continue() {
      const currentSurvey = this.get('surveyRecord').current();
      const {age, zipcode, interest, timeframe} = this.controller.getProperties('age', 'zipcode', 'interest', 'timeframe');

      currentSurvey.setProperties({
        age,
        zipcode,
        interest,
        timeframe
      })

      this.transitionTo('budget');
    }
  }
});
