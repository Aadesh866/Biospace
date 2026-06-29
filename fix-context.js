const fs = require('fs');

const keywordToImage = {
  'kitchen': 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=2000',
  'wardrobe': 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2000',
  'bedroom': 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=2000',
  'living': 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000',
  'commercial': 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000',
  'renovation': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2000',
  'ceiling': 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=2000',
};

function fixProjectsPage() {
  const file = 'src/app/projects/page.tsx';
  let content = fs.readFileSync(file, 'utf8');

  // We can look for `type: '...'` and the following `image: '...'`
  content = content.replace(/type:\s*'([^']+)',[\s\S]*?image:\s*'([^']+)'/g, (match, typeStr, imgStr) => {
    const correctImg = keywordToImage[typeStr] || keywordToImage['living'];
    return match.replace(imgStr, correctImg);
  });
  
  fs.writeFileSync(file, content);
  console.log('Fixed projects/page.tsx');
}

function fixServicesIdPage() {
  const file = 'src/app/services/[id]/page.tsx';
  let content = fs.readFileSync(file, 'utf8');
  
  const map = {
    'modular-kitchens': keywordToImage['kitchen'],
    'custom-wardrobes': keywordToImage['wardrobe'],
    'complete-renovation': keywordToImage['renovation'],
  };
  
  for (const [key, url] of Object.entries(map)) {
    const regex = new RegExp(`('${key}':[\\s\\S]*?image:\\s*')([^']+)(')`);
    content = content.replace(regex, `$1${url}$3`);
  }
  
  fs.writeFileSync(file, content);
  console.log('Fixed services/[id]/page.tsx');
}

function fixProjectsIdPage() {
  const file = 'src/app/projects/[id]/page.tsx';
  let content = fs.readFileSync(file, 'utf8');
  
  const map = {
    '1': keywordToImage['renovation'],
    '2': keywordToImage['kitchen'],
    '3': keywordToImage['commercial'],
    '4': keywordToImage['bedroom'],
    '5': keywordToImage['living'],
    '6': keywordToImage['renovation'],
    '7': keywordToImage['kitchen'],
    '8': keywordToImage['commercial'],
    '9': keywordToImage['bedroom']
  };
  
  // replace the main image
  for (const [id, url] of Object.entries(map)) {
    const regex = new RegExp(`('${id}':[\\s\\S]*?image:\\s*')([^']+)(')`);
    content = content.replace(regex, `$1${url}$3`);
  }
  
  fs.writeFileSync(file, content);
  console.log('Fixed projects/[id]/page.tsx');
}

fixProjectsPage();
fixServicesIdPage();
fixProjectsIdPage();
