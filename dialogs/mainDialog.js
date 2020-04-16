// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const { AttachmentLayoutTypes, CardFactory } = require('botbuilder');
const { ChoicePrompt,TextPrompt, ComponentDialog, DialogSet, DialogTurnStatus, WaterfallDialog } = require('botbuilder-dialogs');
const AdaptiveCard = require('../resources/adaptiveCard.json');
const { UserProfile } = require('../bots/UserProfile');

const { MessageFactory } = require('botbuilder');
const MAIN_WATERFALL_DIALOG = 'mainWaterfallDialog';
const MAIN_WATERFALL_DIALOG2 = 'mainWaterfallDialog2';
const DIALOG_STATE_PROPERTY = 'dialogState';
const USER_STATE_PROPERTY = 'user';
const USER_PROFILE = 'USER_PROFILE';
const NAME_PROMPT = 'NAME_PROMPT';
class MainDialog extends ComponentDialog {
    constructor(userState) {
        super('MainDialog');
        this.userProfile = userState.createProperty(USER_PROFILE);
        this.addDialog(new TextPrompt(NAME_PROMPT));
        // Define the main dialog and its related components.
        this.addDialog(new ChoicePrompt('cardPrompt'));
        // this.addDialog(new ChoicePrompt('NAME_PROMPT'));
        this.addDialog(new WaterfallDialog(MAIN_WATERFALL_DIALOG, [
            this.choiceCardStep.bind(this),
            this.showCardStep.bind(this),
           // this.choiceCardStep2.bind(this),
            this.showResultStep.bind(this)
        ]));
        console.log("===========+++++++++++++");
        // this.addDialog(new WaterfallDialog(MAIN_WATERFALL_DIALOG2, [ // Creating a different addDialog will create a new instance ID, which you can get the stepContext value with the flag name.
        //     this.choiceCardStep2.bind(this),
        //     this.showResultStep.bind(this)
        // ]));

        // The initial child Dialog to run.
        this.initialDialogId = MAIN_WATERFALL_DIALOG;
    }

    /**
     * The run method handles the incoming activity (in the form of a TurnContext) and passes it through the dialog system.
     * If no dialog is active, it will start the default dialog.
     * @param {*} turnContext
     * @param {*} accessor
     */
    async run(turnContext, accessor) {
        const dialogSet = new DialogSet(accessor);
        dialogSet.add(this);

        const dialogContext = await dialogSet.createContext(turnContext);
        const results = await dialogContext.continueDialog();
        if (results.status === DialogTurnStatus.empty) {
            await dialogContext.beginDialog(this.id);
        }
    }

    /**
     * 1. Prompts the user if the user is not in the middle of a dialog.
     * 2. Re-prompts the user when an invalid input is received.
     *
     * @param {WaterfallStepContext} stepContext
     */
    async choiceCardStep(stepContext) {
        console.log('MainDialog.choiceCardStep');
    
        // Create the PromptOptions which contain the prompt and re-prompt messages.
        // PromptOptions also contains the list of choices available to the user.
        const options = {
            prompt: 'What Map API whould you like to use?',
            retryPrompt: 'That was not a valid choice, please select a card or number from 1 to 9.',
            choices: this.getChoices()
        };
        //let aa = JSON.stringify(stepContext);
        //console.log("asdfasfasdf ", stepContext);
        // Prompt the user with the configured PromptOptions.
        return await stepContext.prompt('cardPrompt', options);

    }
    async choiceCardStep2(stepContext) {
        console.log('MainDialog.choiceCardStep2');

        // Create the PromptOptions which contain the prompt and re-prompt messages.
        // PromptOptions also contains the list of choices available to the user.
        const options = {
            prompt: 'Choose one of the particular types.',
            retryPrompt: 'That was not a valid choice, please select a card or number from 1 to 9.',
            choices: this.getChoices2()
        };
        //let aa = JSON.stringify(stepContext);
        //console.log("asdfasfasdf ", stepContext);
        // Prompt the user with the configured PromptOptions.
        //return await stepContext.prompt('cardPrompt');
        //return await stepContext.context.sendActivity("Or Enter a Custom Query");
        // return await stepContext.next();
        //return await stepContext.prompt('cardPrompt', options);

        return await stepContext.prompt(NAME_PROMPT, 'Please provide a search term.');
    }
    /**
     * Send a Rich Card response to the user based on their choice.
     * This method is only called when a valid prompt response is parsed from the user's response to the ChoicePrompt.
     * @param {WaterfallStepContext} stepContext
     */
    async showCardStep(stepContext) {
        console.log('MainDialog.showCardStep', stepContext.result.value);
        console.log(" - - - - - - ", stepContext.values);
        console.log(" * * * * * * ", stepContext.result);

        switch (stepContext.result.value) {
            // case 'Adaptive Card':
            //     await stepContext.context.sendActivity({ attachments: [this.createAdaptiveCard()] });
            //     break;
            case 'Bing':
                //await stepContext.context.sendActivity({ attachments: [this.createAdaptiveCard()] });
                stepContext.values.mapapi = stepContext.result.value;
                break;
         //   case 'Google':
                //await stepContext.context.sendActivity({ attachments: [this.createAdaptiveCard()] });
         //       stepContext.values.mapapi = stepContext.result.value
          //      break;
            case 'OSM':
                stepContext.values.mapapi = stepContext.result.value
                // await stepContext.context.sendActivity({ attachments: [this.createAdaptiveCard()] });
                //await stepContext.context.sendActivity('Ok. What do you want to search?');

                break;
            // case 'Animation Card':
            //     await stepContext.context.sendActivity({ attachments: [this.createAnimationCard()] });
            //     break;
            // case 'Audio Card':
            //     await stepContext.context.sendActivity({ attachments: [this.createAudioCard()] });
            //     break;
            // case 'Hero Card':
            //     await stepContext.context.sendActivity({ attachments: [this.createHeroCard()] });
            //     break;
            // case 'Receipt Card':
            //     await stepContext.context.sendActivity({ attachments: [this.createReceiptCard()] });
            //     break;
            // case 'Signin Card':
            //     await stepContext.context.sendActivity({ attachments: [this.createSignInCard()] });
            //     break;
            // case 'Thumbnail Card':
            //     await stepContext.context.sendActivity({ attachments: [this.createThumbnailCard()] });
            //     break;
            // case 'Video Card':
            //     await stepContext.context.sendActivity({ attachments: [this.createVideoCard()] });
            //     break;
            // default:
            //     await stepContext.context.sendActivity({
            //         attachments: [
            //             this.createAdaptiveCard(),
            //             this.createAnimationCard(),
            //             this.createAudioCard(),
            //             this.createHeroCard(),
            //             this.createReceiptCard(),
            //             this.createSignInCard(),
            //             this.createThumbnailCard(),
            //             this.createVideoCard()
            //         ],
            //         attachmentLayout: AttachmentLayoutTypes.Carousel
            //     });
            //     break;
        }

        // Give the user instructions about what to do next


        //stepContext.values.userInfo.name = stepContext.result;

        const promptOptions = { prompt: 'Please enter your Query.' };

        // Ask the user to enter their age.
        //         let cc = JSON.stringify(stepContext);
        // console.log("===========", stepContext.result);
        //
        console.log(" - - - - - - + + + ", stepContext.values);
        //return await stepContext.prompt(MAIN_WATERFALL_DIALOG, promptOptions);

        return await stepContext.prompt(NAME_PROMPT, 'Please provide a search term.');
        //   return await stepContext.endDialog();
    }

    async showResultStep(stepContext) {
        console.log("uiuiuiu ", stepContext.values);
        console.log(". . .. ", stepContext.result);
        // console.log('MainDialog.showCardStep2 => ',stepContext.result.value);
        const userProfile = await this.userProfile.get(stepContext.context, new UserProfile());

        userProfile.sTerm = stepContext.values.mapapi;

        console.log("MY SEARCH TERM IS ", userProfile.sTerm);

  

        switch (userProfile.sTerm) {
            // case 'Adaptive Card':
            //     await stepContext.context.sendActivity({ attachments: [this.createAdaptiveCard()] });
            //     break;
            // case 'Bing':
            //     await stepContext.context.sendActivity({ attachments: [this.createAdaptiveCard()] });
            //     break;
            // case 'Google':
            //     await stepContext.context.sendActivity({ attachments: [this.createAdaptiveCard()] });
            //     break;
            case 'Bing':
                // await stepContext.context.sendActivity({ attachments: [this.createAdaptiveCard()] });
     
                let res = JSON.parse(await this.doRequest(stepContext.result));
                
                if (res.resourceSets[0].resources.length === 0) {
                    await stepContext.context.sendActivity(MessageFactory.text("Sorry, Bing Map couldn't find any result for this query. Try different.,", "Sorry"));
                } else {
                    console.log("sssssssssssssssss ",JSON.stringify(res.resourceSets[0].resources));
                    let overAllString = "";
                    
                    res.resourceSets[0].resources.map(async (i,x)=>{
                        if(x < 5){ // show top 5 results. 
                            overAllString += ""+ i.name + "\n";
                            await stepContext.context.sendActivity({ attachments: [this.createThumbnailCard(i.name, i.url, i.geocodePoints[0].coordinates[0], i.geocodePoints[0].coordinates[1])] });
                        }
                    }); 
                    console.log("--------------------===================-------------------");

                    console.log(overAllString);
                  //  await stepContext.context.sendActivity(MessageFactory.text(overAllString, "Sorry"));
            





                }
                break;
            case 'Google':
               await stepContext.context.sendActivity("Google search is not configured yet.");
                /*** #https://stackoverflow.com/questions/59684839/carousel-in-adaptive-card
                 * 
                 * // First create an empty array for your carousel
var cardArray = [];

// Populate the array with your cards (can use any method, I used a for loop)
for (var idx = 0; idx < dataForCards.length; idx++) {
   // Create the adaptive card
   var adaptiveCard = CardFactory.adaptiveCard({

   // YOUR CARD DEFINITION HERE

   });
   // Push the card to the array for the carousel
   cardArray.push(adaptiveCard);
}
// Send the array as a carousel
await step.context.sendActivity(MessageFactory.carousel(cardArray));
                 * 
                 */


                break;
            case 'OSM':
                let resOSM = JSON.parse(await this.doRequestOSM(stepContext.result));
                if (resOSM.resourceSets[0].resources.length === 0) {
                    await stepContext.context.sendActivity(MessageFactory.text("Sorry, Bing Map couldn't find any result for this query. Try different.,", "Sorry"));
                } else {
                    await stepContext.context.sendActivity(MessageFactory.text(JSON.stringify(resOSM.resourceSets[0].resources), "Sorry"));
                }
                break;
            // case 'Animation Card':
            //     await stepContext.context.sendActivity({ attachments: [this.createAnimationCard()] });
            //     break;
            // case 'Audio Card':
            //     await stepContext.context.sendActivity({ attachments: [this.createAudioCard()] });
            //     break;
            // case 'Hero Card':
            //     await stepContext.context.sendActivity({ attachments: [this.createHeroCard()] });
            //     break;
            // case 'Receipt Card':
            //     await stepContext.context.sendActivity({ attachments: [this.createReceiptCard()] });
            //     break;
            // case 'Signin Card':
            //     await stepContext.context.sendActivity({ attachments: [this.createSignInCard()] });
            //     break;
            // case 'Thumbnail Card':
            //     await stepContext.context.sendActivity({ attachments: [this.createThumbnailCard()] });
            //     break;
            // case 'Video Card':
            //     await stepContext.context.sendActivity({ attachments: [this.createVideoCard()] });
            //     break;
            // default:
            //     await stepContext.context.sendActivity({
            //         attachments: [
            //             this.createAdaptiveCard(),
            //             this.createAnimationCard(),
            //             this.createAudioCard(),
            //             this.createHeroCard(),
            //             this.createReceiptCard(),
            //             this.createSignInCard(),
            //             this.createThumbnailCard(),
            //             this.createVideoCard()
            //         ],
            //         attachmentLayout: AttachmentLayoutTypes.Carousel
            //     });
            //     break;
        }

        // Give the user instructions about what to do next
        await stepContext.context.sendActivity('I guess you got your result. Let\'s move on to the next.');

        return await stepContext.endDialog();
    }

    doRequest(st) {
        return new Promise(async function (resolve, reject) {
            const publicIp = require('public-ip');
            var geoip = require('geoip-lite');

            var request = require('request');
            var ipaddr = "";
            var ip = null;
            var geo = null;
            // (async () => {
            // console.log("1 ",await publicIp.v4());
            //=> '46.5.21.123'
            ipaddr = await publicIp.v4();
            ip = ipaddr;

            geo = geoip.lookup(ip);
            //console.log("TEST ", geo);
            //                console.log("12 ", geo);
            //   console.log("2 ",await publicIp.v6());
            //=> 'fe80::200:f8ff:fe21:67cf'
            //  })(); 

            //https://www.npmjs.com/package/geoip-lite
          //  let url = "https://dev.virtualearth.net/REST/v1/LocalSearch/?query=" + st + "&userLocation=" + geo.ll[0] + "," + geo.ll[1] + "&key=Akw3CPHAT1X0Alb_DUL0JEDPIkCSX9ABnKQzJKNzrOy8xNa5GaLIYaGoAp3KsWd4"
               // let url = "https://dev.virtualearth.net/REST/v1/LocalSearch/?query=coffee&userLocation=47.602038,-122.333964&key=Akw3CPHAT1X0Alb_DUL0JEDPIkCSX9ABnKQzJKNzrOy8xNa5GaLIYaGoAp3KsWd4"
let url = "http://dev.virtualearth.net/REST/v1/Locations?q=" + st + "&key=Akw3CPHAT1X0Alb_DUL0JEDPIkCSX9ABnKQzJKNzrOy8xNa5GaLIYaGoAp3KsWd4";
               console.log("url url url for Bing ", url);
            await request(url, async function (error, response, body) {
                // console.log(response);
                if (!error && response.statusCode == 200) {

                    resolve(body);
                    console.log("~~~~~~~",body);

                } else {
                    reject(body);
                    console.log("~~~~~~~",body);
                }
            })

            //return welcomeText;
        });
    }


    doRequestOSM(st) {
        return new Promise(async function (resolve, reject) {
            const publicIp = require('public-ip');
            var geoip = require('geoip-lite');

            var request = require('request');
            var ipaddr = "";
            var ip = null;
            var geo = null;
            // (async () => {
            // console.log("1 ",await publicIp.v4());
            //=> '46.5.21.123'
            ipaddr = await publicIp.v4();
            ip = ipaddr;

            geo = geoip.lookup(ip);
            //console.log("TEST ", geo);
            //                console.log("12 ", geo);
            //   console.log("2 ",await publicIp.v6());
            //=> 'fe80::200:f8ff:fe21:67cf'
            //  })(); 

            //https://www.npmjs.com/package/geoip-lite
            let url = "https://nominatim.openstreetmap.org/search/" + st + "?format=json&addressdetails=1&limit=1&polygon_svg=1";
          //let url = "https://dev.virtualearth.net/REST/v1/LocalSearch/?query=" + st + "&userLocation=" + geo.ll[0] + "," + geo.ll[1] + "&key=Akw3CPHAT1X0Alb_DUL0JEDPIkCSX9ABnKQzJKNzrOy8xNa5GaLIYaGoAp3KsWd4"
               // let url = "https://dev.virtualearth.net/REST/v1/LocalSearch/?query=coffee&userLocation=47.602038,-122.333964&key=Akw3CPHAT1X0Alb_DUL0JEDPIkCSX9ABnKQzJKNzrOy8xNa5GaLIYaGoAp3KsWd4"

            await request(url, async function (error, response, body) {
                // console.log(response);
                if (!error && response.statusCode == 200) {


                    resolve(body);
                    console.log("~~~~~~~",body);

                } else {
                    reject(body);
                    console.log("~~~~~~~",body);
                }
            })

            //return welcomeText;
        });
    }


    /**
     * Create the choices with synonyms to render for the user during the ChoicePrompt.
     * (Indexes and upper/lower-case variants do not need to be added as synonyms)
     */



    getChoices() {
        const cardOptions = [
            {
                value: 'Bing',
                synonyms: ['adaptive']
            },
            {
                value: 'OSM',
                synonyms: ['adaptive']
            }
            // {
            //     value: 'Animation Card',
            //     synonyms: ['animation']
            // },
            // {
            //     value: 'Audio Card',
            //     synonyms: ['audio']
            // },
            // {
            //     value: 'Hero Card',
            //     synonyms: ['hero']
            // },
            // {
            //     value: 'Receipt Card',
            //     synonyms: ['receipt']
            // },
            // {
            //     value: 'Signin Card',
            //     synonyms: ['signin']
            // },
            // {
            //     value: 'Thumbnail Card',
            //     synonyms: ['thumbnail', 'thumb']
            // },
            // {
            //     value: 'Video Card',
            //     synonyms: ['video']
            // },
            // {
            //     value: 'All Cards',
            //     synonyms: ['all']
            // }
        ];

        return cardOptions;
    }

    getChoices2() {
        const cardOptions = [
            {
                value: 'Banks',
                synonyms: ['adaptive']
            },
            {
                value: 'Hospitals',
                synonyms: ['adaptive']
            },
            {
                value: 'Resturants',
                synonyms: ['adaptive']
            }
            // {
            //     value: 'Animation Card',
            //     synonyms: ['animation']
            // },
            // {
            //     value: 'Audio Card',
            //     synonyms: ['audio']
            // },
            // {
            //     value: 'Hero Card',
            //     synonyms: ['hero']
            // },
            // {
            //     value: 'Receipt Card',
            //     synonyms: ['receipt']
            // },
            // {
            //     value: 'Signin Card',
            //     synonyms: ['signin']
            // },
            // {
            //     value: 'Thumbnail Card',
            //     synonyms: ['thumbnail', 'thumb']
            // },
            // {
            //     value: 'Video Card',
            //     synonyms: ['video']
            // },
            // {
            //     value: 'All Cards',
            //     synonyms: ['all']
            // }
        ];

        return cardOptions;
    }

    // ======================================
    // Helper functions used to create cards.
    // ======================================

    createAdaptiveCard() {
        return CardFactory.adaptiveCard(AdaptiveCard);
    }

    createAnimationCard() {
        return CardFactory.animationCard(
            'Microsoft Bot Framework',
            [
                { url: 'https://i.giphy.com/Ki55RUbOV5njy.gif' }
            ],
            [],
            {
                subtitle: 'Animation Card'
            }
        );
    }

    createAudioCard() {
        return CardFactory.audioCard(
            'I am your father',
            ['https://www.mediacollege.com/downloads/sound-effects/star-wars/darthvader/darthvader_yourfather.wav'],
            CardFactory.actions([
                {
                    type: 'openUrl',
                    title: 'Read more',
                    value: 'https://en.wikipedia.org/wiki/The_Empire_Strikes_Back'
                }
            ]),
            {
                subtitle: 'Star Wars: Episode V - The Empire Strikes Back',
                text: 'The Empire Strikes Back (also known as Star Wars: Episode V – The Empire Strikes Back) is a 1980 American epic space opera film directed by Irvin Kershner. Leigh Brackett and Lawrence Kasdan wrote the screenplay, with George Lucas writing the film\'s story and serving as executive producer. The second installment in the original Star Wars trilogy, it was produced by Gary Kurtz for Lucasfilm Ltd. and stars Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams, Anthony Daniels, David Prowse, Kenny Baker, Peter Mayhew and Frank Oz.',
                image: 'https://upload.wikimedia.org/wikipedia/en/3/3c/SW_-_Empire_Strikes_Back.jpg'
            }
        );
    }

    createHeroCard() {
        return CardFactory.heroCard(
            'BotFramework Hero Card',
            CardFactory.images(['https://sec.ch9.ms/ch9/7ff5/e07cfef0-aa3b-40bb-9baa-7c9ef8ff7ff5/buildreactionbotframework_960.jpg']),
            CardFactory.actions([
                {
                    type: 'openUrl',
                    title: 'Get started',
                    value: 'https://docs.microsoft.com/en-us/azure/bot-service/'
                }
            ])
        );
    }

    createReceiptCard() {
        return CardFactory.receiptCard({
            title: 'John Doe',
            facts: [
                {
                    key: 'Order Number',
                    value: '1234'
                },
                {
                    key: 'Payment Method',
                    value: 'VISA 5555-****'
                }
            ],
            items: [
                {
                    title: 'Data Transfer',
                    price: '$38.45',
                    quantity: 368,
                    image: { url: 'https://github.com/amido/azure-vector-icons/raw/master/renders/traffic-manager.png' }
                },
                {
                    title: 'App Service',
                    price: '$45.00',
                    quantity: 720,
                    image: { url: 'https://github.com/amido/azure-vector-icons/raw/master/renders/cloud-service.png' }
                }
            ],
            tax: '$7.50',
            total: '$90.95',
            buttons: CardFactory.actions([
                {
                    type: 'openUrl',
                    title: 'More information',
                    value: 'https://azure.microsoft.com/en-us/pricing/details/bot-service/'
                }
            ])
        });
    }

    createSignInCard() {
        return CardFactory.signinCard(
            'BotFramework Sign in Card',
            'https://login.microsoftonline.com',
            'Sign in'
        );
    }

    createThumbnailCard(name, url, lat, lng) {
        //https://github.com/microsoft/BotBuilder-Location
        return CardFactory.thumbnailCard(
            name,
            [{ url: '' }],
            [{
                type: 'openUrl',
                title: 'Show in Map',
                value: 'https://bing.com/maps/default.aspx?cp='+lat+'~'+lng+'&lvl=12&style=r'
            }],
            {
                subtitle: '',
                text: ''
            }
        );
    }

    createVideoCard() {
        return CardFactory.videoCard(
            '2018 Imagine Cup World Championship Intro',
            [{ url: 'https://sec.ch9.ms/ch9/783d/d57287a5-185f-4df9-aa08-fcab699a783d/IC18WorldChampionshipIntro2.mp4' }],
            [{
                type: 'openUrl',
                title: 'Lean More',
                value: 'https://channel9.msdn.com/Events/Imagine-Cup/World-Finals-2018/2018-Imagine-Cup-World-Championship-Intro'
            }],
            {
                subtitle: 'by Microsoft',
                text: 'Microsoft\'s Imagine Cup has empowered student developers around the world to create and innovate on the world stage for the past 16 years. These innovations will shape how we live, work and play.'
            }
        );
    }
}

module.exports.MainDialog = MainDialog;
