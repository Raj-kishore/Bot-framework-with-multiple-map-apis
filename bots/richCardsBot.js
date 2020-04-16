// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const { MessageFactory } = require('botbuilder');
const { DialogBot } = require('./dialogBot');

/**
 * RichCardsBot prompts a user to select a Rich Card and then returns the card
 * that matches the user's selection.
 */
class RichCardsBot extends DialogBot {
    constructor(conversationState, userState, dialog) {
        super(conversationState, userState, dialog);

        this.onMembersAdded(async (context, next) => {
            const membersAdded = context.activity.membersAdded;
            for (let cnt = 0; cnt < membersAdded.length; cnt++) {
                if (membersAdded[cnt].id !== context.activity.recipient.id) {
                    const reply = MessageFactory.text('Chaya Here!!! Using me ' +
                        'you can search near by location details using Bing Map, Google Map and Open Street Map. Type anything.');
                    await context.sendActivity(reply);
                    await context.sendActivity("How can I help you?");


                }
            }

            // By calling next() you ensure that the next BotHandler is run.
            await next();
        });
    }
}

module.exports.RichCardsBot = RichCardsBot;
