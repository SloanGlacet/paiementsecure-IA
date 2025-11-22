import React from 'react';

const Badge = ({ children, variant = 'gray', className = '' }) => {
  const variants = {
    success: 'badge-success',
    warning: 'badge-warning',
    danger: 'badge-danger',
    gray: 'badge-gray',
    primary: 'bg-primary-100 text-primary-600'
  };
  
  return (
    <span className={`badge ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
