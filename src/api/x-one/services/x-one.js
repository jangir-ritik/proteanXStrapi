'use strict';

/**
 * x-one service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::x-one.x-one');
