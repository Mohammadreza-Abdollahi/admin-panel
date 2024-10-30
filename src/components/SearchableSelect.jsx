import { faChevronUp, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field } from "formik";
import { useEffect, useState } from "react";
import ErrorMess from "../formControl/ErrorMess";

const SearchableSelect = ({
  formik,
  name,
  data,
  label,
  initialItems = null,
}) => {
  const ops = [
    { id: 1, title: "سلام" },
    { id: 2, title: "درود" },
    { id: 3, title: "بدرود" },
    { id: 4, title: "تست" },
    { id: 5, title: "گاو" },
  ];
  const [open, setOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [copyItems, setCopyItems] = useState(ops);
  useEffect(() => {
    setCopyItems(data);
  }, [data]);
  useEffect(() => {
    setSelectedItems(initialItems);
  }, [initialItems]);
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
                onClick={() => setOpen(!open)}
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
                        ? "-translate-y-20 opacity-0"
                        : "-translate-y-0 opacity-100"
                    } top-full transition-all duration-300 w-full translate-x-3 bg-white absolute z-50 ring-2 ring-palete-2-400-1 rounded-sm`}
                  >
                    <div>
                      <input
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => {
                          setCopyItems(
                            ops.filter((item) =>
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
          {selectedItems.map((item) => {
            return (
              <div className="my-2 inline-block">
                <span className="align-middle mx-1 py-0.5 px-3 bg-palete-2-100 rounded-full">
                  <button
                    className="text-red-500 p-0.5"
                    onClick={() => handleRemoveSelectedCategory(item.id)}
                  >
                    <FontAwesomeIcon className="align-middle" icon={faXmark} />
                  </button>
                  {item.title}
                </span>
              </div>
            );
          })}
        </section>
      </section>
    </>
  );
};

export default SearchableSelect;
