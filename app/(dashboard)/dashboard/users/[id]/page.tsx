const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params

  return <h1 className='text-3xl font-bold'>User Profile {id}</h1>
}

export default Page
