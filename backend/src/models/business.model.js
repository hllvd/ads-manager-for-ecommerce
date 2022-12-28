import Model from "typed-model/Model.js";
var businessModel = Model.extend({
    properties: {
        id: Number,
        name: String,
        description: String
    }
});

export default businessModel