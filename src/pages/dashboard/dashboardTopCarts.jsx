import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashboardTopCart = ({count = 0 , title , subTitle , icon , firstColor , secondColor}) => {
    return ( 
        <>
            <section className={`w-full h-48 py-2 px-3 bg-gradient-to-r ${firstColor} ${secondColor} rounded-md shadow-lg flex justify-around items-center transition-all duration-150 hover:-translate-y-1.5`}>
                <div>
                    <span className="block text-4xl mb-1 text-white">{count.toLocaleString('fa')}</span>
                    <span className="block text-2xl mb-2 text-white">{title}</span>
                    <span className="block text-lg text-white">{subTitle}</span>
                </div>
                <div>
                    <div className="bg-palete-3-100-1 w-24 h-24 rounded-full flex justify-center items-center">
                    <FontAwesomeIcon icon={icon} className="text-6xl text-palete-3-800 align-middle" />
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default DashboardTopCart;