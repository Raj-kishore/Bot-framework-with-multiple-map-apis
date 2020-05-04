const { ActivityHandler, MessageFactory } = require('botbuilder');
const botbuilderlocation = require('botbuilder-v4-location');

const B_key = "Akw3CPHAT1X0Alb_DUL0JEDPIkCSX9ABnKQzJKNzrOy8xNa5GaLIYaGoAp3KsWd4";
class locationSearchBot extends ActivityHandler { // Make it multi turn (Multiple steps with waterfall) for carousel item handling. Now it's single turn.
    /**
 *
 * @param {ConversationState} conversationState
 * @param {UserState} userState
 */
    constructor(conversationState, userState) {
        super();
        if (!conversationState) throw new Error('[DialogBot]: Missing parameter. conversationState is required');
        if (!userState) throw new Error('[DialogBot]: Missing parameter. userState is required');

        this.conversationState = conversationState;
        this.userState = userState;

        this.onMembersAdded(async (context, next) => {
            await this.sendWelcomeMessage(context);

            // By calling next() you ensure that the next BotHandler is run.
            await next();
        });

        this.onMessage(async (context, next) => {
            const text = context.activity.text;

            const valueFromCarousel = context.activity.value;
            ////console.log(valueFromCarousel, " ppp pp p")

            if (valueFromCarousel !== undefined)
                if (valueFromCarousel.y_lat !== undefined)
                   await botbuilderlocation.staticImageBing(context, valueFromCarousel.y_lat, valueFromCarousel.y_lng, B_key, valueFromCarousel.y);
            ///.  await stepContext.context.sendActivity({ attachments: [this.createAdaptiveCard()] });



            ////console.log("Each step ... ", context);

            if (conversationState.queryStatus === undefined) {


                // Create an array with the valid color options.
                const validColors = ['Bing', 'OSM', 'Other'];

                // If the `text` is in the Array, a valid color was selected and send agreement.
                if (validColors.includes(text)) {
                    await context.sendActivity(`You chose ${text} to proceed with.`);
                    //Ask for query prameter
                    await context.sendActivity(`Type the search term..`);

                    conversationState.maptype = text;
                    conversationState.queryStatus = 200;

                } else {
                    await context.sendActivity('Please select Map service to proceed.');
                    // After the bot has responded send the suggested actions.
                    await this.sendSuggestedActions(context);
                }


            } else {
                ////console.log("===> ", text, " and ", conversationState.maptype);

                //var cardArray = [];
                switch (conversationState.maptype) {
                    case 'Bing':

                       // await this.bingMapCarousel(text);
                    await botbuilderlocation.bingMapCarousel(context, text,5, B_key);
                        break;
                    case 'Other':
                        await context.sendActivity("Other search APIS such as Google Map, Map Box etc. are not planned yet.");

                        break;
                    case 'OSM':
                        await botbuilderlocation.osmMapCarousel(context, text,5,"quickroutes@gmail.com");
                        break;
                }



                // const randomlySelectedCard = CARDS[Math.floor((Math.random() * CARDS.length - 1) + 1)];
                // await context.sendActivity({
                //     text: 'Here is an Adaptive Card:',
                //     attachments: [CardFactory.adaptiveCard(randomlySelectedCard)]
                // });

                //console.log("````````````` ", context.activity);



                conversationState.queryStatus = undefined;




            }
            // By calling next() you ensure that the next BotHandler is run.
            await next();
        });
    }

    /**
     * Send a welcome message along with suggested actions for the user to click.
     * @param {TurnContext} turnContext A TurnContext instance containing all the data needed for processing this conversation turn.
     */
    async sendWelcomeMessage(turnContext) {
        const { activity } = turnContext;

        // Iterate over all new members added to the conversation.
        for (const idx in activity.membersAdded) {
            if (activity.membersAdded[idx].id !== activity.recipient.id) {
                const welcomeMessage = `Welcome to LocationSearch bot ${activity.membersAdded[idx].name}. ` +
                    'This bot will introduce you to seach and find near by top 5 cordinate points' +
                    'Please select an option:';
                await turnContext.sendActivity(welcomeMessage);
                await this.sendSuggestedActions(turnContext);
            }
        }
    }

    /**
     * Send suggested actions to the user.
     * @param {TurnContext} turnContext A TurnContext instance containing all the data needed for processing this conversation turn.
     */
    async sendSuggestedActions(turnContext) {
        var reply = MessageFactory.suggestedActions(['Bing', 'OSM', 'Other'], 'What is your preferred API?');
        await turnContext.sendActivity(reply);
    }

  
    
    // async bingMapCarousel(text){
    //     var cardArray = [];
    //     let res = JSON.parse(await this.doRequest(text));
    //     if (res.resourceSets[0].resources.length === 0) {
    //         await context.sendActivity(MessageFactory.text("Sorry, Bing Map couldn't find any result for this query. Try different.,", "Sorry"));
    //     } else {
    //         //console.log("sssssssssssssssss ", JSON.stringify(res.resourceSets[0].resources));
    //         let overAllString = "";
    //         res.resourceSets[0].resources.map(async (i, x) => {
    //             if (x < 5) { // show top 5 results. 
    //                 let c = x + 1;
    //                 cardArray.push(this.createAdaptiveCardBing(c, i.name, i.geocodePoints[0].coordinates[0], i.geocodePoints[0].coordinates[1]));
    //                 // await stepContext.context.sendActivity({ attachments: [this.createAdaptiveCard()] });
    //                 overAllString += "" + i.name + "\n";
    //                 //    await stepContext.context.sendActivity({ attachments: [this.createThumbnailCard(i.name, i.url, i.geocodePoints[0].coordinates[0], i.geocodePoints[0].coordinates[1])] });
    //             }
    //         });
    //         await context.sendActivity(MessageFactory.carousel(cardArray));
    //         //console.log("--------------------===================-------------------");
    //         //console.log(overAllString);
    //     }
    // }

    // //custom dialogs
    // createAdaptiveCardBing(c, name, lat, lng) {
    //     return CardFactory.adaptiveCard(
    //         {
    //             "type": "AdaptiveCard",
    //             "body": [
    //                 {
    //                     "type": "TextBlock",
    //                     "size": "Medium",
    //                     "weight": "Bolder",
    //                     "text": '#' + c + ". " + name,
    //                     "spacing": "Large",
    //                     "horizontalAlignment": "Center",
    //                     "color": "Dark"
    //                 },
    //                 {
    //                     "type": "Image",
    //                     "url": "http://dev.virtualearth.net/REST/v1/Imagery/Map/Road/" + lat + "," + lng + "/18?mapSize=500,500&pp=47.645523,-122.139059;66&mapLayer=Basemap,Buildings&key=Akw3CPHAT1X0Alb_DUL0JEDPIkCSX9ABnKQzJKNzrOy8xNa5GaLIYaGoAp3KsWd4",
    //                     "horizontalAlignment": "Center",
    //                     "spacing": "None",
    //                     "width": "300px"
    //                 }
    //             ],
    //             "actions": [

    //                 {
    //                     "type": "Action.OpenUrl",
    //                     "title": "View Map ",
    //                     "url": 'https://bing.com/maps/default.aspx?cp=' + lat + '~' + lng + '&lvl=12&style=r',
    //                     "style": "positive"
    //                 },
    //                 {
    //                     "type": "Action.Submit",
    //                     "title": "Select this location",
    //                     "data": {
    //                         "y": c,
    //                         "y_lat": lat,
    //                         "y_lng": lng
    //                     }
    //                 }
    //             ],
    //             "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    //             "version": "1.0"
    //         }
    //     );
    // }

    // doRequest(st) {
    //     return new Promise(async function (resolve, reject) {
    //         const publicIp = require('public-ip');
    //         var geoip = require('geoip-lite');
    //         var request = require('request');
    //         var ipaddr = "";
    //         var ip = null;
    //         var geo = null;
    //         // (async () => {
    //         // //console.log("1 ",await publicIp.v4());
    //         //=> '46.5.21.123'
    //         ipaddr = await publicIp.v4();
    //         ip = ipaddr;
    //         geo = geoip.lookup(ip);
    //         ////console.log("TEST ", geo);
    //         //                //console.log("12 ", geo);
    //         //   //console.log("2 ",await publicIp.v6());
    //         //=> 'fe80::200:f8ff:fe21:67cf'
    //         //  })(); 
    //         //https://www.npmjs.com/package/geoip-lite
    //         //  let url = "https://dev.virtualearth.net/REST/v1/LocalSearch/?query=" + st + "&userLocation=" + geo.ll[0] + "," + geo.ll[1] + "&key=Akw3CPHAT1X0Alb_DUL0JEDPIkCSX9ABnKQzJKNzrOy8xNa5GaLIYaGoAp3KsWd4"
    //         // let url = "https://dev.virtualearth.net/REST/v1/LocalSearch/?query=coffee&userLocation=47.602038,-122.333964&key=Akw3CPHAT1X0Alb_DUL0JEDPIkCSX9ABnKQzJKNzrOy8xNa5GaLIYaGoAp3KsWd4"
    //         let url = "http://dev.virtualearth.net/REST/v1/Locations?q=" + st + "&key=Akw3CPHAT1X0Alb_DUL0JEDPIkCSX9ABnKQzJKNzrOy8xNa5GaLIYaGoAp3KsWd4";
    //         //console.log("url url url for Bing ", url);
    //         await request(url, async function (error, response, body) {
    //             // //console.log(response);
    //             if (!error && response.statusCode == 200) {
    //                 resolve(body);
    //                 //console.log("~~~~~~~", response);
    //             } else {
    //                 reject(body);
    //                 //console.log("~~~~~~~", error);
    //             }
    //         })
    //         //return welcomeText;
    //     });
    // }




}

module.exports.locationSearchBot = locationSearchBot;
