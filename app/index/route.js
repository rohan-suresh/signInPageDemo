import Ember from 'ember';

export default Ember.Route.extend({

    /*
    @method beforeModel
    @param {}
    @return {}
      */

    beforeModel() {
        this.replaceWith('welcome');
    },
});
