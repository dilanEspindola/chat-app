import express from "express";
import cors from "cors";
import { router } from "./routes";
import { appDataSource } from "./config";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
// app.use(formData.parse());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(PORT, async () => {
  await appDataSource.initialize();
  console.log(`server running on port ${PORT}`);
});
