"use strict";
const { sanitizeEntity } = require("strapi-utils");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async getCompaniesEnabled() {
    //en el caso de que el metodo tenga un parametro, acordarse que el metodo recibe dicho parametro.
    //const { estado } = ctx.params;
    return strapi
      .query("empresa")
      .model.aggregate([{ $match: { estado: true } }]);
  },
};
