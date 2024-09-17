import { Pagination, ThemeProvider } from "@mui/material";
import { componentsTheme } from "../../themes/componentsTheme";

const CategoryPagination = () => {

    return ( 
        <>
            <div className="inline-block" dir="ltr">
                <ThemeProvider theme={componentsTheme}>
                    <Pagination count={10} page={5} size="large" color="secondary"/>
                </ThemeProvider>
            </div>
        </>
     );
}
 
export default CategoryPagination;