import { Tooltip } from "chart.js";
import { addAttributeOpenClose, openClose } from "../../redux/category/categoryDialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus, faShareNodes, faTrash } from "@fortawesome/free-solid-svg-icons";
import { getCategoriesService } from "../../services/categoryServices";
import { Alert } from "../../utils/alert";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CreatedAt from "./CreatedAt";
import ShowInMenu from "./ShowInMenu";
import PaginationTable from "../../components/PaginationTable";
import TableSkeleton from "../../components/TableSkeleton";

const CategoryTable = () => {
    const [data , setData] = useState([]);
    const [loading , setLoading] = useState(true);
    const dispatch = useDispatch();
    const optionalCols = [
        {
        title: 'زمان ایجاد',
        elements: (data)=><CreatedAt data={data}/>
        },
        {
        title: 'نمایش در منو',
        elements: (data)=><ShowInMenu data={data}/>
        },
        {
        title: 'عملیات',
        elements: (data)=>tableActions(data)
        }
    ];
    const dataInfo = [
        { field: 'id' , title: '#' },
        { field: 'title' , title: 'عنوان' },
        { field: 'parent_id' , title: 'شناسه والد' },
    ];
    const tableActions = (data)=>{
        return(
        <>
            <Tooltip arrow placement="top" title={<><span className="text-base">زیرمجموعه</span></>}><FontAwesomeIcon icon={faShareNodes} className="text-xl text-blue-500 hover:bg-blue-100 px-2 py-1 rounded-md cursor-pointer"/></Tooltip>
            <Tooltip arrow placement="top" title={<><span className="text-base">ویرایش دسته</span></>}><FontAwesomeIcon icon={faEdit} onClick={()=>dispatch(openClose())} className="text-xl text-yellow-500 hover:bg-yellow-100 px-2 py-1 rounded-md cursor-pointer"/></Tooltip>
            <Tooltip arrow placement="top" title={<><span className="text-base">افزودن ویژگی</span></>}><FontAwesomeIcon icon={faPlus} onClick={()=>dispatch(addAttributeOpenClose())} className="text-xl text-green-500 hover:bg-green-100 px-2 py-1 rounded-md cursor-pointer"/></Tooltip>
            <Tooltip arrow placement="top" title={<><span className="text-base">حذف دسته</span></>}><FontAwesomeIcon icon={faTrash} className="text-xl text-red-500 hover:bg-red-100 px-2 py-1 rounded-md cursor-pointer"/></Tooltip>
        </>
        )
    }
    const handleGetCategories = async ()=>{
        try{
        const res = await getCategoriesService();
        if(res.status === 200){
            setData(res.data.data);
            setLoading(false)
        }else{
            Alert('error','دسته بندی ها درافت نشدند!')
        }
        }catch(error){
        Alert('error','خطایی در سمت سرور رخ')
        }
    };
    useEffect(()=>{
        handleGetCategories();
    },[])
    return ( 
        <>
            {
            
                !loading ? (
                     <PaginationTable data={data} dataInfo={dataInfo} actionCol={optionalCols} rowInPage={10} searchable={true} dialogOpenner={openClose}/>
                ) : (
                    <TableSkeleton/>
                )
            }
        </>
     );
}
 
export default CategoryTable;