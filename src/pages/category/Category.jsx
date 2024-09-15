import CategorySearch from "../../components/SearchBox";
import CategoryDialog from "./CategoryDialog";
import CategoryTable from "./CategoryTable";
import Btn from "../../components/Btn";

const Category = () => {
  return (
    <>
      <CategoryDialog />
      <h1 className="text-3xl text-center my-4 text-slate-800">
        <b>مدیریت دسته بندی محصولات</b>
      </h1>
      <section className="flex justify-between items-center">
        <div className="w-1/3 text-start">
          <CategorySearch
            btnTxt={"جستجو"}
            placeholder={"دسته بندی مورد نظر را جستجو کنید..."}
          />
        </div>
        <dir className="w-1/3 text-end">
          <Btn btnTxt={"افزودن"} />
        </dir>
      </section>
      <section>
        <CategoryTable />
      </section>
    </>
  );
};

export default Category;
