'use strict';

module.exports = function (kibana) {

    return new kibana.Plugin({

        uiExports: {
            visTypes: ['plugins/c3-line-chart/c3linechart']
        }

    });
};
