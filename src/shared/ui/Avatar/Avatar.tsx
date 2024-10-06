import React from 'react';
import { getAvatarClasses, getAvatarSize, getTextClasses } from './Avatar.styles';
import { AvatarProps } from './Avatar.types';
import { cn } from 'shared/utils';

/**
 *
 * @param size - Size of the avatar (sm, lg)
 * @param imgSrc - Image source for the avatar
 * @param nameInitials - Initials for the avatar if no image source is provided
 * @param className - Additional class names for the avatar
 * @param textClassName - Additional class names for the text
 *
 */

export const Avatar = ({
  size,
  imgSrc,
  nameInitials,
  className,
  textClassName,
  bgColor
}: AvatarProps) => {
  return (
    <div
      style={{
        backgroundColor: `${bgColor}`,
        backgroundImage: `url(${imgSrc})`,
        boxShadow: '0px 2px 5px 0px #26334D26'
      }}
      className={cn(getAvatarClasses(), getAvatarSize(size), className)}>
      {!imgSrc && (
        <div className={cn(getTextClasses(), size === 'sm' ? 'text-sm' : 'text-lg', textClassName)}>
          {nameInitials}
        </div>
      )}
    </div>
  );
};
