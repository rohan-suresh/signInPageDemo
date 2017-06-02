import Ember from 'ember';

export default Ember.Object.extend({
    title: null,
    initializeChapter: function(json_object) {
        this.set('title', json_object.title);
        return this;
    },
});
