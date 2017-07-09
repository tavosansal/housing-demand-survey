import Ember from 'ember';

export default Ember.Controller.extend({
  surveyRecord: Ember.inject.service(),
  peopleInHousehold: 1,
  incomesInHousehold: 1,
  housingBudget: 300,
  squareFeetPerPerson: 300,

  totalSquareFootage: Ember.computed('peopleInHousehold','squareFeetPerPerson', function () {
    return this.get('peopleInHousehold') * this.get('squareFeetPerPerson');
  }),

  costPerSquareFoot: Ember.computed('totalSquareFootage', 'totalBudget', function () {
    return (this.get('totalBudget') / this.get('totalSquareFootage')).toFixed(2);
  }),

  totalBudget: Ember.computed('incomesInHousehold', 'housingBudget', function() {
    return this.get('incomesInHousehold') * this.get('housingBudget');
  }),

  actions: {
    continue() {
      const currentSurvey = this.get('surveyRecord').current();
      const {peopleInHousehold, incomesInHousehold, housingBudget, squareFeetPerPerson} = this.getProperties(
        'peopleInHousehold', 'incomesInHousehold', 'housingBudget', 'squareFeetPerPerson');

      currentSurvey.setProperties({
        peopleInHousehold,
        incomesInHousehold,
        housingBudget,
        squareFeetPerPerson,
      });

      this.transitionToRoute('location');
    },
  },
});
