import SwitchInput from "../../components/SwitchInput";
import Btn from "../../components/Btn";
import FullScreenDialog from "../../components/FullScreenDialog";
import { useSelector } from "react-redux";
import { AttributeOpenCloseDialog } from "../../redux/category/categorySlice";
import Input from "../../components/Input";
import PaginationTable from "../../components/PaginationTable";
import { data, dataInfo } from "../../mock/attributesData";

const AddCategoryAttributes = () => {
  const { addAttrDialog } = useSelector((state) => state.categorySlice);
  return (
    <>
      <FullScreenDialog
        dialogTitle={"افزودن ویژگی به دسته محصولات"}
        open={addAttrDialog}
        myDispatch={AttributeOpenCloseDialog}
      >
        <section dir="rtl" className="w-5/6 flex justify-around gap-5 mx-auto py-5 mt-5">
          <div className="w-full">
            <Input label={'عنوان ویژگی'} name={'AttrTitle'} placeholder={'عنوان ویژگی جدید را وارد کنید...'} type={'text'}/>
          </div>
          <div className="w-full">
            <Input label={'واحد ویژگی'} name={'AttrUnit'} placeholder={'واحد ویژگی جدید را وارد کنید...'} type={'text'}/>
          </div>
          <div className="w-1/2">
            <SwitchInput label={'نمایش در فیلتر :'} name={'ShowInFilter'}/>
          </div>
          <div>
            <Btn btnTxt={'افزودن'}/>
          </div>
        </section>
        <div className="my-5">
          <hr /><hr />
        </div>
        <section dir="rtl" className="px-6">
          <PaginationTable data={data} dataInfo={dataInfo} searchable={true} searchParam={'title'} hasBtn={false} rowInPage={10}/>
        </section>
      </FullScreenDialog>
    </>
  );
};

export default AddCategoryAttributes;
