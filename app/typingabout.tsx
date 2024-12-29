"use client";
import React, { useState, useEffect } from 'react';

interface TypingAboutProps {
    text: string;
    speed?: number;
}

const TypingAbout: React.FC<TypingAboutProps> = ({ text, speed = 100 }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {

            setDisplayedText((prev) => {
                if(!prev){
                    return text[0];
                }
                if(prev.length === text.length-1){
                        clearInterval(interval);
                }
                return prev + text.charAt(prev.length);

            });

            
            
        }, speed);

        return () => { clearInterval(interval), setDisplayedText(''); index = 0; };
    }, [text, speed]);

    return <div className='text-slate-500 tracking-widest sm:tracking-normal pt-4'>{displayedText}</div>;
};

export default TypingAbout;