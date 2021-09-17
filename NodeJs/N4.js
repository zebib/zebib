exports.add=function(req,res,vals){
    var sum=parseInt(vals.fisrt)+parseInt(vals.second);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(String(sum));
    return res.end();
};