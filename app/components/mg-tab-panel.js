import Ember from 'ember';

const {
  computed,
  String: { htmlSafe }
} = Ember;

export default Ember.Component.extend({
  init(...args) {
    this._super(...args);
  },
  myStyle: computed('active', function() {
    // console.log(this.get('active'));
    return this.get('active') ? htmlSafe('display: block;') : htmlSafe('display: none');
  }),
  didInsertElement() {
    // Ember.set(this, 'active', false);
    this.parentView.addPanel(this);
  },
  didRender() {

  }
});
