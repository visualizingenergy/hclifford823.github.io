// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.

data = [
  {
    "name": "Algeria",
    "code": "DZA",
    "value": 0.39406541
  },
  {
    "name": "Angola",
    "code": "AGO",
    "value": 0.441395145
  },
  {
    "name": "Argentina",
    "code": "ARG",
    "value": 0.189122454
  },
  {
    "name": "Australia",
    "code": "AUS",
    "value": 0.134495746
  },
  {
    "name": "Azerbaijan",
    "code": "AZE",
    "value": 0.24014009
  },
  {
    "name": "Brazil",
    "code": "BRA",
    "value": 1.089128048
  },
  {
    "name": "Brunei",
    "code": "BRN",
    "value": 0.036805479
  },
  {
    "name": "Canada",
    "code": "CAN",
    "value": 1.725373101
  },
  {
    "name": "Chad",
    "code": "TCD",
    "value": 0.045489019
  },
  {
    "name": "China",
    "code": "CHN",
    "value": 1.332540717
  },
  {
    "name": "Colombia",
    "code": "COL",
    "value": 0.282328881
  },
  {
    "name": "Congo",
    "code": "COG",
    "value": 0.107793316
  },
  {
    "name": "Denmark",
    "code": "DNK",
    "value": 0.024082249
  },
  {
    "name": "Ecuador",
    "code": "ECU",
    "value": 0.176265097
  },
  {
    "name": "Egypt",
    "code": "EGY",
    "value": 0.205261802
  },
  {
    "name": "Equatorial Guinea",
    "code": "GNQ",
    "value": 0.051243534
  },
  {
    "name": "Gabon",
    "code": "GAB",
    "value": 0.070907831
  },
  {
    "name": "India",
    "code": "IND",
    "value": 0.240468348
  },
  {
    "name": "Indonesia",
    "code": "IDN",
    "value": 0.249016584
  },
  {
    "name": "Iran",
    "code": "IRN",
    "value": 0.976552638
  },
  {
    "name": "Iraq",
    "code": "IRQ",
    "value": 1.382271793
  },
  {
    "name": "Italy",
    "code": "ITA",
    "value": 0.037095499
  },
  {
    "name": "Kazakhstan",
    "code": "KAZ",
    "value": 0.589152393
  },
  {
    "name": "Kuwait",
    "code": "KWT",
    "value": 0.890421404
  },
  {
    "name": "Libya",
    "code": "LBY",
    "value": 0.125231577
  },
  {
    "name": "Malaysia",
    "code": "MYS",
    "value": 0.186388148
  },
  {
    "name": "Mexico",
    "code": "MEX",
    "value": 0.650319552
  },
  {
    "name": "Nigeria",
    "code": "NGA",
    "value": 0.594306278
  },
  {
    "name": "Norway",
    "code": "NOR",
    "value": 0.629236922
  },
  {
    "name": "Oman",
    "code": "OMN",
    "value": 0.315475873
  },
  {
    "name": "Peru",
    "code": "PER",
    "value": 0.036897839
  },
  {
    "name": "Qatar",
    "code": "QAT",
    "value": 0.519093444
  },
  {
    "name": "Romania",
    "code": "ROU",
    "value": 0.02365869
  },
  {
    "name": "Russia",
    "code": "RUS",
    "value": 3.587789181
  },
  {
    "name": "Saudi Arabia",
    "code": "SAU",
    "value": 3.554803377
  },
  {
    "name": "South Sudan",
    "code": "SSD",
    "value": 0.057282186
  },
  {
    "name": "Sudan",
    "code": "SDN",
    "value": 0.028938466
  },
  {
    "name": "Syria",
    "code": "SYR",
    "value": 0.013437986
  },
  {
    "name": "Thailand",
    "code": "THA",
    "value": 0.102928274
  },
  {
    "name": "Trinidad and Tobago",
    "code": "TTO",
    "value": 0.023493385
  },
  {
    "name": "Tunisia",
    "code": "TUN",
    "value": 0.011311368
  },
  {
    "name": "Turkmenistan",
    "code": "TKM",
    "value": 0.070721348
  },
  {
    "name": "United Arab Emirates",
    "code": "ARE",
    "value": 1.133129318
  },
  {
    "name": "United Kingdom",
    "code": "GBR",
    "value": 0.329299179
  },
  {
    "name": "United States",
    "code": "USA",
    "value": 4.876238034
  },
  {
    "name": "Uzbekistan",
    "code": "UZB",
    "value": 0.014653363
  },
  {
    "name": "Venezuela",
    "code": "VEN",
    "value": 0.187398217
  },
  {
    "name": "Vietnam",
    "code": "VNM",
    "value": 0.068580023
  },
  {
    "name": "Yemen",
    "code": "YEM",
    "value": 0.02794075
  }
]

// Create the chart
Highcharts.mapChart('container', {
    chart: {
        map: 'custom/world-robinson-highres'
    },

    title: {
        text: 'Please work'
    },

    subtitle: {
        text: 'Source map: <a href="http://code.highcharts.com/mapdata/custom/world-robinson-highres.js">World, Robinson projection, high resolution</a>'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
        min: 0
    },

    series: [{
        data: data,
        name: 'Calculated Oil production (barrels)',
        joinBy: ['iso-a3', 'code'],
        states: {
            hover: {
                color: '#BADA55',
                borderWidth: 1,
                borderColor: 'black'
            },
            borderColor: 'black'
        },
        //borderColor: 'grey',
        dataLabels: {
          enabled: true,
          format: '{point.name}',
          font: 3
      },
      tooltip: {
        valueSuffix: 'billion barrels'
      },
      shadow: false
    }]
});
