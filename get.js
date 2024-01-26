
var http=require("http");
var url=require("url");
var querystring=require("querystring");
function onRequest(req,res)
{
    var path=url.parse(req.url).pathname;
    console.log('Request for '+path+'received');
    var query=url.parse(req.url).query;
    console.log(query);
    var name=querystring.parse(query)["fname"];
    var email=querystring.parse(query)["pass"];
    res.write("<body bgcolor='yellow'></body>");
    res.write("<h1>hello<br>"+name+"<br>your email id<br>"+email+"</h1>");
    res.end();
}
http.createServer(onRequest).listen(8000);
console.log('server has started');