'use strict';

/**
 * last-seen-article service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::last-seen-article.last-seen-article');
