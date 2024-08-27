import { books } from "@/app/data/books_data"
export default function Book_cards(){

  const sortedBooks = books.sort((a, b) => a.title.localeCompare(b.title));



  return (

    <>


<div className="mx-auto px-8 py-16 dark:bg-gray-700 " id="books-target-section">
  <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8 dark:text-sky-500">Book Collection</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
    { sortedBooks.map((book, index) => {
      return (
        <div className="bg-white rounded-md shadow-md overflow-hidden dark:bg-gray-900" key={index}>
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 dark:bg-cyan-900 group-hover:opacity-75 lg:h-80">
            <img
              src={book.cover}
              alt={`Cover of ${book.title}`}
              className="h-full w-full object-contain object-center"
            />
          </div>
          <div className="p-4">
            <h3 className="text-sm text-gray-700">
              <a href="#">
                {book.title}
              </a>
            </h3>
            <p className="text-sm text-gray-500">{book.author}</p>
            <p className="mt-1 text-sm text-gray-500">{book.genre}</p>
            <p className="text-sm font-medium text-gray-900">{book.published_date}</p>
          </div>
        </div>
      );
    })}
  </div>
</div>

    </>

  )
}