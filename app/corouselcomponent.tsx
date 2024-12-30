// CarouselWrapper.tsx
import { promises as fs } from 'fs';
import path from 'path';
import InfiniteCarousel from './corousel';

async function CarouselWrapper() {
  // Read images from the public/carouselimages directory
  const imagesDirectory = path.join(process.cwd(), 'public', 'carouselimages');
  const imageFiles = await fs.readdir(imagesDirectory);

  // Filter for image files and create image objects
  const images = imageFiles
    .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
    .map(file => ({
      src: `/carouselimages/${file}`,
      alt: file.split('.')[0] // Use filename as alt text
    }));

  return <InfiniteCarousel images={images} />;
}

export default CarouselWrapper;
