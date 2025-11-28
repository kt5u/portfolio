import React, { useState } from "react";

interface AvatarProps {
  src: string;
  alt?: string;
  size?: number; // diameter in px
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt = "", size = 128, className = "" }) => {
  const [errored, setErrored] = useState(false);

  return (
    <div
      style={{ width: size, height: size }}
      className={`rounded-full overflow-hidden ring-2 ring-[#94e2d5] ring-offset-2 ring-offset-[#1e1e2e] flex items-center justify-center bg-gradient-to-br from-[#94e2d5] to-[#74c7b8] ${className}`}
    >
      {errored ? (
        <span className="text-[#1e1e2e] text-5xl" aria-label="avatar fallback" role="img">👨‍💻</span>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover"
          onError={() => setErrored(true)}
        />
      )}
    </div>
  );
};
