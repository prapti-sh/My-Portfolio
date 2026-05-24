const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Paths
const srcSvg = path.join(__dirname, '../public/icon.svg');
const destPng = path.join(__dirname, '../src/app/icon.png');

async function main() {
  try {
    console.log('Reading SVG icon...');
    if (!fs.existsSync(srcSvg)) {
      throw new Error(`Source SVG not found at ${srcSvg}`);
    }
    const svgBuffer = fs.readFileSync(srcSvg);

    console.log('Rendering SVG to 512x512 PNG...');
    const pngBuffer = await sharp(svgBuffer)
      .resize(512, 512)
      .png()
      .toBuffer();

    console.log('Writing single icon.png (512x512)...');
    fs.writeFileSync(destPng, pngBuffer);

    console.log('Icon generation completed successfully!');
  } catch (error) {
    console.error('Error generating icon:', error);
    process.exit(1);
  }
}

main();
