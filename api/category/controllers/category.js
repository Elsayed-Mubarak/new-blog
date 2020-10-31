'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports.findbycategoryname = async (ctx) => {
    try {
        let entity = [];
        const relatedArticle = await strapi.query('category')
            .find({ name: ctx.request.body.name })
            .then((res) => res.find(i => entity = [...i.articles]))
        console.log({ entity });
        return ctx.send(entity)

    }
    catch (e) {
        console.log("error ...", e);
    }
};
