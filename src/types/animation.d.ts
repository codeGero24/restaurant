export type animation =
  | 'animate-none'
  | 'animate-spin'
  | 'animate-ping'
  | 'animate-pulse'
  | 'animate-pulse-border'
  | 'animate-bounce'
  | 'animate-fede-in'
  | 'animate-fede-in-slow'
  | 'animate-zoom-in'
  | 'animate-zoom-out'
  | 'animate-spin-slow'
  | 'animate-slide-in-up'
  | 'animate-slide-in-down'
  | 'animate-slide-in-right'
  | 'animate-slide-in-left';

export type duration = `duration-[${number}ms]`;
