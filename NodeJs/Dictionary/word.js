// exports.search =function(req, res ,vals){
//     //req manupulate
//     // return res
//     var mysql = require('mysql');
    
    
//     var con = mysql.createConnection({
//       host: "localhost",
//       user: "root",
//       password: "root",
//       database: "entries"
//     });
    
//     con.connect(function(err) {
//       if (err) throw err;
//       con.query(`SELECT definition FROM entries.entries  where word = '${vals.wordSearch}'`, function (err, result, fields) {
//       //con.query("SELECT definition  FROM entries.entries where word = 'girl'", function (err, result, fields) {
//         if (err) throw err;
    
//        res.writeHead(200, {'Content-Type': 'text/html'});
//           res.write("<!DOCTYPE html>");
//         res.write("<html>");
//         res.write("<head><meta charset=\"utf-8\"/>"); 
//         res.write("<title> WAP Online Dictionary </title>");
//          res.write("</head>");
//         res.write("<body>");
    
//       var arr = result;
        
//     for (var i = 0; i < arr.length; i++){
//       res.write("<br><br>definition : " + (i+1));
//       var obj = arr[i];
     
//         res.write("<br> - "+ ": " + obj.definition);
      
//     }
        
//         res.write("</p>");
//         res.write("</body>");
//         res.write("</html>");
//          res.end();
       
    
//       });
//     });
    
    
//     }