import Ember from 'ember';

export default Ember.Route.extend({
    authentication: Ember.inject.service('session'),
    beforeModel() {
        if (!this.get('authentication.session.auth_token')) {
            this.replaceWith('welcome');
        }
    },
    model(params) {
        return new Ember.RSVP.Promise((resolve, reject) => {
            Ember.$.ajax({
                url: `https://zyserver-dev.zybooks.com/v1/user/${this.get('authentication.user.user_id')}/zybooks`,
                method: 'GET',
                contentType: null,
                data: { auth_token: this.get('authentication.session.auth_token') },
                success: function(serverResponse) {
                    let selected_zybook = null;

                    serverResponse.zybooks.forEach(zybook => {
                        if (zybook.zybook_code === params.zybook_code) {
                            selected_zybook = zybook;
                        }
                    });
                    if (serverResponse.success) {
                        resolve(selected_zybook);
                    }
                    else {
                        reject();
                    }
                },

            });
        });

    },

});
