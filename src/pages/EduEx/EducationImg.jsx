import React, {useRef,useEffect } from "react";
import lottie from 'lottie-web';
export default function EducationImg(){

    const container = useRef(null)
    useEffect(() => {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'lottie-files/EduEx/edu4.json'
      })
    }, [])
    return (
        <div className="container" ref={container}></div>
    );
  
}
