const https = require('https');

function fetchImages(query) {
  const url = `https://unsplash.com/s/photos/${query}`;
  https.get(url, (res) => {
    let d = '';
    res.on('data', c => d+=c);
    res.on('end', () => {
      // Find JSON state containing photo IDs
      const matches = d.match(/"id":"([a-zA-Z0-9_-]{10,15})"/g);
      if (matches) {
        const ids = [...new Set(matches.map(m => m.split(':')[1].replace(/"/g, '')))];
        console.log(`\n--- Results for ${query} ---`);
        ids.slice(0, 5).forEach(id => {
           console.log(`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=2000`);
        });
      } else {
        console.log(`No matches for ${query}`);
      }
    });
  });
}

fetchImages('walk-in-closet');
fetchImages('false-ceiling');
fetchImages('kitchen-interior');
