import Ember from 'ember';
import routeTitle from '../mixins/route-title';
import storeAuth from '../mixins/store-auth';

export default Ember.Route.extend(routeTitle, storeAuth, {

  setupController(controller, model) {
    this._super(controller, model);
    controller.displayGet();
  },

    /**
      @method model
      @param {params} params for model
      @return {Promise}
     */
    model: function(params) {
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
