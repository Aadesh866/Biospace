const https = require('https');

function getArticleImage(title, category) {
  const url = new URL(`https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&pithumbsize=1000&format=json`);
  const options = { headers: { 'User-Agent': 'BioSpaceBot/1.0' } };
  https.get(url, options, (res) => {
    let d = '';
    res.on('data', c => d+=c);
    res.on('end', () => {
      try {
        const data = JSON.parse(d);
        const pages = data.query.pages;
        const pageId = Object.keys(pages)[0];
        if (pages[pageId].thumbnail) {
          console.log(`${category}: ${pages[pageId].thumbnail.source}`);
        } else {
          console.log(`${category}: No image`);
        }
      } catch (e) { console.error(e); }
    });
  });
}

getArticleImage('Kitchen', 'kitchen');
getArticleImage('Closet', 'wardrobe');
getArticleImage('Dropped ceiling', 'ceiling');
getArticleImage('Living room', 'living');
getArticleImage('Office', 'commercial');
getArticleImage('Home improvement', 'renovation');
