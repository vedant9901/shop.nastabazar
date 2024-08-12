import React from 'react';

const ImageCard = ({ imageUrl, altText, label }) => {
  return (
    <div
      className="relative cursor-pointer overflow-hidden rounded border-2 bg-light text-center md:py-2 border-light"
      role="button"
    >
      <div className="relative flex items-center justify-center w-auto my-3.5 mb-3 overflow-hidden h-28">
        <img
          alt={altText}
          loading="lazy"
          decoding="async"
          className="object-contain"
          sizes="(max-width: 768px) 100vw"
          srcSet={`
            /_next/image?url=${encodeURIComponent(imageUrl)}&w=640&q=75 640w,
            /_next/image?url=${encodeURIComponent(imageUrl)}&w=750&q=75 750w,
            /_next/image?url=${encodeURIComponent(imageUrl)}&w=828&q=75 828w,
            /_next/image?url=${encodeURIComponent(imageUrl)}&w=1080&q=75 1080w,
            /_next/image?url=${encodeURIComponent(imageUrl)}&w=1200&q=75 1200w,
            /_next/image?url=${encodeURIComponent(imageUrl)}&w=1920&q=75 1920w,
            /_next/image?url=${encodeURIComponent(imageUrl)}&w=2048&q=75 2048w,
            /_next/image?url=${encodeURIComponent(imageUrl)}&w=3840&q=75 3840w
          `}
          src={`/_next/image?url=${encodeURIComponent(imageUrl)}&w=3840&q=75`}
          style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent' }}
        />
      </div>
      <span className="block px-4 pb-4 text-sm font-semibold text-center md:pt-1 text-heading">
        {label}
      </span>
    </div>
  );
};

export default ImageCard;
