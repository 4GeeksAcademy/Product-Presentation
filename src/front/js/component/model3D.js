import React from 'react'

const model3D = () => {
    return (
        <div className="container-fluid position-relative">
            <video
                autoPlay
                loop
                muted
                className="background-video"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -1
                }}>
                <source src="https://res.cloudinary.com/dyvut6idr/video/upload/v1729502321/24717-345209740_small_xcahl2.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
            </video>
            <div className="d-flex justify-content-center flex-wrap">
            <model-viewer
                alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
                src="https://res.cloudinary.com/dyvut6idr/image/upload/v1728214792/uploads_files_4459751_can_twsyo8.glb"
                ar
                //skybox-image="https://res.cloudinary.com/dyvut6idr/raw/upload/v1728215816/table_mountain_1_puresky_2k_ygw347.hdr"				
                poster="https://res.cloudinary.com/dyvut6idr/image/upload/v1728214892/uploads_files_4459751_can_ilekmp.png"
                shadow-intensity="1"
                camera-controls
                //camera-orbit="65deg 55deg 5.5m"
                //touch-action="pan-y"
                auto-rotate
                style={{ width: "250px", height: "250px" }}
            ></model-viewer>
            <model-viewer
                alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
                src="https://res.cloudinary.com/dyvut6idr/image/upload/v1729500893/uploads_files_3837060_Sun_Glasses_mczs8i.glb"
                ar
                //skybox-image="https://res.cloudinary.com/dyvut6idr/raw/upload/v1728215816/table_mountain_1_puresky_2k_ygw347.hdr"				
                poster="https://res.cloudinary.com/dyvut6idr/image/upload/v1729500883/uploads_files_3837060_Sun_Glasses_ujlom1.png"
                shadow-intensity="1"
                camera-controls
                //camera-orbit="65deg 55deg 5.5m"
                //touch-action="pan-y"
                auto-rotate
                style={{ width: "250px", height: "250px" }}
            ></model-viewer>
            <model-viewer
                alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
                src="https://res.cloudinary.com/dyvut6idr/image/upload/v1729500895/uploads_files_4018512_ice_cream_and_cup_w6dgvi.glb"
                ar
                //skybox-image="https://res.cloudinary.com/dyvut6idr/raw/upload/v1728215816/table_mountain_1_puresky_2k_ygw347.hdr"				
                poster="https://res.cloudinary.com/dyvut6idr/image/upload/v1729500883/uploads_files_4018512_ice_cream_and_cup_aauojx.png"
                shadow-intensity="1"
                camera-controls
                //camera-orbit="65deg 55deg 5.5m"
                //touch-action="pan-y"
                auto-rotate
                style={{ width: "250px", height: "250px" }}
            ></model-viewer>
            </div>
        </div>
    )
}

export default model3D