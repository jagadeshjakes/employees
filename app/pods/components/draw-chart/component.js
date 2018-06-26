import Ember from 'ember';
import $ from 'jquery';
export default Ember.Component.extend({
  classNames: ['draw-chart'],
  contents:null,
  passData:null,
  logData:null,
  passCategory:null,
  logCategory:null,
  chart:null,
  options: {
    chart:{
    type:'line'
  },

  title: {
    text: 'Password Change log'
  },

  subtitle: {
    text: 'According to different roles'
  },
  xAxis:{
    title:{
      text:'Date'
    },
    categories:null
  },

  yAxis: {
    title: {
      text: 'Count'
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
        cursor:'pointer',
        point:{
          events:{
            click:function(e){
                //console.log(e);
                console.log(e.point.series.name,e.point.category,e.point.series.userOptions.ctype);
                var arg={role:e.point.series.name,date:e.point.category,ctype:e.point.series.userOptions.ctype};
                var datas=$.ajax({
                type:"POST",
                async:false,
                data:{arg:JSON.stringify(arg)},
                url:"/getUsers",
                success:function(data){
                  return data;
                }
              });
              var table="<h1>"+e.point.series.name+" on "+e.point.category+"</h1><table class=\"table\">"+
              "<tr> <th>Id</th> <th>Name</th> <th>Time</th> </tr>";
              $.each(datas.responseJSON,function(index,object){
                table=table+"<tr> <td>"+object.id+"</td> <td>"+object.name+"</td> <td>"+object.time+"</td> </tr>";
              });
              table=table+"</table>";
              //console.log(table);
              $('#extra').html(table);
            }
          }
        }
    }
  }
},cityOptions: {
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
},
  draw: (function() {
    var options;
    this.set('options.xAxis.categories',this.get('content.password.categories'));
    options = Ember.merge(this.get('content.password.passwordLog'),this.get('options'));
    this.set('contents',options);
    this.set('passData',this.get('content.password.passwordLog.series'));
    this.set('passCategory',this.get('content.password.categories'));
    this.set('logData',this.get('content.logIn.signInLog.series'));
    this.set('logCategory',this.get('content.logIn.categories'));
    this.set('chart',"password");
    var defaults = {
      series: this.get('content.city')
    };
    var pieOptions=Ember.merge(defaults,this.get('cityOptions'));
    $('#chartSpace').highcharts(options).highcharts();
    $('#pieSpace').highcharts(pieOptions).highcharts();
  }).on('didInsertElement'),

//-----------------ACTIONS----------------------------------
  actions:{
    //------------set which chart to show-------------------
    setChart:function(selected){
      var chartData=this.get('contents');
      //console.log(chartData);
      if(selected==='password'){
        chartData.title.text="Password Change log";
        this.set('chart',"password");
        chartData.series=this.get('passData');
        chartData.xAxis.categories=this.get('passCategory');
      }
      else{
        chartData.title.text="Access Log";
        this.set('chart','login');
        chartData.series=this.get('logData');
        chartData.xAxis.categories=this.get('logCategory');
      }
      this.$('#chartSpace').highcharts(chartData).highcharts();
    },

    //-----------Sets the type of chart-------------------
    setType(selected){

      var content=this.get('contents');
      content.chart.type=selected;
      this.$('#chartSpace').highcharts(content).highcharts();
    }
  }

});
