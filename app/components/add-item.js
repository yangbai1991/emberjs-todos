import Ember from 'ember';

export default Ember.Component.extend({
  todos: Ember.inject.service(),
  name: '',
  error: '',
  actions: {
    required(event) {
      if (!event.target.value) {
        this.set('error', 'Name is required!');
      } else {
        this.set('error', '');
      }
    },
    add(name) {
      if (!name) {
        this.set('error', 'Name is required!');
      } else {
        this.get('todos').add({ name: name, status: 0 });
        this.set('name', '');
      }
    }
  }
});
