define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/ecommerce/addItem",
    "title": "Create New  Item",
    "version": "0.0.1",
    "group": "Add_or_Create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemName",
            "description": "<p>name of the item passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the item passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "soldBy",
            "description": "<p>soldBy of the item passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cost",
            "description": "<p>cost of the item passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category of the item passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"error\": false,\n  \"message\": \"Item Added Successfully.\",\n  \"status\": 200,\n  \"data\": [\n\t\t\t\t{\n\t\t\t\t\t\"_id\": \"string\",\n                  \"itemName\": \"string\",\n                  \"description\": \"string\",\n               \t\"soldBy\": \"string\",\n                  \"cost\": \"number\",\n                  \"rating\": \"number\",\n                  \"category\":\"string\",\n                  \"itemId\": \"string\",\n                  \"__v\": 0\n\t\t\t\t}\n  \t\t]\n \t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n   \"error\": true,\n   \"message\": \"Error Occured.,\n   \"status\": 500,\n   \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "Add_or_Create",
    "name": "PostApiV1EcommerceAdditem"
  },
  {
    "type": "post",
    "url": "/api/v1/ecommerce/cart/:itemId/addItem",
    "title": "Add Item to Cart",
    "version": "0.0.1",
    "group": "Add_or_Create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemId",
            "description": "<p>itemId of the item passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"error\": false,\n  \"message\": \"Item Added Successfully.\",\n  \"status\": 200,\n  \"data\": [\n\t\t\t\t{\n\t\t\t\t\t\"_id\": \"string\",\n                  \"itemName\": \"string\",\n                  \"description\": \"string\",\n                  \"soldBy\": \"string\",\n                  \"cost\": \"number\",\n                  \"rating\": \"number\",\n                  \"category\":\"string\",\n                  \"itemId\": \"string\",\n                  \"__v\": 0\n\t\t\t\t}\n  \t\t ]\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\": true,\n  \"message\": \"Error Occured.\",\n  \"status\": 500,\n  \"data\": null\n }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "Add_or_Create",
    "name": "PostApiV1EcommerceCartItemidAdditem"
  },
  {
    "type": "post",
    "url": "/api/v1/blogs/ecommerce/cart/:itemId/deleteItem",
    "title": "Delete item from cart by itemId",
    "version": "0.0.1",
    "group": "Delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemId",
            "description": "<p>itemId of the item passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\"error\": false,\n\t\t\"message\": 'Deleted item from Cart',\n\t\t\"status\": 200,\n\t\t\"data\": {\n\t\t\t \"n\": 1,\n\t\t\t \"ok\": 1\n\t\t\t}\n\t   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t   \"error\": true,\n\t   \"message\": \"Error Occured.\",\n\t   \"status\": 500,\n\t   \"data\": null\n\t  }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "Delete",
    "name": "PostApiV1BlogsEcommerceCartItemidDeleteitem"
  },
  {
    "type": "post",
    "url": "/api/v1/blogs/ecommerce/:itemId/deleteItem",
    "title": "Delete Item",
    "version": "0.0.1",
    "group": "Delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemId",
            "description": "<p>itemId of the item passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\"error\": false,\n\t\t\"message\": 'Deleted item',\n\t\t\"status\": 200,\n\t\t\"data\": {\n\t\t\t \"n\": 1,\n\t\t\t \"ok\": 1\n\t\t\t}\n\t   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t   \"error\": true,\n\t   \"message\": \"Error Occured.\",\n\t   \"status\": 500,\n\t   \"data\": null\n\t  }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "Delete",
    "name": "PostApiV1BlogsEcommerceItemidDeleteitem"
  },
  {
    "type": "put",
    "url": "/api/v1/ecommerce/:itemid/editItem",
    "title": "Edit item by itemId",
    "version": "0.0.1",
    "group": "Edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemId",
            "description": "<p>itemId of the item passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \t\"error\": false,\n  \t\"message\": \"Item Edited Successfully.\",\n\t\t\"status\": 200,\n\t\t\"data\": {\n\t\t\t\t \t\"n\": 1,\n  \t\t\t \t\"nModified\": 1,\n \t\t\t\t\"ok\": 1\n\t\t\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "Edit",
    "name": "PutApiV1EcommerceItemidEdititem"
  },
  {
    "type": "get",
    "url": "/api/v1/ecommerce/cart/allItem",
    "title": "Get All Items From Cart",
    "version": "0.0.1",
    "group": "Read",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t   \"error\": false,\n\t\t   \"message\": \"Item Found Successfully.\",\n\t\t   \"status\": 200,\n\t\t   \"data\": [\n\t\t\t\t   {\n\t\t\t\t\t   \"_id\": \"string\",\n\t\t\t\t\t   \"itemName\": \"string\",\n\t\t\t\t\t   \"description\": \"string\",\n\t\t\t\t\t   \"soldBy\": \"string\",\n\t\t\t\t\t   \"cost\": \"number\",\n\t\t\t\t\t   \"rating\": \"number\",\n\t\t\t\t\t   \"category\":\"string\",\n\t\t\t\t\t   \"itemId\": \"string\",\n\t\t\t\t\t   \"__v\": 0\n\t\t\t\t   }\n\t\t\t   ]\n\t   \t\n\t   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n\n{\n  \"error\": true,\n  \"message\": Failed To Find Item Details,\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "Read",
    "name": "GetApiV1EcommerceCartAllitem"
  },
  {
    "type": "get",
    "url": "/api/v1/ecommerce/cart/totalCost",
    "title": "Get Total Cost  Of Cart",
    "version": "0.0.1",
    "group": "Read",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t   \"error\": false,\n\t\t   \"message\": \"Total Cost Found\",\n\t\t   \"status\": 200,\n\t\t   \"data\": \"string\"\n\t   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t   \"error\": true,\n\t   \"message\": Failed To Find Cart Cost,\n\t   \"status\": 500,\n\t   \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "Read",
    "name": "GetApiV1EcommerceCartTotalcost"
  },
  {
    "type": "get",
    "url": "/api/v1/ecommerce/items/all",
    "title": "Get all items",
    "version": "0.0.1",
    "group": "Read",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"error\": false,\n \"message\": \"All Blog Details Found\",\n  \"status\": 200,\n  \"data\": [\n\t\t\t\t{\n\t\t\t\t\t\"_id\": \"string\",\n                  \"itemName\": \"string\",\n                  \"description\": \"string\",\n                  \"soldBy\": \"string\",\n                  \"cost\": \"number\",\n                  \"rating\": \"number\",\n                  \"category\":\"string\",\n                  \"itemId\": \"string\",\n                  \"__v\": \"string\"\n\t\t\t\t}\n  \t\t]\n  \t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find Item Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "Read",
    "name": "GetApiV1EcommerceItemsAll"
  },
  {
    "type": "get",
    "url": "/api/v1/ecommerce/viewItem/by/:itemName",
    "title": "Get Single Item Detail byName",
    "version": "0.0.1",
    "group": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemName",
            "description": "<p>The itemName should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t   \"error\": false,\n\t\t   \"message\": \"Item Found Successfully.\",\n\t\t   \"status\": 200,\n\t\t   \"data\": [\n\t\t\t\t   {\n\t\t\t\t\t   \"_id\": \"string\",\n\t\t\t\t\t   \"itemName\": \"string\",\n\t\t\t\t\t   \"description\": \"string\",\n\t\t\t\t\t   \"soldBy\": \"string\",\n\t\t\t\t\t   \"cost\": \"number\",\n\t\t\t\t\t   \"rating\": \"number\",\n\t\t\t\t\t   \"category\":\"string\",\n\t\t\t\t\t   \"itemId\": \"string\",\n\t\t\t\t\t   \"__v\": 0\n\t\t\t\t   }\n\t\t\t   ]\n\t   \t\n\t   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n \"error\": true,\n \"message\": Failed To Find Item Details,\n \"status\": 500,\n \"data\": null\n }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "Read",
    "name": "GetApiV1EcommerceViewitemByItemname"
  },
  {
    "type": "get",
    "url": "/api/v1/ecommerce/viewItem/:itemId",
    "title": "Get Single Item Detail",
    "version": "0.0.1",
    "group": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemId",
            "description": "<p>The itemId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t   \"error\": false,\n\t   \"message\": \"Item Found Successfully.\",\n\t   \"status\": 200,\n\t\t   \"data\": [\n\t\t\t   {\n\t\t\t\t   \"_id\": \"string\",\n\t\t\t\t   \"itemName\": \"string\",\n\t\t\t\t   \"description\": \"string\",\n\t\t\t\t   \"soldBy\": \"string\",\n\t\t\t\t   \"cost\": \"number\",\n\t\t\t\t   \"rating\": \"number\",\n\t\t\t\t   \"category\":\"string\",\n\t\t\t\t   \"itemId\": \"string\",\n\t\t\t\t   \"__v\": \"string\"\n\t\t\t   }\n\t\t   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n \"error\": true,\n \"message\": Failed To Find Item Details,\n \"status\": 500,\n \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "Read",
    "name": "GetApiV1EcommerceViewitemItemid"
  },
  {
    "type": "get",
    "url": "/api/v1/ecommerce/viewItem/:itemId/rating",
    "title": "Get Single Item Rating",
    "version": "0.0.1",
    "group": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemId",
            "description": "<p>The itemId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t        \"error\": false,\n            \"message\": \"Item Found Successfully.\",\n            \"status\": 200,\n            \"data\": \"string\"\n\t    \t\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"error\": true,\n        \"message\": Failed To Find Item Details,\n        \"status\": 500,\n        \"data\": null\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "Read",
    "name": "GetApiV1EcommerceViewitemItemidRating"
  }
] });
