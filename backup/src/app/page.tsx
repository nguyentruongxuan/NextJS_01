"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Apptable from "@/app/components/app.table";
import { useEffect } from "react";
import useSWR from "swr";

export default function Home() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,{
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );
  
  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";
  <p>data.</p>;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("http://localhost:8000/blogs");
  //     const data = await res.json();
  //     console.log(data);
  //   };

  //   fetchData();
  // }, []);
  return (
    <div>
      <ul>
        <li>
          <Link href="/Coffee" className="nav-link">
            Coffee
          </Link>
        </li>
        <li>
          <Link href="/Tea">Tea</Link>
        </li>
        <li>
          <Link href="/Milk">Milk</Link>
        </li>
      </ul>
      <Apptable />
    </div>
  );
}
