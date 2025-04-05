import { VercelRequest, VercelResponse } from '@vercel/node';
import { getUserLanguageStats } from '../github';
import { renderCard } from '../themes/soloLeveling';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const username = req.query.username as string;
  const style = (req.query.style as string) || 'soloLeveling';

  if (!username) {
    return res.status(400).send('Username is required.');
  }

  try {
    const stats = await getUserLanguageStats(username);
    const svg = renderCard(stats, username, );

    res.setHeader('Content-Type', 'image/svg+xml');
    res.send(svg);
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to generate card.');
  }
}