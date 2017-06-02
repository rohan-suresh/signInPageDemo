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
                url: `https://zyserver-dev.zybooks.com/v1/user/${this.get('authentication.user.user_id')}/zybooks`,
                method: 'GET',
                contentType: null,
                data: { auth_token: this.get('authentication.session.auth_token') },
                success: function(serverResponse) {
                    const user_zybooks = [];

                    serverResponse.zybooks.forEach(zybook => {
                        const zyBook = ZyBookModel.create({}).initialize(zybook);

                        user_zybooks.push(zyBook);
                    });
                    if (serverResponse.success) {
                        resolve(user_zybooks);
                    }
                    else {
                        reject();
                    }
                },

            });
        });

    },

});
