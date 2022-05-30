import app from './app.js';
import { conectDB } from './database/paletas.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.clear();
  conectDB();
  console.log(`Running http://localhost:${PORT}`);
});
