import Ember from 'ember';
import TodosMixin from 'todos/mixins/todos';
import { module, test } from 'qunit';

module('Unit | Mixin | todos');

// Replace this with your real tests.
test('it works', function(assert) {
  let TodosObject = Ember.Object.extend(TodosMixin);
  let subject = TodosObject.create();
  assert.ok(subject);
});
