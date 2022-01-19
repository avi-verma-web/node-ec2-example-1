const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "<h1>Node AWS Ec2 codepipeline codedeploy app</h1><h4>Message:success</h4><p>Version 1.0</p>"
  );
});
app.get("/products", (req, res) => {
  res.send([{ name: "Avinash", role: "Software Engineer" }]);
});
app.listen(port, () => console.log("App is running on port:", port));
