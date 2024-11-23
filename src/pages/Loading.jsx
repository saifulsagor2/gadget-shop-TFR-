import { GridLoader } from "react-spinners"

const Loading = () => {
    return (
        <div className="min-h-screen min-w-screen flex justify-center items-center">
            <GridLoader
                color="#000000"
                loading={true}
                size={50}
            />
        </div>
    )
}

export default Loading
