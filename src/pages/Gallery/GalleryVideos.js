import React, { useState, useRef, useEffect } from "react";
import "./GalleryVideos.css";

const GalleryVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [thumbnails, setThumbnails] = useState({});

  const videos = [
    { src: "gallery/video-1.mp4" },
    { src: "gallery/video-2.mp4" },
  ];

  // Generate thumbnail from video
  const generateThumbnail = (videoSrc, index) => {
    const video = document.createElement("video");
    video.src = `${process.env.PUBLIC_URL}/${videoSrc}`;
    video.crossOrigin = "anonymous";
    video.currentTime = 2; // capture at 2s mark

    video.addEventListener("loadeddata", () => {
      const canvas = document.createElement("canvas");
      canvas.width = 320;
      canvas.height = 180;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const thumbnail = canvas.toDataURL("image/png");

      setThumbnails((prev) => ({
        ...prev,
        [index]: thumbnail,
      }));
    });
  };

  useEffect(() => {
    videos.forEach((v, i) => generateThumbnail(v.src, i));
  }, []);

  return (
    <div className="gallery-wrapper">
      {/* Heading */}
      <h2 className="gallery-heading">My Videos</h2>

      {/* Video Grid */}
      <div className="gallery-videos">
        {videos.map((video, index) => (
          <div
            key={index}
            className={`gallery-item effect-${(index % 4) + 1}`}
            onClick={() =>
              setSelectedVideo(`${process.env.PUBLIC_URL}/${video.src}`)
            }
          >
            <img
              src={thumbnails[index] || "https://via.placeholder.com/320x180?text=Loading..."}
              alt={`Video ${index + 1}`}
              className="video-thumbnail"
            />
            <span className="play-icon">▶</span>
            <span className="shine"></span>
          </div>
        ))}
      </div>

      {/* Modal Video Player */}
      {selectedVideo && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              className="close-btn"
              onClick={() => setSelectedVideo(null)}
            >
              ✖
            </button>
            <video
              src={selectedVideo}
              className="modal-video"
              controls
              autoPlay
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryVideos;
