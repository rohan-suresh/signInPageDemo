import Ember from 'ember';
import ZyBookModel from '../models/zybook';

export default Ember.Route.extend({
  authentication: Ember.inject.service('session'),
  beforeModel() {
    if (!this.get('authentication.session.auth_token')) {
      this.replaceWith('welcome');
    }
  },
  model() {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        url: "https://zyserver-dev.zybooks.com/v1/user/" + this.get('authentication.user.user_id') + "/zybooks",
        method: "GET",
        contentType: null,
        data: {"auth_token": this.get('authentication.session.auth_token')},
        success: function(serverResponse) {
          //console.log("SERVER RESPONSE:");
          //console.log(serverResponse);
          let user_zybooks = new Array();
          serverResponse.zybooks.forEach((zybook) => {
            //console.log(zybook);
            const zyBook = ZyBookModel.create({}).initialize(zybook);
            //console.log(zyBook);
            user_zybooks.push(zyBook);
          });
          //console.log(user_zybooks);
          if (serverResponse.success) {
            resolve(user_zybooks); // Need to resolve a new array of models here
          } else {
            reject();
          }
        },

      });
    })

  }

});
