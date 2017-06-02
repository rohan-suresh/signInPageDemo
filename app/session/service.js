import Ember from 'ember';

export default Ember.Service.extend({
  user: null,
  session: null,
  login: function (email, password) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        url: "https://zyserver-dev.zybooks.com/v1/signin",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({"email": email, "password": password}),
        success: (serverResponse) => {
          console.log('test');
          this.set('user', serverResponse.user);
          this.set('session', serverResponse.session);
          if (serverResponse.success) {
            resolve(serverResponse.success);
          } else {
            reject();
          }
        },
      });
    });

  }
})
