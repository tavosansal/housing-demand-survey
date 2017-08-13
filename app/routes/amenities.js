import Ember from 'ember';

export default Ember.Route.extend({
  surveyRecord: Ember.inject.service(),

  redirect(model, transition) {
    if (!transition.queryParams.godMode && !this.get('surveyRecord.visitedDemographics')) {
      this.transitionTo('demographics');
    }
  },

  activate() {
    this.get('surveyRecord').set('visitedAmenities', true);
  },
});
