import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['list-filter'],
	results:null,
	filter:{
		id:'',
		name:'',
		mobile:'',
		email:'',
		city:'',
		from:'1990-01-01',
		to:new Date(),
		role:''
	},
	init() {
    	this._super(...arguments);
			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1;
			var yyyy = today.getFullYear();
 			if(dd<10){
        dd='0'+dd
    	}
    	if(mm<10){
        mm='0'+mm
    	}
			today = yyyy+'-'+mm+'-'+dd;
			this.set('filter.to',today);
      this.set('results',this.get('employees'));
  	},

  	actions: {
		doFilter(){
			console.log('do filter');
			var filtered=[];
			var employee=this.get('employees');
			for(var i=0;i<employee.length;i++){
				var regex=new RegExp(this.get('filter.id'),'gi');
				if(employee[i].eid.toString().match(regex)){
					regex=new RegExp(this.get('filter.name'),'gi');
					if(employee[i].name.match(regex)){
						regex=new RegExp(this.get('filter.mobile'),'gi');
						if(employee[i].mobile.toString().match(regex)){
							regex=new RegExp(this.get('filter.email'),'gi');
							if(employee[i].email.match(regex)){
								regex=new RegExp(this.get('filter.city'),'gi');
								if(employee[i].city.toString().match(regex)){
									var from=new Date(this.get('filter.from'))
									var to= new Date(this.get('filter.to'));
									var date  = new Date(employee[i].joining);
									if(date<=to && date>=from){
											if(this.get('filter.role')!==''){
												if(this.get('filter.role')===employee[i].role){
														filtered.push(employee[i]);
												}
											}
											else{
												filtered.push(employee[i]);
											}
									}
								}
							}
						}
					}
				}
			}
			this.set('results',filtered);
		},
		setRole: function(selected) {
      this.set('filter.role',selected);
			this.send('doFilter');
    	}
  	}
});
