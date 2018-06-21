import Ember from 'ember';
import $ from 'jquery';
export default Ember.Route.extend({
	model(employee){
		var emp={id:employee.employee};
		var datas=$.ajax({
		type:"POST",
		url:"/employee/getone",
		data:{emp:JSON.stringify(emp)},
		success:function(data){
			return data;
		},
		statusCode: {
    		403: function(xhr) {
    			alert(xhr.status+" FORBIDDEN You don't have access to the operation");
    		}
  		}

	});
	console.log(datas);
	return datas;
	}
});
