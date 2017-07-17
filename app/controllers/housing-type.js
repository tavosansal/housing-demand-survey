import Ember from 'ember';

export default Ember.Controller.extend({
  surveyRecord: Ember.inject.service(),

  housingTypePreference: 'rehab',
  housingType: 'largeLot',

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

  actions: {
    changeType(newType) {
      this.set('housingType', newType);
    }
  }


});
