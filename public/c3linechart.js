define(function (require) {

    require('plugins/c3-line-chart/c3linechart.less');
    require('plugins/c3-line-chart/c3linechartController');
    require('ui/registry/vis_types').register(MetricVisProvider);

    function MetricVisProvider(Private) {
        var TemplateVisType = Private(require('ui/template_vis_type/TemplateVisType'));
        var Schemas = Private(require('ui/Vis/Schemas'));

        // return the visType object, which kibana will use to display and configure new
        // Vis object of this type.
        return new TemplateVisType({
            name: 'c3-line-chart',
            title: 'C3 Line Chart',
            description: 'C3 enhanced line charts for Kibana 4.x. Sports: line, bar, step and spline charts.',
            icon: 'fa-bolt',
            template: require('plugins/c3-line-chart/views/graph.html'),
            params: {
                defaults: {
                    configLine: {},
                    configLine_threshold_data: '',
                    configLine_threshold_value1: 80,
                    configLine_threshold_color1: "#ffaa00",
                    configLine_threshold_value2: 90,
                    configLine_threshold_color2: "#ff0000",
                    configLinegrouped: "none",
                    configLine_xrotate: 0,
                    configLine_autoscale: false
                },
                editor: require('plugins/c3-line-chart/views/options.html')
            },
            schemas: new Schemas([
                {
                    group: 'metrics',
                    name: 'metric',
                    title: 'Y-Axis',
                    min: 1,
                    aggFilter: '!std_dev',
                    defaults: [
                        {schema: 'metric', type: 'count'}
                    ]
                },
                {
                    group: 'buckets',
                    name: 'segment',
                    title: 'X-Axis',
                    min: 0
                }
            ])
        });
    }

    // export the provider so that the visType can be required with Private()
    return MetricVisProvider;
});
