import { VariantClassesProps, cn } from 'shared/utils';

export const getBaseClasses = (classNames: string | undefined) => {
  return cn(
    'peer relative mr-2.5 rounded mt-1 inline-flex h-5 w-5 shrink-0 cursor-pointer appearance-none items-center justify-center checked:border-2',
    classNames
  );
};

export const getColorClasses = (variant: 'light' | 'dark') => {
  const colorClasses: VariantClassesProps = {
    light: 'border-gray-200 bg-white checked:bg-white border-2',
    dark: 'border-2 border-[#2D3C59] bg-[#202B40] checked:bg-[#202B40] checked:border-2'
  };

  return colorClasses[variant];
};

export const getLabelClasses = (classNames: string | undefined) => {
  return cn(
    'grow contents shrink basis-0 text-slate-600 text-xs mt-2 font-bold font-sans leading-tight',
    classNames
  );
};

export const getCheckboxClasses = (classNames: string | undefined, variant: 'light' | 'dark') => {
  return cn(getBaseClasses(classNames), getColorClasses(variant));
};
