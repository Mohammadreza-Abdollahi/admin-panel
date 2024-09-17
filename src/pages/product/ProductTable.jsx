import ProductTableRow from "./ProductTableRow";

const ProductTable = () => {
    return ( 
        <>
            <table className="text-center w-full bg-palete-2-100 bg-opacity-60 rounded-sm overflow-hidden ring-1 ring-palete-2-300">
                <thead className="border-b-palete-2-300 border-b-4 bg-palete-2-200 bg-opacity-70">
                    <tr className="text-slate-800">
                        <th className="py-3">#</th>
                        <th className="py-3">دسته</th>
                        <th className="py-3">عنوان</th>
                        <th className="py-3">قیمت</th>
                        <th className="py-3">موجودی</th>
                        <th className="py-3">تعداد پسند</th>
                        <th className="py-3">وضعیت</th>
                        <th className="py-3">عملیات</th>
                    </tr>
                </thead>
                <tbody className="text-slate-600">
                    <ProductTableRow col1={1} col2={'دسته شماره فلان'} col3={'محصول فلان'} col4={20000} col5={12} col6A={5} col6B={8} col7={'فعال'}/>
                    <ProductTableRow col1={2} col2={'دسته شماره فلان'} col3={'محصول فلان'} col4={20000} col5={12} col6A={5} col6B={8} col7={'فعال'}/>
                    <ProductTableRow col1={3} col2={'دسته شماره فلان'} col3={'محصول فلان'} col4={20000} col5={12} col6A={5} col6B={8} col7={'فعال'}/>
                    <ProductTableRow col1={4} col2={'دسته شماره فلان'} col3={'محصول فلان'} col4={20000} col5={12} col6A={5} col6B={8} col7={'فعال'}/>
                    <ProductTableRow col1={5} col2={'دسته شماره فلان'} col3={'محصول فلان'} col4={20000} col5={12} col6A={5} col6B={8} col7={'فعال'}/>
                    <ProductTableRow col1={6} col2={'دسته شماره فلان'} col3={'محصول فلان'} col4={20000} col5={12} col6A={5} col6B={8} col7={'فعال'}/>
                </tbody>
            </table>
        </>
     );
}
 
export default ProductTable;