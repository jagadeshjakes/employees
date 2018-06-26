import Ember from 'ember';

export default Ember.Controller.extend({
  cityOptions: {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false
    },
    title: {
        text: 'Different cities of employees'
    },
    tooltip: {
        pointFormat: 'people: <b>{point.y}</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f}% ',
            style: {
                color: 'black'
            },
            connectorColor: 'silver'
        }
      }
    }
  }

});
