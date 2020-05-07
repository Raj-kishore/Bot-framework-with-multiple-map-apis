const { ActivityHandler, MessageFactory, CardFactory } = require('botbuilder');

async function bingMapCarousel(context, text, noOfItems, B_key){
        var cardArray = [];
        let res = JSON.parse(await doRequest(text, B_key));
        if (res.resourceSets[0].resources.length === 0) {
            await context.sendActivity(MessageFactory.text("Sorry, Bing Map couldn't find any result for this query. Try different.,", "Sorry"));
        } else {
            let overAllString = "";
            res.resourceSets[0].resources.map(async (i, x) => {
                if (x < noOfItems) { 
                    let c = x + 1;
                    cardArray.push(createAdaptiveCardBing(c, i.name, i.geocodePoints[0].coordinates[0], i.geocodePoints[0].coordinates[1], B_key));
                    overAllString += "" + i.name + "\n";
                }
            });
            await context.sendActivity(MessageFactory.carousel(cardArray));
        }
}
function createAdaptiveCardBing(c, name, lat, lng, B_key) {
        return CardFactory.adaptiveCard(
            {
                "type": "AdaptiveCard",
                "body": [
                    {
                        "type": "TextBlock",
                        "size": "Medium",
                        "weight": "Bolder",
                        "text":  name,
                        "spacing": "Large",
                        "horizontalAlignment": "Center",
                        "color": "Dark"
                    },
                    {
                        "type": "Image",
                        "url": "http://dev.virtualearth.net/REST/v1/Imagery/Map/Road/" + lat + "," + lng + "/18?mapSize=500,500&pp=47.645523,-122.139059;66&mapLayer=Basemap,Buildings&key="+B_key,
                        "horizontalAlignment": "Center",
                        "spacing": "None",
                        "width": "300px"
                    }
                ],
                "actions": [

                    {
                        "type": "Action.OpenUrl",
                        "title": "View Map ",
                        "url": 'https://bing.com/maps/default.aspx?cp=' + lat + '~' + lng + '&lvl=12&style=r',
                        "style": "positive"
                    },
                    {
                        "type": "Action.Submit",
                        "title": "Select this location",
                        "data": {
                            "y": name,
                            "y_lat": lat,
                            "y_lng": lng
                        }
                    }
                ],
                "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
                "version": "1.0"
            }
        );
}
function doRequest(st, B_key) {
        return new Promise(async function (resolve, reject) {
            const publicIp = require('public-ip');
            var geoip = require('geoip-lite');
            var request = require('request');
            var ipaddr = "";
            var ip = null;
            var geo = null;
            // (async () => {
            // //console.log("1 ",await publicIp.v4());
            //=> '46.5.21.123'
            ipaddr = await publicIp.v4();
            ip = ipaddr;
            geo = geoip.lookup(ip);
            ////console.log("TEST ", geo);
            //                //console.log("12 ", geo);
            //   //console.log("2 ",await publicIp.v6());
            //=> 'fe80::200:f8ff:fe21:67cf'
            //  })(); 
            //https://www.npmjs.com/package/geoip-lite
            let url = "http://dev.virtualearth.net/REST/v1/Locations?q=" + st + "&key="+B_key; //Test key : Akw3CPHAT1X0Alb_DUL0JEDPIkCSX9ABnKQzJKNzrOy8xNa5GaLIYaGoAp3KsWd4
            await request(url, async function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    resolve(body);
                    console.log("~~~~~~~", response);
                } else {
                    reject(body);
                    console.log("~~~~~~~Oh my god...", error);
                }
            })
        });
}

async function osmMapCarousel(context, text, noOfItems, email){
        var cardArray = [];
        let resOSM = JSON.parse(await doRequestOSM(text, email)); //You should get registered in OSM website with an email ID, example. quickroutes@gmail.com 
        if (resOSM.length === 0) {
            await context.sendActivity(MessageFactory.text("Sorry, OSM couldn't find any results for this query. Try different search term.", "Sorry"));
        } else {
            resOSM.map(async (i, x) => {
                if (x < noOfItems) { 
                    let c = x + 1;
                    cardArray.push(createAdaptiveCardOSM(c, i.display_name, i.lat, i.lon));
                }
            });
            await context.sendActivity(MessageFactory.carousel(cardArray));
        }
}
function createAdaptiveCardOSM(c, name, lat, lng) {
        return CardFactory.adaptiveCard(
            {
                "type": "AdaptiveCard",
                "body": [
                    {
                        "type": "TextBlock",
                        "size": "Medium",
                        "weight": "Bolder",
                        "text":  name,
                        "spacing": "Large",
                        "horizontalAlignment": "Center",
                        "color": "Dark"
                    }
                ],
                "actions": [

                    {
                        "type": "Action.OpenUrl",
                        "title": "View Map ",
                        "url": 'https://nominatim.openstreetmap.org/reverse?format=html&lat=' + lat + '&lon=' + lng + '&zoom=18&addressdetails=1',
                        "style": "positive"
                    },
                    {
                        "type": "Action.Submit",
                        "title": "Select this location",
                        "data": {
                            "x": name
                        }
                    }
                ],
                "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
                "version": "1.0"
            }
        );
}
function doRequestOSM(st, email) {
        return new Promise(async function (resolve, reject) {
            const publicIp = require('public-ip');
            var geoip = require('geoip-lite');
            var request = require('request');
            var ipaddr = "";
            var ip = null;
            var geo = null;
            // (async () => {
            // //console.log("1 ",await publicIp.v4());
            //=> '46.5.21.123'
            ipaddr = await publicIp.v4();
            ip = ipaddr;
            geo = geoip.lookup(ip);
            ////console.log("TEST ", geo);
            ////console.log("12 ", geo);
            //   //console.log("2 ",await publicIp.v6());
            //=> 'fe80::200:f8ff:fe21:67cf'
            //  })(); 
            // https://www.npmjs.com/package/geoip-lite
			
            // Taking OSM user policy, they are allowing user agents to use their service to a limitation https://gis.stackexchange.com/questions/166006/sending-valid-useragent-or-referer-when-nominatim-reverse-geocode-gets-blocked
            // You have to pass email to proof and they won't allow heavy usage of their API. Their API is for Open source contributors only and not for business purpose. 
            // For business purpose use other API services other than nominatim (https://wiki.openstreetmap.org/wiki/Search_engines) which involves pricing over a certain hit threshold
            // or install your own service using nominatim in your own server.       
            // https://wiki.openstreetmap.org/wiki/Nominatim#Parameters
            // User policy (1 request / sec, otherwise you will be temporarity blocked.)
            // https://operations.osmfoundation.org/policies/nominatim/
            let url = "https://nominatim.openstreetmap.org/search.php?q=" + st + "&email=" +email+ "&format=json&addressdetails=1";
            await request(url, async function (error, response, body) {
                // //console.log(response);
                if (!error && response.statusCode == 200) {
                    resolve(body);
                    //console.log("~~~~~~~", body);
                } else {
                    reject(body);
                    //console.log("~~~~~~~", body);
                }
            })

            //return welcomeText;
        });
}

async function staticImageBing(context, lat, lng, B_key , c){ 
		 await context.sendActivity({
                        text:  JSON.stringify(c),
                        attachments: [staticImageWrapper(lat, lng, B_key)]
                    });				
	}
function staticImageWrapper(lat, lng, B_key) {
        return CardFactory.adaptiveCard(
            {
                "type": "AdaptiveCard",
                "body": [
                    {
                        "type": "Image",
                        "altText": "Static Map",
                        "size": "Stretch",
                        "url": "http://dev.virtualearth.net/REST/v1/Imagery/Map/Road/" + lat + "," + lng + "/18?mapSize=500,500&pp=47.645523,-122.139059;66&mapLayer=Basemap,Buildings&key="+B_key, //Key : Akw3CPHAT1X0Alb_DUL0JEDPIkCSX9ABnKQzJKNzrOy8xNa5GaLIYaGoAp3KsWd4
                    }
                ],
                "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
                "version": "1.0"
            }
        );
}

async function staticTextOSM(context, c){ 
    await context.sendActivity({
                   text:  JSON.stringify(c)
               });				
}


module.exports = {bingMapCarousel, osmMapCarousel, staticImageBing, staticTextOSM};