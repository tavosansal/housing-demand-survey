import Ember from 'ember';

export default Ember.Controller.extend({
  surveyRecord: Ember.inject.service(),
  locationType: 'suburban',
  locationPreference: 'new',

  suburban: Ember.computed.equal('locationType', 'suburban'),
  center: Ember.computed.equal('locationType', 'center'),
  complete: Ember.computed.equal('locationType', 'complete'),

  actions: {
    setType(type) {
      this.set('locationType', type);
    },

    continue() {
      const { locationType, locationPreference } = this.getProperties('locationType', 'locationPreference');

      this.get('surveyRecord').setProperties({
        locationType,
        locationPreference
      });

      this.transitionToRoute('housing-type');
    }
  },
});
