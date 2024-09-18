import localFont from "next/font/local";
import Image from "next/image";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "@/Component/common_components/header";
import Footer from "@/Component/common_components/footer";
import bg_img from '../assets/image/bg_img.png'

//context api
import { CurrentProvider } from "@/context/currentContext";

export const metadata = {
  title: "My Portfolio",
  description: "Generated by create next app",
  icons: {
    icon: '/icons8-v-64.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <CurrentProvider>
      <html lang="en">
        <body>
          {/* <Image src={bg_img} alt="background" className="img-fluid"></Image> */}
          <Header />
          {children}
          <Footer />
          <ToastContainer />
        </body>
      </html>
    </CurrentProvider>
  );
}
