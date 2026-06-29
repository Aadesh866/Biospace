const fs = require('fs');
const https = require('https');

// 1. Hyper-specific formulated search terms
const serviceQueries = {
  'kitchen': 'modern modular kitchen island interior',
  'wardrobe': 'luxury walk-in wardrobe closet interior',
  'living': 'modern luxury living room sofa interior',
  'ceiling': 'modern living room false ceiling led lighting',
  'renovation': 'luxury modern home interior renovation',
  'commercial': 'modern professional corporate office interior'
};

async function fetchWikiImage(query) {
  return new Promise((resolve) => {
    const searchUrl = new URL(`https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&utf8=&format=json&srnamespace=6`);
    const options = { headers: { 'User-Agent': 'BioSpaceBot/1.0 (test@example.com)' } };
    
    https.get(searchUrl, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.query && json.query.search && json.query.search.length > 0) {
            for (let item of json.query.search) {
              const title = item.title;
              const srcLower = title.toLowerCase();
              
              if ((srcLower.includes('.jpg') || srcLower.includes('.jpeg') || srcLower.includes('.png')) && 
                  !srcLower.includes('.svg') && !srcLower.includes('floorplan') && 
                  !srcLower.includes('blueprint') && !srcLower.includes('diagram') &&
                  !srcLower.includes('exterior')) {
                  
                  const fileUrl = new URL(`https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url&format=json`);
                  
                  https.get(fileUrl, options, (imgRes) => {
                    let imgData = '';
                    imgRes.on('data', chunk => imgData += chunk);
                    imgRes.on('end', () => {
                      const imgJson = JSON.parse(imgData);
                      const pages = imgJson.query.pages;
                      const pageId = Object.keys(pages)[0];
                      if (pages[pageId].imageinfo) {
                        resolve(pages[pageId].imageinfo[0].url);
                        return;
                      }
                    });
                  });
                  return; 
              }
            }
          }
          resolve(null);
        } catch (e) {
          resolve(null);
        }
      });
    });
  });
}

async function runPipeline() {
  console.log("Starting BioSpace Image Pipeline...");
  const results = {};
  
  for (const [service, query] of Object.entries(serviceQueries)) {
    console.log(`Searching for: ${query}`);
    let url = await fetchWikiImage(query);
    
    // Fallback Degradation Algorithm
    let currentQuery = query;
    while (!url && currentQuery.split(' ').length > 1) {
       currentQuery = currentQuery.split(' ').slice(0, -1).join(' ');
       console.log(`No results. Degrading search to: ${currentQuery}`);
       url = await fetchWikiImage(currentQuery);
    }
    
    results[service] = url || 'https://via.placeholder.com/800';
    console.log(`[Success] -> ${results[service]}\n`);
  }
  
  fs.writeFileSync('wiki-images.json', JSON.stringify(results, null, 2));
  console.log("Pipeline complete! Images mapped in wiki-images.json");
}

runPipeline();
