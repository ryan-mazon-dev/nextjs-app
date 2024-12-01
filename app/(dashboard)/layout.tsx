const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1 className='text-3xl font-bold'>--DASHBOARD LAYOUT--</h1>
      {children}
    </div>
  )
}

export default Layout
