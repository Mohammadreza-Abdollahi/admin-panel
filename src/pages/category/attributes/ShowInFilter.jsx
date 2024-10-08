const ShowInFilter = ({data}) => {
    return ( 
        <>
            <span className={`text-lg ${data.in_filter ? 'text-green-600' : 'text-red-600'}`}>{data.in_filter ? 'بله' : 'خیر'}</span>
        </>
    );
}
 
export default ShowInFilter;