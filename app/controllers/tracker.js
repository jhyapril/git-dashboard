import Controller from '@ember/controller';

const { computed } = Ember;
export default Controller.extend({
  pr: 0,
  review: 0,
  merge: 0,
  failure: 0,
  sprintNumber: 25,

  isShowingModal: false,
  modal1: false,

  goBack: function(){
    this.transitionToRoute('index');
  },
  bindResizeEvent: function() {
    jQuery(window).bind('beforeunload', Ember.run.bind(this, this.goBack()));
  }.on('init'),

  actions: {


    saveInput: function() {
      const newDayPr = this.pr;
      const newDayReview = this.review;
      const newDayMerge = this.merge;
      const newDayFailure = this.failure;
      this.toggleProperty('modal1');

      this.store.findRecord('tracker', 1).then(function(tracker){
        const totalNewPr = tracker.totalpr + newDayPr;
        const totalNewReview = tracker.totalreview + newDayReview;
        const totalNewMerge = tracker.totalmerge + newDayMerge;
        const totalNewFailure = tracker.totalfailure + newDayFailure;
        tracker.set('totalpr', totalNewPr);
        tracker.set('totalreview', totalNewReview);
        tracker.set('totalmerge', totalNewMerge);
        tracker.set('totalfailure', totalNewFailure);
        tracker.set('daypr', newDayPr);
        tracker.set('dayreview', newDayReview);
        tracker.set('daymerge', newDayMerge);
        tracker.set('dayfailure', newDayFailure);
        tracker.save();
      });

      // save to database for the first time
      /*
       const totalNewPr =  15;
       const totalNewReview = 26;
       const totalNewMerge = 14;
       const totalNewFailure = 1;

      let newEntry = this.store.createRecord('tracker',{
        id: 2,
        sprint: 25,
        totalpr: totalNewPr,
        totalreview: totalNewReview,
        totalmerge: totalNewMerge,
        totalfailure: totalNewFailure,
        daypr: newDayPr,
        dayreview: newDayReview,
        daymerge: newDayMerge,
        dayfailure: newDayFailure,
        created: new Date()
      });
      newEntry.save();*/
      this.setProperties({
        pr: 0,
        review: 0,
        merge: 0,
        failure: 0
      });
    },

    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    },


  } // end of actions

});

//
// $(window).bind('beforeunload',function(){
//   this.actions.goBack();
// });
