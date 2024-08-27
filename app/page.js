import Image from "next/image";
import Hero from './components/home/hero'
import Form from './components/home/form'
import Book_cards from "./components/books/cards";
export default function Home() {
  return (
    <>
    <Hero/>
    <Form/>
    <Book_cards/>

    </>
  );
}
