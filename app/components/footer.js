"use client";
import Link from "next/link"
export default function Footer(){
  return (
    <>


<footer className="bg-white py-5    dark:bg-gray-900">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline dark:hover:text-blue-500">ReadUs™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-700 dark:text-gray-600 sm:mt-0">
        <li>
          <Link href="/about" className="hover:underline me-4 md:me-6 dark:hover:text-blue-500">
          About
          </Link>
       
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6 dark:hover:text-blue-500">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6 dark:hover:text-blue-500 dark:hover:text-blue-500">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:underline dark:hover:text-blue-500">Contact</a>
        </li>
    </ul>
    </div>
</footer>

    </>
  )
}