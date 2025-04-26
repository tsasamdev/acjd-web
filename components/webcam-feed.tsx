import { useRef, useEffect } from "react";
import Hls from "hls.js";

type WebcamFeedProps = {
  streamUrl: string;
};

export function WebcamFeed({ streamUrl }: WebcamFeedProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement && Hls.isSupported()) {
      const hls = new Hls();

      // Charge le flux HLS
      hls.loadSource(streamUrl);
      hls.attachMedia(videoElement);

      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        console.log("HLS Manifest parsed!");
      });

      return () => {
        // Détruire l'instance HLS lors du démontage
        hls.destroy();
      };
    } else if (videoElement) {
      // Si le navigateur supporte nativement HLS (Safari)
      videoElement.src = streamUrl;
    }
  }, [streamUrl]);

  return (
    <div className="aspect-w-16 aspect-h-9 w-full rounded-xl overflow-hidden shadow-lg">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted
        controls={false}
        playsInline
      />
    </div>
  );
}