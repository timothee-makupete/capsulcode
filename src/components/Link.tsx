import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function Link({ href, className = '', children, ...props }: LinkProps) {
  const baseClasses = 'relative text-gray-300 hover:text-white transition-colors duration-200';
  const combinedClasses = `${baseClasses} ${className}`;

  return (
    <a href={href} className={combinedClasses} {...props}>
      {children}
    </a>
  );
}