import { useLocation } from "react-router-dom";
import IndexAdmin from "./layouts/admin/AdminLayout";
import AuthLayout from "./layouts/authLayout/AuthLayout";

const App = () => {
  const location = useLocation();
  return ( 
    <>
      {
        location.pathname.includes('/auth') ? (
          <AuthLayout/>
        ) : (
          <IndexAdmin/>
        )
      }
    </>
   );
}
 
export default App;