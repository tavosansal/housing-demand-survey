import Ember from 'ember';

export default Ember.Route.extend({
  surveyRecord: Ember.inject.service(),

  actions: {
    continue() {
      debugger;

      const currentSurvey = this.get('surveyRecord').current();
      const {peopleInHousehold, incomesInHousehold, housingBudget, squareFeetPerPerson} = this.controller.getProperties(
        'peopleInHousehold', 'incomesInHousehold', 'housingBudget', 'squareFeetPerPerson');

      currentSurvey.setProperties({
        peopleInHousehold,
        incomesInHousehold,
        housingBudget,
        squareFeetPerPerson,
      });

      this.transitionTo('location');
    },
  },
});
