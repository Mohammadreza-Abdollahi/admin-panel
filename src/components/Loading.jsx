import LoadingImg from '../assets/img/loading.gif'

const Loading = () => {
    return ( 
        <>
            <section className="hfill w-full bg-black bg-opacity-50 relative z-50">
                <div className="w-80 h-72 bg-white rounded-md m-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3">
                    <img className='w-full' src={LoadingImg} alt="Loading..." />
                    <h1 className='text-center text-xl'>لطفا کمی صبر کنید...</h1>
                </div>
            </section>
        </>
     );
}
 
export default Loading;