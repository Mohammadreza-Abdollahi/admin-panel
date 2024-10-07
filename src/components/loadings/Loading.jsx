import '../../assets/css/loading.css'

const Loading = () => {
    return ( 
        <>
            <section className="my-bg hfill w-full bg-black bg-opacity-50 relative z-50">
                <div className="w-80 h-72 flex justify-center items-center bg-white rounded-md m-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3">
                    <section>
                        <div className='spinner m-auto mb-5'></div>
                        <h1 className='text-center text-xl'>لطفا کمی صبر کنید...</h1>
                    </section>
                </div>
            </section>
        </>
     );
}
 
export default Loading;