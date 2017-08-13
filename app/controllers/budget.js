import Ember from 'ember';

export default Ember.Controller.extend({
  surveyRecord: Ember.inject.service(),
  peopleInHousehold: 1,
  incomesInHousehold: 1,
  housingBudget: 300,
  squareFeetPerPerson: 300,
  bathrooms: 1,
  bedrooms: 1,

  actions: {
    continue() {
      const currentSurvey = this.get('surveyRecord').current();
      const {
        peopleInHousehold, incomesInHousehold, housingBudget, squareFeetPerPerson, bathrooms, bedrooms
      } = this.getProperties('peopleInHousehold', 'incomesInHousehold',
      'housingBudget', 'squareFeetPerPerson','bathrooms', 'bedrooms');

      currentSurvey.setProperties({
        peopleInHousehold,
        incomesInHousehold,
        housingBudget,
        squareFeetPerPerson,
        bathrooms,
        bedrooms,
      });

      this.transitionToRoute('location');
    },
  },
});
