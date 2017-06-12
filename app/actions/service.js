import Ember from 'ember';

export default Ember.Service.extend({

  getActions: function(zybook_code, user_id) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        url: `http://localhost:5000/zybook/${zybook_code}/events/${user_id}`,
        method: 'GET',
        contentType: null,
        success: serverResponse => {
          const parsedSR = JSON.parse(serverResponse);
          if (parsedSR.success) {
            /*console.log("SERVER RESPONSE:");
            console.log(parsedSR);
            console.log(parsedSR.events);*/
            resolve(parsedSR.events);
          }
          else {
            reject();
          }
        },
        error: () => {
          reject();
        }
      });
    });

  },
  trackActions: function(zybook_code, user_id, sectionNum, chapterNum) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        url: `http://localhost:5000/zybook/${zybook_code}/event`,
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ zybook_code, user_id, sectionNum, chapterNum }),
        success: serverResponse => {
          //console.log('success');
          const parsedSR = JSON.parse(serverResponse);
          if (parsedSR.success) {
            //console.log("SERVER RESPONSE:");
            //console.log(parsedSR.success);
            resolve(parsedSR.events);
          }
          else {
            reject();
          }
        },
        error: () => {
          console.log('error');
        }
      });
    });

  },
});
