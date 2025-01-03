"use client";
import React from 'react';
import TypingAbout from './typingabout';
import GridLayout from './grid';
import ThreeDText from './ThreeDText';
import VideoPlayer from './videocomponent';
import  { EmblaOptionsType } from 'embla-carousel';
import EmblaCarousel from './EmblaCarousel';


export default function Home() {
  const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 12
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  
  return (
    <div className="min-h-screen bg-background">
      <div className="text-center">
      <VideoPlayer src={'/MITMakerPortfolio.mp4'} Muted={false} isFullWidth={true}/>

        <h1 className="text-5xl  font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mt-8 sm:mt-4">
          AADVIK CHATURVEDI
        </h1>
        
        <TypingAbout speed={60} text={'A CURIOUS PROBLEMSOLVER'} />
      </div>

      <GridLayout/> 
      
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      
      
      <footer className="text-center pb-4 pt-12">
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Aadvik Chaturvedi. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="mailto:aadvikchaturvedi@gmail.com" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12.713l11.985-7.713c-.011-.004-11.985-7.713-11.985-7.713s-11.974 7.709-11.985 7.713l11.985 7.713zm0 2.287l-12-7.75v13.75h24v-13.75l-12 7.75z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/aadvikchaturvedi/" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.378-1.122-2.5-2.5-2.5s-2.5 1.122-2.5 2.5v5.5h-3v-10h3v1.5c.878-1.314 2.5-2.5 4-2.5 2.485 0 4.5 2.015 4.5 4.5v6.5z"/>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
