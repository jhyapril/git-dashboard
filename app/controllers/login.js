import Controller from '@ember/controller';

export default Controller.extend({
  loggined: false,
  username: '',
  password: '',
  isInvalid: false,
  actions: {
    validate: function(){
      if(this.username === "jason" && this.password === "123") {
        this.set('loggined', true);
        this.transitionToRoute('tracker');
      } else {
        this.set('isInvalid', true);
        this.set('password', '');
      }
    }
  }
});
