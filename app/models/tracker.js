import DS from 'ember-data';

export default DS.Model.extend({
  sprint: DS.attr('number'),
  totalpr: DS.attr('number'),
  totalreview: DS.attr('number'),
  totalmerge: DS.attr('number'),
  totalfailure: DS.attr('number'),
  created: DS.attr('date', {
    defaultValue() { return new Date(); }
  }),
  daypr: DS.attr('number'),
  dayreview: DS.attr('number'),
  daymerge: DS.attr('number'),
  dayfailure: DS.attr('number'),
});
