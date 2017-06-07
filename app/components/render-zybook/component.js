import Ember from 'ember';

export default Ember.Component.extend({

    /**
      @property zybook
      @type {Object}
      @default null
     */
    zybook: null,
    classNames: [ 'render-zybook' ],

    /**
      Computed property that returns term name and year
      @event term_description
      @param {String} zybook.academic_term.name Name of the academic term
      @param {String} zybook.academic_term.year Year
      @return {String}
     */
    term_description: function() {
        if (this.get('zybook.academic_term.name') === 'None') {
            return '';
        }
        return `${this.get('zybook.academic_term.name')} ${this.get('zybook.academic_term.year')}`;
    }.property('zybook.academic_term.name', 'zybook.academic_term.year'),

    /**
      @event subject_description
      @return {name}
     */
    subject_description: function() {
        const subs = this.get('zybook.subjects').map(sub => sub.name);

        const firstTwoSubs = subs.length > 2 ? subs.slice(0, 2) : subs;

        let firstTwoSubString = '';

        firstTwoSubs.forEach(ss => {
            firstTwoSubString = `${firstTwoSubString}${ss}, `;
        });
        firstTwoSubString = firstTwoSubString.slice(0, firstTwoSubString.length - 2);
        return firstTwoSubString;
    }.property('zybook.subjects.@each.name'),
});
