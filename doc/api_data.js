define({ "api": [
  {
    "type": "get",
    "url": "/address/district",
    "title": "Get List District",
    "version": "0.1.0",
    "name": "GetListDistrict",
    "group": "Address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "city_id",
            "description": "<p>City ID Of District.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"city_id\": \"5dc0cfc6bf871b3a3c629703\"\n}",
          "type": "Int32"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Planning Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n   {\n        create_uid: \"5d679819325ab70ab0157ce5\",\n        create_date: \"2019-11-05T01:28:42.327Z\",\n        write_uid: \"5d679819325ab70ab0157ce5\",\n        write_date: \"2019-11-05T01:28:42.327Z\",\n        company_id: \"ROOT\",\n        status: true,\n        delete_id: null,\n        _id: \"5dc0d055ade2533578818b79\",\n        reaction: [ ],\n        code: \"4607\",\n        main_code: \"07\",\n        name: \"Huyện A Lưới\",\n        type: \"Huyện\",\n        province_id: \"5dc0cfc6bf871b3a3c629703\",\n        points: {\n            type: \"Point\",\n            coordinates: [\n                107.298172561,\n                16.2359891944\n            ]\n        },\n        __v: 0\n   },\n   {...},\n   {...},\n   {...}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./address.js",
    "groupTitle": "Address"
  },
  {
    "type": "get",
    "url": "/address/province",
    "title": "Get List Province",
    "version": "0.1.0",
    "name": "GetListProvince",
    "group": "Address",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Province.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n   {\n        create_uid: \"5d679819325ab70ab0157ce5\",\n        create_date: \"2019-11-05T01:26:10.350Z\",\n        write_uid: \"5d679819325ab70ab0157ce5\",\n        write_date: \"2019-11-05T01:26:10.350Z\",\n        company_id: \"ROOT\",\n        status: true,\n        delete_id: null,\n        _id: \"5dc0cfc5bf871b3a3c6296b9\",\n        reaction: [ ],\n        country_id: \"243\",\n        code: \"92\",\n        name: \"Thành phố Cần Thơ\",\n        type: \"Thành phố\",\n        __v: 0,\n        points: {\n            type: \"Point\",\n            coordinates: [\n                105.53032391,\n                10.1145177108\n            ]\n        }\n   },\n   {...},\n   {...},\n   {...}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./address.js",
    "groupTitle": "Address"
  },
  {
    "type": "get",
    "url": "/address/ward",
    "title": "Get List Ward",
    "version": "0.1.0",
    "name": "GetListWard",
    "group": "Address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "province_id",
            "description": "<p>District ID Of Ward.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"province_id\": \"5dc0d056ade2533578818d7d\"\n}",
          "type": "Int32"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Planning Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n   {\n        create_uid: \"5d679819325ab70ab0157ce5\",\n        create_date: \"2019-11-06T03:00:21.913Z\",\n        write_uid: \"5d679819325ab70ab0157ce5\",\n        write_date: \"2019-11-06T03:00:21.913Z\",\n        company_id: \"ROOT\",\n        status: true,\n        delete_id: null,\n        _id: \"5dc237a3d508de3c4c58801e\",\n        reaction: [ ],\n        code: \"240600\",\n        name: \"Trung tâm huấn luyện Cấm Sơn\",\n        type: \"Trung tâm huấn luyện\",\n        district_id: \"5dc0d056ade2533578818d7d\",\n        points: null,\n        __v: 0\n   },\n   {...},\n   {...},\n   {...}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./address.js",
    "groupTitle": "Address"
  },
  {
    "type": "get",
    "url": "/address/get-location",
    "title": "Get Location",
    "version": "0.1.0",
    "name": "GetLocation",
    "group": "Address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "ward",
            "description": "<p>Ward ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"ward\": \"5dc237a3d508de3c4c58801e\"\n}",
          "type": "Int32"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Planning Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     status: true,\n     data: {\n         _id: \"5dc237a3d508de3c4c58801e\",\n         district: {\n             _id: \"5dc0d056ade2533578818d7d\",\n             code: \"2406\",\n             name: \"Huyện Lục Ngạn\"\n         },\n         province: {\n             _id: \"5dc0cfc6bf871b3a3c6296c1\",\n             code: \"24\",\n             name: \"Tỉnh Bắc Giang\"\n         },\n         ward: {\n             _id: \"5dc237a3d508de3c4c58801e\",\n             name: \"Trung tâm huấn luyện Cấm Sơn\",\n             code: \"240600\"\n         }\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AddressLenght",
            "description": "<p>The <code>length</code> of the address was not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Connection",
            "description": "<p>The <code>connection</code> of the server was interrupted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Không tìm thấy địa chỉ\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Server lỗi\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./address.js",
    "groupTitle": "Address"
  },
  {
    "type": "post",
    "url": "/ask/add-ask",
    "title": "Add New Ask",
    "version": "0.1.0",
    "name": "AddNewAsk",
    "group": "Ask",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Ask Status.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "delete_id",
            "description": "<p>Ask Delete ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Ask Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "category_id",
            "description": "<p>Ask Category ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Ask Content.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url_name",
            "description": "<p>Ask URL Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sequence",
            "description": "<p>Ask Sequence.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "asset_name",
            "description": "<p>Asset Rename Ask Title.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>Search Result.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "reaction",
            "description": "<p>Ask Reaction.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "approve",
            "description": "<p>Approve Status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n   \"status\": true,\n   \"data\": {\n      \"create_uid\": \"5d679819325ab70ab0157ce5\",\n      \"create_date\": \"2019-09-26T03:24:44.666Z\",\n      \"write_uid\": \"5d679819325ab70ab0157ce5\",\n      \"write_date\": \"2019-09-26T03:24:44.666Z\",\n      \"company_id\": \"ROOT\",\n      \"status\": true,\n      \"delete_id\": null,\n      \"url_name\": \"\",\n      \"sequence\": 0,\n      \"content\": \"\",\n      \"url_name\": \"\",\n      \"search\": \"tại sao danh sách fsbo của tôi không được đăng? tai sao danh sach fsbo cua toi khong duoc dang\",\n      \"asset_name\": \"\",\n      \"category_id\": \"5d7f313e2c69582d740b7afd\",\n      \"approve\": \"APPROVED\",\n      \"reaction\": [],\n      \"name\": \"Tại sao danh sách FSBO của tôi không được đăng?\",\n      \"__v\": 0\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AskName",
            "description": "<p>The <code>name</code> of the question was not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AskContent",
            "description": "<p>The <code>content</code> of the question was not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Connection",
            "description": "<p>The <code>connection</code> of the server was interrupted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Vui lòng điền tên câu hỏi\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Vui lòng điền nội dung câu hỏi\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Server lỗi\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./ask.js",
    "groupTitle": "Ask"
  },
  {
    "type": "post",
    "url": "/ask/add-category",
    "title": "Add New Ask Category",
    "version": "0.1.0",
    "name": "AddNewAskCategory",
    "group": "Ask_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Ask Category Status.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "delete_id",
            "description": "<p>Ask Category Delete ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Ask Category Parent ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url_name",
            "description": "<p>Ask Category URL Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Ask Category Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Ask Category Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sequence",
            "description": "<p>Ask Category Sequence.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"status\": true,\n  \"data\": {\n      \"create_uid\": \"5d679819325ab70ab0157ce5\",\n      \"create_date\": \"2019-10-11T01:56:35.189Z\",\n      \"write_uid\": \"5d679819325ab70ab0157ce5\",\n      \"write_date\": \"2019-10-11T01:56:35.189Z\",\n      \"company_id\": \"ROOT\",\n      \"status\": true,\n      \"delete_id\": null,\n      \"parent_id\": null,\n      \"sequence\": 0,\n      \"name\": \"Pháp lý Bất Động Sản\",\n      \"url_name\": \"phap-ly-bat-dong-san\",\n      \"code\": \"ASK_LEGAL\",\n      \"__v\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Connection",
            "description": "<p>The <code>connection</code> of the server was interrupted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Server lỗi\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./ask_category.js",
    "groupTitle": "Ask_Category"
  },
  {
    "type": "get",
    "url": "/ask/get-ask-by-id",
    "title": "Ask Category Detail",
    "version": "0.1.0",
    "name": "DetailAskCategory",
    "group": "Ask_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "askID",
            "description": "<p>Ask Category ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"askID\": \"5d9d32eca3addc584136d026\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "{\n     status: true,\n     data: {\n         _id: \"5d9d32eca3addc584136d026\",\n         delete_id: null,\n         asset_name: \"\",\n         sequence: 2,\n         url_name: \"\",\n         approve: \"APPROVED\",\n         name: \"Nhà tôi đang bán và cho thuê. Cả hai danh sách có thể xuất hiện trên Asset?\",\n         category_id: [\n             \"5d7f391dd76bcb1fe874247a\"\n         ],\n         __v: 0,\n         content: \"<h4><strong><em><u>Nội dung phản hồi: </u></em></strong></h4><p>Asset cho phép một danh sách hoạt động cho mỗi địa chỉ tài sản tại một thời điểm. Một ngôi nhà có thể được liệt kê để bán hoặc cho thuê, nhưng không phải cả hai cùng một lúc.</p>\",\n         reaction: [\n             \"5db2a202cf459e133c6349a9\"\n         ],\n         company_id: \"ROOT\",\n         create_date: \"2019-10-11T04:54:55.175Z\",\n         search: \"nhà tôi đang bán và cho thuê. cả hai danh sách có thể xuất hiện trên asset? nha toi dang ban va cho thue ca hai danh sach co the xuat hien tren asset \",\n         status: true,\n         write_date: \"2019-10-11T04:54:55.175Z\",\n         type: \"ask\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "askID",
            "description": "<p>The <code>askID</code> of the question was not correct.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Connection",
            "description": "<p>The <code>connection</code> of the server was interrupted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Thiếu ID câu hỏi\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Server lỗi\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"true\"\n  \"message\": \"Không tìm thấy thông tin\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./ask.js",
    "groupTitle": "Ask_Category"
  },
  {
    "type": "get",
    "url": "/ask/get-list-category",
    "title": "Get List Ask Category",
    "version": "0.1.0",
    "name": "GetListAskCategory",
    "group": "Ask_Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Recruit Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n     status: true,\n     data: [\n         {\n             _id: \"5d7f38d6d76bcb1fe8742476\",\n             name: \"Quy định pháp luật về bất động sản - dự án\"\n         },\n         {\n             _id: \"5d7f38f3d76bcb1fe8742477\",\n             name: \"Pháp lý dự án, phê duyệt quy hoạch\"\n         },\n         {\n             _id: \"5d7f3902d76bcb1fe8742478\",\n             name: \"Biểu mẫu thực hiện thủ tục\"\n         },\n         {\n             _id: \"5d7f390dd76bcb1fe8742479\",\n             name: \"Hợp đồng mẫu về bất động sản, xây dựng\"\n         },\n         {\n             _id: \"5d7f391dd76bcb1fe874247a\",\n             name: \"Các vấn đề khác \"\n         }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./ask_category.js",
    "groupTitle": "Ask_Category"
  },
  {
    "type": "post",
    "url": "/auth/change-password",
    "title": "Change Password",
    "name": "ChangePassword",
    "group": "Authenticate",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>User ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Current Password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>User New Password.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"_id\": \"5d9c3342cc1f7b3f4c8e79dd\",\n     \"password\": \"123456\",\n     \"newPassword\": \"Vu0902694200@\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isLogin\": \"false\",\n  \"message\": \"Đăng nhập thành công!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User",
            "description": "<p>The <code>user</code> was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "validPass",
            "description": "<p>The <code>Current Password</code> was not correct.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Không tìm thấy tải khoản\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Mật khẩu không chính xác!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./auth.js",
    "groupTitle": "Authenticate"
  },
  {
    "type": "get",
    "url": "/auth/authenticate",
    "title": "Check Authenticate",
    "version": "0.1.0",
    "name": "CheckAuthenticate",
    "group": "Authenticate",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Authenticate Status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Authenticate Message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\":true,\n  \"message\":\"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\":false,\n  \"message\":\"Không thể tìm thấy token\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\":false,\n  \"message\":\"Token không hợp lệ\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./auth.js",
    "groupTitle": "Authenticate"
  },
  {
    "type": "post",
    "url": "/auth/check-idSignup",
    "title": "Check Id Signup",
    "name": "CheckIdSignup",
    "group": "Authenticate",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"true\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./auth.js",
    "groupTitle": "Authenticate"
  },
  {
    "type": "post",
    "url": "/auth/check-info-signup",
    "title": "Check Info Signup",
    "name": "CheckInfoSignup",
    "group": "Authenticate",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "newUser",
            "description": "<p>New User Info.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"newUser\": {\n        \"first_name\": \"Minh\",\n        \"last_name\": \"Hinh Hoc\",\n        \"email\": \"\",\n        \"referral_code\": \"AOZ505\",\n        \"country_code\": \"84\",\n        \"phone\": \"0792452548\",\n        \"inactive\": \"true\",\n        \"password\": hashedPassword\n     }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"true\",\n  \"data\": \"5de478a602949b06006a3dab\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Connection",
            "description": "<p>The <code>connection</code> of the server was interrupted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Server lỗi\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./auth.js",
    "groupTitle": "Authenticate"
  },
  {
    "type": "post",
    "url": "/auth/get-role-token",
    "title": "Get Role Token",
    "name": "CheckInfoSignup",
    "group": "Authenticate",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>User Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "group_id",
            "description": "<p>User Group Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "company_id",
            "description": "<p>User Company Id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"id\": \"5d9c3342cc1f7b3f4c8e79dd\",\n     \"group_id\": \"5d9d94fe93d1b678bbe3568a\",\n     \"company_id\": \"5d9ae33a6c872036a4b2d47f\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": \"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWQ5YzMzNDJjYzFmN2IzZjRjOGU3OWRkIiwiZ3JvdXBfaWQiOiI1ZDlkOTRmZTkzZDFiNjc4YmJlMzU2OGEiLCJjb21wYW55X2lkIjoiNWQ5YWUzM2E2Yzg3MjAzNmE0YjJkNDdmIiwiaWF0IjoxNTc1MzQxMzYxLCJleHAiOjMzMTExMzQxMzYxfQ.Zs02ntLptgAmf873qPe2aRiIbOH0ywtAc8-3OmmAimzR7Yn_UjnR7_S5F1L1RluuAAcZdqWOwlurp0fADoKRAg\"\n  \"status\": \"true\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Connection",
            "description": "<p>The <code>connection</code> of the server was interrupted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Server lỗi\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./auth.js",
    "groupTitle": "Authenticate"
  },
  {
    "type": "post",
    "url": "/auth/check-login",
    "title": "Check Login",
    "name": "CheckLogin",
    "group": "Authenticate",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>User ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "userRoles",
            "description": "<p>User Role.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"_id\": \"5d9c3342cc1f7b3f4c8e79dd\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"true\",\n  \"isLogin\": \"true\",\n  \"message\": \"Đăng nhập thành công!\",\n  \"user\": {\n        avatar: \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASQA\"\n        first_name: \"Dương Công\"\n        id: \"5d9c3342cc1f7b3f4c8e79dd\"\n        last_name: \"Vủ\"\n        phone: \"0123123123\"\n        save_product: []\n        save_project: [\"5db80cfe44ab3a16f421599a\", \"5db80cfe44ab3a16f421599d\", \"5db80cfe44ab3a16f42159a0\",…]\n        userRoles: [{_id: \"5d9d991050d9ad34b4db2e8d\",…}, {_id: \"5d9d991050d9ad34b4db2e8d\",…},…]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./auth.js",
    "groupTitle": "Authenticate"
  },
  {
    "type": "post",
    "url": "/auth/get-role-active",
    "title": "Get Role Active",
    "name": "CheckRoleActive",
    "group": "Authenticate",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleToken",
            "description": "<p>User Role Token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"roleToken\": \"\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": \"\"\n  \"status\": \"true\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Connection",
            "description": "<p>The <code>connection</code> of the server was interrupted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./auth.js",
    "groupTitle": "Authenticate"
  },
  {
    "type": "post",
    "url": "/auth/signup",
    "title": "Signup Account",
    "name": "Login",
    "group": "Authenticate",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "referral_code",
            "description": "<p>User Referral Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>User First Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>User Last Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>User Phone Number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"_id\" : ObjectId(\"5d9c3342cc1f7b3f4c8e79dd\"),\n     \"rel_id\" : ObjectId(\"5db814cb5d0a533960ad5d4e\"),\n     \"rating\" : [{rating_avg: \"4.5\"}],\n     \"comment\" : \"Hay qua\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"true\"\n  \"message\": \"Tạo tài khoản thành công.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "checkToken",
            "description": "<p>The <code>token</code> of the user was not correct.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "_id",
            "description": "<p>The <code>id</code> of user was null.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "user",
            "description": "<p>The <code>user</code> not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Connection",
            "description": "<p>The <code>connection</code> of the server was interrupted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"idToken không chính xác\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Thiếu id tài khoản\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Không tìm thấy tài khoản\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Server lỗi\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./auth.js",
    "groupTitle": "Authenticate"
  },
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Login",
    "name": "Login",
    "group": "Authenticate",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>User Phone Number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"phone\" : \"0902694200\",\n     \"password\" : \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isLogin\": \"true\",\n  \"status\": \"true\",\n  \"token\": \"\",\n  \"refreshToken\": \"\",\n  \"message\": \"Đăng nhập thành công!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LoginValidation",
            "description": "<p>The <code>Phone Number</code> of the user was not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CheckPhone",
            "description": "<p>The <code>Phone Number</code> of the user was not correct.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "validPass",
            "description": "<p>The <code>password</code> of user was not correct.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"isLogin\": \"false\"\n  \"message\": \"Số điện thoại nhập vào không đúng quy định!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"isLogin\": \"false\"\n  \"message\": \"Số điện thoại không chính xác!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"isLogin\": \"false\"\n  \"message\": \"Mật khẩu không chính xác!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./auth.js",
    "groupTitle": "Authenticate"
  },
  {
    "type": "post",
    "url": "/auth/fb",
    "title": "Login With Facebook",
    "name": "LoginWithFacebook",
    "group": "Authenticate",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>User Access Token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userID",
            "description": "<p>User ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email Of User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>User First Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>User Last Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>User Avatar.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"accessToken\": \"\",\n     \"userID\": \"1454497011366430\",\n     \"email\": \"huavanvu2812@gmail.com\",\n     \"first_name\": \"Hua\",\n     \"last_name\": \"Vu\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isLogin\": \"true\",\n  \"status\": \"true\",\n  \"token\": \"\",\n  \"refreshToken\": \"\",\n  \"message\": \"Đăng nhập thành công!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LoginValidation",
            "description": "<p>The <code>Token</code> of the user was not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Connection",
            "description": "<p>The <code>connection</code> of the server was interrupted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Đăng nhập thất bại\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Server lỗi\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./auth.js",
    "groupTitle": "Authenticate"
  },
  {
    "type": "post",
    "url": "/auth/google",
    "title": "Login With Google",
    "name": "LoginWithGoogle",
    "group": "Authenticate",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tokenId",
            "description": "<p>User Token ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "profileObj",
            "description": "<p>User Profile.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "googleId",
            "description": "<p>User Google ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"tokenId\": \"\",\n     \"profileObj\": {\n        \"first_name\": \"Vũ\" ,\n        \"last_name\": \"Hứa Văn\",\n        \"avatar\": \"https://lh6.googleusercontent.com/-MGie-EqVE-U/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rd-xdMn3wj2HQHSCQn3uI49k37j_g/s96-c/photo.jpg\"\n      },\n     \"googleId\": \"5dddd76fb4be71385c5fc2a3\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isLogin\": \"true\",\n  \"status\": \"true\",\n  \"token\": \"\",\n  \"refreshToken\": \"\",\n  \"message\": \"Đăng nhập thành công!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LoginValidation",
            "description": "<p>The <code>Token</code> of the user was not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Connection",
            "description": "<p>The <code>connection</code> of the server was interrupted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Đăng nhập thất bại\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Server lỗi\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./auth.js",
    "groupTitle": "Authenticate"
  },
  {
    "type": "get",
    "url": "/auth/logout",
    "title": "Logout",
    "version": "0.1.0",
    "name": "Logout",
    "group": "Authenticate",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isLogin\":false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./auth.js",
    "groupTitle": "Authenticate"
  },
  {
    "type": "post",
    "url": "/auth/recover-password",
    "title": "Recover Password",
    "name": "Recover_Password",
    "group": "Authenticate",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>User Phone Number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idToken",
            "description": "<p>User ID Token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>User New Password.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"phone\": \"0902694200\",\n     \"idToken\": \"\",\n     \"newPassword\": \"Vu0902694200\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": \"\"\n  \"status\": \"true\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ChangePasswordValidate",
            "description": "<p>The <code>newPassword</code> of the server was interrupted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\",\n  \"message\": \"Mật khẩu không hợp lệ\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./auth.js",
    "groupTitle": "Authenticate"
  },
  {
    "type": "post",
    "url": "/auth/rfToken",
    "title": "Refresh Token",
    "name": "RefreshToken",
    "group": "Authenticate",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>User Refresh Token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"refreshToken\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "HTTP/1.1 200 OK\n{\n  \"token\": \"JWT token\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./auth.js",
    "groupTitle": "Authenticate"
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
    "group": "C:\\Users\\Windows 10\\Documents\\GitHub\\Asset-APIDocuments\\doc\\main.js",
    "groupTitle": "C:\\Users\\Windows 10\\Documents\\GitHub\\Asset-APIDocuments\\doc\\main.js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/comment/add",
    "title": "Add New Comment",
    "version": "0.1.0",
    "name": "AddNewComment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Comment Status.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "delete_id",
            "description": "<p>Comment Delete ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Comment Title.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Comment Parent ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "children",
            "description": "<p>Comment Children.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Comment Path.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "rel_id",
            "description": "<p>Comment Rely Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rel_id_string",
            "description": "<p>Comment Rely ID String.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"create_uid\" : ObjectId(\"5d9c378d3c34df0f449f5ac3\"),\n     \"create_date\" : ISODate(\"2019-10-11T01:57:44.524Z\"),\n     \"write_uid\" : ObjectId(\"5d679819325ab70ab0157ce5\"),\n     \"write_date\" : ISODate(\"2019-10-10T06:54:20.514Z\"),\n     \"company_id\" : \"ROOT\",\n     \"status\" : true,\n     \"delete_id\" : null,\n     \"reaction\" : [],\n     \"parent_id\" : ObjectId(\"5d9fe0e8ec7cab08bcbbab3d\"),\n     \"children\" : [],\n     \"rel_id\" : ObjectId(\"5d789b9da31d1828c0c10dd0\"),\n     \"title\" : \"dsd\",\n     \"__v\" : 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "reaction",
            "description": "<p>Comment Reaction.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Title",
            "description": "<p>The <code>title</code> of the comment was missed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"miss title\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./comment.js",
    "groupTitle": "Comment"
  },
  {
    "type": "get",
    "url": "/comment/count_by_id",
    "title": "Count Number Of Comment By ID",
    "version": "0.1.0",
    "name": "CountNumberOfComment",
    "group": "Comment",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int32",
            "optional": false,
            "field": "number",
            "description": "<p>Number of Comment.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "{\n    status: true,\n    data: 2\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./comment.js",
    "groupTitle": "Comment"
  },
  {
    "type": "get",
    "url": "/comment/list",
    "title": "Get List Comment",
    "version": "0.1.0",
    "name": "GetListComment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "rel_id",
            "description": "<p>Rel Comment ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "create_date",
            "description": "<p>Comment Create Date.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Comment Parent ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "offset",
            "description": "<p>Comment Offset.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "limit",
            "description": "<p>Comment Limit.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"rel_id\": \"5d9d304fa3addc58413349bf\",\n  \"create_date\": \"2019-10-09T02:07:36.549Z\",\n  \"parent_id\": \"\",\n  \"offset\": \"1\",\n  \"limit\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Comment.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        _id: \"5d9fddf606816b2e80f298e9\",\n        create_date: \"2019-10-11T01:42:14.168Z\",\n        reaction: [ ],\n        parent_id: null,\n        children: [ ],\n        rel_id: \"5d9d304fa3addc58413349bf\",\n        title: \"asdasd\"\n    },\n    {\n        _id: \"5d9d40e84942bc16f4f5f1a8\",\n        create_date: \"2019-10-09T02:07:36.549Z\",\n        reaction: [ ],\n        parent_id: null,\n        children: [ ],\n        rel_id: \"5d9d304fa3addc58413349bf\",\n        title: \"Van ban rat co ich\",\n        user: {\n            _id: \"5d9c3342cc1f7b3f4c8e79dd\",\n            first_name: \"Duong Cong \",\n            last_name: \"Vu\"\n        }\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Rel_ID",
            "description": "<p>The <code>rel_id</code> of the comment was missed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Missing param rel_id\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./comment.js",
    "groupTitle": "Comment"
  },
  {
    "type": "post",
    "url": "/contact/add-contact",
    "title": "Add New Company",
    "version": "0.1.0",
    "name": "AddNewCompany",
    "group": "Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Company Status.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "delete_id",
            "description": "<p>Company Delete ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Company Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Company Parent ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Company Description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Company Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sequence",
            "description": "<p>Company Sequence.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>Company Icon.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "partner_id",
            "description": "<p>Company Partner ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "category_id",
            "description": "<p>Company Category ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Company Keyword.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "points",
            "description": "<p>Company Points.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"_id\" : ObjectId(\"5d9ae33a6c872036a4b2d47f\"),\n     \"name\" : \"Asset\",\n     \"category_id\" : null,\n     \"display_name\" : \"Assetvn\",\n     \"parent_id\" : null,\n     \"phone\" : \"213213\",\n     \"email\" : \"nguyenvu@asf.com\",\n     \"address\" : \"Vung tau\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "logo",
            "description": "<p>Company Logo.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Name",
            "description": "<p>The <code>name</code> of the company was emptied.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Address",
            "description": "<p>The <code>address</code> of the company was emptied.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Phone",
            "description": "<p>The <code>phone</code> of the company was emptied.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CountryCode",
            "description": "<p>The <code>country_code</code> of the company was emptied.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Connection",
            "description": "<p>The <code>connection</code> of the server was interrupted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Vui lòng điền tên liên hệ\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Vui lòng điền địa chỉ\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Vui lòng điền số điện thoại\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Vui lòng điền mã quốc gia\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Server lỗi\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./contact.js",
    "groupTitle": "Company"
  },
  {
    "type": "post",
    "url": "/contact/add-contact-category",
    "title": "Add New Company Category",
    "version": "0.1.0",
    "name": "AddNewCompanyCategory",
    "group": "Contact",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Company Category Status.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "delete_id",
            "description": "<p>Company Category Delete ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Company Category Parent ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Company Category Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Company Category Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Company Category Description.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sequence",
            "description": "<p>Company Category Sequence.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url_name",
            "description": "<p>Company Category URL Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Company Category Type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Company Category Keyword.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"_id\" : ObjectId(\"5dafd01513818c28e0916314\"),\n    \"create_uid\" : ObjectId(\"5d679819325ab70ab0157ce5\"),\n    \"create_date\" : ISODate(\"2019-10-23T03:56:36.202Z\"),\n    \"write_uid\" : ObjectId(\"5d679819325ab70ab0157ce5\"),\n    \"write_date\" : ISODate(\"2019-10-23T03:56:36.202Z\"),\n    \"company_id\" : \"ROOT\",\n    \"status\" : true,\n    \"delete_id\" : null,\n    \"description\" : \"\",\n    \"keyword\" : \"\",\n    \"code\" : \"US\",\n    \"name\" : \"Cộng tác viên\",\n    \"__v\" : 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Name",
            "description": "<p>The <code>name</code> of the company category was emptied.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserID",
            "description": "<p>The <code>user_id</code> of the company category was emptied.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Result",
            "description": "<p>The <code>result</code> of the company category was emptied.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Connection",
            "description": "<p>The <code>connection</code> of the server was interrupted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Vui lòng điền tên danh mục\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Không thể tìm thấy id của bạn\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Không thể thêm danh mục\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Server lỗi\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./contact.js",
    "groupTitle": "Contact"
  },
  {
    "type": "get",
    "url": "/contact/check-rating-company",
    "title": "Check Company Rating",
    "version": "0.1.0",
    "name": "CheckCompanyRating",
    "group": "Contact",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "rel_id",
            "description": "<p>Rating Company Rel_ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"rel_id\": \"5db814c95d0a533960ad5aa0\"\n  \"_id\": \"5dc66227bb0990fd18af4def\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Rating Company Info</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    status: true,\n    data: {\n        create_uid: \"5d679819325ab70ab0157ce5\",\n        write_uid: \"5d679819325ab70ab0157ce5\",\n        company_id: \"ROOT\",\n        status: true,\n        delete_id: null,\n        comment: \"Doanh nghiep\",\n        _id: \"5dc4e75871e8b11638ec2b19\",\n        user_id: \"5d9c3342cc1f7b3f4c8e79dd\",\n        rel_id: \"5db814cb5d0a533960ad5db0\",\n        value: 3.5,\n        type: \"company\",\n        create_date: \"2019-11-08T03:56:08.065Z\",\n        write_date: \"2019-11-08T03:56:08.065Z\",\n        __v: 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "checkRating",
            "description": "<p>The <code>checkRating</code> of user was null.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Rel_ID",
            "description": "<p>The <code>rel_id</code> of rating company was null.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Chưa đánh giá\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Thiếu thông tin\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./contact.js",
    "groupTitle": "Contact"
  },
  {
    "type": "get",
    "url": "/contact/get-rating-company",
    "title": "Get Company Rating",
    "version": "0.1.0",
    "name": "GetCompanyRating",
    "group": "Contact",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "rel_id",
            "description": "<p>Rating Company Rel_ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"rel_id\": \"5db814c95d0a533960ad5aa0\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Rating Company Info</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    status: true,\n    data: {\n        listRating: [\n            {\n                comment: \"good\",\n                _id: \"5dc663a827de91d19ca946c4\",\n                user_id: {\n                    _id: \"5dc66227bb0990fd18af4def\",\n                    first_name: \"Minh\",\n                    last_name: \"nguyen\"\n            },\n            value: 3,\n            create_date: \"2019-11-09T06:58:48.732Z\"\n            }\n        ],\n        ratingOverview: {\n            avgRating: 3,\n            countUser: 1\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Rel_ID",
            "description": "<p>The <code>rel_id</code> of the rating company was null.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Thiếu thông tin\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./contact.js",
    "groupTitle": "Contact"
  },
  {
    "type": "get",
    "url": "/contact/get-by-id",
    "title": "Get List Contact By ID",
    "version": "0.1.0",
    "name": "GetListContactByID",
    "group": "Contact",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Contact ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"id\": \"5db814c65d0a533960ad55ec\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>List Suggestion</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    status: true,\n    data: {\n        country_code: 84,\n        category_id: [\n            \"5dafd01513818c28e0916318\"\n        ],\n        total_view: 0,\n        parent_id: null,\n        reaction: [ ],\n        _id: \"5db814c65d0a533960ad55ec\",\n        create_uid: \"5d679819325ab70ab0157ce5\",\n        create_date: \"2019-10-29T10:14:41.057Z\",\n        write_uid: \"5d679819325ab70ab0157ce5\",\n        write_date: \"2019-10-29T10:14:41.057Z\",\n        company_id: \"ROOT\",\n        status: true,\n        delete_id: null,\n        tel: \"\",\n        hotline: \"\",\n        email: \"info@becamex.com.vn\",\n        website: \"www.becamex.com.vn\",\n        address1: \"8 Đại Lộ Hùng Vương, Phường Hòa Phú, Thành phố Thủ Dầu Một, Tỉnh Bình Dương\",\n        address: \"\",\n        company_name: \"TỔNG CÔNG TY ĐẦU TƯ VÀ PHÁT TRIỂN CÔNG NGHIỆP - CTCP\",\n        display_name: \"BECAMEX IDC CORP\",\n        founded_year: 2010,\n        legal_representative: \"Phạm Ngọc Thuận\",\n        company_type: \"TNHH MTV\",\n        tax_code: \"3700145020\",\n        bank_account: \"\",\n        bank_name: \"\",\n        bank_branch: \"\",\n        description: \"\",\n        search: \"TỔNG CÔNG TY ĐẦU TƯ VÀ PHÁT TRIỂN CÔNG NGHIỆP - CTCP tong cong ty dau tu va phat trien cong nghiep ctcp BECAMEX IDC CORP becamex idc corp\",\n        points: {\n            type: \"Point\",\n            coordinates: [\n                0,\n                0\n            ]\n        },\n        icon: \"\",\n        logo: \"\",\n        code: \"IV.0001\",\n        __v: 0,\n        rating: [ ],\n        rating_avg: 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./contact.js",
    "groupTitle": "Contact"
  },
  {
    "type": "get",
    "url": "/contact/suggestion",
    "title": "Get List Suggestion",
    "version": "0.1.0",
    "name": "GetListSuggetion",
    "group": "Contact",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Contact Keyword</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"keyword\": \"ban\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>List Suggestion</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n     {\n         country_code: 84,\n         category_id: [\n             \"5dafd01513818c28e0916318\"\n         ],\n         total_view: 0,\n         parent_id: null,\n         reaction: [ ],\n         _id: \"5db814c65d0a533960ad5654\",\n         create_uid: \"5d679819325ab70ab0157ce5\",\n         create_date: \"2019-10-29T10:14:41.057Z\",\n         write_uid: \"5d679819325ab70ab0157ce5\",\n         write_date: \"2019-10-29T10:14:41.057Z\",\n         company_id: \"ROOT\",\n         status: true,\n         delete_id: null,\n         tel: \"437912686\",\n         hotline: \"\",\n         email: \"\",\n         website: \"www.hanoi.gov.vn\",\n         address1: \"Số 159 Tô Hiệu, Phường Nghĩa Đô, Quận Cầu Giấy, Thành phố Hà Nội\",\n         address: \"\",\n         company_name: \"BAN QUẢN LÝ ĐẦU TƯ VÀ XÂY DỰNG KHU ĐÔ THỊ MỚI HÀ NỘI\",\n         display_name: \"BAN QUẢN LÝ ĐẦU TƯ VÀ XÂY DỰNG KHU ĐÔ THỊ MỚI HÀ NỘI\",\n         founded_year: null,\n         legal_representative: \"\",\n         company_type: \"DNĐP\",\n         tax_code: \"\",\n         bank_account: \"\",\n         bank_name: \"\",\n         bank_branch: \"\",\n         description: \"\",\n         search: \"BAN QUẢN LÝ ĐẦU TƯ VÀ XÂY DỰNG KHU ĐÔ THỊ MỚI HÀ NỘI ban quan ly dau tu va xay dung khu do thi moi ha noi BAN QUẢN LÝ ĐẦU TƯ VÀ XÂY DỰNG KHU ĐÔ THỊ MỚI HÀ NỘI ban quan ly dau tu va xay dung khu do thi moi ha noi\",\n         points: {\n             type: \"Point\",\n             coordinates: [\n                 0,\n                 0\n             ]\n         },\n         icon: \"\",\n         logo: \"\",\n         code: \"IV.0053\",\n         __v: 0,\n         rating: [ ],\n         rating_avg: 0\n     },\n     {...},\n     {...},\n     {...}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./contact.js",
    "groupTitle": "Contact"
  },
  {
    "type": "post",
    "url": "/contact/rating-company",
    "title": "Rating Company",
    "name": "Rating",
    "group": "Contact",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "_id",
            "description": "<p>User Rating ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "rel_id",
            "description": "<p>Rel ID Rating.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "rating",
            "description": "<p>Rating Points.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "comment",
            "description": "<p>Company Rating Comment.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"_id\" : ObjectId(\"5d9c3342cc1f7b3f4c8e79dd\"),\n     \"rel_id\" : ObjectId(\"5db814cb5d0a533960ad5d4e\"),\n     \"rating\" : [{rating_avg: \"4.5\"}],\n     \"comment\" : \"Hay qua\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "checkCompany",
            "description": "<p>The <code>checkCompany</code> of the company was null.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "comment",
            "description": "<p>&amp;rating The <code>comment or rating</code> of the company was null.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Connection",
            "description": "<p>The <code>connection</code> of the server was interrupted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Không tìm thấy công ty\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Thiếu thông tin\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Server lỗi\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./contact.js",
    "groupTitle": "Contact"
  },
  {
    "type": "get",
    "url": "/map/detect-district",
    "title": "Detect District",
    "name": "DectDistrict",
    "group": "Map",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Province ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "center",
            "description": "<p>Center Point Of Bound.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"id\": 5dc0cfc6bf871b3a3c6296bd,\n  \"center\": 10.742838817797,106.65411282437982\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "district",
            "description": "<p>District ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n    \"status\": true,\n    \"data\": \"5dc0d057ade2533578818fa9\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The <code>server</code> was error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 5XX Internal Server Error\n{\n  \"status\": \"false\",\n  \"error\": \"Server error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./map.js",
    "groupTitle": "Map"
  },
  {
    "type": "get",
    "url": "/map/detect-province",
    "title": "Detect Province",
    "name": "DectProvince",
    "group": "Map",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "center",
            "description": "<p>Center Point Of Bound.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"center\": 10.74302064653004,106.65268857139291\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "province",
            "description": "<p>Province ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n    \"status\": true,\n    \"data\": \"5dc0cfc6bf871b3a3c6296bd\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The <code>server</code> was error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 5XX Internal Server Error\n{\n  \"status\": \"false\",\n  \"error\": \"Server error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./map.js",
    "groupTitle": "Map"
  },
  {
    "type": "get",
    "url": "/map/detect-district",
    "title": "Detect Ward",
    "name": "DectWard",
    "group": "Map",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>District ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "center",
            "description": "<p>Center Point Of Bound.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"id\": 5dc0d057ade2533578818fa9,\n  \"center\": 106.65305737513246,10.742136536227594,106.65508378404321,10.743413290811999\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "ward",
            "description": "<p>Ward ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n    \"status\": true,\n    \"data\": [\n        \"792004\",\n        \"792005\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The <code>server</code> was error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 5XX Internal Server Error\n{\n  \"status\": \"false\",\n  \"error\": \"Server error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./map.js",
    "groupTitle": "Map"
  },
  {
    "type": "get",
    "url": "/map/get_by_address_id",
    "title": "Get Address By ID",
    "name": "Get_Address_By_ID",
    "group": "Map",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "address_id",
            "description": "<p>Address ID Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit Product Address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Address Code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"address_id\": 5e2179a416b70e34ec8fbedf,\n  \"limit\": 500,\n  \"code\": \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "address",
            "description": "<p>Address</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "listProduct",
            "description": "<p>List Product</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "listPolygonInside",
            "description": "<p>List Polygon Inside</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n    \"address\": [\n        {\n            \"_id\": \"5e2179a416b70e34ec8fbedf\",\n            \"company_id\": \"ROOT\",\n            \"status\": true,\n            \"reaction\": [],\n            \"polygon_id\": [\n                \"5dc100149bae9d046cfc645e\"\n            ],\n            \"address_name\": \"Thành phố Hồ Chí Minh\",\n            \"type\": \"C\",\n            \"parent_id\": null,\n            \"points\": {\n                \"type\": \"Point\",\n                \"coordinates\": [\n                    106.704809484,\n                    10.735237004\n                ]\n            },\n            \"code\": \"79\",\n            \"create_uid\": \"5d9c3342cc1f7b3f4c8e79dd\",\n            \"__v\": 0,\n            \"polygon\": [\n                {\n                    \"_id\": \"5dc100149bae9d046cfc645e\",\n                    \"create_uid\": \"5d679819325ab70ab0157ce5\",\n                    \"create_date\": \"2019-11-05T04:49:57.892Z\",\n                    \"write_uid\": \"5d679819325ab70ab0157ce5\",\n                    \"write_date\": \"2019-11-05T04:49:57.892Z\",\n                    \"company_id\": \"ROOT\",\n                    \"status\": true,\n                    \"delete_id\": null,\n                    \"rel_id\": \"5dc0cfc6bf871b3a3c6296bd\",\n                    \"code\": \"79\",\n                    \"collection_name\": \"res_province\",\n                    \"__v\": 0,\n                    \"polygons\": {\n                        \"type\": \"Polygon\",\n                        \"coordinates\": [\n                            [\n                                [\n                                    106.45614978800008,\n                                    11.160309933000034\n                                ],\n                                [...],\n                                [...]\n                            ]\n                        ]\n                    }\n                }\n            ]\n        }\n    ],\n    \"ListProduct\": [],\n    \"listPolygonInside\": [\n        {\n            \"_id\": \"5dc0d055ade2533578818bbb\",\n            \"code\": \"7901\",\n            \"parent_id\": \"5e2179a416b70e34ec8fbedf\",\n            \"polygon\": {\n                \"polygons\": {\n                    \"type\": \"Polygon\",\n                    \"coordinates\": [\n                        [\n                            [\n                                106.52880870100009,\n                                10.84750434400008\n                            ],\n                            [...],\n                            [...]\n                        ]\n                    ]\n                }\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The <code>server</code> was error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 5XX Internal Server Error\n{\n  \"status\": \"false\",\n  \"error\": \"fail to connect to server! :(( \"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./map.js",
    "groupTitle": "Map"
  },
  {
    "type": "get",
    "url": "/map/filter_agency",
    "title": "Get Agency",
    "name": "Get_Agency",
    "group": "Map",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Oject",
            "optional": false,
            "field": "filterAgency",
            "description": "<p>Filter Agency</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n    \"status\": true,\n    \"data\": [\n        {\n            \"_id\": \"5dba390006d6a109b15d60ef\",\n            \"create_uid\": \"5dbb9d3b65bb02ebb0ec7fb3\",\n            \"create_date\": \"2019-10-25T07:48:22.046Z\",\n            \"write_uid\": \"5d679819325ab70ab0157ce5\",\n            \"write_date\": \"2019-10-25T07:48:22.046Z\",\n            \"company_id\": \"ROOT\",\n            \"status\": true,\n            \"delete_id\": null,\n            \"working_area\": \"5dc0d057ade2533578818fab\",\n            \"description\": \"\",\n            \"sequence\": 0,\n            \"icon\": \"\",\n            \"logo\": \"\",\n            \"keyword\": \"\",\n            \"points\": null,\n            \"code\": \"DL10001\",\n            \"name\": \"Đại lý cấp 1 TPHCM (Quận 9)\",\n            \"category_id\": \"5dafd01513818c28e0916316\",\n            \"partner_id\": \"5db2abddd8ee0717dc269a1c\",\n            \"__v\": 0,\n            \"reaction\": [],\n            \"company_name\": \"Nguyễn Thái Bảo\",\n            \"display_name\": \"Nguyễn Thái Bảo\",\n            \"address\": \"216 Nguyễn Hoàng\",\n            \"address1\": \"216 Nguyễn Hoàng\",\n            \"type\": \"APPROVED\",\n            \"res_district\": {\n                \"_id\": \"5dc0d057ade2533578818fab\",\n                \"create_uid\": \"5d679819325ab70ab0157ce5\",\n                \"create_date\": \"2020-01-16T09:03:10.423Z\",\n                \"write_uid\": \"5d679819325ab70ab0157ce5\",\n                \"write_date\": \"2019-11-05T01:28:42.327Z\",\n                \"company_id\": \"ROOT\",\n                \"status\": true,\n                \"delete_id\": null,\n                \"reaction\": [],\n                \"code\": \"7921\",\n                \"main_code\": \"21\",\n                \"name\": \"Quận 9\",\n                \"type\": \"Quận\",\n                \"province_id\": \"5dc0cfc6bf871b3a3c6296bd\",\n                \"points\": {\n                    \"type\": \"Point\",\n                    \"coordinates\": [\n                        106.822899234,\n                        10.8232983009\n                    ]\n                },\n                \"__v\": 0\n            },\n            \"res_province\": {\n                \"_id\": \"5dc0cfc6bf871b3a3c6296bd\",\n                \"create_uid\": \"5d679819325ab70ab0157ce5\",\n                \"create_date\": \"2019-11-05T01:26:10.350Z\",\n                \"write_uid\": \"5d679819325ab70ab0157ce5\",\n                \"write_date\": \"2019-11-05T01:26:10.350Z\",\n                \"company_id\": \"ROOT\",\n                \"status\": true,\n                \"delete_id\": null,\n                \"reaction\": [],\n                \"country_id\": \"243\",\n                \"code\": \"79\",\n                \"name\": \"Thành phố Hồ Chí Minh\",\n                \"type\": \"Thành phố\",\n                \"__v\": 0,\n                \"points\": {\n                    \"type\": \"Point\",\n                    \"coordinates\": [\n                        106.704809484,\n                        10.735237004\n                    ]\n                }\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The <code>server</code> was error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 5XX Internal Server Error\n{\n  \"status\": \"false\",\n  \"error\": \"Server error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./map.js",
    "groupTitle": "Map"
  },
  {
    "type": "get",
    "url": "/map/full-location",
    "title": "Get Full Location",
    "name": "Get_Full_Location",
    "group": "Map",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Address ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"code\": ,\n  \"id\": 5dc0d057ade2533578818f95\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Oject",
            "optional": false,
            "field": "getFullLocation",
            "description": "<p>Full Location</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n    \"status\": true,\n    \"data\": [\n        {\n            \"company_id\": \"ROOT\",\n            \"status\": true,\n            \"reaction\": [],\n            \"polygon_id\": [\n                \"5dc100149bae9d046cfc645e\"\n            ],\n            \"_id\": \"5e2179a416b70e34ec8fbedf\",\n            \"address_name\": \"Thành phố Hồ Chí Minh\",\n            \"type\": \"C\",\n            \"parent_id\": null,\n            \"points\": {\n                \"type\": \"Point\",\n                \"coordinates\": [\n                    106.704809484,\n                    10.735237004\n                ]\n            },\n            \"code\": \"79\",\n            \"create_uid\": \"5d9c3342cc1f7b3f4c8e79dd\",\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The <code>server</code> was error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 5XX Internal Server Error\n{\n  \"status\": \"false\",\n  \"error\": \"Server error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./map.js",
    "groupTitle": "Map"
  },
  {
    "type": "get",
    "url": "/map/get_list_suggestion",
    "title": "Get List Suggestion",
    "name": "Get_List_Suggestion",
    "group": "Map",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Keyword Suggestion.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit Suggestion.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"keyword\": s,\n  \"limit\": 10\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "ward",
            "description": "<p>Ward ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "[\n    {\n        \"name\": \"project\",\n        \"status\": true,\n        \"rel_id\": \"5db80d0244ab3a16f4216081\",\n        \"weight\": 0.5,\n        \"refPath\": \"project\",\n        \"ward_id\": \"5dc237b7d508de3c4c58981f\",\n        \"title\": \"Ehome S\",\n        \"sub_title\": \"Phường Phú Hữu Quận 9 Thành phố Hồ Chí Minh \",\n        \"search\": \"ehome s ehome s phường phú hữu quận 9 thành phố hồ chí minh  phuong phu huu quan 9 thanh pho ho chi minh\",\n        \"_id\": \"5dfc86de3f2b693a94a83965\"\n    },\n    {\n        \"name\": \"res_address\",\n        \"status\": true,\n        \"rel_id\": \"5e2179a516b70e34ec8fbf00\",\n        \"weight\": 1,\n        \"refPath\": \"res_address_new\",\n        \"title\": \"Tỉnh Lạng Sơn\",\n        \"sub_title\": \" \",\n        \"search\": \"tỉnh lạng sơn tinh lang son\",\n        \"_id\": \"5e4c996aa977954014701016\"\n    },\n    {\n        \"name\": \"res_address\",\n        \"status\": true,\n        \"rel_id\": \"5e2179a616b70e34ec8fbf14\",\n        \"weight\": 1,\n        \"refPath\": \"res_address_new\",\n        \"title\": \"Tỉnh Sóc Trăng\",\n        \"sub_title\": \" \",\n        \"search\": \"tỉnh sóc trăng tinh soc trang\",\n        \"_id\": \"5e4c996aa97795401470102a\"\n    },\n    {\n        \"name\": \"res_address\",\n        \"status\": true,\n        \"rel_id\": \"5e2179a516b70e34ec8fbf0b\",\n        \"weight\": 1,\n        \"refPath\": \"res_address_new\",\n        \"title\": \"Tỉnh Sơn La\",\n        \"sub_title\": \" \",\n        \"search\": \"tỉnh sơn la tinh son la\",\n        \"_id\": \"5e4c996aa977954014701021\"\n    },\n    {\n        \"name\": \"project\",\n        \"status\": true,\n        \"rel_id\": \"5e450e6a44a1629b59d305f0\",\n        \"weight\": 0.5,\n        \"refPath\": \"project\",\n        \"ward_id\": \"5dc237b6d508de3c4c5897d5\",\n        \"title\": \"Chung cư Ehome 4 Bắc Sài Gòn\",\n        \"sub_title\": \"Phường Vĩnh Phú Thị xã Thuận An Tỉnh Bình Dương\",\n        \"search\": \"Chung cư Ehome 4 Bắc Sài Gòn chung cu ehome 4 bac sai gon\",\n        \"_id\": \"5e450eb644a1629b59d30a14\"\n    },\n    {\n        \"name\": \"res_address\",\n        \"status\": true,\n        \"rel_id\": \"5dc0d055ade2533578818b9f\",\n        \"weight\": 0.5,\n        \"refPath\": \"res_address_new\",\n        \"title\": \"Huyện Bắc Sơn\",\n        \"sub_title\": \"Tỉnh Lạng Sơn \",\n        \"search\": \"huyện bắc sơn huyen bac son\",\n        \"_id\": \"5e4c9966a9779540146fe18c\"\n    },\n    {\n        \"name\": \"res_address\",\n        \"status\": true,\n        \"rel_id\": \"5dc0d055ade2533578818b87\",\n        \"weight\": 0.5,\n        \"refPath\": \"res_address_new\",\n        \"title\": \"Huyện Anh Sơn\",\n        \"sub_title\": \"Tỉnh Nghệ An \",\n        \"search\": \"huyện anh sơn huyen anh son\",\n        \"_id\": \"5e4c9966a9779540146fe180\"\n    },\n    {\n        \"name\": \"res_address\",\n        \"status\": true,\n        \"rel_id\": \"5dc0d055ade2533578818bc7\",\n        \"weight\": 0.5,\n        \"refPath\": \"res_address_new\",\n        \"title\": \"Huyện Bình Sơn\",\n        \"sub_title\": \"Tỉnh Quảng Ngãi \",\n        \"search\": \"huyện bình sơn huyen binh son\",\n        \"_id\": \"5e4c9966a9779540146fe1a0\"\n    },\n    {\n        \"name\": \"res_address\",\n        \"status\": true,\n        \"rel_id\": \"5dc0d055ade2533578818c61\",\n        \"weight\": 0.5,\n        \"refPath\": \"res_address_new\",\n        \"title\": \"Huyện Đắk Song\",\n        \"sub_title\": \"Tỉnh Đắk Nông \",\n        \"search\": \"huyện đắk song huyen dak song\",\n        \"_id\": \"5e4c9966a9779540146fe1ed\"\n    },\n    {\n        \"name\": \"res_address\",\n        \"status\": true,\n        \"rel_id\": \"5dc0d055ade2533578818c33\",\n        \"weight\": 0.5,\n        \"refPath\": \"res_address_new\",\n        \"title\": \"Huyện Chư Sê\",\n        \"sub_title\": \"Tỉnh Gia Lai \",\n        \"search\": \"huyện chư sê huyen chu se\",\n        \"_id\": \"5e4c9966a9779540146fe1d6\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The <code>server</code> was error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 5XX Internal Server Error\n{\n  \"status\": \"false\",\n  \"error\": \"Server error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./map.js",
    "groupTitle": "Map"
  },
  {
    "type": "get",
    "url": "/map/polygon_outside",
    "title": "Get Polyson Outside",
    "name": "Get_Polygon_Outside",
    "group": "Map",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "bound",
            "description": "<p>Bound Bound Of Map.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit Items.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "current_address_id",
            "description": "<p>Current Address ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"bound\": [[105.35166738031913,10.029879599733322],[107.4267101049285,11.337500989804807]],\n  \"limit\": 63,\n  \"current_address_id\": 5e2179a416b70e34ec8fbedf\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "listPolygonOutside",
            "description": "<p>List Polygon Outside</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "[\n    {\n        \"_id\": \"5e2179a416b70e34ec8fbedd\",\n        \"address_name\": \"Thành phố Cần Thơ\",\n        \"type\": \"C\",\n        \"polygon\": [\n            {\n                \"_id\": \"5dc100149bae9d046cfc645c\",\n                \"polygons\": {\n                    \"type\": \"Polygon\",\n                    \"coordinates\": [\n                        [\n                            [\n                                105.49543762200005,\n                                10.32534885400005\n                            ],\n                            [...],\n                            [...]\n                        ]\n                    ]\n                }\n            }\n        ]\n    }\n    {...},\n    {...}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The <code>server</code> was error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 5XX Internal Server Error\n{\n  \"status\": \"false\",\n  \"error\": \"Server error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./map.js",
    "groupTitle": "Map"
  },
  {
    "type": "get",
    "url": "/map/product_in_bound",
    "title": "Get Product In Bound",
    "name": "ProductInBound",
    "group": "Map",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit Product In Bound.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "page",
            "description": "<p>Number Of Page</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "bound",
            "description": "<p>Bound of Map.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "project",
            "description": "<p>Use In Future.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>Filter Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "totalFlag",
            "description": "<p>Total Flag.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"limit\": 500,\n  \"page\": 1,   \n  \"bound\": [[106.17609244298436,10.453111978944845],[107.21361380528904,11.106725985230485]],\n  \"address_id\": 5e2179a416b70e34ec8fbedf,\n  \"project\": {%22_id%22:1,%22name%22:1,%22points%22:1,%22polygons%22:1,%22a_value%22:1,%22a_value_unit_id%22:1,\n             %22ward_id%22:1,%22land_area%22:1,%22land_area_unit_id%22:1,%22area_unit_id%22:1,%22area%22:1,%22length%22:1,\n             %22length_unit_id%22:1,%22width_unit_id%22:1,%22width%22:1,%22bathroom%22:1,%22image%22:1,%22sub_image%22:1,\n             %22bedroom%22:1,%22type_id%22:1,%22direction%22:1,%22page_number%22:1,%22plot_number%22:1,%22category_id%22:1,\n             %22product_type._id%22:1,%22product_type.type_name%22:1,%22bedroom_unit_id%22:1,%22bathroom_unit_id%22:1,\n             %22floor_unit_id%22:1,%22product_type.marker_url%22:1,%22product_type.marker_hover_url%22:1,\n             %22product_type.color_code%22:1,%22sale_price%22:1,%22sale_price_unit_id%22:1,%22sale_price_value%22:1,\n             %22number_of_sheet%22:1,%22number_of_parcel%22:1,%22number_of_floor%22:1,%22number_of_floor_unit_id%22:1,\n             %22product_category.category_name%22:1,%22product_category.code%22:1},\n  \"filter\":  {%22type%22:[%225d6e56c88e18e6eaf5076069%22,%225d6e570e65b46f56a7f71a78%22,%225d6e572125130a5ca6726e59%22,\n             %225dd5e40cd59979b3b848b5c6%22],%22category%22:[%225db2c448f835f22804d62d33%22,%225db2c448f835f22804d62d34%22,\n             %225db2c448f835f22804d62d36%22,%225db2c448f835f22804d62d38%22,%225db2c448f835f22804d62d39%22,\n             %225db2c448f835f22804d62d3a%22,%225db2c448f835f22804d62d3b%22,%225db2c448f835f22804d62d3c%22,\n             %225db2c448f835f22804d62d3d%22,%225db2c448f835f22804d62d3e%22,%225db2c449f835f22804d62d3f%22,\n             %225db2c449f835f22804d62d40%22,%225db2c449f835f22804d62d41%22,%225dfaf87874ef956220a61749%22,\n             %225e048582180d9a4f4c90301a%22,%225e04859a180d9a4f4c90301c%22,%225e0485ea180d9a4f4c90301e%22,\n             %225e048620180d9a4f4c903020%22,%225e048638180d9a4f4c903022%22,%225e04864e180d9a4f4c903024%22,\n             %225e048662180d9a4f4c903026%22,%225e048673180d9a4f4c903028%22,%225e048686180d9a4f4c90302a%22,\n             %225e04869f180d9a4f4c90302c%22,%225e0486b2180d9a4f4c90302e%22,%225e0486c5180d9a4f4c903030%22,\n             %225e0486db180d9a4f4c903032%22,%225e0486ea180d9a4f4c903034%22,%225e0486fb180d9a4f4c903036%22,\n             %225e04870c180d9a4f4c903038%22,%225e04871b180d9a4f4c90303a%22,%225e04872f180d9a4f4c90303c%22,\n             %225e04873d180d9a4f4c90303e%22],%22bedroom%22:%220%22,%22price%22:{},%22advance%22:{}},     \n  \"totalFlag\": null              \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "listProduct",
            "description": "<p>List Of Product In Bound.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n [\n     {\n         \"_id\": \"5de4ec212f894f8560078f54\",\n         \"polygons\": {\n             \"type\": \"Polygon\",\n             \"coordinates\": [\n                 [\n                     [\n                         106.690254102,\n                         10.734219981\n                     ],\n                     [\n                         106.690208396,\n                         10.7342207520001\n                     ],\n                     [\n                         106.690204454,\n                         10.734039957\n                     ],\n                     [\n                         106.690250161,\n                         10.734039276\n                     ],\n                     [\n                         106.690254102,\n                         10.734219981\n                     ]\n                 ]\n             ]\n         },\n         \"points\": [\n             106.690229276361,\n             10.7341299918473\n         ],\n         \"code\": \"790103R80.485\",\n         \"ward_id\": \"5dc237d1d508de3c4c58bb71\",\n         \"direction\": \"Hướng Tây\",\n         \"image\": \"https://api.asset.vn\\\\product\\\\5de4ec212f894f8560078f54\\\\5de4ec212f894f8560078f54-image-hinh 1.PNG-1575283745674.png\",\n         \"name\": \"Nhà riêng lẻ Bình Chánh\",\n         \"category_id\": \"5db2c448f835f22804d62d3c\",\n         \"sale_price\": 7,\n         \"width\": 5,\n         \"length\": 16,\n         \"land_area\": 80,\n         \"type_id\": \"5d6e572125130a5ca6726e59\",\n         \"a_value_rate\": 7000,\n         \"feature\": \"Mặt tiền\",\n         \"bedroom\": 3,\n         \"bathroom\": 3,\n         \"number_of_floor\": 3,\n         \"number_of_sheet\": 80,\n         \"number_of_parcel\": \"485\",\n         \"search\": \"nhà riêng nha rieng xã bình hưng huyện bình chánh thành phố hồ chí minh  xa binh hung huyen binh chanh thanh pho ho chi minh\"\n     },\n     {\n         \"_id\": \"5def3fdeb4269b3324197bea\",\n         \"polygons\": {\n             \"type\": \"Polygon\",\n             \"coordinates\": [\n                 [\n                     [\n                         106.831091577,\n                         10.841537504\n                     ],\n                     [\n                         106.831162754,\n                         10.841444532\n                     ],\n                     [\n                         106.831190638,\n                         10.841467929\n                     ],\n                     [\n                         106.831119506,\n                         10.8415608550001\n                     ],\n                     [\n                         106.831091577,\n                         10.841537504\n                     ]\n                 ]\n             ]\n         },\n         \"points\": [\n             106.831141116207,\n             10.8415027055864\n         ],\n         \"code\": \"792104R60.537\",\n         \"ward_id\": \"5dc237b7d508de3c4c589809\",\n         \"direction\": \"Hướng Bắc Nam\",\n         \"image\": \"https://api.asset.vn\\\\product\\\\5def3fdeb4269b3324197bea\\\\5def3fdeb4269b3324197bea-image-z1652736546435_c520282427c3aad27bbec0f0779ecb7f.jpg-1575960542391.jpeg\",\n         \"name\": \"Nhà phố Quận 9 Phường Long Thạnh Mỹ\",\n         \"category_id\": \"5db2c448f835f22804d62d3c\",\n         \"sale_price\": 4,\n         \"width\": 5,\n         \"length\": 10,\n         \"land_area\": 51.61,\n         \"type_id\": \"5d6e56c88e18e6eaf5076069\",\n         \"a_value_rate\": 4000,\n         \"feature\": \"Hẻm\",\n         \"bedroom\": 3,\n         \"bathroom\": 4,\n         \"number_of_floor\": 2,\n         \"number_of_sheet\": 60,\n         \"number_of_parcel\": \"537\",\n         \"search\": \"nhà riêng nha rieng phường long thạnh mỹ quận 9 thành phố hồ chí minh  phuong long thanh my quan 9 thanh pho ho chi minh\"\n     },\n     {\n         \"_id\": \"5def4d3fb4269b3324197bf4\",\n         \"polygons\": {\n             \"type\": \"Polygon\",\n             \"coordinates\": [\n                 [\n                     [\n                         106.704226,\n                         10.740759\n                     ]\n                 ]\n             ]\n         },\n         \"points\": [\n             106.704226,\n             10.740759\n         ],\n         \"code\": \"791908R0000.0000\",\n         \"ward_id\": \"5dc237ccd508de3c4c58b46a\",\n         \"direction\": \"Hướng Bắc\",\n         \"image\": \"https://api.asset.vn\\\\product\\\\5def4d3fb4269b3324197bf4\\\\5def4d3fb4269b3324197bf4-image-78991114_1460328227449668_3998705790566268928_o.jpg-1575963967940.jpeg\",\n         \"name\": \"Nhà cho thuê tại Q7 giá rẻ\",\n         \"category_id\": \"5db2c448f835f22804d62d33\",\n         \"sale_price\": 4,\n         \"width\": null,\n         \"length\": null,\n         \"land_area\": 15,\n         \"type_id\": \"5d6e570e65b46f56a7f71a78\",\n         \"a_value_rate\": 4,\n         \"feature\": \"Mặt tiền\",\n         \"bedroom\": 1,\n         \"bathroom\": 1,\n         \"search\": \"căn hộ chung cư can ho chung cu phường tân quy quận 7 thành phố hồ chí minh  phuong tan quy quan 7 thanh pho ho chi minh\"\n     }\n ]\n},",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The <code>server</code> was error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 5XX Internal Server Error\n{\n  \"status\": \"false\",\n  \"error\": \"Server error\"\n}",
          "type": "json"
        }
      ]
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
            "description": "<p>Planning ID. Example param: {VN79.0000001}</p>"
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
            "description": "<p>Limit. Example param {1000}</p>"
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
    "url": "/project/m/findGeo",
    "title": "Get Find Geo",
    "name": "GetFindGeo",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit Project In Bound.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "bound",
            "description": "<p>Bound of Map.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>Filter Product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"limit\": 500, \n  \"bound\": [[105.35075663894781,9.547623039625572],[109.50084208816656,12.161201566772144]],\n  \"filter\":  {\"category_id\":[\"5d8345efa2178d987366fdef\",\"5d8345fca2178d987366ff40\"],\"status_id\":[\"5db66cb206d6a109b1513792\"]}          \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "listProject",
            "description": "<p>List Of Project.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "[\n    {\n        \"_id\": \"5db80cfe44ab3a16f4215883\",\n        \"points\": {\n            \"type\": \"Point\",\n            \"coordinates\": [\n                106.60141803,\n                10.6851985261\n            ]\n        },\n        \"polygons\": {\n            \"type\": \"Polygon\",\n            \"coordinates\": [\n                [\n                    [\n                        106.601355863,\n                        10.685072958\n                    ],\n                    [...],\n                    [...]\n                ]\n            ]\n        },\n        \"status_detail\": {\n            \"status_name\": \"Chưa rõ\",\n            \"marker_url\": \"Marker_chualam.svg\",\n            \"marker_hover_url\": \"marker_bds_ban_hover.svg\",\n            \"code\": \"\"\n        }\n    },\n    {...},\n    {...}\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The <code>server</code> was error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 5XX Internal Server Error\n{\n  \"status\": \"false\",\n  \"error\": \"Server lỗi\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./project.js",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "/project/m/list",
    "title": "Get List Project Mobile",
    "name": "GetListProjectMobile",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit Project In Bound.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "page",
            "description": "<p>Number Of Page</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "bound",
            "description": "<p>Bound of Map.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "project",
            "description": "<p>Use In Future.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>Filter Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isCount",
            "description": "<p>Default False.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"limit\": 500,\n  \"page\": 1,   \n  \"bound\": [[105.35075663894781,9.547623039625572],[109.50084208816656,12.161201566772144]],\n  \"filter\":  {\"category_id\":[\"5d8345efa2178d987366fdef\",\"5d8345fca2178d987366ff40\"],\"status_id\":[\"5db66cb206d6a109b1513792\"]},     \n  \"isCount\": false              \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "listProject",
            "description": "<p>List Of Project.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n    \"status\": true,\n    \"data\": {\n        \"items\": [\n            {\n                \"_id\": \"5db80cfe44ab3a16f421594f\",\n                \"description\": \"<!DOCTYPE html>\\n<html>\\n<head>\\n</head>\\n<body>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">Tổng diện t&iacute;ch quy hoạch tr&ecirc;n 11.6 ha. Manhattan City bao gồm 122 căn nh&agrave; phố v&agrave; 61 căn biệt thự, 2 block chung cư cao 18 v&agrave; 25 tầng. Ngo&agrave;i ra dự &aacute;n c&ograve;n c&oacute; khu thương mại dịch vụ rộng 1.538 m&sup2;, trường mẫu gi&aacute;o 3,521 m&sup2;, trường tiểu học 7,638 m&sup2;, trường trung học cơ sở 7,591 m&sup2; v&agrave; một c&ocirc;ng vi&ecirc;n c&acirc;y xanh rộng 15,083 m&sup2;.</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">&nbsp;</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-size: 11pt; line-height: 107%; font-family: Arial, sans-serif; color: #000000;\\\">Manhattan City hội đủ c&aacute;c tiện &iacute;ch của một đ&ocirc; thị hiện đại với c&aacute;c tiện &iacute;ch v&agrave; dịch vụ ho&agrave;n chỉnh ngay b&ecirc;n trong dự &aacute;n như: c&ocirc;ng vi&ecirc;n, hồ nước trung t&acirc;m, trường mẫu gi&aacute;o, trường cấp 1 v&agrave; cấp 2 theo ti&ecirc;u chuẩn Singapore, khu mua sắm, trung t&acirc;m thương mại &ndash; dịch vụ cao cấp 5 tầng. C&ugrave;ng h&agrave;ng loạt c&aacute;c tiện nghi hiện hữu c&oacute; sẵn trong b&aacute;n k&iacute;nh 3km để bạn c&ugrave;ng gia đ&igrave;nh sẵn s&agrave;ng tận hưởng như si&ecirc;u thị BigC, si&ecirc;u thị Metro, bệnh viện Triều An, trường THPT chuy&ecirc;n Nguyễn Thị Định, THPT B&Igrave;nh Ph&uacute;, trường cấp 1,2 An Lạc, ng&acirc;n h&agrave;ng Agribank, vietinbank, chợ An Lạc, l&agrave;ng đại học khu Nam S&agrave;i G&ograve;n&hellip;. Đảm bảo một tương lai vững chắc cho bạn v&agrave; gia đ&igrave;nh bạn. Ngo&agrave;i ra dự &aacute;n c&ograve;n được thiết kế theo hướng mở ph&ugrave; hợp với phong c&aacute;ch sống &Aacute; Đ&ocirc;ng, đảm bảo sự h&agrave;i h&ograve;a với m&ocirc;i trường nhằm tạo một kh&ocirc;ng gian xanh cho tổ ấm với hồ sen nằm giữa dự &aacute;n, c&ugrave;ng hệ thống mảng xanh tự nhi&ecirc;n, cạnh nh&aacute;nh s&ocirc;ng Bến Ngh&eacute;, tạo n&ecirc;n thế &ldquo;Đường tiền tụ thủy&rdquo; mang đến ph&uacute;c lộc dồi d&agrave;o cho chủ nh&acirc;n. </span></p>\\n</body>\\n</html>\",\n                \"code\": \"790201P00008\",\n                \"name\": \"Manhattan City\",\n                \"image\": \"images/Project/Ho%20Chi%20Minh/Quan%20Binh%20Tan/790201P00008%20-%20Manhattan%20City/hinh_dai_dien_manhattan_city.jpg\",\n                \"investor\": {\n                    \"_id\": \"5db814c95d0a533960ad5b14\",\n                    \"company_name\": \"Công ty TNHH Xây dựng thương mại Hoàng Nam\",\n                    \"display_name\": \"Hoàng Nam\",\n                    \"code\": \"IV.0661\"\n                },\n                \"res_ward\": {\n                    \"name\": \"Phường An Lạc\"\n                },\n                \"res_district\": {\n                    \"name\": \"Quận Bình Tân\"\n                },\n                \"res_province\": {\n                    \"name\": \"Thành phố Hồ Chí Minh\"\n                },\n                \"category\": {\n                    \"_id\": \"5d8345efa2178d987366fdef\",\n                    \"category_name\": \"Dự án phức hợp\"\n                },\n                \"reaction_length\": 0,\n                \"total_views\": 0\n            },\n            {\n                \"_id\": \"5db80cfe44ab3a16f421594f\",\n                \"description\": \"<!DOCTYPE html>\\n<html>\\n<head>\\n</head>\\n<body>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">Tổng diện t&iacute;ch quy hoạch tr&ecirc;n 11.6 ha. Manhattan City bao gồm 122 căn nh&agrave; phố v&agrave; 61 căn biệt thự, 2 block chung cư cao 18 v&agrave; 25 tầng. Ngo&agrave;i ra dự &aacute;n c&ograve;n c&oacute; khu thương mại dịch vụ rộng 1.538 m&sup2;, trường mẫu gi&aacute;o 3,521 m&sup2;, trường tiểu học 7,638 m&sup2;, trường trung học cơ sở 7,591 m&sup2; v&agrave; một c&ocirc;ng vi&ecirc;n c&acirc;y xanh rộng 15,083 m&sup2;.</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">&nbsp;</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-size: 11pt; line-height: 107%; font-family: Arial, sans-serif; color: #000000;\\\">Manhattan City hội đủ c&aacute;c tiện &iacute;ch của một đ&ocirc; thị hiện đại với c&aacute;c tiện &iacute;ch v&agrave; dịch vụ ho&agrave;n chỉnh ngay b&ecirc;n trong dự &aacute;n như: c&ocirc;ng vi&ecirc;n, hồ nước trung t&acirc;m, trường mẫu gi&aacute;o, trường cấp 1 v&agrave; cấp 2 theo ti&ecirc;u chuẩn Singapore, khu mua sắm, trung t&acirc;m thương mại &ndash; dịch vụ cao cấp 5 tầng. C&ugrave;ng h&agrave;ng loạt c&aacute;c tiện nghi hiện hữu c&oacute; sẵn trong b&aacute;n k&iacute;nh 3km để bạn c&ugrave;ng gia đ&igrave;nh sẵn s&agrave;ng tận hưởng như si&ecirc;u thị BigC, si&ecirc;u thị Metro, bệnh viện Triều An, trường THPT chuy&ecirc;n Nguyễn Thị Định, THPT B&Igrave;nh Ph&uacute;, trường cấp 1,2 An Lạc, ng&acirc;n h&agrave;ng Agribank, vietinbank, chợ An Lạc, l&agrave;ng đại học khu Nam S&agrave;i G&ograve;n&hellip;. Đảm bảo một tương lai vững chắc cho bạn v&agrave; gia đ&igrave;nh bạn. Ngo&agrave;i ra dự &aacute;n c&ograve;n được thiết kế theo hướng mở ph&ugrave; hợp với phong c&aacute;ch sống &Aacute; Đ&ocirc;ng, đảm bảo sự h&agrave;i h&ograve;a với m&ocirc;i trường nhằm tạo một kh&ocirc;ng gian xanh cho tổ ấm với hồ sen nằm giữa dự &aacute;n, c&ugrave;ng hệ thống mảng xanh tự nhi&ecirc;n, cạnh nh&aacute;nh s&ocirc;ng Bến Ngh&eacute;, tạo n&ecirc;n thế &ldquo;Đường tiền tụ thủy&rdquo; mang đến ph&uacute;c lộc dồi d&agrave;o cho chủ nh&acirc;n. </span></p>\\n</body>\\n</html>\",\n                \"code\": \"790201P00008\",\n                \"name\": \"Manhattan City\",\n                \"image\": \"images/Project/Ho%20Chi%20Minh/Quan%20Binh%20Tan/790201P00008%20-%20Manhattan%20City/hinh_dai_dien_manhattan_city.jpg\",\n                \"investor\": {\n                    \"_id\": \"5db814cb5d0a533960ad5d2e\",\n                    \"company_name\": \"Công ty cổ phần Thương mại địa ốc Thế Giới Lê\",\n                    \"display_name\": \"L.World Corp\",\n                    \"code\": \"IV.0930\"\n                },\n                \"res_ward\": {\n                    \"name\": \"Phường An Lạc\"\n                },\n                \"res_district\": {\n                    \"name\": \"Quận Bình Tân\"\n                },\n                \"res_province\": {\n                    \"name\": \"Thành phố Hồ Chí Minh\"\n                },\n                \"category\": {\n                    \"_id\": \"5d8345efa2178d987366fdef\",\n                    \"category_name\": \"Dự án phức hợp\"\n                },\n                \"reaction_length\": 0,\n                \"total_views\": 0\n            },\n            {\n                \"_id\": \"5db80cfe44ab3a16f4215955\",\n                \"description\": \"<!DOCTYPE html>\\n<html>\\n<head>\\n</head>\\n<body>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">Manhattan City bao gồm 2 block chung cư cao 18 v&agrave; 25 tầng với khoảng 1,000 căn hộ.</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">&nbsp;</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-size: 11pt; line-height: 107%; font-family: Arial, sans-serif; color: #000000;\\\">Dự &aacute;n được thiết kế theo hướng mở ph&ugrave; hợp với phong c&aacute;ch sống &Aacute; Đ&ocirc;ng, đảm bảo sự h&agrave;i h&ograve;a với m&ocirc;i trường nhằm tạo một kh&ocirc;ng gian xanh cho c&aacute;c căn hộ với hồ sen nằm giữa dự &aacute;n, c&ugrave;ng hệ thống mảng xanh tự nhi&ecirc;n, cạnh nh&aacute;nh s&ocirc;ng Bến Ngh&eacute;, tạo n&ecirc;n thế &ldquo;Đường tiền tụ thủy&rdquo; mang đến ph&uacute;c lộc dồi d&agrave;o cho người d&acirc;n. Tại Manhattan City c&ograve;n c&oacute; c&aacute;c tiện &iacute;ch của một đ&ocirc; thị hiện đại như: c&ocirc;ng vi&ecirc;n, hồ nước trung t&acirc;m, trường mẫu gi&aacute;o, trường cấp 1-2, khu mua sắm, trung t&acirc;m thương mại dịch vụ. C&ugrave;ng h&agrave;ng loạt c&aacute;c tiện &iacute;ch c&oacute; sẵn trong b&aacute;n k&iacute;nh 3km như: Si&ecirc;u thị BigC, Bệnh viện Triều An, trường cấp 1,2 An Lạc,&hellip; </span></p>\\n</body>\\n</html>\",\n                \"code\": \"790201P00010\",\n                \"name\": \"Manhattan City – A\",\n                \"image\": \"images/Project/Ho%20Chi%20Minh/Quan%20Binh%20Tan/790201P00008%20-%20Manhattan%20City/hinh_dai_dien_manhattan_city.jpg\",\n                \"investor\": {\n                    \"_id\": \"5db814c95d0a533960ad5b14\",\n                    \"company_name\": \"Công ty TNHH Xây dựng thương mại Hoàng Nam\",\n                    \"display_name\": \"Hoàng Nam\",\n                    \"code\": \"IV.0661\"\n                },\n                \"res_ward\": {\n                    \"name\": \"Phường An Lạc\"\n                },\n                \"res_district\": {\n                    \"name\": \"Quận Bình Tân\"\n                },\n                \"res_province\": {\n                    \"name\": \"Thành phố Hồ Chí Minh\"\n                },\n                \"category\": {\n                    \"_id\": \"5d8345fca2178d987366ff40\",\n                    \"category_name\": \"Dự án chung cư\"\n                },\n                \"reaction_length\": 0,\n                \"total_views\": 0\n            },\n            {\n                \"_id\": \"5db80cfe44ab3a16f4215955\",\n                \"description\": \"<!DOCTYPE html>\\n<html>\\n<head>\\n</head>\\n<body>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">Manhattan City bao gồm 2 block chung cư cao 18 v&agrave; 25 tầng với khoảng 1,000 căn hộ.</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">&nbsp;</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-size: 11pt; line-height: 107%; font-family: Arial, sans-serif; color: #000000;\\\">Dự &aacute;n được thiết kế theo hướng mở ph&ugrave; hợp với phong c&aacute;ch sống &Aacute; Đ&ocirc;ng, đảm bảo sự h&agrave;i h&ograve;a với m&ocirc;i trường nhằm tạo một kh&ocirc;ng gian xanh cho c&aacute;c căn hộ với hồ sen nằm giữa dự &aacute;n, c&ugrave;ng hệ thống mảng xanh tự nhi&ecirc;n, cạnh nh&aacute;nh s&ocirc;ng Bến Ngh&eacute;, tạo n&ecirc;n thế &ldquo;Đường tiền tụ thủy&rdquo; mang đến ph&uacute;c lộc dồi d&agrave;o cho người d&acirc;n. Tại Manhattan City c&ograve;n c&oacute; c&aacute;c tiện &iacute;ch của một đ&ocirc; thị hiện đại như: c&ocirc;ng vi&ecirc;n, hồ nước trung t&acirc;m, trường mẫu gi&aacute;o, trường cấp 1-2, khu mua sắm, trung t&acirc;m thương mại dịch vụ. C&ugrave;ng h&agrave;ng loạt c&aacute;c tiện &iacute;ch c&oacute; sẵn trong b&aacute;n k&iacute;nh 3km như: Si&ecirc;u thị BigC, Bệnh viện Triều An, trường cấp 1,2 An Lạc,&hellip; </span></p>\\n</body>\\n</html>\",\n                \"code\": \"790201P00010\",\n                \"name\": \"Manhattan City – A\",\n                \"image\": \"images/Project/Ho%20Chi%20Minh/Quan%20Binh%20Tan/790201P00008%20-%20Manhattan%20City/hinh_dai_dien_manhattan_city.jpg\",\n                \"investor\": {\n                    \"_id\": \"5db814cb5d0a533960ad5d2e\",\n                    \"company_name\": \"Công ty cổ phần Thương mại địa ốc Thế Giới Lê\",\n                    \"display_name\": \"L.World Corp\",\n                    \"code\": \"IV.0930\"\n                },\n                \"res_ward\": {\n                    \"name\": \"Phường An Lạc\"\n                },\n                \"res_district\": {\n                    \"name\": \"Quận Bình Tân\"\n                },\n                \"res_province\": {\n                    \"name\": \"Thành phố Hồ Chí Minh\"\n                },\n                \"category\": {\n                    \"_id\": \"5d8345fca2178d987366ff40\",\n                    \"category_name\": \"Dự án chung cư\"\n                },\n                \"reaction_length\": 0,\n                \"total_views\": 0\n            },\n            {\n                \"_id\": \"5db80cfe44ab3a16f42159b2\",\n                \"description\": \"<!DOCTYPE html>\\n<html>\\n<head>\\n</head>\\n<body>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">Chung cư Mỹ Đức được c&acirc;y dựng với quy m&ocirc; 21 tầng, 440 căn hộ, d&acirc;n số to&agrave;n khu đạt 6,616 người. Mỗi t&ograve;a nh&agrave; được thiết kế với h&agrave;nh lang rộng, mỗi block được lắp đặt 6 thang m&aacute;y, thang bộ v&agrave; lối tho&aacute;t hiểm,&hellip;</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">&nbsp;</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-size: 11pt; line-height: 107%; font-family: Arial, sans-serif; color: #000000;\\\">C&aacute;c căn hộ được trang bị đường dẫn internet, c&aacute;p, điện thoại, kệ bếp, tủ bếp, bếp gas &acirc;m, m&aacute;y h&uacute;t m&ugrave;i, m&aacute;y nước n&oacute;ng,... Chung cư Mỹ Đức c&oacute; đầy đủ c&aacute;c tiện &iacute;ch c&ocirc;ng cộng như si&ecirc;u thị, ph&ograve;ng sinh hoạt cộng đồng, nh&agrave; trẻ mẫu gi&aacute;o, hồ bơi đặc biệt tại đ&acirc;y c&ograve;n x&acirc;y dựng khu trường học 4 tầng tr&ecirc;n diện t&iacute;ch 3,000 m&sup2; trong khu&ocirc;n vi&ecirc;n chung cư. </span></p>\\n</body>\\n</html>\",\n                \"code\": \"790310P00001\",\n                \"name\": \"Chung cư Mỹ Đức\",\n                \"image\": \"images/Project/Ho%20Chi%20Minh/Quan%20Binh%20Thanh/790310P00001%20-%20Chung%20cu%20My%20Duc/hinh_dai_dien_chung_cu_my_duc.jpg\",\n                \"investor\": {\n                    \"_id\": \"5db814cb5d0a533960ad5dbe\",\n                    \"company_name\": \"Công ty cổ phần Xây dựng Số 5\",\n                    \"display_name\": \"SC5\",\n                    \"code\": \"CS.1002\"\n                },\n                \"res_ward\": {\n                    \"name\": \"Phường 21\"\n                },\n                \"res_district\": {\n                    \"name\": \"Quận Bình Thạnh\"\n                },\n                \"res_province\": {\n                    \"name\": \"Thành phố Hồ Chí Minh\"\n                },\n                \"category\": {\n                    \"_id\": \"5d8345fca2178d987366ff40\",\n                    \"category_name\": \"Dự án chung cư\"\n                },\n                \"reaction_length\": 0,\n                \"total_views\": 0\n            },\n            {\n                \"_id\": \"5db80d0044ab3a16f4215bf5\",\n                \"description\": \"<!DOCTYPE html>\\n<html>\\n<head>\\n</head>\\n<body>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-size: 11pt; line-height: 107%; font-family: Arial, sans-serif; color: #000000;\\\">Dự &aacute;n c&oacute; quy m&ocirc; hơn 44,000 m&sup2; gồm 600 căn hộ t&aacute;i định cư, 100 ph&ograve;ng kh&aacute;ch sạn, 800 căn căn hộ văn ph&ograve;ng cho thu&ecirc;. Dự &aacute;n được thiết kế với kh&ocirc;ng gian xanh m&aacute;t của khu c&ocirc;ng vi&ecirc;n rợp b&oacute;ng c&acirc;y xanh, c&aacute;c trang thiết bị hiện đại đầu tạ gym, khu thể thao trong nh&agrave; v&agrave; ph&ograve;ng kh&aacute;m sức khoẻ cộng đồng, khu trung t&acirc;m thương mại,... </span></p>\\n</body>\\n</html>\",\n                \"code\": \"791210P00001\",\n                \"name\": \"Khu phức hợp Đầm Sen\",\n                \"image\": \"images/Project/Ho%20Chi%20Minh/Quan%2011/791210P00001%20-%20Khu%20Phuc%20Hop%20Dam%20Sen/hinh_dai_dien_khu_phuc_hop_dam_sen.jpg\",\n                \"investor\": {\n                    \"_id\": \"5db814c65d0a533960ad5658\",\n                    \"company_name\": \"Công ty TNHH một thành viên Đầu tư kinh doanh nhà Khang Phúc\",\n                    \"display_name\": \"BCCI\",\n                    \"code\": \"IV.0055\"\n                },\n                \"res_ward\": {\n                    \"name\": \"Phường 3\"\n                },\n                \"res_district\": {\n                    \"name\": \"Quận 11\"\n                },\n                \"res_province\": {\n                    \"name\": \"Thành phố Hồ Chí Minh\"\n                },\n                \"category\": {\n                    \"_id\": \"5d8345efa2178d987366fdef\",\n                    \"category_name\": \"Dự án phức hợp\"\n                },\n                \"reaction_length\": 0,\n                \"total_views\": 0\n            },\n            {\n                \"_id\": \"5db80d0144ab3a16f4215e35\",\n                \"description\": \"<!DOCTYPE html>\\n<html>\\n<head>\\n</head>\\n<body>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">Trung t&acirc;m thương mại v&agrave; Chung cư So&aacute;i K&igrave;nh L&acirc;m được triển khai x&acirc;y dựng tr&ecirc;n khu đất c&oacute; tổng diện t&iacute;ch 12,545 m&sup2;, tổng diện t&iacute;ch s&agrave;n x&acirc;y dựng l&ecirc;n đến 51,596 m&sup2; gồm 2 block cao 17 tầng v&agrave; 30 tầng, trong đ&oacute;: </span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt 51.3pt; text-align: justify; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">+ Tầng hầm: 2 tầng hầm d&ugrave;ng để giữ xe.</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt 51.3pt; text-align: justify; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">+ Tầng 1 &ndash; 6: Trung t&acirc;m thương mại v&agrave; dịch vụ.</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt 51.3pt; text-align: justify; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">+ Tầng 7 &ndash; 12: Văn ph&ograve;ng cho thu&ecirc;, khu vực hồ bơi, khu vui chơi giải tr&iacute;.</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt 51.3pt; text-align: justify; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">+ Tầng 13 &ndash; 30: Khu căn hộ với 208 căn, trong đ&oacute; t&aacute;i định cư 108 căn, kinh doanh 100 căn.</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">&nbsp;</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-size: 11pt; line-height: 107%; font-family: Arial, sans-serif; color: #000000;\\\">Trung t&acirc;m thương mại v&agrave; chung cư So&aacute;i K&igrave;nh L&acirc;m l&agrave; một trong những dự &aacute;n phức hợp khu căn hộ - trung t&acirc;m thương mại - dịch vụ v&agrave; văn ph&ograve;ng đầy đủ. Dự &aacute;n c&oacute; khu&ocirc;n vi&ecirc;n c&acirc;y xanh, s&acirc;n b&atilde;i v&agrave; đường nội bộ. </span></p>\\n</body>\\n</html>\",\n                \"code\": \"791706P00002\",\n                \"name\": \"Trung tâm thương mại và chung cư Soái Kình Lâm\",\n                \"image\": \"images/Project/Ho%20Chi%20Minh/Quan%205/791706P00002%20-%20Trung%20tam%20thuong%20mai%20va%20Chung%20cu%20Soai%20Kinh%20Lam/hinh_mo_ta_trung_tam_thuong_mai_va_chung_cu_soai_kinh_lam.jpg\",\n                \"investor\": {\n                    \"_id\": \"5db814c85d0a533960ad58c0\",\n                    \"company_name\": \"Công ty cổ phần Đầu tư Giai Lợi\",\n                    \"display_name\": \"Giai Lợi\",\n                    \"code\": \"IV.0363\"\n                },\n                \"res_ward\": {\n                    \"name\": \"Phường 14\"\n                },\n                \"res_district\": {\n                    \"name\": \"Quận 5\"\n                },\n                \"res_province\": {\n                    \"name\": \"Thành phố Hồ Chí Minh\"\n                },\n                \"category\": {\n                    \"_id\": \"5d8345fca2178d987366ff40\",\n                    \"category_name\": \"Dự án chung cư\"\n                },\n                \"reaction_length\": 0,\n                \"total_views\": 0\n            },\n            {\n                \"_id\": \"5db80d0144ab3a16f4215e5f\",\n                \"description\": \"<!DOCTYPE html>\\n<html>\\n<head>\\n</head>\\n<body>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">Sacomreal H&ugrave;ng Vương c&oacute; chiều cao 21 tầng v&agrave; 2 tầng hầm, trong đ&oacute; c&oacute; 5 tầng thương mại dịch vụ, c&aacute;c tầng căn hộ với tổng số căn hộ cung cấp cho thị trường l&agrave; 125 căn hộ v&agrave; 3,200 m&sup2; s&agrave;n diện t&iacute;ch văn ph&ograve;ng. Trong tổng số 125 căn hộ c&oacute;: 121 căn hộ căn hộ thường, diện t&iacute;ch từ 49 m&sup2; &ndash; 116 m&sup2; v&agrave; 4 căn hộ penthouse c&oacute; diện t&iacute;ch từ 184.3 m&sup2; &ndash; 211.4 m&sup2;.</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">&nbsp;</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-size: 11pt; line-height: 107%; font-family: Arial, sans-serif; color: #000000;\\\">Sacomreal H&ugrave;ng Vương được x&acirc;y dựng nhằm đem lại một cuộc sống chất lượng, hiện đại v&agrave; ho&agrave;n hảo cho cư d&acirc;n nơi đ&acirc;y. B&ecirc;n cạnh đ&oacute;, đ&acirc;y c&ograve;n l&agrave; một c&ocirc;ng tr&igrave;nh c&oacute; kiến tr&uacute;c độc đ&aacute;o, hiện đại, thể hiện sự vươn l&ecirc;n mạnh mẽ của Sacomreal cũng như Tập đo&agrave;n Sacombank trong thời đại mới. </span></p>\\n</body>\\n</html>\",\n                \"code\": \"791804P00002\",\n                \"name\": \"Sacomreal Hùng Vương\",\n                \"image\": \"images/Project/Ho%20Chi%20Minh/Quan%206/791804P00002%20-%20Sacomreal%20Hung%20Vuong/hinh_dai_dien_sacomreal_hung_vuong.jpg\",\n                \"investor\": {\n                    \"_id\": \"5db814ca5d0a533960ad5cd8\",\n                    \"company_name\": \"Công ty cổ phần Địa ốc Sài Gòn Thương Tín\",\n                    \"display_name\": \"TTC Land\",\n                    \"code\": \"IV.0887\"\n                },\n                \"res_ward\": {\n                    \"name\": \"Phường 12\"\n                },\n                \"res_district\": {\n                    \"name\": \"Quận 6\"\n                },\n                \"res_province\": {\n                    \"name\": \"Thành phố Hồ Chí Minh\"\n                },\n                \"category\": {\n                    \"_id\": \"5d8345fca2178d987366ff40\",\n                    \"category_name\": \"Dự án chung cư\"\n                },\n                \"reaction_length\": 0,\n                \"total_views\": 0\n            },\n            {\n                \"_id\": \"5db80d0144ab3a16f4215e9e\",\n                \"description\": \"<!DOCTYPE html>\\n<html>\\n<head>\\n</head>\\n<body>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">Grand Nest City được x&acirc;y dựng tr&ecirc;n diện t&iacute;ch 77,354.8 m&sup2;, mật độ x&acirc;y dựng to&agrave;n khu l&agrave; 43.1%. Dự &aacute;n cung ứng ra thị trường khoảng 3,580 căn hộ v&agrave; 131 nh&agrave; phố.</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">&nbsp;</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-size: 11pt; line-height: 107%; font-family: Arial, sans-serif; color: #000000;\\\">B&ecirc;n cạnh hệ thống tiện &iacute;ch ngoại khu hiện hữu, Grand Nest c&ograve;n được đầu tư tiện &iacute;ch nội khu ho&agrave;n chỉnh v&agrave; đồng bộ: c&ocirc;ng vi&ecirc;n trung t&acirc;m với qu&atilde;ng trường nước v&agrave; &aacute;nh s&aacute;ng, hồ bơi tr&ecirc;n kh&ocirc;ng, ph&ograve;ng gym, spa, khu phố thương mại,... </span></p>\\n</body>\\n</html>\",\n                \"code\": \"791903P00008\",\n                \"name\": \"Grand Nest City\",\n                \"image\": \"images/Project/Ho%20Chi%20Minh/Quan%207/791903P00008%20-%20Grand%20Nest%20City/hinh_dai_dien_grand_nest_city.jpg\",\n                \"res_ward\": {\n                    \"name\": \"Phường Phú Thuận\"\n                },\n                \"res_district\": {\n                    \"name\": \"Quận 7\"\n                },\n                \"res_province\": {\n                    \"name\": \"Thành phố Hồ Chí Minh\"\n                },\n                \"category\": {\n                    \"_id\": \"5d8345efa2178d987366fdef\",\n                    \"category_name\": \"Dự án phức hợp\"\n                },\n                \"reaction_length\": 0,\n                \"total_views\": 0\n            },\n            {\n                \"_id\": \"5db80d0144ab3a16f4215ea1\",\n                \"description\": \"<!DOCTYPE html>\\n<html>\\n<head>\\n</head>\\n<body>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">Dự &aacute;n Grand Nest được thiết kế với 8 block với 3,580 căn hộ. Nội thất căn hộ được thiết kế h&agrave;i h&ograve;a, b&agrave;i tr&iacute; tiện nghi, thể hiện sự sang trọng v&agrave; hiện đại ở tất cả c&aacute;c ph&ograve;ng. Với h&igrave;nh khối kiến tr&uacute;c độc đ&aacute;o của cao ốc c&oacute; thể hạn chế &aacute;nh s&aacute;ng trực tiếp v&agrave;o căn hộ nhưng lại tận dụng được nguồn s&aacute;ng tự nhi&ecirc;n v&agrave;o mọi vị tr&iacute; c&ocirc;ng tr&igrave;nh.</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">&nbsp;</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-size: 11pt; line-height: 107%; font-family: Arial, sans-serif; color: #000000;\\\">Dự &aacute;n Grand Nest kh&ocirc;ng chỉ sở hữu hệ thống tiện &iacute;ch ngoại khu hiện đại, khu căn hộ Grand Nest City c&ograve;n được t&iacute;ch hợp những tiện &iacute;ch cao cấp đồng bộ như: 3 c&ocirc;ng vi&ecirc;n c&acirc;y xanh, ph&ograve;ng gym, 3 hồ bơi hiện đại, 2 hồ đều tiết, trung t&acirc;m thương mại,... cung cấp đầy đủ mọi tiện nghi cho cư d&acirc;n tại Grand Nest. </span></p>\\n</body>\\n</html>\",\n                \"code\": \"791903P00009\",\n                \"name\": \"Grand Nest City – A\",\n                \"image\": \"images/Project/Ho%20Chi%20Minh/Quan%207/791903P00008%20-%20Grand%20Nest%20City/hinh_dai_dien_grand_nest_city.jpg\",\n                \"res_ward\": {\n                    \"name\": \"Phường Phú Thuận\"\n                },\n                \"res_district\": {\n                    \"name\": \"Quận 7\"\n                },\n                \"res_province\": {\n                    \"name\": \"Thành phố Hồ Chí Minh\"\n                },\n                \"category\": {\n                    \"_id\": \"5d8345fca2178d987366ff40\",\n                    \"category_name\": \"Dự án chung cư\"\n                },\n                \"reaction_length\": 0,\n                \"total_views\": 0\n            },\n            {\n                \"_id\": \"5db80d0144ab3a16f4215ead\",\n                \"description\": \"<!DOCTYPE html>\\n<html>\\n<head>\\n</head>\\n<body>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">Khang Th&ocirc;ng Apartment l&agrave; t&ograve;a nh&agrave; đa năng, cao 19 tầng với 2 tầng hầm. Dự &aacute;n nằm tr&ecirc;n khu diện t&iacute;ch đất rộng gần 3,394 m&sup2; với khoảng 32,250 m&sup2; diện t&iacute;ch s&agrave;n x&acirc;y dựng. Trong đ&oacute; diện t&iacute;ch 2 tầng hầm tr&ecirc;n 5,093 m&sup2;, diện t&iacute;ch 5 tầng trung t&acirc;m thương mại khoảng 8,660 m&sup2;, diện t&iacute;ch 14 tầng căn hộ v&agrave; penthouse khoảng 18,729 m&sup2;.</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt 51.3pt; text-align: justify; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">+ Tầng 1: sảnh đ&oacute;n, ng&acirc;n h&agrave;ng, c&aacute;c gian h&agrave;ng thương mại &ndash; dịch vụ.</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt 51.3pt; text-align: justify; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">+ Tầng 2: bố tr&iacute; khu si&ecirc;u thị.</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt 51.3pt; text-align: justify; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">+ Tầng 3: khu nh&agrave; h&agrave;ng.</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt 51.3pt; text-align: justify; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">+ Tầng 4: khu văn ph&ograve;ng cho thu&ecirc;, nh&agrave; trẻ, trường học.</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt 51.3pt; text-align: justify; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">+ Tầng 5: sinh hoạt cộng đồng với khu giải tr&iacute;, thư gi&atilde;n, ph&ograve;ng tập thể dục thể thao đa năng,...</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt 51.3pt; text-align: justify; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-size: 11pt; line-height: 107%; font-family: Arial, sans-serif; color: #000000;\\\">+ Tầng 6 &ndash; Tầng 19: 204 căn hộ v&agrave; 12 căn penthouse với nhiều mẫu thiết kế kh&aacute;c nhau. Diện t&iacute;ch mỗi căn hộ từ 60 m&sup2; đến 171 m&sup2; với 2 &ndash; 3 ph&ograve;ng ngủ. Mỗi ph&ograve;ng được trang thiết bị nội thất cao cấp, hiện đại, lắp đặt ho&agrave;n chỉnh hệ thống c&aacute;p truyền h&igrave;nh, internet. Đặc biệt, c&aacute;c ph&ograve;ng đều c&oacute; g&oacute;c nh&igrave;n ra ngo&agrave;i, lu&ocirc;n đảm bảo được sự th&ocirc;ng tho&aacute;ng nhờ thiết kế mở xung quanh. </span></p>\\n</body>\\n</html>\",\n                \"code\": \"791903P00013\",\n                \"name\": \"Khang Thông Apartment\",\n                \"image\": \"images/Project/Ho%20Chi%20Minh/Quan%207/791903P00013%20-%20Khang%20Thong%20Apartment/hinh_dai_dien_khang_thong_apartment.jpg\",\n                \"investor\": {\n                    \"_id\": \"5db814ca5d0a533960ad5bd8\",\n                    \"company_name\": \"Công ty cổ phần Tập đoàn Khang thông\",\n                    \"display_name\": \"Khang Thong Group\",\n                    \"code\": \"IV.0759\"\n                },\n                \"res_ward\": {\n                    \"name\": \"Phường Phú Thuận\"\n                },\n                \"res_district\": {\n                    \"name\": \"Quận 7\"\n                },\n                \"res_province\": {\n                    \"name\": \"Thành phố Hồ Chí Minh\"\n                },\n                \"category\": {\n                    \"_id\": \"5d8345fca2178d987366ff40\",\n                    \"category_name\": \"Dự án chung cư\"\n                },\n                \"reaction_length\": 0,\n                \"total_views\": 0\n            },\n            {\n                \"_id\": \"5db80d0144ab3a16f4215ee6\",\n                \"description\": \"<!DOCTYPE html>\\n<html>\\n<head>\\n</head>\\n<body>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">Căn hộ Greeny Riverview được quy hoạch tr&ecirc;n diện t&iacute;ch đất 8,526 m&sup2;, với quy m&ocirc; dự &aacute;n l&agrave; 3 th&aacute;p với chiều cao của mỗi th&aacute;p l&agrave; 25 tầng, tổng số căn hộ l&agrave; 690 căn.</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">&nbsp;</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-size: 11pt; line-height: 107%; font-family: Arial, sans-serif; color: #000000;\\\">Với phong c&aacute;ch thiết kế hiện đại theo chuẩn Singapore, c&aacute;c căn hộ tại đ&acirc;y sẽ mang đầy đủ c&aacute;c yếu tố phong thủy cho kh&aacute;ch h&agrave;ng khi muốn sở hữu căn hộ bậc nhất tại khu nam của th&agrave;nh phố Hồ Ch&iacute; Minh. </span></p>\\n</body>\\n</html>\",\n                \"code\": \"791905P00003\",\n                \"name\": \"Greeny Riverview\",\n                \"image\": \"images/Project/Ho%20Chi%20Minh/Quan%207/791905P00003%20-%20Greeny%20Riverview/hinh_dai_dien_greeny_riverview.jpg\",\n                \"investor\": {\n                    \"_id\": \"5db814c65d0a533960ad55fa\",\n                    \"company_name\": \"Công ty cổ phần Tập đoàn Đất Xanh\",\n                    \"display_name\": \"Dat Xanh Group\",\n                    \"code\": \"IV.0008\"\n                },\n                \"res_ward\": {\n                    \"name\": \"Phường Tân Kiểng\"\n                },\n                \"res_district\": {\n                    \"name\": \"Quận 7\"\n                },\n                \"res_province\": {\n                    \"name\": \"Thành phố Hồ Chí Minh\"\n                },\n                \"category\": {\n                    \"_id\": \"5d8345fca2178d987366ff40\",\n                    \"category_name\": \"Dự án chung cư\"\n                },\n                \"reaction_length\": 0,\n                \"total_views\": 0\n            },\n            {\n                \"_id\": \"5db80d0244ab3a16f4215f79\",\n                \"description\": \"<!DOCTYPE html>\\n<html>\\n<head>\\n</head>\\n<body>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">Căn hộ Sun River được x&acirc;y dựng tr&ecirc;n khu đất c&oacute; quy m&ocirc; 4,585 m&sup2; với 1 bock cao 22 tầng v&agrave; 1 tầng hầm.</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt 51.3pt; text-align: justify; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">+ Tầng hầm: c&oacute; quy m&ocirc; 1,491 m&sup2; được sử dụng l&agrave;m b&atilde;i giữ xe.</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt 51.3pt; text-align: justify; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">+ Tầng trệt: khu sinh hoạt cộng đồng v&agrave; thương mại dịch vụ.</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt 51.3pt; text-align: justify; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">+ Tầng 2 &ndash; Tầng 22: khu căn hộ với 136 căn diện t&iacute;ch từ 49.7 &ndash; 77.23 m&sup2;.</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt 51.3pt; text-align: justify; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-size: 11pt; line-height: 107%; font-family: Arial, sans-serif; color: #000000;\\\">+ Tầng thượng: nh&agrave; h&agrave;ng v&agrave; cafe. </span></p>\\n</body>\\n</html>\",\n                \"code\": \"791908P00001\",\n                \"name\": \"Chung cư Sunriver\",\n                \"image\": \"images/Project/Ho%20Chi%20Minh/Quan%207/791908P00001%20-%20Can%20ho%20Sunriver/hinh_dai_dien_can_ho_sunriver.jpg\",\n                \"investor\": {\n                    \"_id\": \"5db814c65d0a533960ad55fa\",\n                    \"company_name\": \"Công ty cổ phần Tập đoàn Đất Xanh\",\n                    \"display_name\": \"Dat Xanh Group\",\n                    \"code\": \"IV.0008\"\n                },\n                \"res_ward\": {\n                    \"name\": \"Phường Tân Quy\"\n                },\n                \"res_district\": {\n                    \"name\": \"Quận 7\"\n                },\n                \"res_province\": {\n                    \"name\": \"Thành phố Hồ Chí Minh\"\n                },\n                \"category\": {\n                    \"_id\": \"5d8345fca2178d987366ff40\",\n                    \"category_name\": \"Dự án chung cư\"\n                },\n                \"reaction_length\": 0,\n                \"total_views\": 0\n            },\n            {\n                \"_id\": \"5db80d0244ab3a16f4215fd3\",\n                \"description\": \"<!DOCTYPE html>\\n<html>\\n<head>\\n</head>\\n<body>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">The Avila 3 được thiết kế l&agrave; 1 t&ograve;a nh&agrave; cao 22 tầng gồm 1 tầng hầm, 1 tầng lửng hầm, 3 tầng khối đế v&agrave; 19 tầng khối th&aacute;p, với 285 căn hộ c&oacute; c&aacute;c diện t&iacute;ch từ 50 m&sup2; đến 70 m&sup2;, thiết kế từ 1 đến 3 ph&ograve;ng ngủ.</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">&nbsp;</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-size: 11pt; line-height: 107%; font-family: Arial, sans-serif; color: #000000;\\\">The Avila 3 mang đến cho cư d&acirc;n một cuộc sống thoải m&aacute;i, ho&agrave;n hảo, thư gi&atilde;n trong từng khoảnh khắc với những dịch vụ đầy đủ như trung t&acirc;m thương mại, si&ecirc;u thị hiện đại, bar, caf&eacute;, nh&agrave; h&agrave;ng, spa, ph&ograve;ng tập gym,... c&ocirc;ng vi&ecirc;n c&acirc;y xanh, khu quảng trường tập trung, khu vui chơi trẻ em, nh&agrave; trẻ,... khiến kh&aacute;ch h&agrave;ng kh&ocirc;ng thể bỏ qua khi sống tại nơi đ&acirc;y. </span></p>\\n</body>\\n</html>\",\n                \"code\": \"792008P00015\",\n                \"name\": \"The Avila 3\",\n                \"image\": \"images/Project/Ho%20Chi%20Minh/Quan%208/792008P00015%20-%20The%20Avila%203/hinh_dai_dien_the_avila_3.jpg\",\n                \"investor\": {\n                    \"_id\": \"5db814c95d0a533960ad5aca\",\n                    \"company_name\": \"Công ty TNHH Sản xuất – Thương mại – Dịch vụ Thái Bảo\",\n                    \"display_name\": \"Thái Bảo Group\",\n                    \"code\": \"IV.0624\"\n                },\n                \"res_ward\": {\n                    \"name\": \"Phường 16\"\n                },\n                \"res_district\": {\n                    \"name\": \"Quận 8\"\n                },\n                \"res_province\": {\n                    \"name\": \"Thành phố Hồ Chí Minh\"\n                },\n                \"category\": {\n                    \"_id\": \"5d8345fca2178d987366ff40\",\n                    \"category_name\": \"Dự án chung cư\"\n                },\n                \"reaction_length\": 0,\n                \"total_views\": 0\n            },\n            {\n                \"_id\": \"5db80d0244ab3a16f4215fdc\",\n                \"description\": \"<!DOCTYPE html>\\n<html>\\n<head>\\n</head>\\n<body>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">Chung cư Khang Gia được thiết kế l&agrave; 1 t&ograve;a nh&agrave; cao 15 tầng với tổng số 146 căn hộ với nhiều diện t&iacute;ch từ 45 m&sup2;, 47 m&sup2;, 49 m&sup2;, 59 m&sup2;, 69 m&sup2;.</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">&nbsp;</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-size: 11pt; line-height: 107%; font-family: Arial, sans-serif; color: #000000;\\\">Ngo&agrave;i việc được thừa hưởng từ những tiện &iacute;ch xung quanh, dự &aacute;n Khang Gia c&ograve;n được tận hưởng những tiện &iacute;ch nội khu kh&ocirc;ng thua k&eacute;m như khu&ocirc;n vi&ecirc;n c&acirc;y xanh lớn v&agrave; 2 tầng thương mại với hệ thống nh&agrave; h&agrave;ng, ph&ograve;ng gym, coffee shop, si&ecirc;u thị,... đ&aacute;p ứng nhu cầu về tiện &iacute;ch cho cư d&acirc;n trong căn hộ. Diện t&iacute;ch để xe 1,823 m&sup2; (tầng hầm c&oacute; 1,105 m&sup2; v&agrave; tầng 2 c&oacute; 718 m&sup2;) đủ khả năng đ&aacute;p ứng chỗ đậu xe hơi v&agrave; hệ thống an ninh hiện đại cho người d&acirc;n an t&acirc;m định cư trong t&ograve;a nh&agrave;. </span></p>\\n</body>\\n</html>\",\n                \"code\": \"792011P00001\",\n                \"name\": \"Chung cư Khang Gia\",\n                \"image\": \"images/Project/Ho%20Chi%20Minh/Quan%208/792011P00001%20-%20Can%20ho%20Khang%20Gia/hinh_dai_dien_can_ho_khang_gia.jpg\",\n                \"res_ward\": {\n                    \"name\": \"Phường 4\"\n                },\n                \"res_district\": {\n                    \"name\": \"Quận 8\"\n                },\n                \"res_province\": {\n                    \"name\": \"Thành phố Hồ Chí Minh\"\n                },\n                \"category\": {\n                    \"_id\": \"5d8345fca2178d987366ff40\",\n                    \"category_name\": \"Dự án chung cư\"\n                },\n                \"reaction_length\": 0,\n                \"total_views\": 0\n            },\n            {\n                \"_id\": \"5db80d0344ab3a16f42161e9\",\n                \"description\": \"<!DOCTYPE html>\\n<html>\\n<head>\\n</head>\\n<body>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">Harina View được thiết kế gồm 1 block cao 14 tầng với mật độ x&acirc;y dựng chiếm 40%. Trong đ&oacute;, tầng trệt l&agrave; khu vực d&agrave;nh cho c&aacute;c căn shophouse v&agrave; officetel, tầng 1 v&agrave; 2 l&agrave; tầng hệ thống c&aacute;c tiện &iacute;ch, từ tầng 3 trở l&ecirc;n l&agrave; tầng c&aacute;c căn hộ v&agrave; 1 tầng hầm để xe. Dự &aacute;n Harina View dự kiến cung ứng khoảng 141 căn hộ ra thị trường. Cụ thể gồm 9 căn officetel, 121 căn hộ ti&ecirc;u chuẩn (thiết kế 2 &ndash; 3 ph&ograve;ng ngủ) v&agrave; 11 căn penthouse. Diện t&iacute;ch mỗi căn hộ Harina View dao động từ 48.24 &ndash; 72 m&sup2; (2 &ndash; 3 ph&ograve;ng ngủ).</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-family: Arial, sans-serif; color: #000000;\\\">&nbsp;</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"font-size: 11pt; line-height: 107%; font-family: Arial, sans-serif; color: #000000;\\\">Hệ thống tiện &iacute;ch tại Harina View Thủ Đức gồm hồ bơi, si&ecirc;u thị, nh&agrave; trẻ, spa, ph&ograve;ng tập gym,... </span></p>\\n</body>\\n</html>\",\n                \"code\": \"792403P00007\",\n                \"name\": \"Harina View\",\n                \"image\": \"images/Project/Ho%20Chi%20Minh/Quan%20Thu%20Duc/792403P00007%20-%20Harina%20View/hinh_dai_dien_harina_view.jpg\",\n                \"investor\": {\n                    \"_id\": \"5db814c85d0a533960ad590e\",\n                    \"company_name\": \"Công ty cổ phần Đầu tư Thịnh Phúc Hải\",\n                    \"display_name\": \"Thịnh Phúc Hải\",\n                    \"code\": \"IV.0402\"\n                },\n                \"res_ward\": {\n                    \"name\": \"Phường Hiệp Bình Chánh\"\n                },\n                \"res_district\": {\n                    \"name\": \"Quận Thủ Đức\"\n                },\n                \"res_province\": {\n                    \"name\": \"Thành phố Hồ Chí Minh\"\n                },\n                \"category\": {\n                    \"_id\": \"5d8345fca2178d987366ff40\",\n                    \"category_name\": \"Dự án chung cư\"\n                },\n                \"reaction_length\": 0,\n                \"total_views\": 0\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The <code>server</code> was error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 5XX Internal Server Error\n{\n  \"status\": \"false\",\n  \"error\": \"Server lỗi\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./project.js",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "/project/detail",
    "title": "Get Project Detail",
    "name": "GetProjectDetail",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Project ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"id\": 5db80cfe44ab3a16f4215886           \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Project Detail.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n    \"_id\": \"5db80cfe44ab3a16f4215886\",\n    \"create_uid\": {\n        \"_id\": \"5dbb9d3b65bb02ebb0ec7fb3\",\n        \"email\": \"tu.nguyen@asset.vn\",\n        \"avatar\": \"\",\n        \"first_name\": \"Asset Data\",\n        \"last_name\": \"Team\",\n        \"phone\": \"3000000001\"\n    },\n    \"create_date\": \"2019-10-29T09:57:00.655Z\",\n    \"write_uid\": null,\n    \"write_date\": \"2019-10-29T09:57:00.655Z\",\n    \"company_id\": \"\",\n    \"status\": true,\n    \"delete_id\": null,\n    \"description\": {\n        \"description\": \"Gồm 3 khu nhà liên kế LK1, LK2, LK3\"\n    },\n    \"reaction\": [],\n    \"sub_image\": [],\n    \"code\": \"790101P00002\",\n    \"parent_id\": \"5db80cfe44ab3a16f4215883\",\n    \"points\": {\n        \"type\": \"Point\",\n        \"coordinates\": [\n            106.598754261604,\n            10.6845769284695\n        ]\n    },\n    \"polygons\": {\n        \"type\": \"Polygon\",\n        \"coordinates\": [\n            [\n                [\n                    106.597746687,\n                    10.68441784900006\n                ],\n                [\n                    106.5977364440001,\n                    10.68403031900004\n                ],\n                [\n                    106.599022469,\n                    10.68381704800004\n                ],\n                [\n                    106.5990279050001,\n                    10.68428372700004\n                ],\n                [\n                    106.5994064820001,\n                    10.68427147900007\n                ],\n                [\n                    106.599410413,\n                    10.68480805300004\n                ],\n                [\n                    106.5996669500001,\n                    10.68481070900003\n                ],\n                [\n                    106.599689734,\n                    10.68507071100004\n                ],\n                [\n                    106.5991819860001,\n                    10.68509009700006\n                ],\n                [\n                    106.5991677790001,\n                    10.68550970200005\n                ],\n                [\n                    106.598865157,\n                    10.68548856900003\n                ],\n                [\n                    106.5989555750001,\n                    10.68481591000005\n                ],\n                [\n                    106.5989781950001,\n                    10.68434031400005\n                ],\n                [\n                    106.597746687,\n                    10.68441784900006\n                ]\n            ]\n        ]\n    },\n    \"ward_id\": \"5dc237d1d508de3c4c58bb75\",\n    \"category_id\": \"5d834606a2178d987367003a\",\n    \"name\": \"HQC An Phú Tây - U\",\n    \"apartment_project_unit_id\": \"dự án chung cư\",\n    \"urban_project\": 1,\n    \"urban_project_unit_id\": \"dự án đô thị\",\n    \"resort_project\": null,\n    \"ch_unit_id\": \"CH\",\n    \"sh_unit_id\": \"SH\",\n    \"oft_unit_id\": \"OFT\",\n    \"tmdv_unit_id\": \"m2 TMDV\",\n    \"hotel_room_unit_id\": \"phòng khách sạn\",\n    \"villa_unit_id\": \"biệt thự\",\n    \"private_house_unit_id\": \"Nhà riêng\",\n    \"row_house_unit_id\": \"nhà phố liên kế\",\n    \"lands\": 58,\n    \"lands_unit_id\": \"nền đất\",\n    \"condotel_unit_id\": \"condotel\",\n    \"bungalow_unit_id\": \"bungalow\",\n    \"land_area\": 2235,\n    \"land_area_unit_id\": \"m2\",\n    \"cons_status\": \"5db66cb206d6a109b1513792\",\n    \"planing_category_id\": \"5dc38bf3b276eb1c887806a2\",\n    \"floor_unit_id\": \"tầng\",\n    \"block_unit_id\": \"block\",\n    \"search\": \"hqc an phu tay u\",\n    \"__v\": 1,\n    \"comment\": [],\n    \"image\": \"images/Project/Ho%20Chi%20Minh/Huyen%20Binh%20Chanh/790101P00001%20-%20HQC%20An%20Phu%20Tay/hinh_dai_dien_hqc_an_phu_tay.jpg\",\n    \"location\": \"N/A\",\n    \"investor_id\": [\n        \"5db814ca5d0a533960ad5baa\"\n    ],\n    \"handover_time\": \"2018-09-02T00:00:00.000Z\",\n    \"contractor_id\": [],\n    \"designer_id\": [],\n    \"manager_id\": [],\n    \"resort_project_unit_id\": \"dự án nghỉ dưỡng\",\n    \"sale_status\": \"5dde360bd59979b3b85cfaf3\",\n    \"rating\": [],\n    \"asset_rating\": 0,\n    \"legal\": \"Tình trạng pháp lý chưa rõ\",\n    \"legal_info_id\": \"5e465f840567113decd48019\",\n    \"model_house_info_id\": \"5e465f840567113decd4801a\",\n    \"sale_price_unit_id\": \"triệu/căn\",\n    \"comme_project_unit_id\": \"dự án TMDV\",\n    \"hotel_project_unit_id\": \"dự án khách sạn\",\n    \"cemet_unit_id\": \"BĐS hoa viên\",\n    \"farm_unit_id\": \"trang trại\",\n    \"harbo_unit_id\": \"bến cảng\",\n    \"indu_unit_id\": \"dự án KCN\",\n    \"bindu_unit_id\": \"BĐS KCN\",\n    \"edme_unit_id\": \"dự án GD - YT\",\n    \"bedme_unit_id\": \"BĐS GD - YT\",\n    \"hotel_unit_id\": \"block khách sạn\",\n    \"resvl_unit_id\": \"biệt thự nghỉ dưỡng\",\n    \"small_unit_id\": \"block TTTM\",\n    \"office_unit_id\": \"block VP\",\n    \"category\": {\n        \"_id\": \"5d834606a2178d987367003a\",\n        \"create_uid\": \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n        \"create_date\": \"2019-07-10T13:01:26.292Z\",\n        \"write_uid\": \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n        \"write_date\": \"2019-09-03T02:09:51.852Z\",\n        \"company_id\": \"ROOT\",\n        \"status\": true,\n        \"delete_id\": \"2ea1eb33-0681-4ef5-a10b-151ef41c028d\",\n        \"category_name\": \"Dự án Khu đô thị\",\n        \"parent_id\": \"\",\n        \"category_code\": \"UPROJ\",\n        \"sequence\": 4,\n        \"keyworks\": \"\",\n        \"description\": \"\",\n        \"color\": \"#B7BAF3\"\n    },\n    \"investorDetail\": [\n        {\n            \"_id\": \"5db814ca5d0a533960ad5baa\",\n            \"create_uid\": \"5dbb9fbbebd384b5e4ecc368\",\n            \"create_date\": \"2020-01-16T09:04:52.071Z\",\n            \"write_uid\": \"5d679819325ab70ab0157ce5\",\n            \"write_date\": \"2019-10-29T10:14:41.057Z\",\n            \"company_id\": \"ROOT\",\n            \"status\": true,\n            \"delete_id\": null,\n            \"parent_id\": null,\n            \"tel\": \"02839913080\",\n            \"hotline\": \"\",\n            \"email\": \"\",\n            \"website\": \"www.hoangquan.com.vn\",\n            \"address1\": \"286-288 Huỳnh Văn Bánh, Phường 11, Quận Phú Nhuận, Thành phố Hồ Chí Minh\",\n            \"address\": \"286-288 Huỳnh Văn Bánh\",\n            \"company_name\": \"Công ty cổ phần Tư vấn – Thương mại – Dịch vụ địa ốc Hoàng Quân\",\n            \"display_name\": \"Hoang Quan Corp\",\n            \"founded_year\": 2007,\n            \"legal_representative\": \"Trương Anh Tuấn\",\n            \"company_type\": \"CTCP\",\n            \"tax_code\": \"0302087938\",\n            \"bank_account\": \"\",\n            \"bank_name\": \"\",\n            \"bank_branch\": \"\",\n            \"description\": \"<!DOCTYPE html>\\n<html>\\n<head>\\n</head>\\n<body>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.9pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"color: #000000;\\\">Được th&agrave;nh lập v&agrave;o năm 2000, đến nay Ho&agrave;ng Qu&acirc;n Group đ&atilde; trở th&agrave;nh một trong những tập đo&agrave;n h&agrave;ng đầu Việt Nam về đầu tư kinh doanh bất động sản. Đặc biệt, Ho&agrave;ng Qu&acirc;n l&agrave; doanh nghiệp ti&ecirc;n phong đầu tư x&acirc;y dựng v&agrave; ph&aacute;t triển nh&agrave; ở x&atilde; hội tại khu vực ph&iacute;a Nam qua việc triển khai h&agrave;ng loạt c&aacute;c dự &aacute;n c&oacute; quy m&ocirc; lớn tại Th&agrave;nh phố Hồ Ch&iacute; Minh, Cần Thơ, Vĩnh Long, T&acirc;y Ninh, B&igrave;nh Thuận, Nha Trang,... cung cấp h&agrave;ng chục ng&agrave;n căn hộ đến cho người d&acirc;n.</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.9pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\">&nbsp;</p>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.9pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"color: #000000;\\\">Ngay từ l&uacute;c đặt nền m&oacute;ng x&acirc;y dựng, Ho&agrave;ng Qu&acirc;n lu&ocirc;n hướng đến kh&aacute;ch h&agrave;ng với phương ch&acirc;m \\\"Tri thức &ndash; S&aacute;ng tạo &ndash; Ti&ecirc;n phong\\\", đem đến cho kh&aacute;ch h&agrave;ng những sản phẩm với gi&aacute; trị chuy&ecirc;n nghiệp, chất lượng v&agrave; dịch vụ tốt nhất. B&ecirc;n cạnh thế mạnh về lĩnh vực bất động sản, Ho&agrave;ng Qu&acirc;n c&ograve;n tăng cường đầu tư ph&aacute;t triển lĩnh vực gi&aacute;o dục, t&agrave;i ch&iacute;nh. Với những th&agrave;nh quả đ&atilde; đạt được trong những năm qua, Ho&agrave;ng Qu&acirc;n sẽ c&agrave;ng tự h&agrave;o v&agrave; vững bước hơn nữa với mục ti&ecirc;u trở th&agrave;nh tập đo&agrave;n &ldquo;Bất động sản &ndash; Gi&aacute;o dục &ndash; T&agrave;i ch&iacute;nh&rdquo; h&ugrave;ng mạnh n&ecirc;u cao tinh thần &ldquo;Vững bước ti&ecirc;n phong &ndash; N&acirc;ng tầm cao mới&rdquo;.</span></p>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.9pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\">&nbsp;</p>\\n<p style=\\\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.9pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\\\"><span style=\\\"color: #000000;\\\">Từ khi th&agrave;nh lập, Ho&agrave;ng Qu&acirc;n đ&atilde; tự h&agrave;o l&agrave; c&ocirc;ng ty đầu ti&ecirc;n trong ng&agrave;nh địa ốc triển khai v&agrave; &aacute;p dụng Hệ thống Quản l&yacute; chất lượng ISO 9001:2008, v&agrave; cũng l&agrave; c&ocirc;ng ty đầu ti&ecirc;n tại Việt Nam x&acirc;y dựng quy tr&igrave;nh hoạt động bất động sản kh&eacute;p k&iacute;n từ m&ocirc;i giới, đến thiết kế, x&acirc;y dựng, thẩm định gi&aacute;, ph&aacute;p l&yacute;, đem lại hiệu quả kinh tế cao cho kh&aacute;ch h&agrave;ng. Hiện tại, hệ thống Ho&agrave;ng Qu&acirc;n c&oacute; 16 c&ocirc;ng ty th&agrave;nh vi&ecirc;n, 14 chi nh&aacute;nh &ndash; trung t&acirc;m giao dịch tr&ecirc;n khắp c&aacute;c tỉnh th&agrave;nh cả nước. Lượng kh&aacute;ch h&agrave;ng, đối t&aacute;c trong v&agrave; ngo&agrave;i nước tham gia g&oacute;p vốn đầu tư c&ugrave;ng Ho&agrave;ng Qu&acirc;n l&ecirc;n đến con số 10,000. Đội ngũ nh&acirc;n sự gần 1,000 nh&acirc;n vi&ecirc;n c&oacute; tr&igrave;nh độ chuy&ecirc;n m&ocirc;n cao (tiến sỹ, thạc sỹ, luật sư, chuy&ecirc;n vi&ecirc;n,...) mang phong c&aacute;ch phục vụ chuy&ecirc;n nghiệp.</span></p>\\n</body>\\n</html>\",\n            \"search\": \"CÔNG TY CỔ PHẦN TƯ VẤN - THƯƠNG MẠI - DỊCH VỤ ĐỊA ỐC HOÀNG QUÂN cong ty co phan tu van thuong mai dich vu dia oc hoang quan ĐỊA ỐC HOÀNG QUÂN dia oc hoang quan\",\n            \"points\": null,\n            \"icon\": \"\",\n            \"logo\": \"images/Company/0701%20-%200800/0736%20-%20Dia%20Oc%20Hoang%20Quan/logo_dia_oc_hoang_quan.png\",\n            \"code\": \"IV.0736\",\n            \"__v\": 0,\n            \"rating\": [],\n            \"rating_avg\": 0,\n            \"reaction\": [],\n            \"category_id\": \"5dafd01513818c28e0916318\",\n            \"banner\": \"\",\n            \"company_code\": \"0302087938\",\n            \"country_code\": \"(+84)\",\n            \"foreign_name\": \"\",\n            \"main_business\": \"Kinh doanh bất động sản, quyền sử dụng đất thuộc chủ sở hữu, chủ sử dụng hoặc đi thuê\",\n            \"operating_status\": \"Đang hoạt động\",\n            \"ward_id\": \"5dc237a6d508de3c4c58834a\",\n            \"type\": \"APPROVED\",\n            \"bank_id\": null\n        }\n    ],\n    \"landTypeDetail\": {\n        \"_id\": \"5dc38bf3b276eb1c887806a2\",\n        \"red\": \"255\",\n        \"green\": \"160\",\n        \"code\": \"ODT\",\n        \"name\": \"Đất ở tại đô thị\",\n        \"__v\": 0,\n        \"blue\": \"255\"\n    },\n    \"cons_statusDetail\": {\n        \"_id\": \"5db66cb206d6a109b1513792\",\n        \"create_uid\": \"5d679819325ab70ab0157ce5\",\n        \"create_date\": \"2019-10-04T01:12:09.606Z\",\n        \"write_uid\": \"5d679819325ab70ab0157ce5\",\n        \"write_date\": \"2019-10-04T01:12:09.606Z\",\n        \"company_id\": \"ROOT\",\n        \"status\": true,\n        \"delete_id\": null,\n        \"image_url\": \"\",\n        \"sequence\": 0,\n        \"parent_id\": null,\n        \"status_name\": \"Chưa rõ\",\n        \"fill\": \"#9c9c9c\",\n        \"marker_url\": \"Marker_chualam.svg\",\n        \"marker_hover_url\": \"marker_bds_ban_hover.svg\",\n        \"__v\": 0,\n        \"code\": \"PENDING\"\n    },\n    \"category_name\": \"Dự án Khu đô thị\",\n    \"create_user_role\": [\n        \"Asset Data Center\"\n    ],\n    \"wardDetail\": {\n        \"_id\": \"5dc237d1d508de3c4c58bb75\",\n        \"create_uid\": \"5d679819325ab70ab0157ce5\",\n        \"create_date\": \"2020-01-16T09:02:21.597Z\",\n        \"write_uid\": \"5d679819325ab70ab0157ce5\",\n        \"write_date\": \"2019-11-06T03:00:21.913Z\",\n        \"company_id\": \"ROOT\",\n        \"status\": true,\n        \"delete_id\": null,\n        \"reaction\": [],\n        \"code\": \"790101\",\n        \"name\": \"Xã An Phú Tây\",\n        \"type\": \"Xã\",\n        \"district_id\": \"5dc0d055ade2533578818bbb\",\n        \"points\": {\n            \"type\": \"Point\",\n            \"coordinates\": [\n                106.607859787,\n                10.6875390948\n            ]\n        },\n        \"__v\": 0\n    },\n    \"districtDetail\": {\n        \"_id\": \"5dc0d055ade2533578818bbb\",\n        \"create_uid\": \"5d679819325ab70ab0157ce5\",\n        \"create_date\": \"2020-01-16T09:03:10.342Z\",\n        \"write_uid\": \"5d679819325ab70ab0157ce5\",\n        \"write_date\": \"2019-11-05T01:28:42.327Z\",\n        \"company_id\": \"ROOT\",\n        \"status\": true,\n        \"delete_id\": null,\n        \"reaction\": [],\n        \"code\": \"7901\",\n        \"main_code\": \"01\",\n        \"name\": \"Huyện Bình Chánh\",\n        \"type\": \"Huyện\",\n        \"province_id\": \"5dc0cfc6bf871b3a3c6296bd\",\n        \"points\": {\n            \"type\": \"Point\",\n            \"coordinates\": [\n                106.575826672,\n                10.7337045834\n            ]\n        },\n        \"__v\": 0\n    },\n    \"provinceDetail\": {\n        \"_id\": \"5dc0cfc6bf871b3a3c6296bd\",\n        \"create_uid\": \"5d679819325ab70ab0157ce5\",\n        \"create_date\": \"2019-11-05T01:26:10.350Z\",\n        \"write_uid\": \"5d679819325ab70ab0157ce5\",\n        \"write_date\": \"2019-11-05T01:26:10.350Z\",\n        \"company_id\": \"ROOT\",\n        \"status\": true,\n        \"delete_id\": null,\n        \"reaction\": [],\n        \"country_id\": \"243\",\n        \"code\": \"79\",\n        \"name\": \"Thành phố Hồ Chí Minh\",\n        \"type\": \"Thành phố\",\n        \"__v\": 0,\n        \"points\": {\n            \"type\": \"Point\",\n            \"coordinates\": [\n                106.704809484,\n                10.735237004\n            ]\n        }\n    },\n    \"legal_info\": {\n        \"investment_approval\": {\n            \"status\": \"Có\",\n            \"file\": \"\\\\project\\\\5db80cfe44ab3a16f4215886\\\\5db80cfe44ab3a16f4215886-investment_approval_link-Approve Product Diagram (DATA).png-1581670326405.png\"\n        },\n        \"me_drawing_for_per_apartment\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"acceptance_of_fire_protection_system\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"acceptance_of_works\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"agreement_on_connection_of_electricity_and_water_works\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"agreement_on_traffic_connection\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"agreement_redbook_investor_and_buyer\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"approval_of_backfill_design\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"approval_of_basic_design\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"approval_of_construction_design\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"approval_of_engineering_design\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"approval_of_fire_prevention_and_fighting\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"approval_of_infrastructure_design\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"bank_guarantee\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"basement_foundation_acceptance\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"certificate_of_business_registration\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"certificate_of_investment_registration\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"certification_of_investor\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"confirmation_of_infrastructure_completion\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"construction_permit\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"construction_survey_report\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"deal_of_construction_height\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"deal_of_embankment_edges\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"decisions_on_land_allocation_land_lease\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"economic_technical_report\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"environmental_impact_assessment_report\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"escrow_agreement\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"feasibility_study_repor\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"finish_dossiers\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"home_recieving_notice_to_buyers\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"house_numbering_decision\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"location_drawing\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"minutes_of_handover_of_houses_or_construction_to_buyers\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"notice_of_approval_of_sample_contract\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"notice_of_eligibility_for_capital_raising\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"notification_of_payment_of_land_use\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"notification_of_the_residences_eligibility_for_sale\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"notifications_of_request_for_registration_fee\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"redbook_buyer\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"redbook_land\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"strategic_environmental_assessment_report\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"status\": true,\n        \"_id\": \"5e465f840567113decd48019\",\n        \"__v\": 0,\n        \"detailed_planning_1_500\": {\n            \"status\": \"Chưa rõ\",\n            \"file\": null\n        },\n        \"create_date\": \"2020-03-20T09:26:37.073Z\",\n        \"write_date\": \"2020-03-20T09:26:37.073Z\"\n    },\n    \"cons_design_info\": {\n        \"_id\": null,\n        \"__v\": 0,\n        \"int_finishing\": {\n            \"wooden\": {\n                \"bed\": \"Chưa có\"\n            }\n        },\n        \"create_date\": \"2020-03-20T09:26:37.076Z\",\n        \"write_date\": \"2020-03-20T09:26:37.076Z\",\n        \"detail\": {}\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "idProject",
            "description": "<p>The <code>idProject</code> was null.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "project",
            "description": "<p>The <code>project</code> was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The <code>server</code> was error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 4XX Bad Request\n{\n  \"status\": \"false\",\n  \"error\": \"Thiếu thông tin\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 4XX Not Found\n{\n  \"status\": \"false\",\n  \"error\": \"Không tìm thấy thông tin dự án\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 5XX Internal Server Error\n{\n  \"status\": \"false\",\n  \"error\": \"Server lỗi\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./project.js",
    "groupTitle": "Project"
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
