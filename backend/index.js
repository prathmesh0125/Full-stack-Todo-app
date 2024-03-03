const express = require("express");
const { createtodo, updatetodo } = require("./types");
const { todo } = require("./db");
const app = express();
app.use(express.json());
app.post("/todo", async function (req, res) {
  const createpayload = req.body;
  const parsepayload = createtodo.safeParse(createpayload);
  if (!parsepayload.success) {
    res.status(411).json({
      msg: "you sent the wrong inputs",
    });
    return;
  }
  // puting data into  mongodb
  await todo.create({
    title: createpayload.title,
    description: createpayload.description,
    completed: false,
  });
  res.status(200).json({
    msg: "data is added in databse",
  });
});
app.get("/todos", async function (req, res) {
  const todos = await todo.find();
  res.json({ todos });
});
app.put("/completed", async function (req, res) {
  const updatepayload = req.body;
  const pasrsePayload = updatetodo.safeParse(updatepayload);
  if (!updatepayload.success) {
    req.status(411).json({
      msg: "your sent the wrong input",
    });
  }

  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg:"todo marked as completed"
  })
});

app.listen(3000, function (req, res) {
  console.log("server is running on 3000 port");
});
