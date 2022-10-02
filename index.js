let request = require('request');

const dnsUpdater = async function () {
   await request('https://dynamicdns.park-your-domain.com/update?host=@&domain=hardpro.store&password=bd1b4e702f364aeeb192d6b97c7ae9fb&ip=', function (error, response, body) {
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
setInterval(dnsUpdater, 1000*60*2);




