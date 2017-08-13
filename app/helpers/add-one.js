import Ember from 'ember';

export function addOne(params/*, hash*/) {
  return parseInt(params, 10) + 1;
}

export default Ember.Helper.helper(addOne);
