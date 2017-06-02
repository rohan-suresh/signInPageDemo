import Ember from 'ember';

export default Ember.Object.extend({
    title: null,
    academic_term: null,
    zybook_code: null,
    subjects: null,
    initialize: function(json_object) {
        this.setProperties(json_object);
        return this;
    },
});
