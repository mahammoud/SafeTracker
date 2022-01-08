import React, { useRef, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './AnalyzePage.css'
import Webcam from 'react-webcam';

const AnalyzePage = () => {
    const [camera, setCamera] = useState(false);
    const [image, setImage] = useState('');
    const [display, setDisplay] = useState(false);
    return (
        <div className='analyze__page__main'>
            <Navbar />
            <div className='analyze__section display__flex flex__flow__down'>
                <h1>Analyze your Road</h1>
                <div className='choose__image'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={'25px'} height={'25px'} fill='#f1dac4' ><path d="M8.71,7.71,11,5.41V15a1,1,0,0,0,2,0V5.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-4-4a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-4,4A1,1,0,1,0,8.71,7.71ZM21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V13a1,1,0,0,0-2,0v6a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12Z" /></svg>
                    <h3>Choose Image</h3>
                    <input name="Select File" type="file" onChange={(e) => { setImage(URL.createObjectURL(e.target.files[0])); setDisplay(true); console.log(image); }} />
                </div>
                <div className='click__image' onClick={() => setCamera(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={'25px'} height={'25px'} fill='#f1dac4'><path d="M19,6.5H17.72l-.32-1a3,3,0,0,0-2.84-2H9.44A3,3,0,0,0,6.6,5.55l-.32,1H5a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-8A3,3,0,0,0,19,6.5Zm1,11a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1v-8a1,1,0,0,1,1-1H7a1,1,0,0,0,1-.68l.54-1.64a1,1,0,0,1,.95-.68h5.12a1,1,0,0,1,.95.68l.54,1.64A1,1,0,0,0,17,8.5h2a1,1,0,0,1,1,1Zm-8-9a4,4,0,1,0,4,4A4,4,0,0,0,12,8.5Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14.5Z" /></svg>
                    <h3>Click Image</h3>
                </div>
            </div>
            {
                (camera) ? (
                    <WebCamera image={image} setImage={setImage} setCamera={setCamera} />
                ) : ''
            }
            {
                (display) ? (
                    <ImgDisplay image={image} setImage={setImage} setDisplay={setDisplay} />
                ) : ''
            }
        </div >
    )
}

const ImgDisplay = ({ image, setImage, setDisplay }) => {
    const submitImage = () => {
        //function to impliment
        setDisplay(false);
    }
    return (
        <>
            {
                (image !== '') ? <div className='photo__display display__flex flex__flow__down'>
                    <img src={image} alt='im' className='webcam'></img>
                    <button onClick={() => submitImage()} className='camera__buttons primary__button'>Submit</button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='#f1dac4' width="25" height="25" className='close__camera__button' onClick={() => { setDisplay(false); setImage('') }}><path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z" /></svg>
                </div> : ''
            }
        </>

    )
}

const WebCamera = ({ image, setImage, setCamera }) => {
    const photoRef = useRef(null);
    const showImage = () => {
        let img = photoRef.current.getScreenshot();
        setImage(img);
    }
    const submitImage = () => {
        setCamera(false);
        // API function to be applied here
        return;
    }
    const resetImage = () => {
        setImage('');
    }
    const videoConstraints = {
        facingMode: "environment"
    };
    return (
        <div className='cameraMain display__flex flex__flow__down'>
            <div className='camera__interface'>
                {
                    (image !== '') ? <div className='photo__clicked display__flex flex__flow__down'>
                        <img src={image} alt='im' className='webcam'></img>
                        <button onClick={() => submitImage()} className='camera__buttons primary__button'>Submit</button>
                        <button onClick={() => resetImage()} className='camera__buttons primary__button'>Reset</button>

                    </div> : <div className='camera display__flex flex__flow__down'>
                        <Webcam
                            ref={photoRef}
                            screenshotFormat="image/jpeg"
                            className='webcam'
                            videoConstraints={videoConstraints}
                        />
                        <button onClick={() => showImage()} className='camera__buttons primary__button'>Sanp!</button>
                    </div>
                }
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='#f1dac4' width="25" height="25" className='close__camera__button' onClick={() => setCamera(false)}><path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z" /></svg>
        </div>
    )
}

export default AnalyzePage
