import Ember from 'ember';

export default Ember.Service.extend({
  peopleInHousehold: 1,
  incomesInHousehold: 1,
  housingBudget: 300,
  squareFeetPerPerson: 300,

  currentRecord: Ember.Object.create(),

  totalSquareFootage: Ember.computed('peopleInHousehold','squareFeetPerPerson', function () {
    return this.get('peopleInHousehold') * this.get('squareFeetPerPerson');
  }),

  costPerSquareFoot: Ember.computed('totalSquareFootage', 'totalBudget', function () {
    return (this.get('totalBudget') / this.get('totalSquareFootage')).toFixed(2);
  }),

  totalBudget: Ember.computed('incomesInHousehold', 'housingBudget', function() {
    return this.get('incomesInHousehold') * this.get('housingBudget');
  }),



  /**
   * Gets current record
   */
  current() {
    return this.get('currentRecord');
  },
});
