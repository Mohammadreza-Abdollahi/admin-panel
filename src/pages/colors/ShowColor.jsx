const ShowColor = ({data}) => {
    return ( 
        <>
            <section className="text-center px-3 py-0.5">
                <div className="w-full h-9 px-4 m-auto ring-2 ring-palete-2-400-1 rounded-sm" style={{backgroundColor: `${data.code}`}}></div>
            </section>
        </>
     );
}
 
export default ShowColor;