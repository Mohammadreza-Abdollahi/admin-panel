import { Pagination, ThemeProvider } from "@mui/material";
import { componentsTheme } from "../../themes/componentsTheme";

const ProductPagination = () => {

    return ( 
        <>
            <div className="inline-block" dir="ltr">
                <ThemeProvider theme={componentsTheme}>
                    <Pagination count={50} page={5} size="large" color="secondary"/>
                </ThemeProvider>
            </div>
        </>
     );
}
 
export default ProductPagination;