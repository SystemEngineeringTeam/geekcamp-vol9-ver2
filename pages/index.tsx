import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from "./card";
import { useEffect } from 'react';
import { render } from 'react-dom';
import  StartPage  from "./startPage";

export default function Home() {
    
    return (
    <>
        <StartPage/>
    </>
    )
}
