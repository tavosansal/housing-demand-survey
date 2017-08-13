import Ember from 'ember';

export default Ember.Route.extend({
  surveyRecord: Ember.inject.service(),

  redirect() {
    if (!this.get('surveyRecord.visitedDemographics')) {
      this.transitionTo('demographics');
    }
  },

  activate() {
    this.get('surveyRecord').set('visitedHousingType', true);
  },
});
