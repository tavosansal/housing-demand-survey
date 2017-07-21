import Ember from 'ember';

export default Ember.Controller.extend({
  surveyRecord: Ember.inject.service(),

  housingTypePreference: 'rehab',
  housingType: null,

  housingTypes: [{
      key: 'largeLot',
      value: 'Large Lot'
    }, {
      key: 'smallLot',
      value: 'Small Lot'
    }, {
      key: 'twinHome',
      value: 'Twin Home',
    }, {
      key: 'rowHome',
      value: 'Row Home',
    }, {
      key: 'accessoryDwelling',
      value: 'Accessory Dweling Unit',
    }, {
      key: 'walkupFlat',
      value: 'Walk-Up Flat',
    }, {
      key: 'midriseFlat',
      value: 'Mid-Rise Flat'
    }, {
      key: 'highriseFlat',
      value: 'High-Rise Flat',
    },
  ],

  init(...args) {
    this._super(...args);

    this.set('housingType', this.get('housingTypes.firstObject'));
  },

  actions: {
    changeType(newType) {
      this.set('housingType', newType);
    },

    nextType() {
      const housingTypes = this.get('housingTypes');
      const housingType = this.get('housingType');
      const currentIndex = housingTypes.indexOf(housingType);
      const lengthOfTypes = this.get('housingTypes.length');

      if ((lengthOfTypes - 1) === currentIndex) {
        this.set('housingType', this.get('housingTypes').objectAt(0));
      } else {
        this.set('housingType', this.get('housingTypes').objectAt(currentIndex + 1));
      }
    },

    previousType() {
      const housingTypes = this.get('housingTypes');
      const housingType = this.get('housingType');
      const currentIndex = housingTypes.indexOf(housingType);
      const lengthOfTypes = this.get('housingTypes.length');

      if (currentIndex === 0) {
        this.set('housingType', this.get('housingTypes').objectAt(lengthOfTypes - 1));
      } else {
        this.set('housingType', this.get('housingTypes').objectAt(currentIndex - 1));
      }
    },

    continue() {
      this.get('surveyRecord').setProperties({
        housingTypePreference: this.get('housingTypePreference'),
        housingType: this.get('housingType'),
      });

      this.transitionToRoute('housing-size');
    }
  },


});
