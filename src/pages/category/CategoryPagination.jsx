import { Pagination } from "@mui/material";

const CategoryPagination = () => {
    return ( 
        <>
            <div className="inline-block" dir="ltr" style={{fontFamily: 'font'}}>
                <Pagination count={50} page={5} size="large" color="standard"/>
            </div>
        </>
     );
}
 
export default CategoryPagination;