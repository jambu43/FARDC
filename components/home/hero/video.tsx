"use client";

import Video from "next-video";
import { useRef, useState } from "react";
import Image from "next/image";

function Background() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className={"relative "}>
      <div className="h-full relative min-h-[500px] flex flex-col  items-center justify-center bg-black ">
        {/* <Video
          src={
            "https://res.cloudinary.com/dxq5qufow/video/upload/f_auto:video,q_auto/p00ybsfr3xjo1v8vpjnn"
          }
          autoPlay={true}
          controls={true}
          loop
          muted
          playsInline
          className={"min-w-full min-h-full z-0 object-cover fixed inset-0"}
        /> */}

          <video
            autoPlay
            muted
            loop
            ref={videoRef}
          >
            <source
              src="https://res.cloudinary.com/dxq5qufow/video/upload/f_auto:video,q_auto/p00ybsfr3xjo1v8vpjnn"
              type="video/mp4"
            />
          </video>
          <div className="absolute bottom-40  right-8 p-2">
            <button onClick={toggleMute} className="static">
              <Image
                src={isMuted ? "/sound-off.webp" : "/sound-on.webp"}
                alt="Mute Toggle"
                width={50}
                height={50}
              />
            </button>
          </div>
        </div>
    </div>
  );
}

export default Background;
