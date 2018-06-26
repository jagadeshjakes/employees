import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['chart-select'],
  results:null,
  data:null,
  init(){
    this._super(...arguments);
    this.set('results',this.get('available'));
    this.set('data',this.get('available'));
  },
  actions:{
    setChart(selected){
      //var data=this.get('available');
      console.log(this.get('data'));
      this.set('data.chart.type',selected);
      console.log(this.get('data'));
      this.set('results',this.get('data'));
      //console.log(data);
    }
  }

});
