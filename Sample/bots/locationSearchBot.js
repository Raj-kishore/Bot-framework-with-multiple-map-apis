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

            //Static Image View
            const valueFromCarousel = context.activity.value;

            if (valueFromCarousel !== undefined)
                if (valueFromCarousel.y_lat !== undefined) // y_lat and y_ng are latitude and langitude respectively while y is item number from the selected carousel item. 
                    await botbuilderlocation.staticImageBing(context, valueFromCarousel.y_lat, valueFromCarousel.y_lng, B_key, valueFromCarousel.y);                    
            //Static Image View



            if (conversationState.queryStatus === undefined) {
               const validColors = ['Bing', 'OSM', 'Other'];

               if (validColors.includes(text)) {
                    await context.sendActivity(`You chose ${text} to proceed with.`);
                    await context.sendActivity(`Type the search term..`);

                    conversationState.maptype = text;
                    conversationState.queryStatus = 200;

                } else {
                    await context.sendActivity('Please select Map service to proceed.');
                    await this.sendSuggestedActions(context);
                }


            } else {

                switch (conversationState.maptype) {
                    case 'Bing':
                        await botbuilderlocation.bingMapCarousel(context, text, 5, B_key);
                        break;
                    case 'Other':
                        await context.sendActivity("Other search APIS such as Google Map, Map Box etc. are not planned yet.");
                        break;
                    case 'OSM':
                        await botbuilderlocation.osmMapCarousel(context, text, 5, "quickroutes@gmail.com");
                        break;
                }
                conversationState.queryStatus = undefined;
            }
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
                const welcomeMessage = `Welcome to LocationSearch bot ` +
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

}

module.exports.locationSearchBot = locationSearchBot;
