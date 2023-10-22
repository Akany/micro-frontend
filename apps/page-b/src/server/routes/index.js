import express from "express";
import { render } from "../middleware/render";
const app = express();

/**
 * Render route is a platform tool.
 * Should be moved out to platform_core package
 * so it would be shared across multiple services
 * without duplication and easier service bootstrap.
 */
app.get("/page-b", render);

/**
 * Static server used only in purpose of mimic assets cdn
 */
app.use(express.static(__dirname));

app.listen(3001, () => {
  console.log(`Example app listening on port ${3001}`);
});
