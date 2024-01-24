import React from "react";
import { useFormik } from "formik";

const AddBooks = ({ addBook }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      author: [
        {
          authorname: "",
        },
      ],
      category: "",
    },
    onSubmit: (data) => {
      addBook(data);
    },
  });

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mt-2 text-lg leading-8 text-gray-600">Add new books</p>
      </div>
      <form
        className="mx-auto mt-16 max-w-xl sm:mt-20"
        onSubmit={formik.handleSubmit}
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="book"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Book name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="title"
                id="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="author"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Author
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="authorname"
                id="authorname"
                value={formik.values.authorname}
                onChange={formik.handleChange}
                autoComplete="author"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="description"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Book Description
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="description"
                id="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                autoComplete="description"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="category"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Book Category
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="category"
                id="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                autoComplete="category"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBooks;
