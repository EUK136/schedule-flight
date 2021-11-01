const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: './output/out.csv',
  header: [
    {id: 'flight_date', title: 'Date flight'},
    {id: 'flight_status', title: 'Status'},
    {id: 'departure.icao', title: 'ICAO'},
    {id: 'gate', title: 'Gate'},
  ]
});

const data = [
        {
            "flight_date": "2021-11-01",
            "flight_status": "scheduled",
            "departure": {

                "icao": "LEMD",
                "gate": "B24"
            }
        }
];

csvWriter
  .writeRecords(data)
  .then(()=> console.log('The CSV file was written successfully'));