import Ember from 'ember';

export default Ember.Controller.extend({
  surveyRecord: Ember.inject.service(),
  locationType: 'suburban',

  suburban: Ember.computed.equal('locationType', 'suburban'),
  center: Ember.computed.equal('locationType', 'center'),
  complete: Ember.computed.equal('locationType', 'complete'),

  currentIndex: 0,

  actions: {
    setType(type) {
      this.set('locationType', type);
    },

    continue() {
      const { locationType } = this.getProperties('locationType', 'locationPreference');

      this.get('surveyRecord').setProperties({
        locationType,
      });

      this.transitionToRoute('housing-type');
    }
  },
});
