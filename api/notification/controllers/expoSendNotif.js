"use strict";

const { Expo } = require("expo-server-sdk");

module.exports = {
  expoSend: async (params) => {
    const { tokens, message } = params;
    let expo = new Expo();
    // Create the messages that you want to send to clients
    let messages = [];
    for (let token of tokens) {
      if (!Expo.isExpoPushToken(token)) {
        console.error(`Push token ${token} is not a valid Expo push token`);
        continue;
      }
      messages.push({
        to: token,
        sound: "default",
        title: message.title,
        body: message.body,
      });
    }
    let chunks = expo.chunkPushNotifications(messages);
    let tickets = [];
    (async () => {
      for (let chunk of chunks) {
        try {
          let ticketChunk = await expo.sendPushNotificationsAsync(chunk);
          console.log(ticketChunk);
          tickets.push(...ticketChunk);
        } catch (error) {
          console.error(error);
        }
      }
    })();
  },
};
