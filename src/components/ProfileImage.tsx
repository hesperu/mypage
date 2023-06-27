import React from 'react';

interface ProfileImageProps{
  src: string;
  alt: string;
}

const ProfileImage : React.FC<ProfileImageProps>= ({ src, alt }) => {
  return (
    <img className="w-1/4 h-auto rounded-full border-2 border-white shadow" src={src} alt={alt} />
  );
};

export default ProfileImage;