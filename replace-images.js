const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'src/components/home/HeroSection.tsx',
  'src/components/home/InspirationGallery.tsx',
  'src/components/home/ServicesSection.tsx',
  'src/app/services/[id]/page.tsx'
];

const urlMap = {
  // Hero
  "image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/22_West_-_home_office.jpg',\n      title: 'Your Dream Home, Delivered in Under a Week',": "image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000',\n      title: 'Your Dream Home, Delivered in Under a Week',",
  
  "image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/22_West_-_home_office.jpg',\n      title: 'Modular Kitchens That Last Decades',": "image: 'https://images.unsplash.com/photo-1556910103190-2d9226164233?auto=format&fit=crop&q=80&w=2000',\n      title: 'Modular Kitchens That Last Decades',",
  
  "image: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Living_room_%28Unsplash%29.jpg',\n      title: 'Complete Home Makeovers',": "image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2000',\n      title: 'Complete Home Makeovers',",

  // InspirationGallery
  "title: 'Living Room',\n      image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/22_West_-_home_office.jpg'": "title: 'Living Room',\n      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000'",
  
  "title: 'Master Bedroom',\n      image: 'https://upload.wikimedia.org/wikipedia/commons/2/26/PAX_wardrobe_at_IKEA_Xihongmen_%2820150423113022%29.jpg'": "title: 'Master Bedroom',\n      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=2000'",
  
  "title: 'False Ceiling',\n      image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/22_West_-_home_office.jpg'": "title: 'False Ceiling',\n      image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=2000'",
  
  "title: 'Kitchen',\n      image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Ra20705_kitchen_stainless_steel.JPG'": "title: 'Kitchen',\n      image: 'https://images.unsplash.com/photo-1556910103190-2d9226164233?auto=format&fit=crop&q=80&w=2000'",
  
  "title: 'Wardrobe',\n      image: 'https://upload.wikimedia.org/wikipedia/commons/2/26/PAX_wardrobe_at_IKEA_Xihongmen_%2820150423113022%29.jpg'": "title: 'Wardrobe',\n      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2000'",
  
  "title: 'Renovation',\n      image: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Living_room_%28Unsplash%29.jpg'": "title: 'Renovation',\n      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2000'",

  // ServicesSection specific
  "title: \"Modular Kitchens\",\n      description: \"Premium kitchens with German hardware, soft-close mechanisms, and 30-year warranty. Custom designs with islands, storage solutions, and integrated appliances.\",\n      image: \"https://upload.wikimedia.org/wikipedia/commons/0/05/Ra20705_kitchen_stainless_steel.JPG\"": "title: \"Modular Kitchens\",\n      description: \"Premium kitchens with German hardware, soft-close mechanisms, and 30-year warranty. Custom designs with islands, storage solutions, and integrated appliances.\",\n      image: \"https://images.unsplash.com/photo-1556910103190-2d9226164233?auto=format&fit=crop&q=80&w=2000\"",

  "title: \"Custom Wardrobes\",\n      description: \"Space-optimized wardrobes with smart compartments, sliding doors, LED lighting, and premium laminates. Perfect organization for every bedroom.\",\n      image: \"https://upload.wikimedia.org/wikipedia/commons/2/26/PAX_wardrobe_at_IKEA_Xihongmen_%2820150423113022%29.jpg\"": "title: \"Custom Wardrobes\",\n      description: \"Space-optimized wardrobes with smart compartments, sliding doors, LED lighting, and premium laminates. Perfect organization for every bedroom.\",\n      image: \"https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2000\"",

  "title: \"Living Room Design\",\n      description: \"Complete entertainment and seating solutions with custom sofas, TV units, coffee tables, and ambient lighting for the perfect gathering space.\",\n      image: \"https://upload.wikimedia.org/wikipedia/commons/9/9d/22_West_-_home_office.jpg\"": "title: \"Living Room Design\",\n      description: \"Complete entertainment and seating solutions with custom sofas, TV units, coffee tables, and ambient lighting for the perfect gathering space.\",\n      image: \"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000\"",

  "title: \"False Ceilings\",\n      description: \"Designer ceilings with integrated LED lighting, acoustic solutions, and modern aesthetics. Transform your room's ambiance completely.\",\n      image: \"https://upload.wikimedia.org/wikipedia/commons/9/9d/22_West_-_home_office.jpg\"": "title: \"False Ceilings\",\n      description: \"Designer ceilings with integrated LED lighting, acoustic solutions, and modern aesthetics. Transform your room's ambiance completely.\",\n      image: \"https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=2000\"",

  "title: \"Complete Renovation\",\n      description: \"End-to-end home transformation including civil work, electrical, plumbing, flooring, painting, and all interior furniture in one package.\",\n      image: \"https://upload.wikimedia.org/wikipedia/commons/e/ea/Living_room_%28Unsplash%29.jpg\"": "title: \"Complete Renovation\",\n      description: \"End-to-end home transformation including civil work, electrical, plumbing, flooring, painting, and all interior furniture in one package.\",\n      image: \"https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2000\"",

  "title: \"Commercial Interiors\",\n      description: \"Professional office spaces, retail stores, and showrooms with ergonomic design, brand integration, and productivity-focused layouts.\",\n      image: \"https://upload.wikimedia.org/wikipedia/commons/9/9d/22_West_-_home_office.jpg\"": "title: \"Commercial Interiors\",\n      description: \"Professional office spaces, retail stores, and showrooms with ergonomic design, brand integration, and productivity-focused layouts.\",\n      image: \"https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000\"",

  // src/app/services/[id]/page.tsx specific
  "title: 'Modular Kitchens',\n    subtitle: 'German hardware, 30-year warranty, lightning fast execution.',\n    image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Ra20705_kitchen_stainless_steel.JPG',": "title: 'Modular Kitchens',\n    subtitle: 'German hardware, 30-year warranty, lightning fast execution.',\n    image: 'https://images.unsplash.com/photo-1556910103190-2d9226164233?auto=format&fit=crop&q=80&w=2000',",

  "title: 'Custom Wardrobes',\n    subtitle: 'Maximize storage without compromising on style.',\n    image: 'https://upload.wikimedia.org/wikipedia/commons/2/26/PAX_wardrobe_at_IKEA_Xihongmen_%2820150423113022%29.jpg',": "title: 'Custom Wardrobes',\n    subtitle: 'Maximize storage without compromising on style.',\n    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2000',",

  "title: 'Complete Home Renovation',\n    subtitle: 'End-to-end turnkey solutions for your entire home.',\n    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Living_room_%28Unsplash%29.jpg',": "title: 'Complete Home Renovation',\n    subtitle: 'End-to-end turnkey solutions for your entire home.',\n    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2000',",

  "subtitle: 'Premium interior solutions tailored for you.',\n    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Living_room_%28Unsplash%29.jpg',": "subtitle: 'Premium interior solutions tailored for you.',\n    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000',"
};

filesToUpdate.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    for (const [key, value] of Object.entries(urlMap)) {
      content = content.replace(key, value);
    }
    fs.writeFileSync(fullPath, content);
    console.log(`Updated images in ${file}`);
  }
});
