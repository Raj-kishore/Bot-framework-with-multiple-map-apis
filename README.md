####  Microsoft Location Control for Microsoft Bot Framework (v4 Node.js)
**Overview**
The Microsoft location control for Microsoft Bot Framework makes the process of collecting and validating the user's desired location in a conversation. The control is available for Node.js.

**Transcript Example**

```json
[
  {
    "type": "conversationUpdate",
    "membersAdded": [
      {
        "id": "80d27610-80af-11ea-92c2-33fe43f60cbb",
        "name": "Bot"
      },
      {
        "id": "39bc6228-b453-4080-b78c-de3ffc2e8823",
        "name": "User"
      }
    ],
    "membersRemoved": [],
    "channelId": "emulator",
    "conversation": {
      "id": "0baf90b0-82b8-11ea-92c2-33fe43f60cbb|livechat"
    },
    "id": "0bb92da0-82b8-11ea-8859-1d167d8e580f",
    "localTimestamp": "2020-04-20T09:05:57+05:30",
    "recipient": {
      "id": "80d27610-80af-11ea-92c2-33fe43f60cbb",
      "name": "Bot",
      "role": "bot"
    },
    "timestamp": "2020-04-20T03:35:57.050Z",
    "from": {
      "id": "39bc6228-b453-4080-b78c-de3ffc2e8823",
      "name": "User",
      "role": "user"
    },
    "locale": "en-US",
    "serviceUrl": "http://localhost:58766"
  },
  {
    "type": "message",
    "serviceUrl": "http://localhost:58766",
    "channelId": "emulator",
    "from": {
      "id": "80d27610-80af-11ea-92c2-33fe43f60cbb",
      "name": "Bot",
      "role": "bot"
    },
    "conversation": {
      "id": "0baf90b0-82b8-11ea-92c2-33fe43f60cbb|livechat"
    },
    "recipient": {
      "id": "39bc6228-b453-4080-b78c-de3ffc2e8823",
      "role": "user"
    },
    "text": "Myself Chaya !!! I will help you find local resturants, banks, hospitals, institutions, businessess etc. with Bing and OSM.",
    "inputHint": "acceptingInput",
    "replyToId": "0bb92da0-82b8-11ea-8859-1d167d8e580f",
    "id": "0bbadb50-82b8-11ea-8859-1d167d8e580f",
    "localTimestamp": "2020-04-20T09:05:57+05:30",
    "timestamp": "2020-04-20T03:35:57.061Z",
    "locale": "en-US"
  },
  {
    "type": "message",
    "serviceUrl": "http://localhost:58766",
    "channelId": "emulator",
    "from": {
      "id": "80d27610-80af-11ea-92c2-33fe43f60cbb",
      "name": "Bot",
      "role": "bot"
    },
    "conversation": {
      "id": "0baf90b0-82b8-11ea-92c2-33fe43f60cbb|livechat"
    },
    "recipient": {
      "id": "39bc6228-b453-4080-b78c-de3ffc2e8823",
      "role": "user"
    },
    "text": "How can I help you? Good Morning. Say something to start.",
    "inputHint": "acceptingInput",
    "replyToId": "0bb92da0-82b8-11ea-8859-1d167d8e580f",
    "id": "0bbc8900-82b8-11ea-8859-1d167d8e580f",
    "localTimestamp": "2020-04-20T09:05:57+05:30",
    "timestamp": "2020-04-20T03:35:57.072Z",
    "locale": "en-US"
  },
  {
    "channelData": {
      "clientActivityID": "1587353760410q10kozjrp2p",
      "clientTimestamp": "2020-04-20T03:36:00.410Z"
    },
    "text": "Hi",
    "textFormat": "plain",
    "type": "message",
    "channelId": "emulator",
    "from": {
      "id": "39bc6228-b453-4080-b78c-de3ffc2e8823",
      "name": "User",
      "role": "user"
    },
    "locale": "en-US",
    "timestamp": "2020-04-20T03:36:00.414Z",
    "entities": [
      {
        "requiresBotState": true,
        "supportsListening": true,
        "supportsTts": true,
        "type": "ClientCapabilities"
      }
    ],
    "conversation": {
      "id": "0baf90b0-82b8-11ea-92c2-33fe43f60cbb|livechat"
    },
    "id": "0dba7be0-82b8-11ea-8859-1d167d8e580f",
    "localTimestamp": "2020-04-20T09:06:00+05:30",
    "recipient": {
      "id": "80d27610-80af-11ea-92c2-33fe43f60cbb",
      "name": "Bot",
      "role": "bot"
    },
    "serviceUrl": "http://localhost:58766"
  },
  {
    "type": "message",
    "serviceUrl": "http://localhost:58766",
    "channelId": "emulator",
    "from": {
      "id": "80d27610-80af-11ea-92c2-33fe43f60cbb",
      "name": "Bot",
      "role": "bot"
    },
    "conversation": {
      "id": "0baf90b0-82b8-11ea-92c2-33fe43f60cbb|livechat"
    },
    "recipient": {
      "id": "39bc6228-b453-4080-b78c-de3ffc2e8823",
      "role": "user"
    },
    "text": "What Map API whould you like to use?",
    "inputHint": "expectingInput",
    "suggestedActions": {
      "actions": [
        {
          "type": "imBack",
          "title": "Bing",
          "value": "Bing"
        },
        {
          "type": "imBack",
          "title": "OSM",
          "value": "OSM"
        }
      ]
    },
    "replyToId": "0dba7be0-82b8-11ea-8859-1d167d8e580f",
    "id": "0dbec1a0-82b8-11ea-8859-1d167d8e580f",
    "localTimestamp": "2020-04-20T09:06:00+05:30",
    "timestamp": "2020-04-20T03:36:00.441Z",
    "locale": "en-US"
  },
  {
    "channelData": {
      "clientActivityID": "1587353762091c292qwj8u1j",
      "clientTimestamp": "2020-04-20T03:36:02.091Z"
    },
    "text": "Bing",
    "textFormat": "plain",
    "type": "message",
    "channelId": "emulator",
    "from": {
      "id": "39bc6228-b453-4080-b78c-de3ffc2e8823",
      "name": "User",
      "role": "user"
    },
    "locale": "en-US",
    "timestamp": "2020-04-20T03:36:02.094Z",
    "conversation": {
      "id": "0baf90b0-82b8-11ea-92c2-33fe43f60cbb|livechat"
    },
    "id": "0ebad4e0-82b8-11ea-8859-1d167d8e580f",
    "localTimestamp": "2020-04-20T09:06:02+05:30",
    "recipient": {
      "id": "80d27610-80af-11ea-92c2-33fe43f60cbb",
      "name": "Bot",
      "role": "bot"
    },
    "serviceUrl": "http://localhost:58766"
  },
  {
    "type": "message",
    "serviceUrl": "http://localhost:58766",
    "channelId": "emulator",
    "from": {
      "id": "80d27610-80af-11ea-92c2-33fe43f60cbb",
      "name": "Bot",
      "role": "bot"
    },
    "conversation": {
      "id": "0baf90b0-82b8-11ea-92c2-33fe43f60cbb|livechat"
    },
    "recipient": {
      "id": "39bc6228-b453-4080-b78c-de3ffc2e8823",
      "role": "user"
    },
    "text": "Please provide a search term.",
    "inputHint": "expectingInput",
    "replyToId": "0ebad4e0-82b8-11ea-8859-1d167d8e580f",
    "id": "0ec05320-82b8-11ea-8859-1d167d8e580f",
    "localTimestamp": "2020-04-20T09:06:02+05:30",
    "timestamp": "2020-04-20T03:36:02.129Z",
    "locale": "en-US"
  },
  {
    "channelData": {
      "clientActivityID": "15873537732420b9w28o7md9v",
      "clientTimestamp": "2020-04-20T03:36:13.242Z"
    },
    "text": "mumbai banks",
    "textFormat": "plain",
    "type": "message",
    "channelId": "emulator",
    "from": {
      "id": "39bc6228-b453-4080-b78c-de3ffc2e8823",
      "name": "User",
      "role": "user"
    },
    "locale": "en-US",
    "timestamp": "2020-04-20T03:36:13.246Z",
    "conversation": {
      "id": "0baf90b0-82b8-11ea-92c2-33fe43f60cbb|livechat"
    },
    "id": "15607de0-82b8-11ea-8859-1d167d8e580f",
    "localTimestamp": "2020-04-20T09:06:13+05:30",
    "recipient": {
      "id": "80d27610-80af-11ea-92c2-33fe43f60cbb",
      "name": "Bot",
      "role": "bot"
    },
    "serviceUrl": "http://localhost:58766"
  },
  {
    "type": "message",
    "serviceUrl": "http://localhost:58766",
    "channelId": "emulator",
    "from": {
      "id": "80d27610-80af-11ea-92c2-33fe43f60cbb",
      "name": "Bot",
      "role": "bot"
    },
    "conversation": {
      "id": "0baf90b0-82b8-11ea-92c2-33fe43f60cbb|livechat"
    },
    "recipient": {
      "id": "39bc6228-b453-4080-b78c-de3ffc2e8823",
      "role": "user"
    },
    "attachmentLayout": "carousel",
    "inputHint": "acceptingInput",
    "attachments": [
      {
        "contentType": "application/vnd.microsoft.card.adaptive",
        "content": {
          "type": "AdaptiveCard",
          "body": [
            {
              "type": "TextBlock",
              "size": "Medium",
              "weight": "Bolder",
              "text": "#1. Mumbai, India",
              "spacing": "Large",
              "horizontalAlignment": "Center",
              "color": "Dark"
            }
          ],
          "actions": [
            {
              "type": "Action.OpenUrl",
              "title": "View Map ",
              "url": "https://bing.com/maps/default.aspx?cp=18.940170288085938~72.8348617553711&lvl=12&style=r",
              "style": "positive"
            },
            {
              "type": "Action.Submit",
              "title": "Select this location",
              "data": {
                "x": 1
              }
            }
          ],
          "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
          "version": "1.0"
        }
      },
      {
        "contentType": "application/vnd.microsoft.card.adaptive",
        "content": {
          "type": "AdaptiveCard",
          "body": [
            {
              "type": "TextBlock",
              "size": "Medium",
              "weight": "Bolder",
              "text": "#2. Mumbai",
              "spacing": "Large",
              "horizontalAlignment": "Center",
              "color": "Dark"
            }
          ],
          "actions": [
            {
              "type": "Action.OpenUrl",
              "title": "View Map ",
              "url": "https://bing.com/maps/default.aspx?cp=18.98348617553711~72.83597564697266&lvl=12&style=r",
              "style": "positive"
            },
            {
              "type": "Action.Submit",
              "title": "Select this location",
              "data": {
                "x": 2
              }
            }
          ],
          "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
          "version": "1.0"
        }
      },
      {
        "contentType": "application/vnd.microsoft.card.adaptive",
        "content": {
          "type": "AdaptiveCard",
          "body": [
            {
              "type": "TextBlock",
              "size": "Medium",
              "weight": "Bolder",
              "text": "#3. Mumbai Suburban",
              "spacing": "Large",
              "horizontalAlignment": "Center",
              "color": "Dark"
            }
          ],
          "actions": [
            {
              "type": "Action.OpenUrl",
              "title": "View Map ",
              "url": "https://bing.com/maps/default.aspx?cp=19.14045524597168~72.88236236572266&lvl=12&style=r",
              "style": "positive"
            },
            {
              "type": "Action.Submit",
              "title": "Select this location",
              "data": {
                "x": 3
              }
            }
          ],
          "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
          "version": "1.0"
        }
      },
      {
        "contentType": "application/vnd.microsoft.card.adaptive",
        "content": {
          "type": "AdaptiveCard",
          "body": [
            {
              "type": "TextBlock",
              "size": "Medium",
              "weight": "Bolder",
              "text": "#4. Banks, NC",
              "spacing": "Large",
              "horizontalAlignment": "Center",
              "color": "Dark"
            }
          ],
          "actions": [
            {
              "type": "Action.OpenUrl",
              "title": "View Map ",
              "url": "https://bing.com/maps/default.aspx?cp=35.63528060913086~-78.71443939208984&lvl=12&style=r",
              "style": "positive"
            },
            {
              "type": "Action.Submit",
              "title": "Select this location",
              "data": {
                "x": 4
              }
            }
          ],
          "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
          "version": "1.0"
        }
      },
      {
        "contentType": "application/vnd.microsoft.card.adaptive",
        "content": {
          "type": "AdaptiveCard",
          "body": [
            {
              "type": "TextBlock",
              "size": "Medium",
              "weight": "Bolder",
              "text": "#5. Mumbai, India",
              "spacing": "Large",
              "horizontalAlignment": "Center",
              "color": "Dark"
            }
          ],
          "actions": [
            {
              "type": "Action.OpenUrl",
              "title": "View Map ",
              "url": "https://bing.com/maps/default.aspx?cp=19.09033966064453~72.87140655517578&lvl=12&style=r",
              "style": "positive"
            },
            {
              "type": "Action.Submit",
              "title": "Select this location",
              "data": {
                "x": 5
              }
            }
          ],
          "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
          "version": "1.0"
        }
      }
    ],
    "replyToId": "15607de0-82b8-11ea-8859-1d167d8e580f",
    "id": "15d586d0-82b8-11ea-8859-1d167d8e580f",
    "localTimestamp": "2020-04-20T09:06:14+05:30",
    "timestamp": "2020-04-20T03:36:14.013Z",
    "locale": "en-US"
  },
  {
    "type": "message",
    "serviceUrl": "http://localhost:58766",
    "channelId": "emulator",
    "from": {
      "id": "80d27610-80af-11ea-92c2-33fe43f60cbb",
      "name": "Bot",
      "role": "bot"
    },
    "conversation": {
      "id": "0baf90b0-82b8-11ea-92c2-33fe43f60cbb|livechat"
    },
    "recipient": {
      "id": "39bc6228-b453-4080-b78c-de3ffc2e8823",
      "role": "user"
    },
    "text": "I found the above top 5 results",
    "inputHint": "acceptingInput",
    "replyToId": "15607de0-82b8-11ea-8859-1d167d8e580f",
    "id": "15d70d70-82b8-11ea-8859-1d167d8e580f",
    "localTimestamp": "2020-04-20T09:06:14+05:30",
    "timestamp": "2020-04-20T03:36:14.023Z",
    "locale": "en-US"
  },
  {
    "type": "message",
    "serviceUrl": "http://localhost:58766",
    "channelId": "emulator",
    "from": {
      "id": "80d27610-80af-11ea-92c2-33fe43f60cbb",
      "name": "Bot",
      "role": "bot"
    },
    "conversation": {
      "id": "0baf90b0-82b8-11ea-92c2-33fe43f60cbb|livechat"
    },
    "recipient": {
      "id": "39bc6228-b453-4080-b78c-de3ffc2e8823",
      "role": "user"
    },
    "text": "Please select an address to proceed.",
    "inputHint": "acceptingInput",
    "replyToId": "15607de0-82b8-11ea-8859-1d167d8e580f",
    "id": "15d86d00-82b8-11ea-8859-1d167d8e580f",
    "localTimestamp": "2020-04-20T09:06:14+05:30",
    "timestamp": "2020-04-20T03:36:14.032Z",
    "locale": "en-US"
  },
  {
    "channelData": {
      "postBack": true,
      "clientActivityID": "1587353810799o8g46twsr6r",
      "clientTimestamp": "2020-04-20T03:36:50.800Z"
    },
    "type": "message",
    "value": {
      "x": 4
    },
    "channelId": "emulator",
    "from": {
      "id": "39bc6228-b453-4080-b78c-de3ffc2e8823",
      "name": "User",
      "role": "user"
    },
    "locale": "en-US",
    "timestamp": "2020-04-20T03:36:50.806Z",
    "conversation": {
      "id": "0baf90b0-82b8-11ea-92c2-33fe43f60cbb|livechat"
    },
    "id": "2bc3b160-82b8-11ea-8859-1d167d8e580f",
    "localTimestamp": "2020-04-20T09:06:50+05:30",
    "recipient": {
      "id": "80d27610-80af-11ea-92c2-33fe43f60cbb",
      "name": "Bot",
      "role": "bot"
    },
    "serviceUrl": "http://localhost:58766"
  },
  {
    "type": "message",
    "serviceUrl": "http://localhost:58766",
    "channelId": "emulator",
    "from": {
      "id": "80d27610-80af-11ea-92c2-33fe43f60cbb",
      "name": "Bot",
      "role": "bot"
    },
    "conversation": {
      "id": "0baf90b0-82b8-11ea-92c2-33fe43f60cbb|livechat"
    },
    "recipient": {
      "id": "39bc6228-b453-4080-b78c-de3ffc2e8823",
      "role": "user"
    },
    "text": "You selected #4",
    "inputHint": "acceptingInput",
    "replyToId": "2bc3b160-82b8-11ea-8859-1d167d8e580f",
    "id": "2bc6bea0-82b8-11ea-8859-1d167d8e580f",
    "localTimestamp": "2020-04-20T09:06:50+05:30",
    "timestamp": "2020-04-20T03:36:50.826Z",
    "locale": "en-US"
  },
  {
    "type": "message",
    "serviceUrl": "http://localhost:58766",
    "channelId": "emulator",
    "from": {
      "id": "80d27610-80af-11ea-92c2-33fe43f60cbb",
      "name": "Bot",
      "role": "bot"
    },
    "conversation": {
      "id": "0baf90b0-82b8-11ea-92c2-33fe43f60cbb|livechat"
    },
    "recipient": {
      "id": "39bc6228-b453-4080-b78c-de3ffc2e8823",
      "role": "user"
    },
    "text": "Say something to search again.",
    "inputHint": "acceptingInput",
    "replyToId": "2bc3b160-82b8-11ea-8859-1d167d8e580f",
    "id": "2bc7d010-82b8-11ea-8859-1d167d8e580f",
    "localTimestamp": "2020-04-20T09:06:50+05:30",
    "timestamp": "2020-04-20T03:36:50.833Z",
    "locale": "en-US"
  },
  {
    "type": "event",
    "serviceUrl": "http://localhost:58766",
    "channelId": "emulator",
    "from": {
      "id": "80d27610-80af-11ea-92c2-33fe43f60cbb",
      "name": "Bot",
      "role": "bot"
    },
    "conversation": {
      "id": "0baf90b0-82b8-11ea-92c2-33fe43f60cbb|livechat"
    },
    "recipient": {
      "id": "39bc6228-b453-4080-b78c-de3ffc2e8823",
      "role": "user"
    },
    "replyToId": "2bc3b160-82b8-11ea-8859-1d167d8e580f",
    "name": "tapEvent",
    "id": "2bc8e180-82b8-11ea-8859-1d167d8e580f",
    "localTimestamp": "2020-04-20T09:06:50+05:30",
    "timestamp": "2020-04-20T03:36:50.840Z",
    "locale": "en-US"
  },
  {
    "channelData": {
      "clientActivityID": "158735381740284ahs0g2oao",
      "clientTimestamp": "2020-04-20T03:36:57.402Z"
    },
    "text": "hi",
    "textFormat": "plain",
    "type": "message",
    "channelId": "emulator",
    "from": {
      "id": "39bc6228-b453-4080-b78c-de3ffc2e8823",
      "name": "User",
      "role": "user"
    },
    "locale": "en-US",
    "timestamp": "2020-04-20T03:36:57.405Z",
    "conversation": {
      "id": "0baf90b0-82b8-11ea-92c2-33fe43f60cbb|livechat"
    },
    "id": "2fb29ed0-82b8-11ea-8859-1d167d8e580f",
    "localTimestamp": "2020-04-20T09:06:57+05:30",
    "recipient": {
      "id": "80d27610-80af-11ea-92c2-33fe43f60cbb",
      "name": "Bot",
      "role": "bot"
    },
    "serviceUrl": "http://localhost:58766"
  },
  {
    "type": "message",
    "serviceUrl": "http://localhost:58766",
    "channelId": "emulator",
    "from": {
      "id": "80d27610-80af-11ea-92c2-33fe43f60cbb",
      "name": "Bot",
      "role": "bot"
    },
    "conversation": {
      "id": "0baf90b0-82b8-11ea-92c2-33fe43f60cbb|livechat"
    },
    "recipient": {
      "id": "39bc6228-b453-4080-b78c-de3ffc2e8823",
      "role": "user"
    },
    "text": "What Map API whould you like to use?",
    "inputHint": "expectingInput",
    "suggestedActions": {
      "actions": [
        {
          "type": "imBack",
          "title": "Bing",
          "value": "Bing"
        },
        {
          "type": "imBack",
          "title": "OSM",
          "value": "OSM"
        }
      ]
    },
    "replyToId": "2fb29ed0-82b8-11ea-8859-1d167d8e580f",
    "id": "2fb5ac10-82b8-11ea-8859-1d167d8e580f",
    "localTimestamp": "2020-04-20T09:06:57+05:30",
    "timestamp": "2020-04-20T03:36:57.425Z",
    "locale": "en-US"
  },
  {
    "channelData": {
      "clientActivityID": "1587353819499gopf6vplaao",
      "clientTimestamp": "2020-04-20T03:36:59.499Z"
    },
    "text": "OSM",
    "textFormat": "plain",
    "type": "message",
    "channelId": "emulator",
    "from": {
      "id": "39bc6228-b453-4080-b78c-de3ffc2e8823",
      "name": "User",
      "role": "user"
    },
    "locale": "en-US",
    "timestamp": "2020-04-20T03:36:59.501Z",
    "conversation": {
      "id": "0baf90b0-82b8-11ea-92c2-33fe43f60cbb|livechat"
    },
    "id": "30f271d0-82b8-11ea-8859-1d167d8e580f",
    "localTimestamp": "2020-04-20T09:06:59+05:30",
    "recipient": {
      "id": "80d27610-80af-11ea-92c2-33fe43f60cbb",
      "name": "Bot",
      "role": "bot"
    },
    "serviceUrl": "http://localhost:58766"
  },
  {
    "type": "message",
    "serviceUrl": "http://localhost:58766",
    "channelId": "emulator",
    "from": {
      "id": "80d27610-80af-11ea-92c2-33fe43f60cbb",
      "name": "Bot",
      "role": "bot"
    },
    "conversation": {
      "id": "0baf90b0-82b8-11ea-92c2-33fe43f60cbb|livechat"
    },
    "recipient": {
      "id": "39bc6228-b453-4080-b78c-de3ffc2e8823",
      "role": "user"
    },
    "text": "Please provide a search term.",
    "inputHint": "expectingInput",
    "replyToId": "30f271d0-82b8-11ea-8859-1d167d8e580f",
    "id": "30f9ebe0-82b8-11ea-8859-1d167d8e580f",
    "localTimestamp": "2020-04-20T09:06:59+05:30",
    "timestamp": "2020-04-20T03:36:59.550Z",
    "locale": "en-US"
  },
  {
    "channelData": {
      "clientActivityID": "158735382662768qk6o5p1nq",
      "clientTimestamp": "2020-04-20T03:37:06.627Z"
    },
    "text": "banks in airoli",
    "textFormat": "plain",
    "type": "message",
    "channelId": "emulator",
    "from": {
      "id": "39bc6228-b453-4080-b78c-de3ffc2e8823",
      "name": "User",
      "role": "user"
    },
    "locale": "en-US",
    "timestamp": "2020-04-20T03:37:06.630Z",
    "conversation": {
      "id": "0baf90b0-82b8-11ea-92c2-33fe43f60cbb|livechat"
    },
    "id": "35323e60-82b8-11ea-8859-1d167d8e580f",
    "localTimestamp": "2020-04-20T09:07:06+05:30",
    "recipient": {
      "id": "80d27610-80af-11ea-92c2-33fe43f60cbb",
      "name": "Bot",
      "role": "bot"
    },
    "serviceUrl": "http://localhost:58766"
  },
  {
    "type": "message",
    "serviceUrl": "http://localhost:58766",
    "channelId": "emulator",
    "from": {
      "id": "80d27610-80af-11ea-92c2-33fe43f60cbb",
      "name": "Bot",
      "role": "bot"
    },
    "conversation": {
      "id": "0baf90b0-82b8-11ea-92c2-33fe43f60cbb|livechat"
    },
    "recipient": {
      "id": "39bc6228-b453-4080-b78c-de3ffc2e8823",
      "role": "user"
    },
    "attachmentLayout": "carousel",
    "inputHint": "acceptingInput",
    "attachments": [
      {
        "contentType": "application/vnd.microsoft.card.adaptive",
        "content": {
          "type": "AdaptiveCard",
          "body": [
            {
              "type": "TextBlock",
              "size": "Medium",
              "weight": "Bolder",
              "text": "#1. Cyndicate Bank, Subhash Chandra Bose Road, Babu Jagjivan Ram Nagar, T Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400080, India",
              "spacing": "Large",
              "horizontalAlignment": "Center",
              "color": "Dark"
            }
          ],
          "actions": [
            {
              "type": "Action.OpenUrl",
              "title": "View Map ",
              "url": "https://nominatim.openstreetmap.org/reverse?format=html&lat=19.1753828&lon=72.9544214&zoom=18&addressdetails=1",
              "style": "positive"
            },
            {
              "type": "Action.Submit",
              "title": "Select this location",
              "data": {
                "x": 1
              }
            }
          ],
          "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
          "version": "1.0"
        }
      },
      {
        "contentType": "application/vnd.microsoft.card.adaptive",
        "content": {
          "type": "AdaptiveCard",
          "body": [
            {
              "type": "TextBlock",
              "size": "Medium",
              "weight": "Bolder",
              "text": "#2. Sarswat Bank, Subhash Chandra Bose Road, Babu Jagjivan Ram Nagar, T Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400080, India",
              "spacing": "Large",
              "horizontalAlignment": "Center",
              "color": "Dark"
            }
          ],
          "actions": [
            {
              "type": "Action.OpenUrl",
              "title": "View Map ",
              "url": "https://nominatim.openstreetmap.org/reverse?format=html&lat=19.1753632&lon=72.9544804&zoom=18&addressdetails=1",
              "style": "positive"
            },
            {
              "type": "Action.Submit",
              "title": "Select this location",
              "data": {
                "x": 2
              }
            }
          ],
          "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
          "version": "1.0"
        }
      },
      {
        "contentType": "application/vnd.microsoft.card.adaptive",
        "content": {
          "type": "AdaptiveCard",
          "body": [
            {
              "type": "TextBlock",
              "size": "Medium",
              "weight": "Bolder",
              "text": "#3. Dena Bank, Mahatma Gandhi Road, Babu Jagjivan Ram Nagar, T Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400080, India",
              "spacing": "Large",
              "horizontalAlignment": "Center",
              "color": "Dark"
            }
          ],
          "actions": [
            {
              "type": "Action.OpenUrl",
              "title": "View Map ",
              "url": "https://nominatim.openstreetmap.org/reverse?format=html&lat=19.1746833&lon=72.9534865&zoom=18&addressdetails=1",
              "style": "positive"
            },
            {
              "type": "Action.Submit",
              "title": "Select this location",
              "data": {
                "x": 3
              }
            }
          ],
          "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
          "version": "1.0"
        }
      },
      {
        "contentType": "application/vnd.microsoft.card.adaptive",
        "content": {
          "type": "AdaptiveCard",
          "body": [
            {
              "type": "TextBlock",
              "size": "Medium",
              "weight": "Bolder",
              "text": "#4. Axis Bank, Mahatma Phule Marg, Gavan Pada Koliwada, T Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400081, India",
              "spacing": "Large",
              "horizontalAlignment": "Center",
              "color": "Dark"
            }
          ],
          "actions": [
            {
              "type": "Action.OpenUrl",
              "title": "View Map ",
              "url": "https://nominatim.openstreetmap.org/reverse?format=html&lat=19.1719001&lon=72.9594076&zoom=18&addressdetails=1",
              "style": "positive"
            },
            {
              "type": "Action.Submit",
              "title": "Select this location",
              "data": {
                "x": 4
              }
            }
          ],
          "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
          "version": "1.0"
        }
      },
      {
        "contentType": "application/vnd.microsoft.card.adaptive",
        "content": {
          "type": "AdaptiveCard",
          "body": [
            {
              "type": "TextBlock",
              "size": "Medium",
              "weight": "Bolder",
              "text": "#5. Dena Bank, Mahatma Phule Marg, Gavan Pada Koliwada, T Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400081, India",
              "spacing": "Large",
              "horizontalAlignment": "Center",
              "color": "Dark"
            }
          ],
          "actions": [
            {
              "type": "Action.OpenUrl",
              "title": "View Map ",
              "url": "https://nominatim.openstreetmap.org/reverse?format=html&lat=19.1720301&lon=72.9587213&zoom=18&addressdetails=1",
              "style": "positive"
            },
            {
              "type": "Action.Submit",
              "title": "Select this location",
              "data": {
                "x": 5
              }
            }
          ],
          "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
          "version": "1.0"
        }
      }
    ],
    "replyToId": "35323e60-82b8-11ea-8859-1d167d8e580f",
    "id": "35c2be90-82b8-11ea-8859-1d167d8e580f",
    "localTimestamp": "2020-04-20T09:07:07+05:30",
    "timestamp": "2020-04-20T03:37:07.577Z",
    "locale": "en-US"
  },
  {
    "type": "message",
    "serviceUrl": "http://localhost:58766",
    "channelId": "emulator",
    "from": {
      "id": "80d27610-80af-11ea-92c2-33fe43f60cbb",
      "name": "Bot",
      "role": "bot"
    },
    "conversation": {
      "id": "0baf90b0-82b8-11ea-92c2-33fe43f60cbb|livechat"
    },
    "recipient": {
      "id": "39bc6228-b453-4080-b78c-de3ffc2e8823",
      "role": "user"
    },
    "text": "I found the above top 5 results",
    "inputHint": "acceptingInput",
    "replyToId": "35323e60-82b8-11ea-8859-1d167d8e580f",
    "id": "35c41e20-82b8-11ea-8859-1d167d8e580f",
    "localTimestamp": "2020-04-20T09:07:07+05:30",
    "timestamp": "2020-04-20T03:37:07.586Z",
    "locale": "en-US"
  },
  {
    "type": "message",
    "serviceUrl": "http://localhost:58766",
    "channelId": "emulator",
    "from": {
      "id": "80d27610-80af-11ea-92c2-33fe43f60cbb",
      "name": "Bot",
      "role": "bot"
    },
    "conversation": {
      "id": "0baf90b0-82b8-11ea-92c2-33fe43f60cbb|livechat"
    },
    "recipient": {
      "id": "39bc6228-b453-4080-b78c-de3ffc2e8823",
      "role": "user"
    },
    "text": "Please select an address to proceed.",
    "inputHint": "acceptingInput",
    "replyToId": "35323e60-82b8-11ea-8859-1d167d8e580f",
    "id": "35c57db0-82b8-11ea-8859-1d167d8e580f",
    "localTimestamp": "2020-04-20T09:07:07+05:30",
    "timestamp": "2020-04-20T03:37:07.595Z",
    "locale": "en-US"
  }
]
```

Simulated from https://github.com/microsoft/BotBuilder-Location
