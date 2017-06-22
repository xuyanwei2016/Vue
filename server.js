/*var express=require('express');
var app=express();
//做一个静态服务中间件 用来返回vue1.js和vue-resource.js
app.use(express.static(__dirname));//已当前目录作为一个静态服务器
app.listen(8080);

app.get('/',function(req,res){
    res.sendFile('/get.html',{root:__dirname});
});
app.get('/getUser',function(req,res){
    res.send([{name:'zfpx',age:8}])
})*/

/*var express=require('express');
var bodyParser=require('body-parser');
var app=express();
app.use(express.static(__dirname));
app.use(bodyParser.json());//使用这个中间件
app.listen(8080)
app.get('/',function(req,res){
    res.sendFile('./get.html',{root:__dirname})
});
app.get('/getUser',function(req,res){
    res.send([{name:'zfpx',age:8}])
});
app.post('/postUser',function(req,res){
    res.send(req.body);
    console.log(req.body)//拿到的是前台传过来的{ name: '珠峰培训', age: 12 }
});*/
var express=require('express');
var bodyParser=require('body-parser');
var app=express();
app.listen(8080);
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.get('/',function(req,res){
    res.sendFile('./get.html',{root:__dirname});
});
app.get('/getUser',function(req,res){
    res.send([{name:'英语转换',age:8}]);

});
app.post('/postUser',function(req,res){
    res.send(req.body);
    console.log(req.body)
})







