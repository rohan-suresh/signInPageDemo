import Ember from 'ember';

export default Ember.Route.extend({

    /*
    @method beforeModel
    @param {}
    @return {}
      */

    beforeModel: function() {
        this.replaceWith('welcome');
    },
});
