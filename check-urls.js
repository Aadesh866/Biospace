const https = require('https');

// Every unique Unsplash URL currently in the codebase
const urls = {
  'kitchen-1 (ServicesSection)':     'https://images.unsplash.com/photo-1556910103190-2d9226164233',
  'wardrobe (ServicesSection)':      'https://images.unsplash.com/photo-1595526114101-1b297b4b39b3',
  'living (ServicesSection)':        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0',
  'ceiling (ServicesSection)':       'https://images.unsplash.com/photo-1513694203232-719a280e022f',
  'renovation (ServicesSection)':    'https://images.unsplash.com/photo-1503387762-592deb58ef4e',
  'commercial (ServicesSection)':    'https://images.unsplash.com/photo-1497366216548-37526070297c',
  'bedroom (InspirationGallery)':    'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
  'ceiling-2 (InspirationGallery)':  'https://images.unsplash.com/photo-1600607686527-6fb886090705',
  'kitchen-2 (InspirationGallery)':  'https://images.unsplash.com/photo-1556911220-e15b29be8c8f',
  'wardrobe-2 (InspirationGallery)': 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace',
  'modular (OneStopShop)':           'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136',
  'fullhome (OneStopShop)':          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
  'luxury (OneStopShop)':            'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d',
  'reno (OneStopShop)':              'https://images.unsplash.com/photo-1581858326456-6164fb0b7af0',
};

let checked = 0;
const total = Object.keys(urls).length;

for (const [label, url] of Object.entries(urls)) {
  https.get(url, (res) => {
    const status = res.statusCode;
    // Follow redirect to check final status
    if (status === 301 || status === 302) {
      console.log(`${label}: ${status} REDIRECT -> ${res.headers.location ? 'OK' : 'BROKEN'}`);
    } else if (status === 200) {
      console.log(`${label}: ${status} OK`);
    } else {
      console.log(`${label}: ${status} BROKEN ❌`);
    }
    checked++;
    if (checked === total) console.log('\nDone checking all URLs.');
  }).on('error', (e) => {
    console.log(`${label}: ERROR - ${e.message} ❌`);
    checked++;
    if (checked === total) console.log('\nDone checking all URLs.');
  });
}
