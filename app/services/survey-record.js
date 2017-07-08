import Ember from 'ember';

export default Ember.Service.extend({
  currentRecord: Ember.Object.create(),

  /**
   * Gets current record
   */
  current() {
    return this.get('currentRecord');
  },
});
