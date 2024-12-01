import { BeatLoader } from "react-spinners"

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
        <BeatLoader
            size={20}
            margin={2}
            color="#FFFFFF"
            speedMultiplier={0.8}
        />
    </div>
  )
}

export default Loading
