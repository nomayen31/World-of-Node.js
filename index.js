const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title>Form</title></head>");
    res.write("<body>");
    res.write("<h1>Submit Your Info</h1>");
    res.write('<form method="POST" action="/about">');
    res.write('<label>Name: <input type="text" name="name" /></label><br><br>');
    res.write(
      '<label>Message: <input name="message" /></label><br><br>'
    );
    res.write('<button type="submit" action="/about" >Send</button>');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else if (req.url === "/about" && req.method === 'POST') {
        const body = [];
          req.on('data', (value )=>{
                 body.push(value)
                  
        })
        req.on('end', ()=>{
                console.log("strime Finished");
                const bodyParsed = Buffer.concat(body).toString();
                console.log(bodyParsed);  
                 const bodyParse = Buffer.concat(body).toString();
      console.log("Raw Body:", bodyParse);

      // You can parse it manually or using querystring
      const parsed = Object.fromEntries(new URLSearchParams(bodyParse));
      console.log("Parsed Object:", parsed); 
        })
 
  } else {
    res.write("Not Found");
    res.end();
  }
});

//  server.on('connection', (socket)=>{
//     console.log('New Connection ............');

//  })

server.listen(3000);

console.log("listening on port 3000");

// const fs = require('fs');

// const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`, );

// ourReadStream.on('data', (value)=>{
//         console.log(value);

// })

// console.log("hello");
