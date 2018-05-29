import Component from '@ember/component';

export default Component.extend({

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



  } // end of actions
});
