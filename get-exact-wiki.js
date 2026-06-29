const https = require('https');

function getImageUrl(filename) {
  const url = new URL(`https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(filename)}&prop=imageinfo&iiprop=url&format=json`);
  const options = { headers: { 'User-Agent': 'BioSpaceBot/1.0' } };
  
  https.get(url, options, (res) => {
    let d = '';
    res.on('data', c => d+=c);
    res.on('end', () => {
      const data = JSON.parse(d);
      const pages = data.query.pages;
      const pageId = Object.keys(pages)[0];
      if (pages[pageId] && pages[pageId].imageinfo) {
         console.log(`${filename}: ${pages[pageId].imageinfo[0].url}`);
      } else {
         console.log(`Failed for ${filename}`);
      }
    });
  });
}

getImageUrl('File:Modular Kitchen.jpg');
getImageUrl('File:Sliding-wardrobe.jpg');
getImageUrl('File:Suspended-ceiling-0a.jpg');
