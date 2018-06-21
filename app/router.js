import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('employees');
  this.route('addnew');
  this.route('edit',{path:'/:employee/edit'});
  this.route('change-password');
});

export default Router;
