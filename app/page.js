'use client'
import Hero from './components/home/hero'
import Form from './components/home/form'
import Book_cards from "./components/books/cards";
import LoginForm from './components/loginform';
import Header from './components/header';
import Footer from './components/footer';
import { useContext } from 'react';
import { AuthContext } from './context/authContext';



export default function Home() {

  const {tokens} = useContext(AuthContext)

  return (
    
    <>
    {tokens?  <> <Header/> <Hero/> <Form/> <Book_cards/>  <Footer/> </> : <LoginForm/>}
     
    </>
    
    
    
  );
}
