import { useRef, useEffect, useState } from "react";
import Hls from "hls.js";
import { motion } from "framer-motion";

type WebcamFeedProps = {
  streamUrl: string;
  isYouTube?: boolean;
};

export function WebcamFeed({ streamUrl, isYouTube = false }: WebcamFeedProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible || isYouTube) return;

    const videoElement = videoRef.current;

    if (videoElement && Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(streamUrl);
      hls.attachMedia(videoElement);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        console.log("HLS Manifest parsed and ready");
        setIsLoaded(true); // Set video to loaded once HLS is ready
      });

      return () => {
        hls.destroy();
      };
    } else if (videoElement) {
      videoElement.src = streamUrl;
      videoElement.oncanplaythrough = () => setIsLoaded(true); // Set loaded when video can play
    }
  }, [streamUrl, isYouTube, isVisible]);

  const youtubeVideoId = isYouTube ? extractYouTubeVideoId(streamUrl) : null;

  return (
    <div
      ref={containerRef}
      className="w-full h-[300px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-black"
    >
      {isVisible ? (
        isYouTube && youtubeVideoId ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1`}
            title="YouTube Live Stream"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <motion.video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            controls={false}
            playsInline
            initial={{ opacity: 0 }}  // Initial opacity 0
            animate={{ opacity: isLoaded ? 1 : 0 }} // Fade-in when loaded
            transition={{ duration: 1 }} // 1-second fade-in
          />
        )
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="h-12 w-12 border-4 border-t-transparent border-white rounded-full"
          />
        </div>
      )}
    </div>
  );
}

// Helper function to extract YouTube Video ID
function extractYouTubeVideoId(url: string): string {
  const regex = /(?:\?v=|\/embed\/|\.be\/)([^&?#]+)/;
  const match = url.match(regex);
  return match?.[1] || "";
}