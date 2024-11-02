import { faChevronUp, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field } from "formik";
import { useEffect, useState } from "react";

const SearchableSelect = ({
  formik,
  name,
  data,
  label,
  initialItems,
}) => {
  const [open, setOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState(initialItems);
  const [copyItems, setCopyItems] = useState(data);
  useEffect(() => {
    setCopyItems(data);
  }, [data]);
  useEffect(() => {
    document.querySelector('body').addEventListener('click',()=>{
      setOpen(false);
    })
  }, []);
  // useEffect(() => {
  //     setSelectedItems(initialItems)
  // }, [initialItems]);
  const handleAddSelectedCategory = (id) => {
    setSelectedItems((prev) => {
      if (prev.findIndex((item) => item.id == id) == -1) {
        const newData = [...prev, copyItems.filter((item) => item.id == id)[0]];
        const selectedIds = newData.map((item) => item.id);
        formik.setFieldValue(name, selectedIds.join("-"));
        return newData;
      } else {
        return prev;
      }
    });
  };
  const handleRemoveSelectedCategory = (id) => {
    setSelectedItems((prev) => {
      const newData = prev.filter((item) => item.id != id);
      const selectedIds = newData.map((item) => item.id);
      formik.setFieldValue(name, selectedIds.join("-"));
      return newData;
    });
  };
  return (
    <>
      <Field>
        {(formik) => {
          return (
            <section>
              <div
                className={`flex text-lg ring-2 ring-palete-2-400-1 rounded-sm cursor-pointer ${
                  !open ? "overflow-hidden" : ""
                }`}
                onClick={(e) =>{setOpen(!open);e.stopPropagation()}}
              >
                <section className="w-1/4 bg-palete-2-400-1 text-center py-2 text-white">
                  <span className="align-middle">{label}</span>
                </section>
                <section className="relative w-3/4 bg-white px-3 flex justify-between items-center text-slate-800">
                  <span className="align-middle">انتخاب نشده</span>
                  <span className="align-middle">
                    <FontAwesomeIcon
                      icon={faChevronUp}
                      className={`${
                        !open ? "rotate-180" : ""
                      } transition-all duration-300`}
                    />
                  </span>
                  <div
                    className={`${
                      !open
                        ? "-translate-y-20 opacity-0 invisible"
                        : "-translate-y-0 opacity-100 visible"
                    } top-full transition-all duration-300 w-full translate-x-3 bg-white absolute z-50 ring-2 ring-palete-2-400-1 rounded-sm`}
                  >
                    <div>
                      <input
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => {
                          setCopyItems(
                            data.filter((item) =>
                              item.title.includes(e.target.value)
                            )
                          );
                        }}
                        type="text"
                        placeholder="جستجو کنید..."
                        className="w-full focus:outline-none border border-b-2 p-2"
                      />
                    </div>
                    <div>
                      <ul className="appearance-none">
                        {copyItems.map((item, index) => {
                          return (
                            <li
                              id={item.id}
                              key={index}
                              className=" py-2 px-2 hover:bg-palete-2-100"
                              onClick={() => handleAddSelectedCategory(item.id)}
                            >
                              {item.title}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          );
        }}
      </Field>
      <section>
        <section>
          {selectedItems
            ? selectedItems.map((item) => {
                return (
                  <div className="mt-4 inline-block">
                    <span className="align-middle mx-1 py-0.5 px-3 bg-palete-2-100 rounded-full">
                      <button
                        className="text-red-500 p-0.5"
                        onClick={() => handleRemoveSelectedCategory(item.id)}
                      >
                        <FontAwesomeIcon
                          className="align-middle"
                          icon={faXmark}
                        />
                      </button>
                      {item.title}
                    </span>
                  </div>
                );
              })
            : null}
        </section>
      </section>
    </>
  );
};

export default SearchableSelect;
