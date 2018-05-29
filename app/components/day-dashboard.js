import Component from '@ember/component';

const { readOnly, alias } = Ember.computed;
const { computed, observer } = Ember;
export default Component.extend({
  show1: true,
  show2: false,
  show3: false,

  model: readOnly('sprint'),

  diffPr: computed('pr', 'model.daypr', function() {
    return this.pr - this.model.daypr;
  }),
  diffReview: computed('review', 'model.dayreview', function() {
    return this.review - this.model.dayreview;
  }),
  diffMerge: computed('merge', 'model.daymerge',function() {
    return this.merge - this.model.daymerge;
  }),
  diffFailure: computed('failure', 'model.dayfailure', function() {
    return this.failure - this.model.dayfailure;
  }),
  // change: observer('sprint.prevDayPr', function(){
  //
  // }),

  actions: {
    toggleCard1() {
      this.toggleProperty('show1');
    },
    toggleCard2() {
      this.toggleProperty('show2');
    },
    toggleCard3() {
      this.toggleProperty('show3');
    }

  }
});
