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
});
