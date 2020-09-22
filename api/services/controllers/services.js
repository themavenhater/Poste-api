'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  minified: async (ctx) => {
    return strapi.query('services').find(ctx.query,[]);
  },
  addview: async (ctx) => {
    const { id } = ctx.params;
    const date = new Date().toISOString()
    const entity = await strapi.services.services.findOne({ id });
    await strapi.services.services.update({ id }, {views: [...entity.views,date]});
    return true;
  },
};
