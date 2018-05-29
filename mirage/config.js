export default function() {
  this.namespace = '/api';


  this.get('/trackers', function() {
    return {
      data: {
        type: 'tracker',
        id: 1,
        attributes: {
          sprintNumber: 25,
          sprintPr: 13,
          sprintReview: 18,
          sprintMerge: 8,
          sprintFailure: 2,
          sprintDate: "2018/5/2",
          prevDayPr: 2,
          prevDayReview: 4,
          prevDayMerge: 1,
          prevDayFailure: 0,
        }
      }
    };
  });
}
