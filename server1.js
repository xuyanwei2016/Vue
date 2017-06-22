let express=require('express');
let bodyParser=require('body-parser');
let app=express();
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.listen(8081);

app.get('/',function (req,res) {
    res.sendFile('9.leave.html',{root:__dirname})
});
