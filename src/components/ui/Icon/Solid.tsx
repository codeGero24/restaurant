import React from 'react';
import Icon, { IconProps } from '@components/ui/Icon';

export interface SolidIconProps extends IconProps {
  name: IconProps['name'];
  className?: string;
  size?: number;
  color?: string;
  fill?: string;
}

const SolidIcon = React.memo(
  ({
    name,
    className,
    size = 24,
    color = 'currentColor',
    fill = 'currentColor',
    stroke = '1px',
  }: SolidIconProps) => {
    return (
      <Icon
        name={name}
        className={className}
        size={size}
        color={color}
        style={{
          fill,
          stroke,
        }}
      />
    );
  }
);

export default SolidIcon;
