const express = require('express');
const controller = require('./../controllers/controller');
const appConfig = require('./../config/appConfig');


let setRouter = (app) => {

	let baseUrl = appConfig.apiVersion + '/ecommerce';
	//-----------------------
	// for items
	//-----------------------

	//view all items
	app.get(baseUrl + '/items/all', controller.getAllItems);
    /**
	 * @api {get} /api/v1/ecommerce/items/all Get all items
	 * @apiVersion 0.0.1
	 * @apiGroup Read
	 *
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	 *   "error": false,
	 *  "message": "All Blog Details Found",
	 *   "status": 200,
	 *   "data": [
	 *				{
	 *					"_id": "string",
     *                   "itemName": "string",
     *                   "description": "string",
     *                   "soldBy": "string",
     *                   "cost": "number",
     *                   "rating": "number",
     *                   "category":"string",
     *                   "itemId": "string",
     *                   "__v": number
	 *				}
	 *   		]
	 *   	}
		

	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find Item Details",
	    "status": 500,
	    "data": null
	   }
	 */


	//view a single item detil by id
	app.get(baseUrl + '/viewItem/:itemId', controller.viewItemById);
	/**
	* @api {get} /api/v1/ecommerce/viewItem/:itemId Get Single Item Detail
	* @apiVersion 0.0.1
	* @apiGroup Read
	*
	* @apiParam {String} itemId The itemId should be passed as the URL parameter
	*
	*  @apiSuccessExample {json} Success-Response:
	*  {
	*	   "error": false,
	*	   "message": "Item Found Successfully.",
	*	   "status": 200,
	*		   "data": [
	*			   {
	*				   "_id": "string",
	*				   "itemName": "string",
	*				   "description": "string",
	*				   "soldBy": "string",
	*				   "cost": "number",
	*				   "rating": "number",
	*				   "category":"string",
	*				   "itemId": "string",
	*				   "__v": number
	*			   }
	*		   ]
	*  }
	
	 @apiErrorExample {json} Error-Response:
	*
	*  {
	*   "error": true,
	*   "message": Failed To Find Item Details,
	*   "status": 500,
	*   "data": null
	*  }
	*/

	//view a single item rating
	app.get(baseUrl + '/viewItem/:itemId/rating', controller.getItemRating);
    /**
	 * @api {get} /api/v1/ecommerce/viewItem/:itemId/rating  Get Single Item Rating
	 * @apiVersion 0.0.1
	 * @apiGroup Read
	 *
	 * @apiParam {String} itemId The itemId should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	        "error": false,
            "message": "Item Found Successfully.",
            "status": 200,
            "data": "string"
	    	
		}
	
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
        "error": true,
        "message": Failed To Find Item Details,
        "status": 500,
        "data": null
        }
	 */
	//view item by name {there can be many items with same name}
	app.get(baseUrl + '/viewItem/by/:itemName', controller.viewItemByName);
	/**
	* @api {get} /api/v1/ecommerce/viewItem/by/:itemName  Get Single Item Detail byName
	* @apiVersion 0.0.1
	* @apiGroup Read
	*
	* @apiParam {String} itemName The itemName should be passed as the URL parameter
	*
	*  @apiSuccessExample {json} Success-Response:
	*  {
		   "error": false,
		   "message": "Item Found Successfully.",
		   "status": 200,
		   "data": [
				   {
					   "_id": "string",
					   "itemName": "string",
					   "description": "string",
					   "soldBy": "string",
					   "cost": "number",
					   "rating": "number",
					   "category":"string",
					   "itemId": "string",
					   "__v": number
				   }
			   ]
	   	
	   }
	
	 @apiErrorExample {json} Error-Response:
	*
	*  {
	*   "error": true,
	*   "message": Failed To Find Item Details,
	*   "status": 500,
	*   "data": null
	*   }
	*/

	// add new item
	app.post(baseUrl + '/addItem', controller.addItem);
	/**
	* @api {post} /api/v1/ecommerce/addItem Create New  Item
	* @apiVersion 0.0.1
	* @apiGroup Add or Create
	*
	* @apiParam {String} itemName name of the item passed as a body parameter
	* @apiParam {String} description description of the item passed as a body parameter
	* @apiParam {String} soldBy soldBy of the item passed as a body parameter
	* @apiParam {String} cost cost of the item passed as a body parameter
	* @apiParam {String} category category of the item passed as a body parameter
	*
	  @apiSuccessExample {json} Success-Response:
	*  {
	*   "error": false,
	*   "message": "Item Added Successfully.",
	*   "status": 200,
	*   "data": [
    *				{
    *					"_id": "string",
	*                   "itemName": "string",
	*                   "description": "string",
	*                	"soldBy": "string",
	*                   "cost": "number",
	*                   "rating": "number",
	*                   "category":"string",
	*                   "itemId": "string",
	*                   "__v": number
    *				}
	*   		]
	*  	}
   
	
	 @apiErrorExample {json} Error-Response:
	*
	* {
   	*    "error": true,
	*    "message": "Error Occured.,
	*    "status": 500,
	*    "data": null
	* }
	*/

	// delete item
	app.post(baseUrl + '/:itemId/deleteItem', controller.deleteItem);
	/**
	* @api {post} /api/v1/blogs/ecommerce/:itemId/deleteItem Delete Item
	* @apiVersion 0.0.1
	* @apiGroup Delete
	*
	* @apiParam {String} itemId itemId of the item passed as the URL parameter
	*
	*  @apiSuccessExample {json} Success-Response:
	*  {
		"error": false,
		"message": 'Deleted item',
		"status": 200,
		"data": {
			 "n": 1,
			 "ok": 1
			}
	   }
	
	 @apiErrorExample {json} Error-Response:
	*
	* {
	   "error": true,
	   "message": "Error Occured.",
	   "status": 500,
	   "data": null
	  }
	*/

	// edit an item detail
	app.put(baseUrl + '/:itemId/editItem', controller.editItem);
	/**
	* @api {put} /api/v1/ecommerce/:itemid/editItem Edit item by itemId
	* @apiVersion 0.0.1
	* @apiGroup Edit
	*
	
	* @apiParam {String} itemId itemId of the item passed as the URL parameter
	*
	*  @apiSuccessExample {json} Success-Response:
	*  {
	*   	"error": false,
	*   	"message": "Item Edited Successfully.",
	* 		"status": 200,
	* 		"data": {
	* 				 	"n": 1,
	*   			 	"nModified": 1,
	*  				    "ok": 1
	*				}
	*	}
	*/
	//-----------------------
	// for cart
	//-----------------------

	app.get(baseUrl + '/cart/allItem', controller.getAllItemFromCart);
	/**
	* @api {get} /api/v1/ecommerce/cart/allItem  Get All Items From Cart
	* @apiVersion 0.0.1
	* @apiGroup Read
	*
    
	*
	*  @apiSuccessExample {json} Success-Response:
	*  {
		   "error": false,
		   "message": "Item Found Successfully.",
		   "status": 200,
		   "data": [
				   {
					   "_id": "string",
					   "itemName": "string",
					   "description": "string",
					   "soldBy": "string",
					   "cost": "number",
					   "rating": "number",
					   "category":"string",
					   "itemId": "string",
					   "__v": number
				   }
			   ]
	   	
	   }
	
	 @apiErrorExample {json} Error-Response:
	*
	* 
	* {
	*   "error": true,
	*   "message": Failed To Find Item Details,
	*   "status": 500,
	*   "data": null
	* }
	*/

	//add item  to cart
	app.post(baseUrl + '/cart/:itemId/addItem', controller.addItemToCart);
	/**
	* @api {post} /api/v1/ecommerce/cart/:itemId/addItem Add Item to Cart
	* @apiVersion 0.0.1
	* @apiGroup Add or Create
	*
	
	* @apiParam {String} itemId itemId of the item passed as a body parameter
    
	 @apiSuccessExample {json} Success-Response:
	*  {
	*   "error": false,
	*   "message": "Item Added Successfully.",
	*   "status": 200,
	*   "data": [
	*				{
	*					"_id": "string",
	*                   "itemName": "string",
	*                   "description": "string",
	*                   "soldBy": "string",
	*                   "cost": "number",
	*                   "rating": "number",
	*                   "category":"string",
	*                   "itemId": "string",
	*                   "__v": number
	*				}
	*   		 ]
	*   }
    
	
	 @apiErrorExample {json} Error-Response:
    
	* {
	*   "error": true,
	*   "message": "Error Occured.",
	*   "status": 500,
	*   "data": null
	*  }
	*/

	//delete item from cart
	app.post(baseUrl + '/cart/:itemId/deleteItem', controller.deleteItemFromCart);
	/**
	* @api {post} /api/v1/blogs/ecommerce/cart/:itemId/deleteItem Delete item from cart by itemId
	* @apiVersion 0.0.1
	* @apiGroup Delete
	*
	* @apiParam {String} itemId itemId of the item passed as the URL parameter
	*
	*  @apiSuccessExample {json} Success-Response:
	*  {
		"error": false,
		"message": 'Deleted item from Cart',
		"status": 200,
		"data": {
			 "n": 1,
			 "ok": 1
			}
	   }
	
	 @apiErrorExample {json} Error-Response:
	*
	* {
	   "error": true,
	   "message": "Error Occured.",
	   "status": 500,
	   "data": null
	  }
	*/

	//get cart total cost
	app.get(baseUrl + '/cart/totalCost', controller.getCartCost);
	/**
	* @api {get} /api/v1/ecommerce/cart/totalCost  Get Total Cost  Of Cart
	* @apiVersion 0.0.1
	* @apiGroup Read
	*
    
	*
	*  @apiSuccessExample {json} Success-Response:
	*  {
		   "error": false,
		   "message": "Total Cost Found",
		   "status": 200,
		   "data": "string"
	   }
	
	 @apiErrorExample {json} Error-Response:
	*
	* {
	   "error": true,
	   "message": Failed To Find Cart Cost,
	   "status": 500,
	   "data": null
	   }
	*/


}


module.exports = {
	setRouter: setRouter
}