const asyncHandler=require("express-async-handler");
const Newsletter = require("../models/newsletterModel");
{
    title:{
        type: String,
        require:[true,"please add Title"],
    },
    author:{
        type: String,
        require:[true,"please add author"],
    },
    date:""
    imageUrl:{
        type: String,
        require:[true,"please add Url"],
    },
    description:{
        type: String,
        require:[true, "please add Newsletter Description"],
    }
}