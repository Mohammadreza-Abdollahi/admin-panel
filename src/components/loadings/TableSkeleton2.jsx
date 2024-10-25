import { Skeleton } from "@mui/material";

const TableSkeleton2 = () => {
    return ( 
        <>
            <section className="mx-auto">
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
 
export default TableSkeleton2;