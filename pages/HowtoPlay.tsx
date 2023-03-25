import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import mypic from "../public/webmap.png";
import {motion, AnimatePresence} from "framer-motion"

function HowtoPlay() {
  return (
    <AnimatePresence><motion.div  initial={{ y:100,x: 0,opacity: 0 , }}
    animate={{y:0,x:0, opacity: 1, }}
    exit={{ opacity: 0 }}
    transition={{duration: 0.75,}}>  <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossOrigin="anonymous"
        ></link>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
          crossOrigin="anonymous"
        ></script>
      </Head>
      
     
      
      <div className=" mx-5 my-3 text-black position-relative ">
    
      <div className="text-center">
        <button className="btn btn-secondary">
          <Link href="/">back to homepage</Link>
        </button>
       
      </div>
      
      <div className="text-center text-black my-3">
        <h1 color="dark">HowtoPlay</h1>
      </div>
  
     <h5 className="text-center mx-3">website map</h5>

      
      <div className="text-center mx-auto my-3">
        <Image src={mypic} width={1024} height={576} alt={""} />
      </div>
      
      <div className="text-center  mx-5">
        {" "}
        <h6 className=" d-grid my-4"> ส่วนที่ 1: เป็นหน้าแรกตอนรับผู้เล่น</h6>
        <h6 className=" d-grid my-4"> ส่วนที่ 2: ส่วน setup ก่อนเริ่มเล่น</h6>
        <p className="d-grid mx-5">
          เริ่มจาก 1.ตั้งค่า configuration-file 2.ตั้งค่า
          constructionplan-ผู้เล่นหนึ่ง 3.ตั้งค่า constructionplan-ผู้เล่นสอง
        </p>
        <h6 className=" d-grid my-4"> ส่วนที่ 3: ส่วน gameplay</h6>
        <p className="d-grid mx-5">
          เป็นเกมผู้เล่น 2 คนเล่นแบบ turnbase แต่ละเทรินผู้เล่นจะสลับดูระหว่าง
          หน้าterrirory กับ หน้าconsturctionplanปัจจุบัน ได้
        </p>
      </div>
      <h5 className="text-center  mx-3">วิธีเล่น</h5>
      <p className="text-center  mx-5">วิธีเล่นโดยละเอียด 1. 2. 3. ...</p>

      <h5 className="text-center  mx-3">info</h5>

      <p className="text-center  mx-5">สมาชิก : com, new ,stamp</p>
      <p className="text-center  mx-5">
        งานกลุ่มของวิชา 261200 oop programming เสนอ อ.ชินวัตร อิศราดิสัยกุล
      </p>
    </div>
   
    </motion.div></AnimatePresence>
    
  );
}

export default HowtoPlay;
