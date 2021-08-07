'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
 const { sanitizeEntity } = require('strapi-utils');

module.exports = {
    async addVolunteer(ctx) {

        const { id } = ctx.params;
        let entity;

        const {event, volunteer } = ctx.request.body;

        console.log(event, volunteer)
        
         try {
             // create volunteer
             const _volunteer = await strapi.services.volunteers.create(volunteer);
             // update event
             event.volunteer.push(_volunteer);
             entity = await strapi.services.events.update({ id }, event);

         } catch (e) {
             console.log(e);
             // find valunteer
             const volunteer = await strapi.services.volunteers.find({ name: volunteer.name, phoneNumber: volunteer.phoneNumber });
             // update event
             evt_body.volunteer.push(volunteer);
             entity = await strapi.services.events.update({ id }, evt_body);
         }

         return sanitizeEntity(entity, { model: strapi.models.volunteers });

    }
};
