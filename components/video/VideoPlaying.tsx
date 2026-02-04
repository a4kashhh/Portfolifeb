"use client"
import React, { useRef, useState } from 'react'

interface Props {}

function VideoPlaying(props: Props) {
    const {} = props
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);

    const handleVideoClick = () => {
        const video = videoRef.current;
        if (!video) return;
        
        // Toggle mute
        video.muted = !video.muted;
        setIsMuted(video.muted);
        
        // Ensure video is playing
        if (video.paused) {
            video.play();
        }
    };

    return (
        <section className='flex flex-col justify-center items-center md:mb-16 mb-6'>
           <div className='relative w-full'>
               <video 
                   autoPlay 
                   muted 
                   loop 
                   playsInline
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
