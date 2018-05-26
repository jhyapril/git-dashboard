import DS from 'ember-data';

export default DS.Model.extend({
  sprintNumber: DS.attr('number'),
  sprintPR: DS.attr('number'),
  sprintReview: DS.attr('number'),
  sprintMerge: DS.attr('number'),
  sprintFailure: DS.attr('number'),
  sprintDate: DS.attr('date', {
    defaultValue() { return new Date(); }
  }),
  dayPr: DS.attr('number'),
  dayReview: DS.attr('number'),
  dayMerge: DS.attr('number'),
  dayFailure: DS.attr('number'),
});
