import Ember from 'ember';

export default Ember.Component.extend({
  zybook_clicked_action: null,
  zybook: null,
  classNames: ['render-zybook'],
  subjects: null,
  term_description: function () {
    //console.log(this.get('library'));
    if (this.get('zybook.academic_term.name') == 'None') {
      return '';
    } else {
      return this.get('zybook.academic_term.name') + ' ' + this.get('zybook.academic_term.year');
    }
  }.property('zybook.academic_term.name', 'zybook.academic_term.year'),
  subject_description: function () {
    let subs = new Array();
    this.get('zybook.subjects').forEach((sub) => {
      subs.push(sub.name)
    });
    let firstTwoSubs = new Array();
    firstTwoSubs = subs;
    if (subs.length > 2) {
      firstTwoSubs = subs.slice(0, 2);
    }
    let firstTwoSubString = '';
    firstTwoSubs.forEach((s) => {
      firstTwoSubString += s + ', ';
    });
    //subString = subString.slice(0, -2);
    firstTwoSubString = firstTwoSubString.slice(0, -2);
    return firstTwoSubString;
  }.property('zybook.subjects.@each.name'),
});
