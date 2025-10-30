import React from "react";

interface LayoutHomeProps {
  children: React.ReactNode
}

export const LayoutHome = ({ children }: LayoutHomeProps) => {
  const childrenCount = React.Children.count(children);
  
  const getGridClass = () => {
    switch (childrenCount) {
      case 1:
        return "grid grid-cols-1 gap-4";
      case 2:
        return "grid grid-cols-1 md:grid-cols-2 gap-4";
      case 3:
        return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4";
      case 4:
        return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4";
      default:
        return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4";
    }
  };

  return (
    <div className={getGridClass()}>
      {children}
    </div>
  )
}