const fs = require('fs');
const http = require('http');
const url = require('url');
const replaceTemplate = require('./starter/Modules/replaceTemplate');
const slugify = require('slugify');
const { toUnicode } = require('punycode');
////////////////////////////////
///Files

const tempOverview = fs.readFileSync(
  `${__dirname}/starter/templates/template-overview.html`,
  'utf-8'
);
const tempCards = fs.readFileSync(`${__dirname}/starter/templates/template-cards.html`, 'utf-8');
const tempProduct = fs.readFileSync(
  `${__dirname}/starter/templates/template-product.html`,
  'utf-8'
);
//synchronous version of file reading
//two arguments (reading fiel, character encoded)
const textIn = fs.readFileSync(`${__dirname}/starter/txt/input.txt`, 'utf-8');
//read data form the file and return it
console.log(textIn);

console.log('-------------------');

//write into files
const textOut = `This is what we know about avocado: ${textIn} \n Created in ${Date.now} `;

const data = fs.readFileSync(`${__dirname}/starter/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

//////////////////////////////////////////
const slugs = dataObj.map((el) => slugify(el.productName, { lower: true })); //loop and create array
console.log(slugs);
//SERVER
//called once at the beging only
//accept callback function called each time new requist hit the server
const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  console.log(query);
  console.log(pathname);

  //const pathName = req.url;
  //-----------Overview Page------------------//
  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, { 'content-type': 'text/html' });
    //res.end("This is the overview");
    //return in new array
    //take a callback function and this call back function gets as argument and what ever it return saved in array
    const cardsHtml = dataObj.map((el) => replaceTemplate(tempCards, el)).join('');
    //.join join all of the elements into string
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
    //res.end(tempOverview);
    res.end(output);
  }
  //-----------------Product Page---------------//
  else if (pathname === '/product') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const product = dataObj[query.id]; //point the elements
    const output = replaceTemplate(tempProduct, product);
    res.end(output);
    //res.end("This is the product");
    //API
  }
  //----------------API Page----------------------//
  else if (pathname === '/api') {
    //(status codne, obj of header)
    res.writeHead(200, { 'content-type': 'application/json' });
    //Just call the data
    res.end(data);
    //for the read better use dirname variable
  }
  //------------------/Page Not Founded-------------------//
  else {
    res.writeHead(404, {
      'content-type': 'text/html',
      'my-own-header': 'hello-world',
    });
    res.end('<h1>page not found!!</h1>');
    res.end('This page Can not be Found!!');
  }
  // res.end("Hello form the server"); //send back responece to client
});
server.listen(8000, '192.168.1.7', () => {
  console.log('Listening to requirst on port 8000 ');
}); //Listening for incoming requistes
