'use strict';

/**
 * last-seen-article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::last-seen-article.last-seen-article');
