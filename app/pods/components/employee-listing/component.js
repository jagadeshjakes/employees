import Ember from 'ember';
import $ from 'jquery';
export default Ember.Component.extend({
	classNames: ['list-filter'],
	init() {
    	this._super(...arguments);
  	},
		actions:{
			delete(employee){
				var emp={id:employee.eid};
				$.ajax({
				type:"POST",
				async:false,
				url:"/employee/delete",
				data:{emp:JSON.stringify(emp)},
				success:function(){
				alert('Deleted Successfully');
				},
				statusCode: {
	    			403: function(xhr) {
	    				alert(xhr.status+" FORBIDDEN You dont have access to the operation");
	    			}
	  			}
				});
			location.reload();
			}
	  }
});
