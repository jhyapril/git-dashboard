import DS from 'ember-data';

export default DS.Model.extend({
  sprintNumber: DS.attr('number'),
  sprintPr: DS.attr('number'),
  sprintReview: DS.attr('number'),
  sprintMerge: DS.attr('number'),
  sprintFailure: DS.attr('number'),
  sprintDate: DS.attr('date', {
    defaultValue() { return new Date(); }
  }),
  prevDayPr: DS.attr('number'),
  prevDayReview: DS.attr('number'),
  prevDayMerge: DS.attr('number'),
  prevDayFailure: DS.attr('number'),
});
