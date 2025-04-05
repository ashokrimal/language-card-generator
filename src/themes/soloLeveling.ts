export function renderCard(languageStats: any, username: string): string {
    // You can design this part based on the Solo Leveling theme.
    // For now, this is a basic static card.
    
    let card = `
      <svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
        <rect width="100%" height="100%" fill="black"/>
        <text x="20" y="30" font-family="Verdana" font-size="16" fill="white">User: ${username}</text>
        <text x="20" y="60" font-family="Verdana" font-size="14" fill="white">Languages:</text>
    `;
  
    let yPos = 80;
    for (const [language, bytes] of Object.entries(languageStats)) {
      card += `<text x="20" y="${yPos}" font-family="Verdana" font-size="14" fill="white">${language}: ${bytes} bytes</text>`;
      yPos += 20;
    }
  
    card += `</svg>`;
    
    return card;
  }