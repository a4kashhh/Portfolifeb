"use client"
import React, { useRef, useEffect, useState } from 'react'

interface Props {}

function VideoPlaying(props: Props) {
    const {} = props
    const videoRef = useRef<HTMLVideoElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const [isMuted, setIsMuted] = useState(true);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        const section = sectionRef.current;

        if (!video || !section) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (hasInteracted) {
                        if (entry.isIntersecting) {
                            video.muted = false;
                            setIsMuted(false);
                        } else {
                            video.muted = true;
                            setIsMuted(true);
                        }
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(section);

        return () => {
            observer.disconnect();
        };
    }, [hasInteracted]);

    const handleVideoClick = () => {
        const video = videoRef.current;
        if (!video) return;
        
        setHasInteracted(true);
        video.muted = !video.muted;
        setIsMuted(video.muted);
    };

    return (
        <section ref={sectionRef} className='flex flex-col justify-center items-center md:mb-16 mb-6'>
           <div className='relative w-full'>
               <video 
                   autoPlay 
                   muted 
                   loop 
                   ref={videoRef} 
                   onClick={handleVideoClick}
                   className='video w-full h-full object-cover cursor-pointer mb-8'
               >
                   <source src="/video/video.mp4" type="video/mp4"/>
               </video>
               <div 
                   onClick={handleVideoClick}
                   className='absolute bottom-12 right-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full cursor-pointer transition-all duration-300'
               >
                   {isMuted ? (
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                           <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                           <line x1="23" y1="9" x2="17" y2="15"></line>
                           <line x1="17" y1="9" x2="23" y2="15"></line>
                       </svg>
                   ) : (
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                           <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                           <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                       </svg>
                   )}
               </div>
           </div>
        </section>
    )
}

export default VideoPlaying
