const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1 className='text-3xl font-bold'>NAVBAR</h1>
      {children}
    </div>
  )
}

export default Layout
