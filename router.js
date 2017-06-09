import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('dashboard', { path: '/' });
  this.route('add');
  this.route('edit');
  this.route('list');
  this.route('todos');
  this.route('buttons');
});

export default Router;
