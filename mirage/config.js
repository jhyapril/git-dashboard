export default function() {
  this.namespace = '/api';


  this.get('/trackers', function() {
    return {
      "trackers" : [ null, {
        "created" : "2018-05-29T12:05:26.126Z",
        "dayfailure" : 0,
        "daymerge" : 4,
        "daypr" : 3,
        "dayreview" : 2,
        "sprint" : 25,
        "totalfailure" : 1,
        "totalmerge" : 21,
        "totalpr" : 20,
        "totalreview" : 24
      } ]
    }
  });
}
