import Ember from 'ember';

export function translateTodoStatus([status]) {
  switch (status) {
    case 0:
      return 'Processing';
    case 1:
      return 'Done';
    default:
      return 'Unknow';
  }
}

export default Ember.Helper.helper(translateTodoStatus);
