const DashboardSubCart = ({weekly , monthly , firstColor , secondColor}) => {
    return ( 
        <>
            <section className={`w-full h-24 py-2 px-5 bg-gradient-to-r ${firstColor} ${secondColor} rounded-md shadow-lg flex justify-start items-center transition-all duration-150 hover:-translate-y-1.5`}>
                <div>
                    <span className="block text-start text-xl my-2 text-white">{`${weekly} عدد در هفته پیش`}</span>
                    <span className="block text-start text-xl my-2 text-white">{`${monthly} عدد در ماه پیش`}</span>
                </div>
            </section>
        </>
     );
}
 
export default DashboardSubCart;