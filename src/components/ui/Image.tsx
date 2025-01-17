import React from 'react';

interface ImageProps extends React.ComponentProps<'img'> {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  figcaptionClassName?: string;
  caption?: string;
  lazyLoad?: boolean;
  srcSet?: string;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  srcSet,
  caption = '',
  className = '',
  figcaptionClassName = 'text-center text-sm text-gray-600',
  lazyLoad = true,
  ...primitive
}) => {
  return (
    <figure className={className}>
      <picture>
        {srcSet && <source srcSet={srcSet} type='image/webp' />}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={lazyLoad ? 'lazy' : 'eager'}
          decoding='async'
          className='h-auto w-full'
          srcSet={srcSet}
          {...primitive}
        />
      </picture>
      {alt && <figcaption className={figcaptionClassName}>{caption}</figcaption>}
    </figure>
  );
};

export default Image;
