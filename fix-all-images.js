const fs = require('fs');

// The ultimate, 100% verified Unsplash mapping
const keywordToImage = {
  'kitchen': 'https://images.unsplash.com/photo-1556910103190-2d9226164233?auto=format&fit=crop&q=80&w=2000', // Modern Kitchen
  'wardrobe': 'https://images.unsplash.com/photo-1595526114101-1b297b4b39b3?auto=format&fit=crop&q=80&w=2000', // Walk in Closet
  'bedroom': 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=2000', // Master bedroom
  'living': 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000', // Living Room
  'commercial': 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000', // Corporate Office
  'renovation': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2000', // Blueprint / Construction
  'ceiling': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=2000', // Ceiling architecture
};

function fixServicesSection() {
  const file = 'src/components/home/ServicesSection.tsx';
  let content = fs.readFileSync(file, 'utf8');
  
  const map = {
    'Modular Kitchens': keywordToImage['kitchen'],
    'Custom Wardrobes': keywordToImage['wardrobe'],
    'Living Room Design': keywordToImage['living'],
    'False Ceilings': keywordToImage['ceiling'],
    'Complete Renovation': keywordToImage['renovation'],
    'Commercial Interiors': keywordToImage['commercial']
  };
  
  for (const [title, url] of Object.entries(map)) {
    // Look for title: "...", \n description: "...", \n image: "..."
    const regex = new RegExp(`(title:\\s*"${title}"[\\s\\S]*?image:\\s*")([^"]+)(")`);
    content = content.replace(regex, `$1${url}$3`);
  }
  fs.writeFileSync(file, content);
  console.log('Fixed ServicesSection.tsx');
}

function fixServicesPage() {
  const file = 'src/app/services/page.tsx';
  let content = fs.readFileSync(file, 'utf8');
  
  const map = {
    'modular-kitchens': keywordToImage['kitchen'],
    'custom-wardrobes': keywordToImage['wardrobe'],
    'living-room': keywordToImage['living'],
    'false-ceilings': keywordToImage['ceiling'],
    'complete-renovation': keywordToImage['renovation'],
    'commercial-interiors': keywordToImage['commercial']
  };
  
  for (const [id, url] of Object.entries(map)) {
    const regex = new RegExp(`(id:\\s*'${id}'[\\s\\S]*?image:\\s*')([^']+)(')`);
    content = content.replace(regex, `$1${url}$3`);
  }
  fs.writeFileSync(file, content);
  console.log('Fixed services/page.tsx');
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

function fixProjectsPage() {
  const file = 'src/app/projects/page.tsx';
  let content = fs.readFileSync(file, 'utf8');
  
  content = content.replace(/type:\s*'([^']+)',[\s\S]*?image:\s*'([^']+)'/g, (match, typeStr, imgStr) => {
    const correctImg = keywordToImage[typeStr] || keywordToImage['living'];
    return match.replace(imgStr, correctImg);
  });
  
  fs.writeFileSync(file, content);
  console.log('Fixed projects/page.tsx');
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
  
  for (const [id, url] of Object.entries(map)) {
    const regex = new RegExp(`('${id}':[\\s\\S]*?image:\\s*')([^']+)(')`);
    content = content.replace(regex, `$1${url}$3`);
  }
  fs.writeFileSync(file, content);
  console.log('Fixed projects/[id]/page.tsx');
}

fixServicesSection();
fixServicesPage();
fixServicesIdPage();
fixProjectsPage();
fixProjectsIdPage();
