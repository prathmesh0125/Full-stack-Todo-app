const express = require("express");
const { createtodo, updatetodo } = require("./types");
const app = express();
app.use(express.json())
app.post("/todo", function (req, res) {
  const createpayload=req.body;
  const parsepayload=createtodo.safeParse(createpayload);
  if(!parsepayload.success){
    res.status(411).json({
      msg:"you sent the wrong inputs",
    })
    return;
  }
});
app.get("/todos", function (req, res) {
});
app.put("/completed", function (req, res) {
  const updatepayload=req.body;
  const pasrsePayload=updatetodo.safeParse(updatepayload);
  if(!updatepayload.success){
    req.status(411).json({
      msg:"your sent the wrong input"
    })
  }
});

app.listen(3000, function (req, res) {
  console.log("server is running on 3000 port");
});
