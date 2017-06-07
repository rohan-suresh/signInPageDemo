import Ember from 'ember';

export default Ember.Route.extend({

    /**
      @method beforeModel
      @return {void}
      */
    beforeModel: function() {
        this.replaceWith('welcome');
    },
});
