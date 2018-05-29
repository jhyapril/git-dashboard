import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    // return this.store.findAll('tracker').then(function(allResponse) {
    //   const id = allResponse.get('length') - 1;
    //   return allResponse.objectAt(id);
    // });
    return this.store.findAll('tracker');
  },
})
