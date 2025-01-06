import React, {useRef,useEffect } from "react";
import lottie from 'lottie-web';
export default function ProjectsImg(){

    const container = useRef(null)
    useEffect(() => {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: "src/pages/projects/projects.json"
      })
    }, [])
    return (
      <div className="App">
        <div className="container" ref={container}></div>
      </div>
    );
  
}
