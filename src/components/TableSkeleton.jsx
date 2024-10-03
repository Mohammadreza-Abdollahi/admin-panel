import { Skeleton } from "@mui/material";

const TableSkeleton = () => {
    return ( 
        <>
            <section className="mx-auto">
                <div className="flex justify-between">
                    <Skeleton width={400} height={70}/>
                    <Skeleton width={150} height={70}/>
                </div>
                <Skeleton sx={{marginTop: -3}} className="mx-auto" width={`${100}%`} height={90}/>
                <Skeleton sx={{marginTop: -3}} className="mx-auto" width={`${100}%`} height={70}/>
                <Skeleton sx={{marginTop: -3}} className="mx-auto" width={`${100}%`} height={70}/>
                <Skeleton sx={{marginTop: -3}} className="mx-auto" width={`${100}%`} height={70}/>
                <Skeleton sx={{marginTop: -3}} className="mx-auto" width={`${100}%`} height={70}/>
                <Skeleton sx={{marginTop: -3}} className="mx-auto" width={`${100}%`} height={70}/>
            </section>
        </>
     );
}
 
export default TableSkeleton;