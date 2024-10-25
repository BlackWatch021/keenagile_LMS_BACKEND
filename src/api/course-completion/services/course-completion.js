'use strict';

/**
 * course-completion service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::course-completion.course-completion');
