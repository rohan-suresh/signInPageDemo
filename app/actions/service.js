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
            console.log("SERVER RESPONSE:");
            console.log(parsedSR);
            console.log(parsedSR.events);
            resolve(parsedSR.events);
          }
          else {
            reject();
          }
        },
        error: () => {
        }
      });
    });

  },
});
