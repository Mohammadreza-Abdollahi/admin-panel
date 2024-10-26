import { Skeleton } from "@mui/material";

const ProductsFormSkeleton = () => {
    return ( 
        <>
            <section className="w-full mx-auto my-5">
                <section className="flex justify-between gap-3">
                    <div className="w-full">
                        <Skeleton sx={{marginTop: -3}} className="mx-auto" width={`${100}%`} height={85}/>
                    </div>
                    <div className="w-40">
                        <Skeleton sx={{marginTop: -3}} className="mx-auto" width={`${100}%`} height={85}/>
                    </div>
                </section>
                <section className="flex justify-start gap-3 mt-5">
                    <Skeleton sx={{marginTop: -3}} width={`${10}%`} height={50}/>
                    <Skeleton sx={{marginTop: -3}} width={`${10}%`} height={50}/>
                </section>
                <section className="w-full flex justify-between gap-5 mt-6">
                    <Skeleton sx={{marginTop: -3}} className="mx-auto" width={`${100}%`} height={85}/>
                    <Skeleton sx={{marginTop: -3}} className="mx-auto" width={`${100}%`} height={85}/>
                </section>
                <section className="w-full flex justify-between gap-5 mt-6">
                    <Skeleton sx={{marginTop: -3}} className="mx-auto" width={`${100}%`} height={85}/>
                    <Skeleton sx={{marginTop: -3}} className="mx-auto" width={`${100}%`} height={85}/>
                </section>
                <Skeleton className="mx-auto mt-6" width={`${100}%`} height={85}/>
                <section className="flex justify-start gap-3 mt-5">
                    <Skeleton sx={{marginTop: -3}} variant="circular" className="rounded-full" width={`${60}px`} height={60}/>
                    <Skeleton sx={{marginTop: -3}} variant="circular" className="rounded-full" width={`${60}px`} height={60}/>
                </section>
                <Skeleton className="mx-auto mt-6" width={`${100}%`} height={85}/>
                <section className="flex justify-start gap-3 my-5">
                    <Skeleton sx={{marginTop: -3}} width={`${10}%`} height={50}/>
                    <Skeleton sx={{marginTop: -3}} width={`${10}%`} height={50}/>
                </section>
                <Skeleton sx={{marginTop: -8.7}} className="mx-auto" width={`${100}%`} height={300}/>
                <section className="w-full flex justify-between gap-1">
                    <Skeleton sx={{marginTop: -3}} className="mx-auto" width={`${300}px`} height={85}/>
                    <Skeleton sx={{marginTop: -3}} className="mx-auto" width={`${300}px`} height={85}/>
                </section>
                <Skeleton className="mx-auto mt-6" width={`${100}%`} height={85}/>
            </section>
        </>
     );
}
 
export default ProductsFormSkeleton;