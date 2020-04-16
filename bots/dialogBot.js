// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const { ActivityHandler } = require('botbuilder');

/**
 * This IBot implementation can run any type of Dialog. The use of type parameterization is to allows multiple different bots
 * to be run at different endpoints within the same project. This can be achieved by defining distinct Controller types
 * each with dependency on distinct IBot types, this way ASP Dependency Injection can glue everything together without ambiguity.
 * The ConversationState is used by the Dialog system. The UserState isn't, however, it might have been used in a Dialog implementation,
 * and the requirement is that all BotState objects are saved at the end of a turn.
 */

 // The accessor names for the conversation flow and user profile state property accessors.
const CONVERSATION_FLOW_PROPERTY = 'CONVERSATION_FLOW_PROPERTY';
const USER_PROFILE_PROPERTY = 'USER_PROFILE_PROPERTY';

// Identifies the last question asked.
const question = {
    query: 'query',
    none: 'none'
};


class DialogBot extends ActivityHandler {
    /**
     * @param {ConversationState} conversationState
     * @param {UserState} userState
     * @param {Dialog} dialog
     */
    constructor(conversationState, userState, dialog) {
        super();

 
        if (!conversationState) throw new Error('[DialogBot]: Missing parameter. conversationState is required');
        if (!userState) throw new Error('[DialogBot]: Missing parameter. userState is required');
        if (!dialog) throw new Error('[DialogBot]: Missing parameter. dialog is required');

        this.conversationState = conversationState;
        this.userState = userState;
        this.dialog = dialog;
        this.dialogState = this.conversationState.createProperty('DialogState');
       // The state property accessors for conversation flow and user profile.
       this.conversationFlow = conversationState.createProperty(CONVERSATION_FLOW_PROPERTY);
       this.userProfile = userState.createProperty(USER_PROFILE_PROPERTY);

        this.onMessage(async (context, next) => {
            console.log('Running dialog with Message Activity.');

           // const flow = await this.conversationFlow.get(context, { lastQuestionAsked: question.none });
           // const profile = await this.userProfile.get(context, {});

          //  console.log("FLOW  .... ", flow);
          //  console.log("PROFILE .... ", profile);
      
          //  await DialogBot.fillOutUserProfile(flow, profile, context);


            // Run the Dialog with the new message Activity.
            await this.dialog.run(context, this.dialogState);

            // By calling next() you ensure that the next BotHandler is run.
            await next();
        });
    }

    /**
     * Override the ActivityHandler.run() method to save state changes after the bot logic completes.
     */
    async run(context) {
        await super.run(context);

        // Save any state changes. The load happened during the execution of the Dialog.
        await this.conversationState.saveChanges(context, false);
        await this.userState.saveChanges(context, false);
    }

  

     // Manages the conversation flow for filling out the user's profile.
     static async fillOutUserProfile(flow, profile, turnContext) {
        const input = turnContext.activity.text;
        let result;
        switch (flow.lastQuestionAsked) {
        // If we're just starting off, we haven't asked the user for any information yet.
        // Ask the user for their name and update the conversation flag.
        case question.none:
            await turnContext.sendActivity("Let's get started. What is your query?");
            flow.lastQuestionAsked = question.query;
            break;

        // If we last asked for their name, record their response, confirm that we got it.
        // Ask them for their age and update the conversation flag.
        case question.query:
            result = this.validateName(input);
            if (result.success) {
                profile.query = result.query;
                await turnContext.sendActivity(`Searching you query : ${ profile.query }.`);
               // await turnContext.sendActivity('How old are you?');
               // flow.lastQuestionAsked = question.;
                break;
            } else {
                // If we couldn't interpret their input, ask them for it again.
                // Don't update the conversation flag, so that we repeat this step.
                await turnContext.sendActivity(result.message || "I'm sorry, I didn't understand that.");
                break;
            }

        }
    }

}

module.exports.DialogBot = DialogBot;
