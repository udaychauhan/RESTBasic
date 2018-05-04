const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//cart total cost
//cart items
let cartSchema = new Schema(
    {
        itemId: {
            type: String,
            unique: true
        },
        itemName: {
            type: String,
            default: "N/A"
        },
        itemRating: {
            type: Number,
            default: 1
        },
        itemSoldBy: {
            type: String,
            default: 'N/A'
        },
        itemCost : {
            type : Number,
            default :0
        }
    }
);

mongoose.model('Cart', cartSchema);

//----ignore this code
