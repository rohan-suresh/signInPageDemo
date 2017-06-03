import Ember from 'ember';

export default Ember.Component.extend({
    zybook_clicked_action: null,
    zybook: null,
    classNames: [ 'render-zybook' ],
    subjects: null,
    term_description: function() {
        if (this.get('zybook.academic_term.name') === 'None') {
            return '';
        }
        return `${this.get('zybook.academic_term.name')} ${this.get('zybook.academic_term.year')}`;
    }.property('zybook.academic_term.name', 'zybook.academic_term.year'),
    subject_description: function() {
        const subs = [];

        this.get('zybook.subjects').forEach(sub => {
            subs.push(sub.name);
        });
        let firstTwoSubs = [];

        firstTwoSubs = subs;
        if (subs.length > 2) {
            firstTwoSubs = subs.slice(0, 2);
        }
        let firstTwoSubString = '';

        firstTwoSubs.forEach(ss => {
            firstTwoSubString = `${firstTwoSubString}${ss}, `;
        });
        firstTwoSubString = firstTwoSubString.slice(0, firstTwoSubString.length - 2);
        return firstTwoSubString;
    }.property('zybook.subjects.@each.name'),
});
