const express = require("express");

const app = express();

app.use(express.static('public'));
// app.get(path, code);

// get /
app.get("/", function(request, response, next) {
  console.log("we have received a request for the HOMEPAGE");
  // response.send()
  response.sendFile(__dirname + "/view/home-page.html")
})

// get /contact
app.get("/contact", (request, response, next) => {
  console.log("we have received a request for the Contact")
  // response.send();
  response.sendFile(__dirname + "/view/contact-page.html")
})

app.listen(3000);