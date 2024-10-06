import { VariantClassesProps } from 'shared/utils';
import { Size } from './Avatar.types';

export const getAvatarSize = (size: Size) => {
  const sizes: VariantClassesProps = {
    sm: 'h-10 w-10',
    lg: 'h-20 w-20'
  };

  return sizes[size];
};

export const getTextClasses = () => {
  return 'text-center font-sans font-black leading-tight text-blue-950';
};

export const getAvatarClasses = () => {
  return 'inline-flex flex-col items-center justify-center rounded-full bg-background-primary bg-cover';
};
