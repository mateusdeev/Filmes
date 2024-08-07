'use client'

import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "@/components/Navbar/Index";
import MovieList from "@/components/MovieList";

export default function Home() {
  return (
    <main className={styles.main}>
      <MovieList/>
    </main>
  );
}
