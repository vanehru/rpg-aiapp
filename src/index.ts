import { app } from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`RPG AI App Service is running on port ${PORT}`);
});
