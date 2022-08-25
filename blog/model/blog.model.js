const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let blogSchema = new Schema({
    title: {
        type: String
    },
    image: {
        type: String
    },
    content: {
        type: String
    },
    author: {
        type: String
    }
},
    {
        collection: "blogs"
    }
);     

module.exports = mongoose.model('blogSchema',blogSchema);