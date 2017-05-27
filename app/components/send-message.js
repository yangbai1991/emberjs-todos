import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    sendMessage(type, text) {
      return new Ember.RSVP.Promise((resolve) => {
        setTimeout(function() {
          resolve(text);
        }, 2000);
      });
    }
  }
});
