import DashboardTableRow from "./dashboardTableRow";

const DashboardTable = () => {
    return ( 
        <>
            <section className="w-full">
                <span className="block mb-3 text-center text-2xl">محصولات رو به اتمام</span>
                <table className="text-center w-full bg-palete-2-100 bg-opacity-60 rounded-sm overflow-hidden ring-1 ring-palete-2-300">
                    <thead className="border-b-palete-2-300 border-b-4 bg-palete-2-200 bg-opacity-70">
                        <tr>
                            <th className="py-3">#</th>
                            <th className="py-3">دسته</th>
                            <th className="py-3">عنوان</th>
                            <th className="py-3">وضعیت</th>
                            <th className="py-3">عملیات</th>
                        </tr>
                    </thead>
                    <tbody>
                        <DashboardTableRow col1={1} col2={'دسته شماره فلان'} col3={'محصول فلان'} col4={'پایان یافته'}/>
                        <DashboardTableRow col1={1} col2={'دسته شماره فلان'} col3={'محصول فلان'} col4={'پایان یافته'}/>
                        <DashboardTableRow col1={1} col2={'دسته شماره فلان'} col3={'محصول فلان'} col4={'روبه اتمام'}/>
                        <DashboardTableRow col1={1} col2={'دسته شماره فلان'} col3={'محصول فلان'} col4={'پایان یافته'}/>
                        <DashboardTableRow col1={1} col2={'دسته شماره فلان'} col3={'محصول فلان'} col4={'روبه اتمام'}/>
                    </tbody>
                </table>
            </section>
        </>
     );
}
 
export default DashboardTable;