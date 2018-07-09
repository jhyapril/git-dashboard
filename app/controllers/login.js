import Controller from '@ember/controller';

const password = "123";
const username = "jason";
export default Controller.extend({
  loggined: false,
  username: username,
  password: password,
  isInvalid: false,
  actions: {
    validate: function(){
      if(this.username === username && this.password === password) {
        this.set('loggined', true);
        this.transitionToRoute('tracker');
      } else {
        this.set('isInvalid', true);
        this.set('password', '');
      }
    }
  }
});
