import Ember from 'ember';

export default Ember.Controller.extend({
  onNavClick (panel) {
    console.log(panel.title);
  },
  actions: {
    test() {
      console.log('test');
    }
  }
});
