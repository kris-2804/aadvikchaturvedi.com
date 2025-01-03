'use server';
import { promises as fs } from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

interface ImageData {
  src: string;
  alt: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ImageData[] | { message: string }>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const imagesDirectory = path.join(process.cwd(), 'public', 'carouselimages');
    const imageFiles = await fs.readdir(imagesDirectory);

    const images = imageFiles
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .map(file => ({
        src: `/carouselimages/${file}`,
        alt: file.split('.')[0]
      }));

    res.status(200).json(images);
  } catch (error) {
    console.error('Error reading images:', error);
    res.status(500).json({ message: 'Error fetching images' });
  }
}