import React from 'react';
import * as LucideIcons from 'lucide-react';

export interface IconProps extends LucideIcons.LucideProps {
  name: keyof typeof LucideIcons;
  style?: React.CSSProperties;
  className?: string;
}

const Icon = React.memo(({ name, style, className, ...props }: IconProps) => {
  const LucideIcon = LucideIcons[name] as React.ComponentType<LucideIcons.LucideProps>;
  if (!LucideIcon) return null;

  return <LucideIcon className={className} style={style} {...props} />;
});

export default Icon;
