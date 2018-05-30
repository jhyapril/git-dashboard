import Route   from '@ember/routing/route';
import { Promise, resolve } from 'rsvp';

export default Route.extend({
  model() {
    return this.store.findAll('tracker');

    // return new Promise(()=>{
    //   resolve(this.store.findAll('tracker'));
    // })
  },
})
