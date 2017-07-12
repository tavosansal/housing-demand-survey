import Ember from 'ember';

export default Ember.Controller.extend({
  surveyRecord: Ember.inject.service(),
  peopleInHousehold: 1,
  incomesInHousehold: 1,
  housingBudget: 300,
  squareFeetPerPerson: 300,

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
