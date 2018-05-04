
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const defaultString = "NOT ASSIGNED";

let itemSchema = new Schema(
    {
        itemId :{
            type:String,
            unique : true
        },
        itemName : {
            type: String,
            default : defaultString
        },
        description : {
            type : String,
            default : defaultString
        },
        soldBy : {
            type : String,
            default : defaultString
        },
        cost : {
            type : Number,
            default : 0
        },
        rating : {
            type : Number,
            default : 1
        },
        category:{
            type : String,
            default : defaultString
        }

    }
);

mongoose.model('Item',itemSchema);