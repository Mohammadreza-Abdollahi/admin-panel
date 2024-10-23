const LikesCount = ({data}) => {
    return ( 
        <>
            <section>
                <span className="text-lg mx-4 text-red-500">{data.dislike_count}</span>
                <span className="text-lg mx-4 text-green-500">{data.like_count}</span>
            </section>
        </>
     );
}
 
export default LikesCount;