import fetch from 'node-fetch';

interface LanguageStats {
  [language: string]: number;
}

interface GitHubRepo {
  languages_url: string;
}

export async function getUserLanguageStats(username: string): Promise<LanguageStats> {
  // Fetch the list of repos for the given user
  const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
  
  // Type the response as an array of GitHub repos
  const repos = await reposRes.json() as GitHubRepo[];

  const languageStats: LanguageStats = {};

  // Loop through each repo and fetch its language stats
  for (const repo of repos) {
    const langRes = await fetch(repo.languages_url);
    const langData = await langRes.json() as { [key: string]: number };

    // Aggregate the language data
    for (const [lang, bytes] of Object.entries(langData)) {
      languageStats[lang] = (languageStats[lang] || 0) + (bytes as number);
    }
  }

  return languageStats;
}