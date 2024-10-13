import { Skeleton } from "@mui/material";

const BrandsFormSkeleton = () => {
    return ( 
        <>
            <section className="w-full mx-auto py-2 my-5">
                <Skeleton sx={{marginTop: -3}} className="mx-auto" width={`${100}%`} height={85}/>
                <Skeleton sx={{marginTop: -3}} className="mx-auto" width={`${100}%`} height={85}/>
                <Skeleton sx={{marginTop: -8.7}} className="mx-auto" width={`${100}%`} height={300}/>
                <Skeleton sx={{marginTop: -7.8}} className="mx-auto" width={`${100}%`} height={85}/>
            </section>
        </>
     );
}
 
export default BrandsFormSkeleton;