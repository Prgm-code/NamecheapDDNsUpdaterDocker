const request = require('request');
const dotenv = require('dotenv');
dotenv.config();

const dnsUpdater = async function () {
   await request(`https://dynamicdns.park-your-domain.com/update?host=*&domain=${process.env.YOUR_DOMAIN}&password=${process.env.YOUR_DYNAMIC_PASSWORD}&ip=`, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body) // Show the HTML for the Google homepage. 
    }
    else {
      console.log("Error "+response.statusCode)
    }
  })
}






let updateStart = true;

if (updateStart) {
  dnsUpdater();
  updateStart=false;
}
let time = parseInt(process.env.YOUR_UPDATE_INTERVAL);
console.log("Update interval is "+time+" minutes"); 
setInterval(dnsUpdater, 1000*60* time);






