import Ember from 'ember';

export default Ember.Object.extend({

    /**
      @property title
      @type {String}
      @default null
     */
    title: null,

    /**
      @property academic_term
      @type {String}
      @default null
     */
    academic_term: null,

    /**
      @property zybook_code
      @type {String}
      @default null
     */
    zybook_code: null,

    /**
      @property subjects
      @type {Array}
      @default null
     */
    subjects: null,

    /**
      @method intialize
      @param {Object} json_object with data
      @return {zybook}
     */
    initialize: function(json_object) {
        this.setProperties(json_object);
        return this;
    },
});
