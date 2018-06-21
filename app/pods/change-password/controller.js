import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    savePassword:function(){
      var password={oldpassword:this.get("oldpassword"),newpassword:this.get("newpassword")};
      $.ajax({
        type:"POST",
        async:false,
        data:{password:JSON.stringify(password)},
  			url:"/employee/changePassword",
  			success:function(data){
  			     if(data==='true'){
               $.ajax({
         				type:"POST",
         				async:false,
         				url:"/logout",
         				success:function(){
         					console.log("logged out");
         				}
         			});
             }else {
               alert("Password Doesn't match");
             }
           }
      });
      location.reload();
    }
  }
});
