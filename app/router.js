import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('welcome');
  this.route('start');
  this.route('library');
  this.route('table',  { path: 'table/:zybook_code' });
});

export default Router;
