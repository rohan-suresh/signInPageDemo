import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {

        /**
           @method ComponentClicked
           @param {String} zyBookCode for the zyBook
           @return {void}
         */
        componentClicked: function(zyBookCode) {
            this.transitionToRoute('table', zyBookCode);
        },
    },
});
