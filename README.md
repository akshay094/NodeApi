Make Your Own Rest Api Using 
-Node
-Express
-Mongodb (localhost)
-Mongoose
-validtor
-ThunderClient/Postman for Testing

Folder Structure
├── package.json
├── package-lock.json
├── README.md
└── src
    ├── app.js
    ├── db
    │   └── conn.js
    └── models
        └── students.js

The db folder contains code to connect our mongodb running on localmachine
to our project , look in conn.js

Mongoose is the ODM for `BASE` type databases like mongodb , provides methods to 
create `models` & `schema`

The code for creating collection is in student.js file , forming a collections named students
& schema defined along with validators

db.js & students.js imported in app.js , the code for running the server & url mappings written 
using express