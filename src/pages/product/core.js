import ProductActions from "./ProductActions";

export const dataInfo = [
    { field: "id", title: "#" },
    {
      field: null,
      title: "گروه محصول",
      elements: (data) => data.categories[0].title,
    },
    { field: "title", title: "عنوان" },
    { field: "price", title: "قیمت" },
    { field: "view_count", title: "موجودی" },
    { field: "like_count", title: "تعداد لایک" },
    {
        field: null,
        title: "گروه محصول",
        elements: (data) => <span className={`text-lg ${data.is_active ? 'text-green-500' : 'text-red-500'}`}>{data.is_active ? 'فعال' : 'غیرفعال'}</span> ,
    },
    {
      field: null,
      title: "عملیات",
      elements: (data) => <ProductActions data={data} />,
    },
  ];