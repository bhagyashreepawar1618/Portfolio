import app from "./app.js";
import connectDb from "./db/connectDb.js";

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("server is listeing to port ", process.env.PORT);
    });

    app.get("/", (req, res) => {
      res.send("<h1>Hello form server</h1>");
    });
  })
  .catch((err) => {
    console.log("Mongodb connection failed..!!", err);
  });
