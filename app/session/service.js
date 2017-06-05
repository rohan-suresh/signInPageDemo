import Ember from 'ember';

export default Ember.Service.extend({

    /*
    @property user
    @type {Object}
    @default null
     */

    user: null,

    /*
    @property session
    @type {Object}
    @default null
     */

    session: null,

    /*
    @method login
    @param {email, password}
    @return {Promise}
     */

    login: function(email, password) {
        return new Ember.RSVP.Promise((resolve, reject) => {
            Ember.$.ajax({
                url: 'https://zyserver-dev.zybooks.com/v1/signin',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({ email, password }),
                success: serverResponse => {
                    this.set('user', serverResponse.user);
                    this.set('session', serverResponse.session);
                    if (serverResponse.success) {
                        resolve(serverResponse.success);
                    }
                    else {
                        reject();
                    }
                },
            });
        });

    },
});
