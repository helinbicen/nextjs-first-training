import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import SsgPage from "./SsgPage";
import SsrPage from "./SsrPage";
import CsrPage from "./CsrPage";
// import Link from "next/link";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { HashLink as Link } from "react-router-hash-link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [sectionClick, setSectionClick] = useState(0);
  return (
    <>
      <BrowserRouter>
        <p> NEXTJS Deneme</p>
        <nav className={styles.navbar}>
          <ul className={styles.sectionList}>
            <li
              className={
                sectionClick === 0
                  ? `${styles.section} ${styles.active}`
                  : `${styles.section}`
              }
              onClick={() => setSectionClick(0)}
            >
              <NavLink
                to="/ssr"
                style={({ isActive }) => ({
                  color: isActive ? "#FCC005" : "#38AA37",
                })}
              >
                SSR
              </NavLink>
            </li>
            <li
              className={
                sectionClick === 1
                  ? `${styles.section} ${styles.active}`
                  : `${styles.section}`
              }
              onClick={() => setSectionClick(1)}
            >
              <NavLink
                to="/ssg"
                style={({ isActive }) => ({
                  color: isActive ? "#FCC005" : "#38AA37",
                })}
              >
                ssg
              </NavLink>
            </li>
            <li
              className={
                sectionClick === 2
                  ? `${styles.section} ${styles.active}`
                  : `${styles.section}`
              }
              onClick={() => setSectionClick(2)}
            >
              <NavLink
                to="/csr"
                style={({ isActive }) => ({
                  color: isActive ? "#FCC005" : "#38AA37",
                })}
              >
                csr
              </NavLink>
            </li>
          </ul>
          <Routes>
            <Route exact path="/ssr" element={<SsrPage />} />
            <Route exact path="/ssg" element={<SsgPage />} />
            <Route exact path="/csr" element={<CsrPage />} />
          </Routes>
        </nav>

      </BrowserRouter>
    </>
  );
}
