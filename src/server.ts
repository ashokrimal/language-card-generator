import express, { Request, Response } from 'express';
import { getUserLanguageStats } from './github';
import { renderCard } from './themes/soloLeveling';

const app = express();
const PORT = process.env.PORT || 3000;

// app.get('/api/language-card', async (req: Request, res: Response) => {
//   const username = req.query.username as string;
//   const style = (req.query.style as string) || 'soloLeveling';

//   if (!username) {
//     return res.status(400).send('Username is required.');
//   }

//   try {
//     const stats = await getUserLanguageStats(username);
//     const svg = renderCard(stats, username);

//     res.setHeader('Content-Type', 'image/svg+xml');
//     res.send(svg);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Failed to generate card.');
//   }
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});