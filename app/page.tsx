import Navbar from "././components/navbar"
import Footer from "./components/footer"
import App from '././components/Main/app'
import Leave from './images/unsplash_GdSsWvVT2Hc.png'
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="relative z-1 woverflow-hidden">
        <Image alt="bg-photo" src={Leave}  className="fixed top-[60%]  transform -translate-x-1/2 -translate-y-1/2 rotate-180" />
        <Image alt="bg-photo" src={Leave}  className="fixed top-[80%]  transform translate-x-1/2 -translate-y-1/2 rotate-180" />
      </div>
      <App />
      <Footer />
    </>
  );
}
