'use strict';
// const strapi = require("strapi");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    /**
   * Triggered after user creation.
   */
  lifecycles: {
    async afterCreate(result, data) {
        if (data.email) {
          const emailTemplate = {
            subject: 'Hello <%= user.name %>, Thank you for volunteering',
            text: `Welcome to Arukah Volunteership!
                    Your account is now linked with: <%= user.email %>.`,
            html: `<h1>Welcome to Arukah Volunteership!</h1>
              <p>Your account is now linked with: <%= user.email %>.<p>`,
          };
          
          await strapi.plugins.email.services.email.sendTemplatedEmail(
            {
              to: data.email,
              // from: is not specified, so it's the defaultFrom that will be used instead
            },
            emailTemplate,
            {
              user: data,
            }
          );
        }
    },
  },
};
