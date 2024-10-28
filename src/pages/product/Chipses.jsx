import TextBadge from "../../components/TextBadge";

const Chips = ({ chipsList , setChips , formik }) => {
  const handleRemoveSelectedCategory = (id, formik, setSelectedCategories) => {
    setSelectedCategories((prev) => {
      const newData = prev.filter((item) => item.id != id);
      const selectedIds = newData.map((item) => item.id);
      formik.setFieldValue("category_ids", selectedIds.join("-"));
      return newData;
    });
  };
  return (
    <>
      <section>
        {chipsList.map((item) => {
          return (
            <TextBadge
              key={`badge_${item.id}`}
              title={item.title}
              id={item.id}
              handleDelete={(id) =>
                handleRemoveSelectedCategory(id, formik, setChips)
              }
            />
          );
        })}
      </section>
    </>
  );
};

export default Chips;
