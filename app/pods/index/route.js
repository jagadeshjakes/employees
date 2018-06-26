import Ember from 'ember';
import $ from 'jquery';
export default Ember.Route.extend({
  model(){
    var datas=$.ajax({
    type:"POST",
    url:"/getcities",
    success:function(data){
      return data;
    }
  });
    console.log(datas);
    return datas;
  }
  /*afterModel:function(model,transition){
    var controller=this.controllerFor('index');
    controller.send('setCategories');
  },
  setupController: function(controller, model) {
    this._super(controller,model);
    this.send('setCategories')(model.password.categories);
  }*/
});
