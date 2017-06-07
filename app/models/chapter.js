import Ember from 'ember';

export default Ember.Object.extend({

    /**
      @property title
      @type {String}
      @default null
     */
    title: null,

    /**
      @method initializeChapter
      @param {Object} json_object with data
      @return {Object} return a chapter
     */
    initializeChapter: function(json_object) {
        this.set('title', json_object.title);
        return this;
    },
});
