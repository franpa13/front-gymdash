interface LayoutHomeProps {
  children: React.ReactNode
}

export const LayoutHome = ({ children }: LayoutHomeProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {children}
    </div>
  )
}
