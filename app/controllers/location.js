import Ember from 'ember';

export default Ember.Controller.extend({
  locationType: 'suburban',

  suburban: Ember.computed.equal('locationType', 'suburban'),
  center: Ember.computed.equal('locationType', 'center'),
  complete: Ember.computed.equal('locationType', 'complete'),

  actions: {
    setType(type) {
      this.set('locationType', type);
    },
  },
});
