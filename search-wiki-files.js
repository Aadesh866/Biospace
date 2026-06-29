const https = require('https');

function searchWikiFiles(query) {
  const url = new URL(`https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&utf8=&format=json&srnamespace=6`);
  const options = { headers: { 'User-Agent': 'BioSpaceBot/1.0' } };
  https.get(url, options, (res) => {
    let d = '';
    res.on('data', c => d+=c);
    res.on('end', () => {
      try {
        const data = JSON.parse(d);
        if (data.query && data.query.search) {
          console.log(`\n--- ${query} ---`);
          data.query.search.slice(0, 5).forEach(s => console.log(s.title));
        }
      } catch (e) { console.error(e); }
    });
  });
}

searchWikiFiles('walk-in closet interior');
searchWikiFiles('false ceiling led');
searchWikiFiles('modern wardrobe interior');
searchWikiFiles('dropped ceiling lighting');
