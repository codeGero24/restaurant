import React from 'react';
import * as LucideIcons from 'lucide-react';

interface IconProps extends LucideIcons.LucideProps {
  name: keyof typeof LucideIcons;
  style?: React.CSSProperties;
  className?: string;
}

export default function Icon({ name, style, className, ...props }: IconProps) {
  const LucideIcon = LucideIcons[name] as React.ComponentType<LucideIcons.LucideProps>;
  if (!LucideIcon) return null;

  return <LucideIcon className={className} style={style} {...props} />;
}
