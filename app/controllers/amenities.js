import Ember from 'ember';

export default Ember.Controller.extend({
  parkingStalls: Ember.A(),
  amenities: [
    'Cardio Machines',
    'Free Weights',
    'Steam Room',
    'Rooftop Lounge',
    'Courtyard Lounge',
    'In Unit Laundry',
    'In Building Laundry',
    'Childrens Play Area',
    'Dog Run',
    'Community Garden',
    'Picnic Area',
  ],
  selectedAmenities: ['Drag Items Here'],

  actions: {
    addStall() {
      if (this.get('parkingStalls.length') < 4) {
        this.get('parkingStalls').addObject({
          onSite: true,
          nearby: false,
        });
      }
    },
    removeStall(stall) {
      this.get('parkingStalls').removeObject(stall);
    },
    addToAmenities() {
      if (this.get('selectedAmenities.length') > 1) {
        this.get('selectedAmenities').removeObject('Drag Items Here');
      }
    },
    removeFromAmenities() {
      if (this.get('selectedAmenities.length') === 0) {
        this.get('selectedAmenities').addObject('Drag Items Here');
      }
    },
  },
});
