import Ember from 'ember';
import $ from 'jquery';

export default Ember.Controller.extend({
  actions:{
    refreshRoute(){
      console.log("target refresh");
      this.get('target.router').refresh();
    }
  }
});
