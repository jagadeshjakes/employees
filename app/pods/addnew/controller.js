import Ember from 'ember';
import $ from 'jquery';
export default Ember.Controller.extend({
	role: 'SuperAdmin',
	actions:{
		addEmployee:function(){
			var emp={password:this.get("password"),name:this.get("name"),mobile:this.get("mobile"),
			email:this.get("email"),city:this.get("city"),joining:this.get("joining"),role:this.get("role")};
			console.log(emp);
			$.ajax({
			type:"POST",
			async:false,
			data:{emp:JSON.stringify(emp)},
			url:"/employee/insert",
			success:function(){
			console.log('Added Successfully');
		},
		statusCode: {
    		403: function(xhr) {
    			alert(xhr.status+" FORBIDDEN You don't have access to the operation");
    		}
  		}

	});
	this.transitionToRoute('index');
	},
	setRole:function(selected) {
      this.set('role', selected);
      //console.log(this.get('role'));
    }

	}
});
