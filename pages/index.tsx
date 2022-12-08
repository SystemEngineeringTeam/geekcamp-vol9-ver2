import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from "./card";
import { Grid } from "./grid";
import  Header  from "./header";

export default function Home() {
  return (
    <>
      <Header/>
      <Grid/>
    </>
  )
}
