import Model from "typed-model/Model.js";
import Enum from "typed-model/Enum.js";

const WebSiteType = Enum.create({
    typeName: 'WebSiteType',
    title: 'WebSiteType',
    values: ['shopify', 'wordpress', 'generic']
});
const WebsiteModel = Model.extend({
    properties: {
        id: Number,
        name: String,
        description: String,
        url : String,
        clientId : String,
        clientSecret: String,
        websiteType: WebSiteType
    }
});

export default WebsiteModel