import Ember from 'ember';

export default Ember.Component.extend({

    toExpand: false,
    auth: Ember.inject.service('session'),
    classNames: [ 'render-zybook', 'render-contents' ],
    clickedAction: null,
    chapter: null,

    actions: {

        expandChapter: function() {
            this.toggleProperty('toExpand');
        },
        sectionClicked: function(sectionNum) {
            this.get('clickedAction')(sectionNum, this.get('chapter.number'));
        },
    },
});
