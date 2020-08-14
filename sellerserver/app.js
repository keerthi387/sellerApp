const express=require('express');


const propertydata=require('./src/model/propertydata');

const userdata=require('./src/model/registerdata');

const cors=require('cors');

var bodyparser=require('body-parser');

var app=new express();

app.use(cors());

app.use(bodyparser.json());

app.get('/',function(req,res){

    res.header('Access-Control-Allow-Origin',"*");
res.header("Access-Control-Allow-Methos: GET,POST,PATCH,PUT,DELETE,OPTIONS");
    propertydata.find()
    .then(function(property){

   res.send(property);

    })

})

app.get('/property',function(req,res){

    res.header('Access-Control-Allow-Origin',"*");
res.header("Access-Control-Allow-Methos: GET,POST,PATCH,PUT,DELETE,OPTIONS");
    propertydata.find()
    .then(function(property){

   res.send(property);

    })

})

app.post('/newproperty',function(req,res){
    res.header('Access-Control-Allow-Origin',"*");
    res.header("Access-Control-Allow-Methos: GET,POST,PATCH,PUT,DELETE,OPTIONS");

    console.log(req.body);

    var property={

        propertyName:req.body.property.propertyName,
        propertyCode:req.body.property.propertyCode,
        description:req.body.property.description,
        rent:req.body.property.rent,
        starrating:req.body.property.starrating,
        imageUrl:req.body.property.imageUrl,
        address:req.body.property.address,
        contactnumber:req.body.property.contactnumber


    }

  var property=new propertydata(property);
  property.save();
})
// app.get('/readmore',function(req,res){

//     res.header('Access-Control-Allow-Origin',"*");
//     res.header("Access-Control-Allow-Methos: GET,POST,PATCH,PUT,DELETE,OPTIONS");
//     propertydata.find()
//         .then(function(property){
    
//        res.send(property);
    
//         })
    


// })


app.post('/register',function(req,res){
    res.header('Access-Control-Allow-Origin',"*");
    res.header("Access-Control-Allow-Methos: GET,POST,PATCH,PUT,DELETE,OPTIONS");
    
    console.log(req.body);

    var user={


        username:req.body.user.username,
        password:req.body.user.password,
        firstname:req.body.user.firstname,
        lastname:req.body.user.lastname,
        contactno:req.body.user.contactno

    }

    var user=new userdata(user); 
user.save();

});

app.get('/readmore/:id', function(req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION');
    const id = req.params.id;
    console.log(id + "id current");
    propertydata.findOne({ _id: id })
        .then(function(products) {
            console.log(products);
            res.send(products);
        });
});

app.get('/getfulldata/:id',function(req,res){


    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION');
    const id = req.params.id;
    console.log(id + "id current");
    propertydata.findOne({ _id: id })
        .then(function(products) {
            console.log(products);
            res.send(products);
        });

})

app.post('/delete',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTION');
    console.log(req.body);
    var id = req.body.id;
    console.log(id + "id get");
    propertydata.deleteOne({_id : id})
    .then(products=>{
        console.log(products);
        res.send(products);
    });
});
app.put('/update/:id', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION');
    const id = req.params.id;
    console.log(id + "id is updated");
    console.log(req.body);
    // var product = {
    //     propertyName:req.body.property.propertyName,
    //     propertyCode:req.body.property.propertyCode,
    //     description:req.body.property.description,
    //     rent:req.body.property.rent,
    //     starrating:req.body.property.starrating,
    //     imageUrl:req.body.property.imageUrl,
    //     address:req.body.property.address,
    //     contactnumber:req.body.property.contactnumber
    // }
    var product = {
        propertyName:req.body.propertyName,
        propertyCode:req.body.propertyCode,
        description:req.body.description,
        rent:req.body.rent,
        starrating:req.body.starrating,
        imageUrl:req.body.imageUrl,
        address:req.body.address,
        contactnumber:req.body.contactnumber
    }
    
    console.log(product);
    // var product = new ProductData(product);
    // product.save();
    propertydata.findOneAndUpdate({_id:id},{'$set':{ propertyName:product.propertyName,
        propertyCod:product.propertyCode, description:product.description, rent:product.rent,
        starRating:product.starrating, imageUrl:product.imageUrl,address:product.address,contactnumber:product.contactnumber}})
    .then((item)=>{
        console.log(item);
        item.save();

        console.log("Update Success");
    })
    

});


app.get('/login',function(req,res){

    res.header('Access-Control-Allow-Origin',"*");
    res.header("Access-Control-Allow-Methos: GET,POST,PATCH,PUT,DELETE,OPTIONS");

    var user=req.body.username;
    var pass=req.body.password;
    userdata.findOne({username:user,password:pass})
    .then(function(data){
        if(data.username==user&&data.password==pass){
            res.redirect('/products');
        }
       
    })
    .catch(function(){
    res.redirect("/");
    })


})

app.listen(3000,function(){
    console.log("Port running good");
});