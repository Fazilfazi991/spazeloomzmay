const fs = require('fs');
const path = require('path');
const https = require('https');

const baseUrl = 'https://spazeloomz.vercel.app';
const assets = [
  '/assets/perfume-1-DZK7-MYH.jpg',
  '/assets/perfume-2-C0l4Zz2J.jpg',
  '/assets/perfume-3-Dwds-KbM.jpg',
  '/assets/perfume-4-CcrkxiK7.jpg',
  '/assets/perfume-5-CS37LD88.jpg',
  '/assets/perfume-6-SixQSgZJ.jpg',
  '/assets/1-BRTNSIpD.jpg',
  '/assets/2-DaR7Uzhp.webp',
  '/assets/3-XOMvca0L.webp',
  '/assets/4-CBS_fZhd.jpg',
  '/assets/5-CGG7NHs0.jpg',
  '/assets/6-syDgso2s.jpg',
  '/assets/41-CO5u3ymD.jpg',
  '/assets/51--NqCDSN6.jpg',
  '/assets/61-BrrbhfJ8.jpg',
  '/assets/1-3H-rFXN5.webp',
  '/assets/2-DPeq3vxq.jpg',
  '/assets/3-JkfB4u5A.jpg',
  '/assets/hero-perfume-BfRYIkcw.jpg',
  '/assets/about-story-CyzV427o.jpg',
  '/assets/founder-O-CIGwTT.jpg'
];

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

async function main() {
  const publicAssetsDir = path.join(__dirname, 'public', 'assets');
  if (!fs.existsSync(publicAssetsDir)) {
    fs.mkdirSync(publicAssetsDir, { recursive: true });
  }

  for (const asset of assets) {
    const filename = asset.split('/').pop();
    // remove ONLY the last -[hash] part, where hash is 8 chars
    const cleanFilename = filename.replace(/-[A-Za-z0-9_-]{8}\.(jpg|jpeg|png|webp|svg)$/, '.$1');
    const dest = path.join(publicAssetsDir, cleanFilename);
    const url = baseUrl + asset;
    
    console.log(`Downloading ${url} to ${cleanFilename}`);
    try {
      await download(url, dest);
      console.log(`Successfully downloaded ${cleanFilename}`);
    } catch (e) {
      console.error(`Failed to download ${url}:`, e);
    }
  }
}

main();
