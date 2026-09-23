import React, { useState } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  aspectRatioClass?: string;
  wrapperClassName?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  wrapperClassName = '',
  aspectRatioClass = '',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#e8decb]/50 ${aspectRatioClass} ${wrapperClassName}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        className={`${className} transition-all duration-700 ease-out ${
          isLoaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-sm scale-103'
        }`}
        {...props}
      />
    </div>
  );
};
