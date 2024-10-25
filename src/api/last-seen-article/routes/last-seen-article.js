'use strict';

/**
 * last-seen-article router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::last-seen-article.last-seen-article');
