import Express from "express";

const app = Express();

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);

})



