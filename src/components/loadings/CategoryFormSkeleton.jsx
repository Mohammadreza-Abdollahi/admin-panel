import { Skeleton } from "@mui/material";

const CategoryFormSkeleton = () => {
    return ( 
        <>
            <section className="w-2/5 mx-auto py-5 my-5">
                <Skeleton sx={{marginTop: -3}} className="mx-auto" width={`${100}%`} height={85}/>
                <Skeleton sx={{marginTop: -3}} className="mx-auto" width={`${100}%`} height={85}/>
                <Skeleton sx={{marginTop: -8.7}} className="mx-auto" width={`${100}%`} height={300}/>
                <div className="flex justify-around">
                    <div className="w-1/3">
                        <Skeleton sx={{marginTop: -2.5}} className="mx-auto" width={`${100}%`} height={85}/>
                    </div>
                    <div className="w-1/3">
                        <Skeleton sx={{marginTop: -2.5}} className="mx-auto" width={`${100}%`} height={85}/>
                    </div>
                </div>
                <Skeleton sx={{marginTop: -2.5}} className="mx-auto" width={`${100}%`} height={85}/>
            </section>
        </>
     );
}
 
export default CategoryFormSkeleton;