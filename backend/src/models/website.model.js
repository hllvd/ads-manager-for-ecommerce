import Model from "typed-model/Model.js";
import Enum from "typed-model/Enum.js";

const WebSiteType = Enum.create({
    values: ['shopify', 'wordpress', 'generic']
});
const WebsiteModel = Model.extend({
    properties: {
        id: Number,
        name: String,
        description: String,
        url : String,
        websiteType: {
            type: String,
            items: WebSiteType
        }
    }
});

export default WebsiteModel