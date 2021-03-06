'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    addview: async (ctx) => {
        const { id } = ctx.params;
        const date = new Date().toISOString();
        const entity = await strapi.services.notes.findOne({ id });
        await strapi.services.notes.update(
          { id },
          { views: [...entity.views, date] }
        );
        return true;
      },
};
