import Ember from 'ember';

export default Ember.Controller.extend({

    /*
    @method ComponentClicked
    @param {zyBookCode}
    @return {}
     */

    actions: {
        componentClicked: function(zyBookCode) {
            this.transitionToRoute('table', zyBookCode);
        },

    },
});
