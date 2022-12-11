import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from "../components/card";
import { useEffect } from 'react';
import { render } from 'react-dom';
import  StartPage  from "../components/startPage";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    
    return (
    <>
        <Head>
            <title>ChordCards</title>
        </Head>
        <StartPage/>
    </>
    )
}
