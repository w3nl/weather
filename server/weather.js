'use strict';
const DarkSky = require('dark-sky');
const forecast = new DarkSky('8324f517af275bfb259d58e2a2adccd5');
const express = require('express');
const app = express();

app.get('/api', function(req, res) {
    forecast
        .latitude('37.8267')
        .longitude('-122.423')
        .units('si')
        .language('nl')
        .exclude('minutely,daily')
        .extendHourly(true)
        .get()
        .then(res => {
            console.log(res.currently.time);
            res.send(JSON.stringify(res.currently.time));
        })
        .catch(err => {
            res.send(JSON.stringify(err));
        })

});

app.listen(3000);
