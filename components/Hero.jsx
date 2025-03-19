
"use client"

import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";



const Hero = () => {
    const lettersRef = useRef([])
    const odysseyRef = useRef(null)
    const outerDivRef = useRef(null)
    const innerDivRef = useRef(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const images = ["/astro1.jpg", "/astro2.jpeg", "/astro3.jpeg", "/astro5.jpg"]



    useGSAP(() => {
        const tl = gsap.timeline()

        const changeSlide = () => {
            tl.to(innerDivRef.current, {
                x: "-100%",
                duration: 1,
                ease: "power2.inOut",
                delay: 5,
                onComplete: () => {
                    setCurrentImageIndex((prev) => (prev + 1) % images.length)
                    gsap.set(innerDivRef.current, {x: "100%"})
                }
            })

            tl.to(innerDivRef.current, {
                x: "0%",
                duration: 1,
                ease:"power2.inOut"
            })
        }

        tl.to(lettersRef.current, {
            x: 0,
            opacity:1,
            stagger: 0.1,
            duration: 1
        }).to(odysseyRef.current, {
            x: 0,
            opacity:1,
            duration: 1
        }).to(outerDivRef.current, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2
        })
    }, [])
    return (
        <div className='w-full min-h-screen overflow-hidden bg-cover bg-center' style={{backgroundImage: "url(/astro4.jpeg)"}}>
            <div className='absolute inset-0 w-full h-full bg-cover bg-center top-0 z-[4]' style={{ backgroundImage: "url(/astronobg.png)"}} />
            <div className="absolute overflow-hidden top-[5vh] lg:top-[-5vh] right-0 inline-flex">
                <div className="text-[300vw] lg:text-[300px] font-bold text-white flex flex-col">
                    <div className="flex">
                        {'OCEAN'.split("").map((letter, index) => (
                        <span key={index} ref={(el) => (lettersRef.current[index]= el)} className="inline-block opacity-0 translate-x-[200px]">
                            {letter}
                        </span>
                       ))}
                    </div>
                       <h3 ref={odysseyRef}className="text=[12vw] lg:text-8xl font-semibold opacity-0 translate-x-[200px] text-white absolute bottom-0 right-[-4px]">ODYSSEY</h3>
                </div>
            </div>
            <div ref={outerDivRef} className="absolute opacity-0 scale-[0.5] translate-y-[200px] bottom-[5vw] right-[10vw] flex overflow=hidden h-[32vh] w-[38vw] rounded=xl backdrop-blur-lg bg-white/10">
                <div ref={innerDivRef} className="w-full h-full p-3">
                    <Image  src={images[currentImageIndex]} alt="astro" width={800} height={800} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 w-full h-full pr[20%">
                        <h2 className="absolute top-[10%] left-[3%] max-w-[20%] text-[8vw] lg:text-5xl text-white font-bold">
                            THE BEST
                        </h2>
                        <h2 className="absolute top-410%] right-[70%] lg:right-[10%] max-w-[20%] text-[6vw] lg:text-4xl text-white font-bold">
                            IN THE WORLD
                        </h2>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Hero