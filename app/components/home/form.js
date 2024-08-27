"use client";

import { useState } from "react";
import Toast from "./Toast";
export default function Form() {
  const [bookInfo, setBookInfo] = useState([]);
  const [showFlag, setShowFlag] = useState(false);
  const [title, setTitle] = useState("");

  const handleShowToast = (e) => {
    setShowFlag(true);
    // console.log(showFlag)
  };

  const handleClosingToast = (e) => {
    setShowFlag(false);
    // console.log(showFlag)
  };

  const handleBookInfo = (e) => {
    e.preventDefault();

    const title = e.target.elements.title.value;
    const author = e.target.elements.author.value;
    const genre = e.target.elements.genre.value;
    const publishedDate = e.target.elements.publishedDate.value;
    const bookDescription = e.target.elements.description.value;

    setBookInfo([title, author, bookDescription]);
    handleShowToast();
  };

  return (
    <>
      <div
        id="form-target-section"
        className=" p-8   border-gray-200  dark:bg-gray-700" /* mt-48 */
      >
        <h1 className="font-bold text-3xl text-slate-900 dark:text-sky-500">Add Book</h1>
        <p className="font-semibold text-gray-600 mt-6 dark:text-cyan-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
          dolorem vel cupiditate laudantium dicta.
        </p>
        <form onSubmit={handleBookInfo}>
          <div className="mt-8 grid lg:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="title"
                className="text-sm text-gray-700  block mb-1 font-medium dark:text-cyan-100"
              >
                Title
              </label>
              <input
                
                type="text"
                name="title"
                id="title"
                className="bg-gray-100 dark:bg-gray-900  border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter Book Title"
                required
              />
            </div>
            <div>
              <label
                htmlFor="author"
                className="text-sm text-gray-700 block mb-1 font-medium dark:text-cyan-100"
              >
                Book Author
              </label>
              <input
                type="text"
                name="author"
                id="author"
                className="bg-gray-100 dark:bg-gray-900 border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="William Shakespeare"
                required
              />
            </div>
            <div>
              <label
                htmlFor="genre"
                className="text-sm text-gray-700 block mb-1 font-medium dark:text-cyan-100"
              >
                Genre
              </label>
              <input
                type="text"
                name="genre"
                id="genre"
                className="bg-gray-100 dark:bg-gray-900 border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="(ex. novel,romance,fiction)"
                required
              />
            </div>
            <div>
              <label
                htmlFor="publishedDate"
                className="text-sm text-gray-700 block mb-1 font-medium dark:text-cyan-100"
              >
                Published Date
              </label>
              <input
                type="text"
                name="publishedDate"
                id="publishedDate"
                className="bg-gray-100 dark:bg-gray-900 border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="(01/01/1993)"
                required
              />
            </div>

            <div>
              <label
                htmlFor="bookCover"
                className="text-sm text-gray-700 block mb-1 font-medium dark:text-cyan-100"
              >
                Book Cover
              </label>
              <input
                type="text"
                name="bookCover"
                id="bookCover"
                className="bg-gray-100 dark:bg-gray-900 border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Nnter book cover link"
                required
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-cyan-100"
              >
                Description
              </label>
              <textarea
                // value={inputValue}
                id="description"
                name="description"
                rows="4"
                className="block p-2.5 w-full rounded text-sm text-gray-900 bg-gray-100 rounded-lg dark:bg-gray-900 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-200 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write book description here..."
                required
              ></textarea>
            </div>
          </div>
          <div className="space-x-4 mt-8">
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
            >
              Save
            </button>
            {/* <button className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50"
   
            
            type="button"
            >
              Clear
            </button> */}
          </div>
        </form>
      </div>

      <div className="">
        {showFlag && (
          <Toast book={bookInfo} closingFunction={handleClosingToast} />
        )}
      </div>
    </>
  );
}
