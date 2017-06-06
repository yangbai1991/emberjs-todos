import Ember from 'ember';

const {
  String: { htmlSafe }
} = Ember;

export default Ember.Component.extend({
  visiable: false,
  myStyle: Ember.computed('visiable', function() {
    return this.get('visiable') ? htmlSafe('display: block') : htmlSafe('display: none');
  }),
  actions: {
    cancel() {
      this.set('visiable', false);
    },
    confirm() {
      this.get('onConfirm')(this.get('confirmValue'))
        .then(info => {
          this.set('visiable', false);
          console.log(info);
          // Ember.logger.info(info);
        })
        .catch(err => {
          console.log(err);
          // Ember.logger.info(err);
        });
    }
  }
});
