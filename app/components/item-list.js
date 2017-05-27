import Ember from 'ember';

export default Ember.Component.extend({
  todos: Ember.inject.service(),
  curTodo: null,
  showConfirmModal: false,
  actions: {
    showConfirmModal(todo) {
      this.set('showConfirmModal', true);
      this.set('curTodo', todo);
    },
    remove() {
      this.get('todos').remove(this.get('curTodo'));
      this.set('showConfirmModal', false);
    },
    updateStatus(todo, status) {
      this.get('todos').updateStatus(todo, status);
    }
  }
});
