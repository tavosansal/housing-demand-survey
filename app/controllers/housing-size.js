import Ember from 'ember';

export default Ember.Controller.extend({
  bathroomsSlider: 1,

  bathrooms: Ember.computed('bathroomsSlider', function () {
    const prevValue = this.get('bathroomsSlider') - 1.5;
    return this.get('bathroomsSlider') - prevValue;
  }),

  actions: {
    setBathroom(step) {
      const toSubtract = step - 1.5;
    },
  },
});
