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

      /*signOut: function() {
            window.localStorage.removeItem('zyClientUser');
            window.localStorage.removeItem('zyClientSession');
            this.transitionToRoute('welcome');
        }*/

    },
});
