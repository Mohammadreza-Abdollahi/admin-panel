import { createContext, useState } from "react";

export const SidebarToggle = createContext({
    showSidebar: false,
    setShowSidebar: ()=>{}
})
const SidebarToggleContainer = ({children})=>{
    const [showSidebar , setShowSidebar] = useState()
    return(
        <SidebarToggle.Provider value={{showSidebar , setShowSidebar}}>
            {children}
        </SidebarToggle.Provider>
    )
}
export default SidebarToggleContainer;