import Ember from 'ember';

export default Ember.Component.extend({

    /**
      @property toExpand
      @type {boolean}
      @default false
    */
    toExpand: false,
    auth: Ember.inject.service('session'),
    classNames: [ 'render-zybook', 'render-contents' ],

    actions: {

        /**
         @method expandChapter
         @return {void}
         */
        expandChapter: function() {
            this.toggleProperty('toExpand');
        },
    },
});
