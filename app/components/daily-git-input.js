import Component from '@ember/component';

export default Component.extend({
  pr: 0,
  review: 0,
  merge: 0,
  failure: 0,

  actions: {
    addPr: function() {
      this.set('pr', this.pr + 1);
    },
    minusPr: function() {
      if(this.pr > 0) {
        this.set('pr', this.pr - 1);
      }
    },
    addReview: function() {
      this.set('review', this.review + 1);
    },
    minusReview: function() {
      if(this.review > 0) {
        this.set('review', this.review - 1);
      }
    },
    addMerge: function() {
      this.set('merge', this.merge + 1);
    },
    minusMerge: function() {
      if(this.merge > 0) {
        this.set('merge', this.merge - 1);
      }
    },
    addFailure: function() {
      this.set('failure', this.failure + 1);
    },
    minusFailure: function() {
      if(this.failure > 0) {
        this.set('failure', this.failure - 1);
      }
    },

    saveInput: function(id) {
      const newDayPr = this.get('pr');
      const newDayReview = this.get('review');
      const newDayMerge = this.get('merge');
      const newDayFailure = this.get('failure');

      const totalNewPr = this.get('sprint.sprintPr') + newDayPr;
      const totalNewReview = this.get('sprint.sprintReview') + newDayReview;
      const totalNewMerge = this.get('sprint.sprintMerge') + newDayMerge;
      const totalNewFailure = this.get('sprint.sprintFailure') + newDayFailure;

      this.set('sprint.sprintPr', totalNewPr);
      this.set('sprint.sprintReview', totalNewReview);
      this.set('sprint.sprintMerge', totalNewMerge);
      this.set('sprint.sprintFailure', totalNewFailure);
      this.set('sprint.prevDayPr', newDayPr);
      this.set('sprint.prevDayReview', newDayReview);
      this.set('sprint.prevDayMerge', newDayMerge);
      this.set('sprint.prevDayFailure', newDayFailure);
      this.set('pr', 0);
      this.set('review', 0);
      this.set('merge', 0);
      this.set('failure', 0);

      // this.get('store').creatRecord('tracker').then((model) => {
      //
      // });
      // save to database
      // clear all input
    }


  } // end of actions
});
