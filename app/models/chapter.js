import Ember from 'ember';

export default Ember.Object.extend({
  title: null,
  //sections: null,
  initializeChapter: function(json_object) { // takes in the zybook chapter
    this.set('title', json_object.title);

    //this.set('zybook_code', json_object.zybook_code);

    return this;
  }
});
