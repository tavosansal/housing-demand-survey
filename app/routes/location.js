import Ember from 'ember';

export default Ember.Route.extend({
  surveyRecord: Ember.inject.service(),

  activate() {
    this.get('surveyRecord').set('visitedLocation', true);
  },
});
