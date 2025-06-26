import "@/Components/Client/loaders/loaderCss.css"

const loading = () => {
    return (
        <>
            <div className="w-full  flex-col   flex items-center" >

                <div className="flex items-start  justify-start flex-col w-full max-w-[1500px] gap-4 px-20 p-10">
                    <div className="duration-400 rounded-2xl  transition-colors  bg-muted md:w-[70%]  animate-pulse  h-[40px]"></div>
                    <div className="duration-400 rounded-2xl  transition-colors  bg-muted md:w-[90%] ml-4 animate-pulse  h-[130px]"></div>
                    <div className="duration-400 rounded-2xl  transition-colors  bg-muted md:w-[90%] ml-4 animate-pulse  h-[90px]"></div>
                    <div className="duration-400 rounded-2xl  transition-colors  bg-muted md:w-[200px] mt-10  animate-pulse  ml-10  h-[30px]"></div>
                    <div className="duration-400 rounded-2xl  transition-colors  bg-muted md:w-[60%] ml-4 animate-pulse  h-[90px]"></div>
                </div>

                <div className="flex mt-10 items-start  justify-start flex-col w-full max-w-[1500px] gap-4 px-20 p-10">
                    <div className="duration-400 rounded-2xl  transition-colors  bg-muted md:w-[70%]  animate-pulse  h-[40px]"></div>
                    <div className="duration-400 rounded-2xl  transition-colors  bg-muted md:w-[90%] ml-4 animate-pulse  h-[130px]"></div>
                    <div className="duration-400 rounded-2xl  transition-colors  bg-muted md:w-[90%] ml-4 animate-pulse  h-[90px]"></div>
                    <div className="duration-400 rounded-2xl  transition-colors  bg-muted md:w-[200px] mt-10  animate-pulse  ml-10  h-[30px]"></div>
                    <div className="duration-400 rounded-2xl  transition-colors  bg-muted md:w-[60%] ml-4 animate-pulse  h-[90px]"></div>
                </div>

            </div>
        </>
    )
}

export default loading
