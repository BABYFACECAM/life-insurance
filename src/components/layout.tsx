import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { navigationData } from "@/data/navigationData";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar links={navigationData.links} />
      <main>{children}</main>
      <Footer links={[]} />
    </>
  );
}
