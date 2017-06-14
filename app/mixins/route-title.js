import Ember from 'ember';

export default Ember.Mixin.create({

    application: Ember.inject.controller('application'),

    setupController(controller, model) {
        this._super(controller, model);
        this.set('application.title', this.get('routeName'));
    },
});
