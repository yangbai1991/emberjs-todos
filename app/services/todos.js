import Ember from 'ember';

const {
  set
} = Ember;

export default Ember.Service.extend({
  todos: [],
  add(item) {
    this.get('todos').pushObject(item);
  },
  remove(item) {
    this.get('todos').removeObject(item);
  },
  updateStatus(todo, status) {
    set(todo, 'status', status);
    // Ember.set(todo, 'status', status);
  },
  empty() {
    this.get('todos').clear();
  }
});
