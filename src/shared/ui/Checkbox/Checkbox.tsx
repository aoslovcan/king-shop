import React from 'react';
import { useEffect, useState } from 'react';
import { CheckMarkIcon } from 'shared/assets/icons';
import { getCheckboxClasses, getLabelClasses } from './Checkbox.styles';
import { CheckboxProps } from './Checkbox.types';

/**
 * @param isChecked - If true, checkbox is checked
 * @param label - Checkbox label
 * @param variant - Default: "light"
 * @param checkedIcon - If provided, renders icon when checked
 * @param classNames - If provided, adds classes to checkbox
 * @param labelClassNames - If provided, adds classes to checkbox label
 * @param handleChecked - Watches for changes in checkbox
 * @param disabled - If true, checkbox is disabled
 *
 * @example
 *       <Checkbox
 *         label="Checkbox"
 *         variant="light"
 *         checkedIcon={<CheckMarkIcon />}
 *      />
 *
 * @type
 * CheckboxProps{
 *  isChecked?: boolean
 *  label: string
 *  variant?: string
 *  checkedIcon?: React.ReactNode
 *  classNames?: string
 *  labelClassNames?: string
 *  handleChecked?: (checked: boolean) => void
 * }
 */

export const Checkbox = ({
  isChecked = false,
  label,
  variant = 'light',
  checkedIcon = <CheckMarkIcon />,
  classNames,
  labelClassNames,
  handleChecked,
  disabled
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked);

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  const toggleChecked = () => {
    setChecked(!checked);
    if (handleChecked) {
      handleChecked(!checked);
    }
  };

  const checkIcon = checked && (
    <span
      onClick={!disabled && toggleChecked}
      className="cursor:pointer absolute ml-1.5 mt-2.5 h-1.5 w-2 items-center">
      {checkedIcon}
    </span>
  );

  return (
    <div className="relative inline-flex w-full gap-2">
      <input
        disabled={disabled}
        onClick={toggleChecked}
        className={getCheckboxClasses(classNames, variant)}
        type="checkbox"
      />
      {checkIcon}
      <label className={getLabelClasses(labelClassNames)}>{label}</label>
    </div>
  );
};
