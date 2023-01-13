import React,{ useEffect, useRef} from 'react';
import Lottie from 'lottie-web';
import "./loading.css"

const Loading_test = () => {
    const container = useRef(null)

    useEffect(() => {
        Lottie.loadAnimation({
          container: container.current,
          renderer: 'svg',
          loop : true,
          autoplay: true,
          animationData: require('./speedycar.json')
        })
      },[])

  return (
    <div>
      <div className="loading__icon" ref={container}></div>
    </div>
  )
}

export default Loading_test;
