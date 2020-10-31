'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */



module.exports.findByCategoryName = async (ctx) => {
    try {
        const relatedArticle = await strapi.query('article').find({}, ['category', `category.${ctx.request.body.name}`]);
        console.log("..............", relatedArticle);
        ctx.send(relatedArticle)
    }
    catch (e) {
        console.log("error ...", e);
    }
}