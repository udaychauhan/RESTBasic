const express = require('express');
const mongoose = require('mongoose');
const shortid = require('shortid');
const response = require('./../libs/responseLib')
const time = require('./../libs/timeLib');
const logger = require('./../libs/loggerLib');
const check = require('./../libs/checkLib');

// importing item model
const ItemModel = mongoose.model('Item');
const CartModel = mongoose.model('Cart');

let getAllItems = (req, res) => {

    let execFunction = (err, result) => {
        if (err) {
            logger.error(err.message, 'Blog ontroller : getAllBlog', 10);
            let apiResponse = response.generate(true, 'Failed To Find Item Details', 500, null)
            res.send(apiResponse);
        } else if (check.isEmpty(result)) {
            logger.info('No item Found', 'Item Controller: getAllItem');
            let apiResponse = response.generate(true, 'No Item Found', 404, null);
            res.send(apiResponse);
        } else {
            let apiResponse = response.generate(false, 'All item Details Found', 200, result);
            res.send(apiResponse);
        }
    }

    ItemModel.find().lean().exec(execFunction);
}

let viewItemById = (req, res) => {
    let execFunction = (err, result) => {
        if (err) {
            logger.error(err.message, 'item controller : get item by id', 10);
            let apiResponse = response.generate(true, 'Failed To Find Item Details', 500, null)
            res.send(apiResponse);
        } else if (check.isEmpty(result)) {
            logger.info('No item Found', 'Item Controller: view item by id');
            let apiResponse = response.generate(true, 'No Item Found', 404, null);
            res.send(apiResponse);
        } else {
            logger.info("Item found successfully", "ItemController:ViewItemByName", 5)
            let apiResponse = response.generate(false, 'Item Found Successfully.', 200, result)
            res.send(apiResponse);
        }
    }

    ItemModel.find(
        { 'itemId': req.params.itemId }, execFunction);
}

let getItemRating = (req, res) => {
    let methodName = "controller : getItemRating";
    let execFunction = (err, result) => {
        if (err) {
            logger.error(err.message, methodName, 10);
            let apiResponse = response.generate(true, 'Failed To Find Item Details', 500, null)
            res.send(apiResponse);
        } else if (check.isEmpty(result)) {
            logger.info('No item Found', methodName);
            let apiResponse = response.generate(true, 'No Item Found', 404, null);
            res.send(apiResponse);
        } else {
            logger.info("Item found successfully", methodName, 5)
            let itemRating = 1;
            // as the result is array of objects therefore result[0];
            itemRating = result[0].rating;
            let apiResponse = response.generate(false, 'Item Found Successfully.', 200, 
            "Item Rating Is : "+itemRating);
            res.send(apiResponse);
        }
    }

    ItemModel.find({ 'itemId': req.params.itemId }, execFunction);
}

let viewItemByName = (req, res) => {
    let methodName = "controller : viewItemByName";
    let execFunction = (err, result) => {
        if (err) {
            logger.error(err.message, methodName, 10);
            let apiResponse = response.generate(true, 'Failed To Find Item Details', 500, null)
            res.send(apiResponse);
        } else if (check.isEmpty(result)) {
            logger.info('No item Found', methodName);
            let apiResponse = response.generate(true, 'No Item Found', 404, null);
            res.send(apiResponse);
        } else {
            logger.info("Item found successfully", "ItemController:ViewItemByName", 5)
            let apiResponse = response.generate(false, 'Item Found Successfully.', 200, result)
            res.send(apiResponse);
        }
    }

    ItemModel.find(
        { 'itemName': req.params.itemName }, execFunction);
}

let addItem = (req, res) => {
    let today = time.now;
    let itemId = shortid.generate();

    let newItem = new ItemModel(
        {
            itemId: itemId,
            itemName: req.body.itemName,
            description: req.body.description,
            soldBy: req.body.soldBy,
            cost: req.body.cost,
            category: req.body.category,
            rating: req.body.rating,
            cost: req.body.cost
        }
    );

    newItem.save(
        (err, result) => {
            if (err) {
                logger.error(err.message, 'item ontroller : save new item', 10);
                let apiResponse = response.generate(true, 'Failed To Find Item Details', 500, null)
                res.send(apiResponse);
            } else if (check.isEmpty(result)) {
                logger.info('No item Found', 'Item Controller: save new item');
                let apiResponse = response.generate(true, 'No Item Found', 404, null);
                res.send(apiResponse);
            } else {
                logger.info("Item found successfully", "ItemController:ViewItemByName", 5)
                let apiResponse = response.generate(false, 'Item Added Successfully.', 200, result)
                res.send(apiResponse);
            }
        }
    );
}

let editItem = (req, res) => {
    let options = req.body;
    logger.info(options, "controller : edit item method", 10);

    let execFunction = (err, result) => {
        if (err) {
            logger.error(err.message, 'item controller : edit item', 10);
            let apiResponse = response.generate(true, 'Unable to Edit Item Details', 500, null)
            res.send(apiResponse);
        } else if (check.isEmpty(result)) {
            logger.info("No item found", "controller : edit item method", 10);
            let apiResponse = response.generate(true, 'No Item Found', 404, null);
            res.send(apiResponse);
        } else {
            logger.info("Item found successfully", "ItemController:edit item", 5)
            let apiResponse = response.generate(false, 'Item Edited Successfully.', 200, result)
            res.send(apiResponse)
        }

    };

    ItemModel.update(
        {
            'itemId': req.params.itemId
        }, options, execFunction
    );
}

let deleteItem = (req, res) => {
    ItemModel.remove({ 'itemId': req.params.itemId },
        (err, result) => {

            if (err) {
                logger.error(err.message, 'item ontroller : delete item', 10);
                let apiResponse = response.generate(true, 'Failed To Find Item Details', 500, null)
                res.send(apiResponse);
            } else if (check.isEmpty(result)) {
                logger.info("No item found", "controller : delete item method", 10);
                let apiResponse = response.generate(true, 'no Item Found', 404, null);
                res.send(apiResponse);
            } else {
                logger.info("item deleted", "controller : delete item method", 10);
                let apiResponse = response.generate(false, 'Deleleted item', 200, result);
                res.send(apiResponse);
            }
        });
}


//----------- cart
let getAllItemFromCart = (req, res) => {
    let execFunction = (err, result) => {
        if (err) {
            logger.error(err.message, 'controller : getAllItemsInCart', 10);
            let apiResponse = response.generate(true, 'Failed To Find Item Details', 500, null)
            res.send(apiResponse);
        } else if (check.isEmpty(result)) {
            logger.info('No item Found', 'Item Controller: getAllItemsInCart');
            let apiResponse = response.generate(true, 'No Item Found', 404, null);
            res.send(apiResponse);
        } else {
            let apiResponse = response.generate(false, 'All item Details Found', 200, result);
            res.send(apiResponse);
        }
    }

    CartModel.find().lean().exec(execFunction);
}

let addItemToCart = (req, res) => {
    let messageSource = " Controller : addItemToCart" ;
    let itemId = req.params.itemId;
    let item;

    let  cartItemAddRoutine = (item) => {
        let newItem = new CartModel(
            {
                itemId: item.itemId,
                itemName: item.itemName,
                itemRating: item.itemRating,
                itemSoldBy: item.soldBy,
                itemCost : item.cost
            }
        );
    
        newItem.save(
            (err, result) => {
                if (err) {
                    logger.error(err.message, messageSource, 10);
                    let apiResponse = response.generate(true, "Can't add Item to Cart", 500, null)
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No item Found', messageSource);
                    let apiResponse = response.generate(true, 'No Item Found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info("Item found successfully",messageSource, 5)
                    let apiResponse = response.generate(false, 'Item Added Successfully.', 200, result)
                    res.send(apiResponse);
                }
            }
        );
         
    }

    let getItem = (itemId) => {

        let aMethod = (err, result) => {
            if (err) {
                logger.info('No item Found', messageSource);
                let apiResponse = response.generate(true, 'Failed To Find Item Details', 500, null)
                res.send(apiResponse);
            } else if (check.isEmpty(result)) {
                logger.info('No item Found', messageSource);
                let apiResponse = response.generate(true, 'No Item Found', 404, null);
                res.send(apiResponse);
            } else {
                // came to know that there is async issue, even before this part of the method came 
                // i was already getting null for item
                // hence moved the addition part this part of the method
                logger.info("item found successfully", messageSource, 5);
                item = result;
                cartItemAddRoutine(item);
                
            }
        }

        ItemModel.findOne({ 'itemId': req.params.itemId }, aMethod);
           
    }
        
    getItem(itemId);
  
}

let deleteItemFromCart = (req, res) => {

    let messageSource = " Controller : deleteItemFromCart" ;
    let itemId = req.params.itemId;
    

    CartModel.remove({ 'itemId': itemId },
        (err, result) => {

            if (err) {
                logger.error(err.message, messageSource, 10);
                let apiResponse = response.generate(true, 'Failed To Find Item Details', 500, null)
                res.send(apiResponse);
            } else if (check.isEmpty(result)) {
                logger.info("No item found", messageSource, 10);
                let apiResponse = response.generate(true, 'Item Not Found', 404, null);
                res.send(apiResponse);
            } else {
                logger.info("Item deleted", messageSource, 10);
                let apiResponse = response.generate(false, 'Deleted item from Cart', 200, result);
                res.send(apiResponse);
            }
        });
   
}

let getCartCost = (req,res) => {
    let methodName = "controller : getCartCost";
    let execFunction = (err, result) => {
        if (err) {
            logger.error(err.message, methodName, 10);
            let apiResponse = response.generate(true, 'Failed To Find Cart Cost', 500, null)
            res.send(apiResponse);
        } else if (check.isEmpty(result)) {
            logger.info('No item Found', methodName,10);
            let apiResponse = response.generate(true, 'No Item Found', 404, null);
            res.send(apiResponse);
        } else {
            let cartCost = 0;
            for(let item of result){
                cartCost += item.itemCost;
            }
            let apiResponse = response.generate(false,"Total Cost Found",200, 'Cart total Cost Is : ' + cartCost);
            res.send(apiResponse);
        }
    }

    CartModel.find().lean().exec(execFunction);

}
module.exports = {
    getAllItems: getAllItems,
    viewItemById: viewItemById,
    viewItemByName: viewItemByName,
    editItem: editItem,
    deleteItem: deleteItem,
    getItemRating : getItemRating,
    addItem: addItem,
    addItemToCart: addItemToCart,
    deleteItemFromCart: deleteItemFromCart,
    getAllItemFromCart: getAllItemFromCart,
    getCartCost : getCartCost
}

// now check every query that's it
// api doc remains
// check that any extra library or query is needed
//CHECK EVRY THING REQUIRED IN ASSIGNEMENT IS FINISHED
// problemo while deleteion even if the item does not exist it still says item is deleted and the 
// deleteion result is send how??