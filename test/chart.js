(function(Charts) {
    'use strict';

    /**
     * Add charts to the page with ajax.
     */

    // Object with the elements for the charts.
    Charts.elements = {
        chart: '.js-chart'
    };

    // Object where you can store the chart config.
    Charts.config = {};

    // The charts will be stored in this object.
    Charts.items = {};

    // Search for the charts.
    Charts.init = function() {
        $(Charts.elements.chart).each(Charts.find);
        $('.js-chart-filter').on('click', Charts.filterExample);
        $('.js-chart-update').on('click', Charts.updateExample);
    };

    // Attach the chart core to the elements.
    Charts.find = function() {
        var item = new Chart($(this), Charts.config);

        item.init();
        Charts.items[item.settings.id] = item;
    };

    // Example of a chart filter function.
    Charts.filterExample = function() {
        var minYear = $(this).data('filter-min');
        var axis = $(this).data('filter-axis');
        var chart = $(this).data('filter-chart');

        Way2web.Charts.items[chart].filter(axis + 'Axis', {
            min: Date.UTC(minYear, 0, 0)
        });
    };

    // Example of a chart update function.
    Charts.updateExample = function() {
        var inverted = $(this).data('inverted');
        var chart = $(this).data('filter-chart');

        Way2web.Charts.items[chart].update({
            chart: {
                inverted: inverted
            }
        });
    };
})(window.Way2web.Charts = window.Way2web.Charts || {});
