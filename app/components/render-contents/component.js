import Ember from 'ember';

export default Ember.Component.extend({
    toExpand: false,
    auth: Ember.inject.service('session'),
    classNames: [ 'render-zybook', 'render-contents' ],
    actions: {
        expandChapter() {
            this.toggleProperty('toExpand');
        },
    },
});
