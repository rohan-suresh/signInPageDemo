import Ember from 'ember';

export default Ember.Controller.extend({
    store_email: null,
    store_password: null,
    session: Ember.inject.service(),
    errorMessage: null,
    loginChange: function() {
        this.set('errorMessage', null);
    }.observes('store_email', 'store_password'),
    actions: {
        login: function() {
            this.get('session').login(this.get('store_email'), this.get('store_password')).then(success => {
                if (success) {
                    this.transitionToRoute('library');
                }
            },
        () => {
            this.set('errorMessage', 'Incorrect email/password');
        });
        },
    },
});
