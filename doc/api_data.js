define({ "api": [
  {
    "type": "get",
    "url": "/address/get_by_id",
    "title": "Get address by ID",
    "name": "addressGetByID",
    "group": "Address",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "list_Address",
            "description": "<p>List of address and each element in list is an Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n    _id: \"2\",\n    create_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n    create_date: \"2019-08-09 17:35:26.881\",\n    write_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n    write_date: \"2019-08-09 17:35:26.881\",\n    company_id: \"ROOT\",\n    status: \"0\",\n    delete_id: \"\",\n    address_name: \"An Giang\",\n    type: \"C\",\n    parent_id: \"0\",\n    country_id: \"243.0\",\n    points: {\n        type: \"Point\",\n        coordinates: [\n            105.37450409,\n            10.24603653\n        ]\n    },\n    polygon: {\n        _id: \"3\",\n        create_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n        create_date: \"2019-08-09 17:41:38.812\",\n        write_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n        write_date: \"2019-08-09 17:41:38.812\", \n        company_id: \"ROOT\",\n        status: \"0\",\n        delete_id: \"\",\n        name: \"An Giang\",\n        type: \"C\",\n        rel_id: \"2\",\n        polygons: {\n            type: \"Polygon\",\n            coordinates: [\n                []\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ID",
            "optional": false,
            "field": "addressID",
            "description": "<p>ID of address</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IDEmptyError",
            "description": "<p>ID was empty.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./address.js",
    "groupTitle": "Address"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C__Users_Windows_10_Desktop_APIDocuments_doc_main_js",
    "groupTitle": "C__Users_Windows_10_Desktop_APIDocuments_doc_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/map/product_in_bound",
    "title": "Get product in bound",
    "name": "mapProductInBound",
    "group": "Map",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "listProduct",
            "description": "<p>List of product and each element in list is an Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n    \"_id\": \"2\",\n    \"name\": \"NHÀ RIÊNG tại - Minh Khai-T230112\",\n    \"points\": {\n        \"type\": \"Point\",\n        \"coordinates\": [\n            106.685826252423,\n            10.7575213428538\n        ]\n    },\n    \"polygons\": {\n        \"type\": \"Polygon\",\n        \"coordinates\": [\n            [\n                [\n                    106.6834805954495,\n                    10.76683717226183\n                ],\n                [ \n                    106.6833454781219,\n                    10.7669634924572\n                ],\n                [\n                    106.6833203719101,\n                    10.76693678156068\n                ],\n                [\n                    106.6833484693027,\n                    10.76691050720448\n                ],\n                [\n                    106.6833477356551,\n                    10.76690978618728\n                ], \n                [\n                    106.6834552149831,\n                    10.76681047124195\n                ],\n                [\n                    106.6834805954495,\n                    10.76683717226183\n                ]\n            ]\n        ]\n    },\n    \"product_type\": {\n        \"_id\": \"1\",\n        \"create_uid\": \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n        \"create_date\": \"2019-07-27 13:09:00.176\",\n        \"write_uid\": \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n        \"write_date\": \"2019-07-27 13:25:41.128\",\n        \"company_id\": \"ROOT\",\n        \"status\": \"0\",\n        \"delete_id\": \"\",\n        \"type_name\": \"Bán\",\n        \"type\": \"\",\n        \"parent_id\": \"\",\n        \"type_code\": \"1\",\n        \"description\": \"\"\n    }\n},",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "bound",
            "description": "<p>Bound. Example param: {[[106.70828170629568,10.760767733608878],[106.68137378545828,10.755244632384397]]}</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit product.Example param: {1000}</p>"
          },
          {
            "group": "Parameter",
            "type": "ID",
            "optional": false,
            "field": "address_id",
            "description": "<p>Address ID. Example param: {311}</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "Data",
            "description": "<p>of project. Example param: {&quot;_id&quot;:1,&quot;name&quot;:1,&quot;polygons&quot;:1,&quot;points&quot;:1,&quot;product_type&quot;:1}</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "Filter.",
            "description": "<p>Example param: {&quot;type&quot;:[&quot;1&quot;,&quot;2&quot;,&quot;3&quot;]}</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Type.",
            "description": "<p>Example param: {marker}</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./map.js",
    "groupTitle": "Map"
  },
  {
    "type": "get",
    "url": "/map/get_by_address_id",
    "title": "Get suggestion by address ID",
    "name": "mapSuggestion",
    "group": "Map",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "address",
            "description": "<p>Address</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "ListProduct",
            "description": "<p>List of product and each element in list is an Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "listPolygonInside",
            "description": "<p>List of polygon inside and each element in list is an Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n    address: [\n        {\n            _id: \"570\",\n            create_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n            create_date: \"2019-08-09 17:35:27.883\",\n            write_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n            write_date: \"2019-08-09 17:35:27.883\",\n            company_id: \"ROOT\",\n            status: \"0\",\n            delete_id: \"\",\n            address_name: \"Long An\",\n            type: \"C\",\n            parent_id: \"0\",\n            country_id: \"243.0\",\n            points: {\n            type: \"Point\",\n            coordinates: [\n                    106.08956909,\n                    10.52338314\n            ]\n        },\n    polygon: {\n                _id: \"571\",\n                create_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n                create_date: \"2019-08-09 17:41:47.429\", \n                write_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n                write_date: \"2019-08-09 17:41:47.429\",\n                company_id: \"ROOT\",\n                status: \"0\",\n                delete_id: \"\",\n                name: \"Long An\",\n                type: \"C\",\n                rel_id: \"570\",\n                polygons: {\n                    type: \"Polygon\",\n                    coordinates: [\n                                    []\n                    ]\n                }\n            }\n        }\n    ],\n    ListProduct: [],\n    listPolygonInside: [\n        {\n            _id: \"2663\",\n            create_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n            create_date: \"2019-08-09 17:35:39.867\",\n            write_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n            write_date: \"2019-08-09 17:35:39.867\",\n            company_id: \"ROOT\",\n            status: \"0\",\n            delete_id: \"\",\n            address_name: \"Bến Lức\",\n            type: \"D\",\n            parent_id: \"570\",\n            country_id: \"243.0\",\n            points: {\n                type: \"Point\",\n                coordinates: [\n                    106.55758667,\n                    10.62686348\n                ]\n            },\n            polygon: {\n                _id: \"2664\",\n                create_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n                create_date: \"2019-08-09 17:42:15.54\",\n                write_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n                write_date: \"2019-08-09 17:42:15.54\",\n                company_id: \"ROOT\",\n                status: \"0\",\n                delete_id: \"\",\n                name: \"Bến Lức\",\n                type: \"D\",\n                rel_id: \"2663\",\n                polygons: {\n                    type: \"Polygon\",\n                    coordinates: []\n                }\n            }\n        },\n        {}\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "address_id",
            "description": "<p>Address ID. Example param: {570}</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NetWork",
            "description": "<p>Fail to connect to server ! :((</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./map.js",
    "groupTitle": "Map"
  },
  {
    "type": "get",
    "url": "/planning/category",
    "title": "Category",
    "name": "planningCategory",
    "group": "Planning",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "planningController.category",
            "description": "<p>() List of planning category and each element in list is an Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n    _id: \"NNP\",\n    create_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n    create_date: \"2019-08-07T10:56:35.450Z\",\n    write_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n    write_date: \"2019-08-07T10:56:35.450Z\",\n    company_id: \"ROOT\",\n    status: false,\n    delete_id: \"\",\n    name: \"Đất nông nghiệp\",\n    forecolor: \"#FFFF64\",\n    backcolor: \"#FFFF64\",\n    sequence: \"1.0\",\n    url_name: \"Dat-nong-nghiep\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./planning.js",
    "groupTitle": "Planning"
  },
  {
    "type": "get",
    "url": "/planning/detail",
    "title": "Detail",
    "name": "planningDetail",
    "group": "Planning",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "planningController.Detail",
            "description": "<p>(planning_id) Planning detail</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n    _id: \"VN79.0000001\",\n    create_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n    create_date: \"2019-08-07 23:14:22.71\",\n    write_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n    write_date: \"2019-08-09 14:41:05.070491\",\n    company_id: \"ROOT\",\n    status: \"0\",\n    delete_id: \"\",\n    name: \"QĐ số 2314/QĐ-UB ngày 15/08/2014 về Công bố Quy hoạch sử dụng đất tỉnh Bà Rịa - Vũng Tàu\",\n    polygons: {\n        type: \"Polygon\",\n        coordinates: [\n            []\n        ]\n    },\n    sequence: \"2.0\",\n    url_name: \"QD-so-2314/QD-UB-ngay-15/08/2014-ve-Cong-bo-Quy-hoach-su-dung-dat-tinh-Ba-Ria---Vung-Tau\",\n    description: \"\",\n    lot: \"III-15\",\n    area: \"124.0\",\n    floors: \" \",\n    footprint_ratio: \" \",\n    far: \" - \",\n    remainder: \" \",\n    people: \"0.0\",\n    category_id: \"RDD\",\n    points: {\n        type: \"Point\",\n        coordinates: [\n            106.5313341543828,\n            8.6299515341168\n        ]\n    },\n    category: {\n        _id: \"RDD\",\n        create_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n        create_date: \"2019-08-07 17:56:36.279\",\n        write_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n        write_date: \"2019-08-07 17:56:36.279\",\n        company_id: \"ROOT\",\n        status: \"0\",\n        delete_id: \"\",\n        name: \"Đất rừng đặc dụng\",\n        forecolor: \"#6EFF64\",\n        backcolor: \"#6EFF64\",\n        sequence: \"1.0\",\n        url_name: \"Dat-nong-nghiep\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "planning_id",
            "description": "<p>Planning ID {VN79.0000001}</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PlanningIDEmptyError",
            "description": "<p>PlanningID was empty.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./planning.js",
    "groupTitle": "Planning"
  },
  {
    "type": "get",
    "url": "/planning/find",
    "title": "Find",
    "name": "planningFind",
    "group": "Planning",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "listPlanning",
            "description": "<p>List of planning and each element in list is an Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n    _id: \"VN79.0003547\",\n    name: \"QĐ số 2314/QĐ-UB ngày 15/08/2014 về Công bố Quy hoạch sử dụng đất tỉnh Bà Rịa - Vũng Tàu\",\n    polygons: {\n        type: \"Polygon\",\n        coordinates: [\n            [\n                [\n                    107.047885475,\n                    10.47063086800006\n                ],\n                [\n                    107.0480444670001,\n                    10.47089123700005\n                ],\n                [\n                    107.0486161960001,\n                    10.47182787300005\n                ],\n                [\n                    107.0486162130001,\n                    10.47182790000005\n                ],\n                [\n                    107.0486161040001,\n                    10.47182787400004\n                ],\n                [\n                    107.047885475,\n                    10.47063086800006\n                ]\n            ]\n        ]\n    },\n    category: {\n        name: \"Đất sông, ngòi, kênh, rạch, suối\",\n        backcolor: \"#A0FFFF\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ID",
            "optional": false,
            "field": "addressID",
            "description": "<p>ID of address. Example param {14}</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "bound",
            "description": "<p>Bound. Example param {[[107.20381434855153,10.50058748552199],[107.09472354349782,10.464971469809527]]}</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit.Example param {1000}</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "Project.",
            "description": "<p>Example param {&quot;_id&quot;:1,&quot;polygons&quot;:1,&quot;name&quot;:1,&quot;category.name&quot;:1,&quot;category.backcolor&quot;:1}</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./planning.js",
    "groupTitle": "Planning"
  },
  {
    "type": "get",
    "url": "/post/get_list",
    "title": "Get All Post",
    "name": "postGetList",
    "group": "Post",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "list_post",
            "description": "<p>List of post and each element in list is an Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n _id: \"99500440-9fa7-4c98-9947-ba0fce369ed9\",\n create_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n create_date: \"2019-06-20T08:17:33.450Z\",\n write_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n write_date: \"2019-07-26T02:06:26.855Z\",\n company_id: \"ROOT\",\n status: false,\n delete_id: \"\",\n name: \"Khái Niệm Không Gian Sống & Diện Tích Sử Dụng Là Gì?\",\n description: \"Không gian sống là đề cập đến cảm giác về không gian và chức năng. Diện tích sử dụng được hiểu nôm na là toàn bộ diện tích có thể sử dụng được trong một dự án.\",\n url_id: \"77\",\n url_name: \"Khai-Niem-Khong-Gian-Song-&-Dien-Tich-Su-Dung-La-Gi?\",\n sequence: \"0.0\",\n photo: \"7bd988bd-5c11-4586-ace6-c1e8d8be18f3\",\n receipt_no: 1,\n receipt_date: \"2019-06-20T02:06:26.000Z\",\n keyword: \"không gian sống, diện tích sử dụng\",\n publish: true,\n publish_date: \"2019-06-22T00:50:49.217Z\",\n short_description: \"Không gian sống là đề cập đến cảm giác về không gian và chức năng. Diện tích sử dụng được hiểu nôm na là toàn bộ diện tích có thể sử dụng được trong một dự án.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./post.js",
    "groupTitle": "Post"
  },
  {
    "type": "get",
    "url": "/post/get_by_id",
    "title": "Get post by ID",
    "name": "postGetPostByID",
    "group": "Post",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "post[]",
            "description": "<p>Get list of post by id and each element in list is an Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n _id: \"99500440-9fa7-4c98-9947-ba0fce369ed9\",\n create_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n create_date: \"2019-06-20 15:17:33.45\",\n write_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n write_date: \"2019-07-26 09:06:26.855\",\n company_id: \"ROOT\",\n status: \"0\",\n delete_id: \"\",\n name: \"Khái Niệm Không Gian Sống & Diện Tích Sử Dụng Là Gì?\",\n description: \"Không gian sống là đề cập đến cảm giác về không gian và chức năng. Diện tích sử dụng được hiểu nôm na là toàn bộ diện tích có thể sử dụng được trong một dự án.\",\n url_id: \"77\",\n url_name: \"Khai-Niem-Khong-Gian-Song-&-Dien-Tich-Su-Dung-La-Gi?\",\n sequence: \"0.0\",\n photo: \"7bd988bd-5c11-4586-ace6-c1e8d8be18f3\",\n receipt_no: \"1\",\n receipt_date: \"2019-06-20 09:06:26.0\",\n keyword: \"không gian sống, diện tích sử dụng\",\n publish: \"1\",\n publish_date: \"2019-06-22 07:50:49.217\",\n short_description: \"Không gian sống là đề cập đến cảm giác về không gian và chức năng. Diện tích sử dụng được hiểu nôm na là toàn bộ diện tích có thể sử dụng được trong một dự án.\",\n document: \"<p style=\"margin-right: 0px; margin-bottom: 17px; margin-left: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;\"><span style=\"font-weight: 700;\">Không gian sống là một khái niệm mới xuất hiện trong thời gian gần đây, khi mà thiết kế ngày càng được chú trọng hơn. Còn diện tích sử dụng thì nghe có vẻ quen thuộc nhưng không phải ai cũng biết nhiều về nó</span>.</p><div class=\"wp-block-image\" style=\"max-width: 100%; margin-bottom: 1em; margin-left: 0px; margin-right: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;\"><div style=\"text-align: center;\"><img src=\"document?id=0773e67e-7bb2-42ff-8019-e9ca73d59c13\" style=\"width: 600px;\"></div><figure class=\"aligncenter is-resized\" style=\"display: table; margin: 20px auto; max-width: 100%; height: auto; text-align: center;\"><br></figure></div><p style=\"margin-right: 0px; margin-bottom: 17px; margin-left: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;\"></p><h2 style=\"font-family: Tahoma, Verdana, Segoe, sans-serif; font-weight: 700; line-height: 1.3; color: rgb(45, 45, 45); margin-top: 20px; font-size: 30px;\"><span class=\"ez-toc-section\" id=\"Gioi_thieu_khai_niem_Dien_tich_su_dung\">Giới thiệu khái niệm Diện tích sử dụng</span></h2><p style=\"margin-right: 0px; margin-bottom: 17px; margin-left: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;\">Diện tích sử dụng được hiểu nôm na là toàn bộ diện tích có thể sử dụng được trong một dự án, được tính bằng đơn vị mét vuông (m2).</p><p style=\"margin-right: 0px; margin-bottom: 17px; margin-left: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;\">Loại diện tích này cũng được tính khác nhau tùy theo các loại Bất động sản và quan điểm tính.</p><ul style=\"margin-bottom: 17px; font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;\"><li style=\"\"><font color=\"#222222\">Với&nbsp;</font><font style=\"\"><span style=\"transition-duration: 0.07s; transition-property: all;\">nhà ở riêng lẻ</span></font><font color=\"#222222\">: là diện tích sử dụng thường được tính bằng cách cộng toàn bộ diện tích các sàn, sân trước, sân sau,… Ví dụ một nhà 3 tầng và không có sân, mỗi tầng 40m2 thì diện tích sử dụng là 120m2.</font></li><li style=\"\"><font color=\"#222222\">Với&nbsp;</font><font style=\"\"><span style=\"transition-duration: 0.07s; transition-property: all;\">căn hộ chung cư</span></font><font color=\"#222222\">&nbsp;thì được tách ra 02 loại diện tích là diện tích tim tường và diện tích thông thủy.</font><ul style=\"color: rgb(34, 34, 34); margin-bottom: 17px;\"><li>Diện tích tim tường: được tính từ tim tường bao, và các chủ đầu tư thường dùng diện tích này để tính giá bán cho khách hàng.</li><li>Diện tích thông thủy (hay diện tích lọt lòng): diện tích này là diện tích không tính tường bao, đây là diện tích được ghi trong giấy chứng nhận quyền sở hữu nhà ở. Thường diện tích này nhỏ hơn diện tích tim tường khoảng 5%.</li></ul></li></ul><div class=\"wp-block-image\" style=\"text-align: center; max-width: 100%; margin-bottom: 1em; margin-left: 0px; margin-right: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;\"><img src=\"document?id=e041ffb7-654a-45a2-9340-90e51a736ce5\" style=\"width: 50%;\"><br></div><p style=\"margin-right: 0px; margin-bottom: 17px; margin-left: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;\"><span style=\"font-weight: 700;\">Lưu ý</span>: Diện tích sử dụng này chính là diện tích bán được (NSA) và nó khác với diện tích xây dựng theo cách tính của nhà thầu.</p><h2 style=\"font-family: Tahoma, Verdana, Segoe, sans-serif; font-weight: 700; line-height: 1.3; color: rgb(45, 45, 45); margin-top: 20px; font-size: 30px;\"><span class=\"ez-toc-section\" id=\"Khong_gian_song_la_gi\">Không gian sống là gì?</span></h2><div class=\"wp-block-image\" style=\"max-width: 100%; margin-bottom: 1em; margin-left: 0px; margin-right: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;\"><div style=\"text-align: center;\"><img src=\"document?id=16ddb9b9-1b03-40f6-b032-4c5aaae67622\" style=\"width: 540px;\"></div><figure class=\"aligncenter\" style=\"display: table; margin: 20px auto; max-width: 100%; height: auto; text-align: center;\"><br></figure></div><p style=\"margin-right: 0px; margin-bottom: 17px; margin-left: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;\">Không gian sống là đề cập đến cảm giác về không gian và chức năng. Thay vì diện tích mang tính vật lý, không gian sống được thể hiện bằng số lượng các phòng chức năng như số phòng ngủ, số WC, ban công, phòng khách, bếp, lô gia, …</p><p style=\"margin-right: 0px; margin-bottom: 17px; margin-left: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;\">Các phòng chức năng này chỉ cần một diện tích vừa đủ, không cần rộng quá, vì một số loại phòng mà rộng quá đôi khi có cảm giác không tốt bằng có diện tích vừa đủ.</p><p style=\"margin-right: 0px; margin-bottom: 17px; margin-left: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;\">Nhất là phòng ngủ, chỉ cần rộng khoảng 9 – 16m2 là vừa, to hơn sẽ cảm thấy trống trải.</p><p style=\"margin-right: 0px; margin-bottom: 17px; margin-left: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;\">Không gian sống không chỉ có diện tích vừa đủ đối với các phòng chức năng, mà còn có các tính chất khác.</p><p style=\"margin-right: 0px; margin-bottom: 17px; margin-left: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;\">Như bếp thì cần thông khí, phòng khách, phòng ngủ thì cần thông thoáng…, đó là chưa kể đến việc bố trí các vật dụng, bố trí vị trí các phòng chức năng để thuận tiện trong sinh hoạt.</p><div class=\"wp-block-image\" style=\"max-width: 100%; margin-bottom: 1em; margin-left: 0px; margin-right: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;\"><div style=\"text-align: center;\"><img src=\"document?id=9cf09885-8f31-4e29-b56b-464dd26358f7\" style=\"width: 669px;\"></div></div><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;\">Với nhiều phòng chức năng, và mỗi phòng chức năng có một yêu cầu riêng, thế nên để có một không gian sống tốt thì không nhất thiết phải có diện tích sử dụng lớn, mà cần cách bố trí các phòng chức năng phù hợp ở vị trí phù hợp. Và điều này gây rất nhiều cơn đau đầu cho các nhóm làm nhiệm vụ thiết kế, đặc biệt là căn hộ chung cư.</p> \"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "postID",
            "description": "<p>ID of post. Example param: {99500440-9fa7-4c98-9947-ba0fce369ed9}</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostLengthError",
            "description": "<p>Not found. Minimum of <code>1</code> character is required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./post.js",
    "groupTitle": "Post"
  },
  {
    "type": "get",
    "url": "/post/get_by_category_sequence",
    "title": "Get post by category sequence",
    "name": "postSequence",
    "group": "Post",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "list_post",
            "description": "<p>List of post and each element in list is an Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n _id: \"1273700a-4e6f-41cf-846c-axdfd3b0abbe\",\n post: {\n        _id: \"99500440-9fa7-4c98-9947-ba0fce369ed9\",\n        create_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n        create_date: \"2019-06-20 15:17:33.45\",\n        write_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n        write_date: \"2019-07-26 09:06:26.855\",\n        company_id: \"ROOT\",\n        status: \"0\",\n        delete_id: \"\",\n        name: \"Khái Niệm Không Gian Sống & Diện Tích Sử Dụng Là Gì?\",\n        description: \"Không gian sống là đề cập đến cảm giác về không gian và chức năng. Diện tích sử dụng được hiểu nôm na là toàn bộ diện tích có thể sử dụng được trong một dự án.\",\n        url_id: \"77\",\n        url_name: \"Khai-Niem-Khong-Gian-Song-&-Dien-Tich-Su-Dung-La-Gi?\",\n        sequence: \"0.0\",\n        photo: \"7bd988bd-5c11-4586-ace6-c1e8d8be18f3\",\n        receipt_no: \"1\",\n        receipt_date: \"2019-06-20 09:06:26.0\",\n        keyword: \"không gian sống, diện tích sử dụng\",\n        publish: \"1\",\n        publish_date: \"2019-06-22 07:50:49.217\",\n        short_description: \"Không gian sống là đề cập đến cảm giác về không gian và chức năng. Diện tích sử dụng được hiểu nôm na là toàn bộ diện tích có thể sử dụng được trong một dự án.\",\n        user: {\n                _id: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n                create_uid: \"\",\n                create_date: \"2017-09-27 09:44:05.421\",\n                write_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n                write_date: \"2019-07-27 13:39:22.291668\",\n                company_id: \"ROOT\",\n                status: \"0\",\n                delete_id: \"\",\n                user_name: \"admin\",\n                name: \"Asset\",\n                password: \"7fba729fa18f4662eedda4cff80b47c6\",\n                partner_id: \"5528511e-28e2-410b-8d95-d0e6f77316d7\",\n                signature: \"\",\n                email: \"vang@bluebytez.com\",\n                lang_id: \"76\",\n                gmt_offset: \"-420.0\",\n                date_format: \"DD/MM/YYYY\",\n                time_format: \"HH:MM:SS\",\n                thousands_sep: \".\",\n                decimal_point: \",\",\n                avatar: \"25805c28-36e7-4fdb-a8b5-b1c2c868ad87\",\n                type: \"4.5+\",\n                inactive: \"0\",\n                renew_password_id: \"\",\n                online: \"0\"\n              },\n        type: \"post\"\n      },\n post_category: {\n                 _id: \"cb9e7184-f52a-4acd-80bf-9e5a50689eee\",\n                 create_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n                 create_date: \"2019-06-20 10:55:53.79\",\n                 write_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n                 write_date: \"2019-06-20 10:58:12.192\",\n                 company_id: \"ROOT\",\n                 status: \"0\",\n                 delete_id: \"\",\n                 name: \"Tin tức thời sự\",\n                 sequence: \"1.0\",\n                 url_id: \"21\",\n                 url_name: \"Tin-tuc-thoi-su\",\n                 type: \"POST\",\n                 parent_id: \"\",\n                 keyword: \"\",\n                 publish: \"0\",\n                 description: \"\"\n                }\n },",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sequence",
            "description": "<p>Sequence of category. Example param: {1}</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Number of page. Example param : {1}</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of post in 1 page. Example param: {10}</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SequenceTypeError",
            "description": "<p>Sequence must be a number. Number is required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Not a number\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./post.js",
    "groupTitle": "Post"
  },
  {
    "type": "get",
    "url": "/product/category",
    "title": "Category",
    "name": "productCategory",
    "group": "Product",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "productController.Category",
            "description": "<p>List of category and each element in list is an Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n    _id: \"2\",\n    category_name: \"OFFICETEL\"\n    },\n    {\n    _id: \"3\",\n    category_name: \"SHOP HOUSE\"\n    }, \n    {\n    _id: \"4\",\n    category_name: \"NHÀ RIÊNG\"\n    },\n    {\n    _id: \"5\",\n    category_name: \"NHÀ PHỐ LIÊN KẾ\"\n    },  \n    {\n    _id: \"6\",\n    category_name: \"BIỆT THỰ\"\n    },\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./product.js",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/search/count_by_keyword",
    "title": "Count by keyword",
    "name": "countByKeyword",
    "group": "Search",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "total_search",
            "description": "<p>Number of post count by keyword</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n total_search: 15\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Keyword use to search {kinh}</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./search.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "/search/get_post_by_keyword",
    "title": "Get Post By Keyword",
    "name": "getPostByKeyword",
    "group": "Search",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "list_Post",
            "description": "<p>Get list of post by KeyWord and each element in list is an Object include User Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n _id: \"2d3a7844-f45b-47c3-92c2-d0303faf7b7e\",\n  create_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n  create_date: \"2019-06-28 16:19:21.352\",\n  write_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n  write_date: \"2019-07-26 09:20:52.36\",\n  company_id: \"ROOT\",\n  status: \"0\",\n  delete_id: \"\",\n  name: \"Kinh nghiệm đi xem nhà để thuê\",\n  description: \"Sau khi bạn đã tìm được địa điểm mình muốn thuê bước tiếp theo sẽ là xem nhà. Đây là cơ hội để bạn có thể nắm rõ thực tế chi tiết về những gì bạn sẽ thuê\",\n  url_id: \"81\",\n  url_name: \"kinh-nghiem-xem-nha-thue\",\n  sequence: \"0.0\",\n  photo: \"5b4a6a0f-8b9a-41da-bffd-4aa940b94758\",\n  receipt_no: \"4\",\n  receipt_date: \"2019-06-28 09:20:52.0\",\n  keyword: \"xem nhà thuê, xem nhà, thuê nhà\",\n  publish: \"1\",\n  publish_date: \"\",\n  short_description: \"Sau khi bạn đã tìm được địa điểm mình muốn thuê bước tiếp theo sẽ là xem nhà. Đây là cơ hội để bạn có thể nắm rõ thực tế chi tiết về những gì bạn sẽ thuê\",\n  user: {\n         _id: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n         create_uid: \"\",\n         create_date: \"2017-09-27 09:44:05.421\",\n         write_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n         write_date: \"2019-07-27 13:39:22.291668\",\n         company_id: \"ROOT\",\n         status: \"0\",\n         delete_id: \"\",\n         user_name: \"admin\",\n         name: \"Asset\",\n         password: \"7fba729fa18f4662eedda4cff80b47c6\",\n         partner_id: \"5528511e-28e2-410b-8d95-d0e6f77316d7\",\n         signature: \"\",\n         email: \"vang@bluebytez.com\",\n         lang_id: \"76\",\n         gmt_offset: \"-420.0\",\n         date_format: \"DD/MM/YYYY\",\n         time_format: \"HH:MM:SS\",\n         thousands_sep: \".\",\n         decimal_point: \",\",\n         avatar: \"25805c28-36e7-4fdb-a8b5-b1c2c868ad87\",\n         type: \"4.5+\",\n         inactive: \"0\",\n         renew_password_id: \"\",\n         online: \"0\"\n        },\n type: \"post\"\n }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Keyword use to search {kinh}</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "KeyWordEmptyError",
            "description": "<p>Keyword was empty. Minimum of <code>1</code> character is required.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./search.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "/search/post",
    "title": "Get All Post",
    "name": "searchAllPost",
    "group": "Search",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "list_post",
            "description": "<p>List of all post and each element in list is an Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n  _id: \"f907b879-08fa-49e7-ba15-db7f87b2a201\",\n  post: {\n          _id: \"f907b879-08fa-49e7-ba15-db7f87b2a201\",\n          create_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n          create_date: \"2019-06-28 15:35:48.702\",\n          write_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n          write_date: \"2019-07-26 09:07:01.335\",\n          company_id: \"ROOT\",\n          status: \"0\",\n          delete_id: \"\",\n          name: \"Nguy Cơ Vỡ Bong Bóng Bất Động Sản: Nguyên Nhân Do Đâu?\",\n          description: \"Trên thực tế, những người mua bất động sản cao cấp không mua để ở, mà phần lớn mua nhằm mục đích đầu tư, kiếm lời nhờ sự tăng giá của thị trường bất động sản.\",\n          url_id: \"79\",\n          url_name: \"vo-bong-bong-bds\",\n          sequence: \"0.0\",\n          photo: \"6b18a365-e500-4b6b-a543-1a86cf09dc9b\",\n          receipt_no: \"2\",\n          receipt_date: \"2019-06-28 09:07:01.0\",\n          keyword: \"vỡ bong bóng, bong bóng bđs, vỡ bong bóng bđs, đầu cơ, đầu cơ bđs\",\n          publish: \"1\",\n          publish_date: \"\",\n          short_description: \"Trên thực tế, những người mua bất động sản cao cấp không mua để ở, mà phần lớn mua nhằm mục đích đầu tư, kiếm lời nhờ sự tăng giá của thị trường bất động sản.\"\n        }\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./search.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "/search/suggestion",
    "title": "Suggestion",
    "name": "searchSuggestion",
    "group": "Search",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "list_string_search",
            "description": "<p>List of suggestion and each element in list is an Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n _id: \"5d4d4f85d292617c98d6bf04\",\n name: \"post\",\n rel_id: \"99500440-9fa7-4c98-9947-ba0fce369ed9\",\n rel_id_name: \"post_99500440-9fa7-4c98-9947-ba0fce369ed9_name\",\n cat: \"9c503085-5f11-4247-934e-a67f4c5b8fd6 158754cd-2fed-4af4-b2ee-ae0c9c786a1e f4299d8e-0ea5-483d-82e4-e9faead12ac5\",\n title: \"Khái Niệm Không Gian Sống & Diện Tích Sử Dụng Là Gì?\",\n search: \"khái niệm không gian sống & diện tích sử dụng là gì?  khai niem khong gian song & dien tich su dung la gi?\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Keyword use to search {kinh}</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "KeyWordEmptyError",
            "description": "<p>Keyword was empty. Minimum of <code>1</code> character is required.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./search.js",
    "groupTitle": "Search"
  }
] });
