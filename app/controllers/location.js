import Ember from 'ember';

export default Ember.Controller.extend({
  surveyRecord: Ember.inject.service(),
  location: 'suburban',

  suburban: Ember.computed.equal('location', 'suburban'),
  center: Ember.computed.equal('location', 'center'),
  complete: Ember.computed.equal('location', 'complete'),

  currentIndex: 0,

  actions: {
    setType(type) {
      this.set('location', type);
    },

    continue() {
      const { location } = this.getProperties('location');

      this.get('surveyRecord').setProperties({
        location,
      });

      this.transitionToRoute('housing-type');
    }
  },
});
