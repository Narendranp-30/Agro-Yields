var http=require("http");
var querystring=require("querystring");
var qs,name,email;
function onRequest(req,res)
{
    var data1='';
    req.on('data',function(chunk)
    {
        console.log(chunk);
        data1+=chunk;
        console.log("data string format"+data1);
    });

req.on('end',function()
{
    qs=querystring.parse(data1);
    console.log(qs);
    name=qs['fname'];
    email=qs['pass']
    res.write("hello"+name+"email"+email);
    res.end();
});
}
http.createServer(onRequest).listen(3333);
console.log('server has started');
