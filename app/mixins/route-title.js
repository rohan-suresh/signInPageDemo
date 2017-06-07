import Ember from 'ember';

export default Ember.Mixin.create({

    /**
      @property application
      @type {Object}
      @default null
     */
    application: Ember.inject.controller('application'),

    /**
      @method setupController
      @param {controller} controller setup with current route
      @param {model} model setup with current route
      @return {void}
     */
    setupController(controller, model) {
        this._super(controller, model);
        this.set('application.title', this.get('routeName'));
    },
});
