import Ember from 'ember';

export default Ember.Service.extend({

  getActions: function() {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        url: 'http://localhost:5000/getData',
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
  trackActions: function(zybook_code, user_id) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        url: 'http://localhost:5000/postData',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ zybook_code, user_id }),
        success: serverResponse => {
          //console.log('success');
          const parsedSR = JSON.parse(serverResponse);
          if (parsedSR.success) {
            //console.log("SERVER RESPONSE:");
            //console.log(parsedSR.success);
            resolve(parsedSR.success);
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
