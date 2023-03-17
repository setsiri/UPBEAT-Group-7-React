import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import mypic from "../public/webmap.png";

function HowtoPlay() {
  return (
    <div className=" mx-5 my-3 text-black">
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossorigin="anonymous"
        ></link>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
          crossorigin="anonymous"
        ></script>
      </Head>

      <button className="btn btn-primary my-3">
        <Link href="/">back to homepage</Link>
      </button>

      <h2>HowtoPlay</h2>
      <h5 className="d-grid mx-3">website map</h5>
      <div className="d-grid mx-5 my-2">
        <Image src={mypic} width={1280} height={720} />
      </div>
      <div className="d-grid mx-5">
        {" "}
        <h6 className=" d-grid my-2"> ส่วนที่ 1: เป็นหน้าแรกตอนรับผู้เล่น</h6>
        <h6 className=" d-grid my-2"> ส่วนที่ 2: ส่วน setup ก่อนเริ่มเล่น</h6>
        <p className="d-grid mx-5">
          เริ่มจาก 1.ตั้งค่า configuration-file 2.ตั้งค่า
          constructionplan-ผู้เล่นหนึ่ง 3.ตั้งค่า constructionplan-ผู้เล่นสอง
        </p>
        <h6 className=" d-grid my-2"> ส่วนที่ 3: ส่วน gameplay</h6>
        <p className="d-grid mx-5">
          เป็นเกมผู้เล่น 2 คนเล่นแบบ turnbase แต่ละเทรินผู้เล่นจะสลับดูระหว่าง
          หน้าterrirory กับ หน้าconsturctionplanปัจจุบัน ได้
        </p>
      </div>
      <h5 className="d-grid mx-3">วิธีเล่น</h5>
      <p className="d-grid mx-5">วิธีเล่นโดยละเอียด 1. 2. 3. ...</p>

      <h5 className="d-grid mx-3">info</h5>

      <p className="d-grid mx-5">สมาชิก : com, new ,stamp</p>
      <p className="d-grid mx-5">
        งานกลุ่มของวิชา 261200 oop programming เสนอ อ.ชินวัตร อิศราดิสัยกุล
      </p>
    </div>
  );
}

export default HowtoPlay;
