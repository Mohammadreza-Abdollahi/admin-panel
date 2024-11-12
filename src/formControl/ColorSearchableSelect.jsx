import { faChevronUp, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@mui/material";
import { Field } from "formik";
import { useEffect, useState } from "react";

const ColorSearchableSelect = ({ formik, name, data, label, initialItems }) => {
  const [open, setOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState(initialItems);
  const [copyItems, setCopyItems] = useState(data);
  useEffect(() => {
    setCopyItems(data);
  }, [data]);
  useEffect(() => {
    document.querySelector("body").addEventListener("click", () => {
      setOpen(false);
    });
  }, []);
  useEffect(() => {
      setSelectedItems(initialItems)
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
                className={`flex text-lg ring-2 rounded-sm cursor-pointer ${
                  !open ? "overflow-hidden" : ""
                }
                ${open ? 'ring-palete-4-500-1' : 'ring-palete-2-400-1'}`}
                onClick={(e) => {
                  setOpen(!open);
                  e.stopPropagation();
                }}
              >
                <section className={`w-1/4 text-center py-2 text-white ${open ? 'bg-palete-4-500-1' : 'bg-palete-2-400-1'}`}>
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
                    } top-full transition-all duration-300 w-full translate-x-3 bg-white absolute z-50 ring-2 rounded-sm ${open ? 'ring-palete-4-500-1' : 'ring-palete-2-400-1'}`}
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
                              className=" py-2 px-2 hover:bg-palete-2-100 flex justify-between items-center"
                              onClick={() => handleAddSelectedCategory(item.id)}
                            >
                              <div>
                                <span>{item.title}</span>
                              </div>
                              <div
                                className="w-10 h-10 rounded-full bg-blue-200"
                                style={{ backgroundColor: item.code }}
                              ></div>
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
        <section className="my-5">
          {selectedItems
            ? selectedItems.map((item) => {
                return (
                  <Tooltip arrow placement="bottom" title={
                    <>
                        <span className="text-sm">{item.title}</span>
                    </>
                    }>
                    <span
                      onClick={() => handleRemoveSelectedCategory(item.id)}
                      style={{ backgroundColor: item.code }}
                      className={`inline-block w-10 h-10 mx-2 border-2 border-white  outline outline-4 outline-palete-2-400-1 rounded-full relative group`}
                    >
                      <button className="text-white text-2xl scale-0 group-hover:scale-100 transition-all duration-150 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <FontAwesomeIcon
                          className="align-middle"
                          icon={faXmark}
                        />
                      </button>
                    </span>
                  </Tooltip>
                  // <div className="mt-4 inline-block">
                  //   <span className="align-middle mx-1 py-0.5 px-3 bg-palete-2-100 rounded-full">
                  //     <button
                  //       className="text-red-500 p-0.5"
                  //       onClick={() => handleRemoveSelectedCategory(item.id)}
                  //     >
                  //       <FontAwesomeIcon
                  //         className="align-middle"
                  //         icon={faXmark}
                  //       />
                  //     </button>
                  //     {item.title}
                  //   </span>
                  // </div>
                );
              })
            : null}
        </section>
      </section>
    </>
  );
};

export default ColorSearchableSelect;
