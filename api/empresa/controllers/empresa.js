"use strict";
const { sanitizeEntity } = require("strapi-utils");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async getCompaniesEnabled() {
    //en el caso de que el metodo tenga un parametro
    //   const { estado } = ctx.params;
    const entity = await strapi.services.empresa.find({ estado: true });
    return sanitizeEntity(entity, { model: strapi.models.empresa });
  },
};
