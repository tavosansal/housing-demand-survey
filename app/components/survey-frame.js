import Ember from 'ember';

export default Ember.Component.extend({
  surveyRecord: Ember.inject.service(),
  router: Ember.inject.service(),

  actions: {
    goTo(routeName) {
      this.get('router').transitionTo(routeName);
    },
  },
});
