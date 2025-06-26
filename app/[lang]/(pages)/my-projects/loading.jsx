import "@/Components/Client/loaders/loaderCss.css"

const loading = () => {
    return (
        <div className="flex items-start  px-10 justify-between w-full  p-10">
            <div className=" flex flex-col gap-5">
                <div className="duration-400 rounded-2xl  transition-colors  bg-muted md:w-[700px]  animate-pulse  h-[40px]"></div>
                <div className="duration-400 rounded-2xl  transition-colors  bg-muted md:w-[600px] ml-4 animate-pulse  h-[60px]"></div>
                <div className="duration-400 rounded-2xl  transition-colors  bg-muted md:w-[600px] ml-4 animate-pulse  h-[60px]"></div>
                <div className="duration-400 rounded-2xl  transition-colors  bg-muted md:w-[100px]  animate-pulse  ml-10  h-[30px]"></div>
                <div className="flex flex-col mt-5 pl-10 gap-5">
                    <div className="duration-400 rounded-2xl  transition-colors  bg-muted md:w-[400px]  animate-pulse  ml-10  h-[30px]"></div>
                    <div className="duration-400 rounded-2xl  transition-colors  bg-muted md:w-[400px]  animate-pulse  ml-10  h-[30px]"></div>
                    <div className="duration-400 rounded-2xl  transition-colors  bg-muted md:w-[400px]  animate-pulse  ml-10  h-[30px]"></div>
                    <div className="duration-400 rounded-2xl  transition-colors  bg-muted md:w-[400px]  animate-pulse  ml-10  h-[30px]"></div>
                </div>
                <div className="flex  pl-10 mt-10  items-center gap-5">
                    <div className="duration-400 rounded-2xl mr-10  transition-colors  bg-muted md:w-[100px]  animate-pulse   h-[30px]"></div>
                    <div className="flex gap-4">
                        <div className="duration-400 rounded-2xl  transition-colors  bg-muted md:w-[60px]  animate-pulse    h-[50px]"></div>
                        <div className="duration-400 rounded-2xl  transition-colors  bg-muted md:w-[60px]  animate-pulse    h-[50px]"></div>
                        <div className="duration-400 rounded-2xl  transition-colors  bg-muted md:w-[60px]  animate-pulse    h-[50px]"></div>
                        <div className="duration-400 rounded-2xl  transition-colors  bg-muted md:w-[60px]  animate-pulse    h-[50px]"></div>
                        <div className="duration-400 rounded-2xl  transition-colors  bg-muted md:w-[60px]  animate-pulse    h-[50px]"></div>
                    </div>
                </div>
                <div className="flex pl-10 mt-10 gap-4">
                    <div className="duration-400 rounded-2xl  transition-colors  bg-muted md:w-[120px]  animate-pulse    h-[50px]"></div>
                    <div className="duration-400 rounded-2xl  transition-colors  bg-muted md:w-[120px]  animate-pulse    h-[50px]"></div>
                    <div className="duration-400 rounded-2xl  transition-colors  bg-muted md:w-[80px]  animate-pulse    h-[50px]"></div>
                    <div className="duration-400 rounded-2xl  transition-colors  bg-muted md:w-[80px]  animate-pulse    h-[50px]"></div>
                </div>


            </div>
            <div className="flex flex-col gap-4">
                <div className="duration-400 rounded-2xl  transition-colors  bg-muted md:w-[400px]  animate-pulse  h-[300px]"></div>
                <div className="duration-400 rounded-2xl  transition-colors  bg-muted md:w-[400px]  animate-pulse  h-[300px]"></div>

            </div>
        </div>
    )
}

export default loading
