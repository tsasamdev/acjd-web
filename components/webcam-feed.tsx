import { useRef, useEffect } from "react";
import Hls from "hls.js";

type WebcamFeedProps = {
  streamUrl: string;
  isYouTube?: boolean;
};

export function WebcamFeed({ streamUrl, isYouTube = false }: WebcamFeedProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isYouTube) return; // Skip HLS setup if it's a YouTube video

    const videoElement = videoRef.current;

    if (videoElement && Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(streamUrl);
      hls.attachMedia(videoElement);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        console.log("HLS Manifest parsed and ready");
      });

      return () => {
        hls.destroy();
      };
    } else if (videoElement) {
      videoElement.src = streamUrl;
    }
  }, [streamUrl, isYouTube]);

  const youtubeVideoId = isYouTube ? extractYouTubeVideoId(streamUrl) : null;

  return (
    <div className="w-full h-[300px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-black">
      {isYouTube && youtubeVideoId ? (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1`}
          title="YouTube Live Stream"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          controls={false}
          playsInline
        />
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