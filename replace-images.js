const fs = require('fs');
const path = require('path');

const urlMap = {
  // Hero Background
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0': 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Living_room_%28Unsplash%29.jpg',
  
  // Kitchen
  'https://images.unsplash.com/photo-1556910103-1c02745a872f': 'https://upload.wikimedia.org/wikipedia/commons/0/05/Ra20705_kitchen_stainless_steel.JPG',
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136': 'https://upload.wikimedia.org/wikipedia/commons/0/05/Ra20705_kitchen_stainless_steel.JPG',

  // Wardrobe
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64': 'https://upload.wikimedia.org/wikipedia/commons/2/26/PAX_wardrobe_at_IKEA_Xihongmen_%2820150423113022%29.jpg',

  // Living Room / Renovation
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc': 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Living_room_%28Unsplash%29.jpg',

  // Fallbacks
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7': 'https://upload.wikimedia.org/wikipedia/commons/9/9d/22_West_-_home_office.jpg',
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2': 'https://upload.wikimedia.org/wikipedia/commons/9/9d/22_West_-_home_office.jpg',
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511': 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Living_room_%28Unsplash%29.jpg',
  'https://images.unsplash.com/photo-1497366216548-37526070297c': 'https://upload.wikimedia.org/wikipedia/commons/9/9d/22_West_-_home_office.jpg',
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2': 'https://upload.wikimedia.org/wikipedia/commons/9/9d/22_West_-_home_office.jpg'
};

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      for (const [oldUrl, newUrl] of Object.entries(urlMap)) {
        const regex = new RegExp(oldUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(\\?[^\\"\\\'\`]*)?', 'g');
        const newContent = content.replace(regex, newUrl);
        if (newContent !== content) {
          content = newContent;
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Updated:', fullPath);
      }
    }
  }
}

processDir(path.join(process.cwd(), 'src'));
console.log('Done replacing URLs');
