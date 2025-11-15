// src/components/VideoCarousel.jsx
import { useEffect, useState } from "react";
import axios from "axios";

export default function VideoCarousel() {
  const [videos, setVideos] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await axios.get(
          "http://localhost:1337/api/embedded-videos?filters[isFeatured][$eq]=true"
        );

        const mapped = res.data?.data.map((item) => ({
          id: item.id,
          title: item.title,
          videoUrl: item.videoUrl,
          platform: item.platform,
        }));

        setVideos(mapped);
        setIndex(0);
      } catch (err) {
        setError("Failed to load videos");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) return <div className="video-frame loading">Loading…</div>;
  if (error || !videos.length)
    return <div className="video-frame loading">{error || "No videos"}</div>;

  const current = videos[index];

  const goPrev = () =>
    setIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  const goNext = () =>
    setIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));

  return (
    <div className="video-wrapper">
      <span className="video-arrow left" onClick={goPrev}>
        ‹
      </span>

      <div className="video-frame">
        <iframe
          key={current.id}
          src={current.videoUrl}
          title={current.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      <span className="video-arrow right" onClick={goNext}>
        ›
      </span>
    </div>
  );
}
