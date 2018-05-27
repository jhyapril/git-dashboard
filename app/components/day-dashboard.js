import Component from '@ember/component';

export default Component.extend({
  show1: true,
  show2: false,
  show3: false,
  model: Ember.computed.alias('sprint'),
  performanceRating: Ember.computed('model', function() {
    let desc = "In progress. " + this.get('model.prevDayPr');
    return desc;
  }),

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
