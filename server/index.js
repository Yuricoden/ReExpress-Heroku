import express from "express";
import path from "path";
import api from "./routes/api";

const app = express();
const PORT = process.env.PORT || 5000;

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, "../react-ui/build")));

// Answer API requests.
app.use("/api", api);

// All remaining requests return the React app, so it can handle routing.
app.get("*", (request, response) => {
  response.sendFile(path.resolve(__dirname, "../react-ui/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
