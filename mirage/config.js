export default function() {
  this.namespace = '/api';


  this.get('/trackers', function() {
    return {
      data: {
        type: 'tracker',
        id: 1,
        attributes: {
          sprintNumber: 25,
          sprintPR: 13,
          sprintReview: 18,
          sprintMerge: 8,
          sprintFailure: 2,
          sprintDate: new Date(2018, 5, 2),
          dayPr: 2,
          dayReview: 4,
          dayMerge: 1,
          dayFailure: 0,
        }
      }
    };
  });
}
