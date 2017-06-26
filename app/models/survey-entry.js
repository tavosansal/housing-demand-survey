import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr('string'),
  age: DS.attr('number'),
  buying: DS.attr('boolean'),
  renting: DS.attr('boolean'),
  investing: DS.attr('boolean'),
  timeframe: DS.attr('string'),

});
