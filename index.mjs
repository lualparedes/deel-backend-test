import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/reddit-proxy/:subreddit", async (req, res) => {
  const redditRes = await fetch(
    `https://api.reddit.com/r/${req.params.subreddit}`
  );
  res.json(await redditRes.json());
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
