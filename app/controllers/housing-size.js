import Ember from 'ember';

export default Ember.Controller.extend({
  surveyRecord: Ember.inject.service(),

  bathrooms: 1,
  bedrooms: 1,

  actions: {
    continue() {
      this.get('surveyRecord').setProperties({
        bathrooms: this.get('bathrooms'),
        bedrooms: this.get('bedrooms'),
      });

      this.transitionToRoute('housing-quality');
    },
  },
});
