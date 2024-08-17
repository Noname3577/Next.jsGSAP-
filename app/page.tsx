'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

const Home = () => {
  const snakeRef = useRef(null);
  const oneRef = useRef(null);
  const twoRef = useRef(null);
  const threeRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(snakeRef.current, {
      x: 100, // ย้ายไปทางขวา
      y: 0, // ย้ายลง
      ease: 'power1.inOut', // ใช้ ease เพื่อให้เคลื่อนไหวสมูท
      yoyo: true, // ย้อนกลับแอนิเมชันเมื่อจบ
      scrollTrigger: {
        trigger: snakeRef.current,
        start: 'top bottom', // เริ่มเมื่อองค์ประกอบเข้าสู่หน้าจอ
        end: 'bottom top', // จบเมื่อองค์ประกอบออกจากหน้าจอ
        scrub: true, // เลื่อนพร้อมกับการเลื่อนหน้าเว็บ
      },
    });

    // ทำให้เลื้อยแบบคลื่น
    gsap.to(oneRef.current, {
      x: 100,
      rotation: 10, // หมุนเล็กน้อยเพื่อสร้างการเลื้อย
      yoyo: true,
      repeat: -1, // ทำซ้ำไม่สิ้นสุด
      ease: 'elastic.in(1,0.3)',
      duration: 1,
    });

    gsap.to(twoRef.current, {
      y: -250,
      rotation: 10, // หมุนเล็กน้อยเพื่อสร้างการเลื้อย
      yoyo: true,
      ease: 'elastic.in(1,0.3)',
      duration: 1,
      scrollTrigger: {
        trigger: snakeRef.current,
        start: 'top bottom', // เริ่มเมื่อองค์ประกอบเข้าสู่หน้าจอ
        end: 'bottom top', // จบเมื่อองค์ประกอบออกจากหน้าจอ
        scrub: true, // เลื่อนพร้อมกับการเลื่อนหน้าเว็บ
      },
    });

    gsap.to(threeRef.current, {
      padding: "500px",
      yoyo: true,
      ease: 'power1.inOut',
      duration: 1,
      scrollTrigger: {
        trigger: snakeRef.current,
        start: 'top 50%', // เริ่มเมื่อองค์ประกอบเข้าสู่หน้าจอ
        end: 'bottom top', // จบเมื่อองค์ประกอบออกจากหน้าจอ
        scrub: true, // เลื่อนพร้อมกับการเลื่อนหน้าเว็บ
      },
    });


  }, []);

  return (
    <div className="bg_a">
      <h1 className="text_a">animation </h1>
      <div className="boxs_a" ref={oneRef}></div>
      <div className="boxs_a" ref={snakeRef}></div>
      <div className="boxs_a" ref={twoRef} ></div>
      <div className="boxs_a" ref={threeRef}></div>
      <div className="boxs_a"></div>
    </div>
  );
};

export default Home;
