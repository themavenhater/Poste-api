'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    minified: async (ctx) => {
        return strapi.query('function').find(ctx.query,[]);
      }
};
