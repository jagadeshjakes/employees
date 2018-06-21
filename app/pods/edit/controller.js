import Ember from 'ember';
import $ from 'jquery';
export default Ember.Controller.extend({

	actions:{
		save:function(){
			var emp={id:this.get("model.eid"),name:this.get("model.name"),mobile:this.get("model.mobile"),
			email:this.get("model.email"),city:this.get("model.city"),joining:this.get("model.joining"),role:this.get("model.role")};
			console.log(emp);
			$.ajax({
			type:"POST",
			async:false,
			data:{emp:JSON.stringify(emp)},
			url:"/employee/update",
			success:function(){
			alert('Updated Successfully');

			},
			statusCode: {
    		403: function(xhr) {
    			alert(xhr.status+" FORBIDDEN You don't have access to the operation");
    		}
  		}
		});
		this.transitionToRoute("index");
		},
		setSelection: function(selected) {
      	this.set("model.role", selected);
      	console.log(this.get('model.role'));
    }
	}
});
