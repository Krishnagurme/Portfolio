function Container({ children, className, ...props }) {
  return (
    <div
      className={`mx-auto w-full px-6 py-8 sm:px-8 md:px-10 lg:px-12 ${className ?? ''}`}
      style={{ maxWidth: '1280px' }}
      {...props}
    >
      {children}
    </div>
  )
}

export { Container }
export default Container
