import Aside from "./sidebar/Sidebar";
import Header from "./header/Header";
import '../../assets/css/content.css'
import Content from "../../pages/Content";

const IndexAdmin = () => {
    return ( 
        <>
            <Header/>
            <Aside/>
            <Content/>
        </>
     );
}
 
export default IndexAdmin;