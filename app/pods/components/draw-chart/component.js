import Ember from 'ember';

export default Ember.Component.extend({
  classNames:   [ 'highcharts-wrapper' ],
  content:      undefined,
  chartOptions: undefined,
  chart:        null,
  buildOptions: Ember.computed('chartOptions', 'content.@each.isLoaded', function() {
    var chartContent, chartOptions, defaults;
    chartOptions = this.getWithDefault('chartOptions', {});
    chartContent = this.get('content');
    defaults = {
      series: chartContent
    };
    return Ember.merge(defaults, chartOptions);
  }),

  renderChart: (function() {
    this.drawLater();
  }).on('didInsertElement'),

  drawLater: function() {
    Ember.run.scheduleOnce('afterRender', this, 'draw');
  },

  draw: function() {
    var options;
    options = this.get('buildOptions');
    this.set('chart', this.$().highcharts(options).highcharts());
  }
});
