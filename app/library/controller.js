import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    componentClicked: function(zyBookCode) {
      this.transitionToRoute('table', zyBookCode);
    }

  }
});
