import * as express from 'express';
import router from "./routes/router.js";

const PORT = 4000;

const app = express();
app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => console.log(`Server work on port ${PORT}`));
