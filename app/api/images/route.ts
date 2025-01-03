// For App Router (app/api/images/route.ts)
'use server';
import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const imagesDirectory = path.join(process.cwd(), 'public', 'carouselimages');
    const imageFiles = await fs.readdir(imagesDirectory);

    const images = imageFiles
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .map(file => ({
        src: `/carouselimages/${file}`,
        alt: file.split('.')[0]
      }));

    return NextResponse.json(images);
  } catch (error) {
    console.error('Error reading images:', error);
    return NextResponse.json(
      { message: 'Error fetching images' },
      { status: 500 }
    );
  }
}

// For Pages Router (pages/api/images.ts)
