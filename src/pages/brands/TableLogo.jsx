import Config from '../../services/config.json'
import Forbidden from '../../assets/img/forbidden-sign.png';

const TableLogo = ({data}) => {
    return ( 
        <>
            <section className='w-20 m-auto'>
                {
                    data.logo ? (
                        <img className='text-center' src={`${Config.filesUrl}/${data.logo}`} alt="Logo" />
                    ) : (
                        <img className='text-center' src={Forbidden} alt="Logo" />
                    )
                }
            </section>
        </>
     );
}
 
export default TableLogo;