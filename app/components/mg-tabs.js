import Ember from 'ember';

export default Ember.Component.extend({
  _panels: [],
  panels: [],
  addPanel(panel) {
    this.get('_panels').push(panel);
  },
  didReceiveAttrs() {
    // console.log(this.get('panels'));
  },
  didInsertElement() {
    this.set('panels', this.get('_panels'));
    const panels = this.get('panels');
    const activePanels = panels.filterBy('active', true);
    activePanels.length <= 0 && Ember.set(panels.get('firstObject'), 'active', true);
  },
  actions: {
    handleTabNavClick(panel) {
      this.get('panels').setEach('active', false);
      Ember.set(panel, 'active', true);
      //let this.get('panels').filterBy('id', panel.id);
      if (typeof panel.onNavClick === 'function') {
        panel.onNavClick(panel);
      }
    }
  }
});
