"use strict";
const {expoSend} = require('./expoSendNotif')
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  sendNotification: async (ctx) => {
    console.log(ctx.request.body)
    expoSend(ctx.request.body)
    ctx.send("Hello World!");
  }
};
