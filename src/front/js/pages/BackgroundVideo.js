import React, { useRef, useEffect } from 'react';
import '../../styles/homePage.css';

const HomePage = () => {
    const videoRef = useRef(null);
    const sectionsRef = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            sectionsRef.current.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    section.classList.add('revealed');
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="home-container">
            <div className="video-background">
                <video autoPlay loop muted playsInline>
                 <source src="https://cdn.pixabay.com/video/2024/09/10/230767_large.mp4" type="video/mp4" />  
                {/* <source src="https://cdn.pixabay.com/video/2018/08/07/17692-283838731_large.mp4" type="video/mp4" />  */}
                {/* <source src="https://cdn.pixabay.com/video/2021/05/08/73478-548608753_large.mp4" type="video/mp4" />  */}
                {/* <source src="https://cdn.pixabay.com/video/2020/05/01/37783-414754833_large.mp4" type="video/mp4" />  */}
                </video>
            </div>
            <div className="content-overlay">
                <section className="section section-intro" ref={(el) => sectionsRef.current.push(el)}>
                    <h1>Galactic Product</h1>
                    <p>Explora un universo de innovación y diseño impecable.</p>
                </section>
                <section className="section section-product container d-flex" ref={(el) => sectionsRef.current.push(el)}>
                    <div className="text-content col-md-6 col-12">
                        <h2>Diseño fuera de este mundo</h2>
                        <p>
                            Nuestro producto combina la más alta tecnología con un diseño futurista. Cada detalle ha sido cuidadosamente pensado para ofrecer una experiencia única.
                        </p>
                    </div>
                    <div className="media-content col-md-6 col-12 d-flex justify-content-center align-items-center">
                        <img
                            src="https://res.cloudinary.com/dmkw4vacw/image/upload/v1628398514/product_image_mww2wz.png"
                            alt="Producto innovador"
                            loading="lazy"
                            className="img-fluid"
                        />
                    </div>
                </section>
                <section className="section section-features" ref={(el) => sectionsRef.current.push(el)}>
                    <div className="features-container">
                        <div className="feature-item">
                            <h3>Potencia galáctica</h3>
                            <p>Disfruta de un rendimiento que desafía las leyes de la física.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Seguridad planetaria</h3>
                            <p>Protege tus datos con tecnología de vanguardia.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Diseño ultra delgado</h3>
                            <p>Tan ligero que parecerá que no está ahí.</p>
                        </div>
                    </div>
                </section>
                <section className="section section-video" ref={(el) => sectionsRef.current.push(el)}>
                    {/* <video ref={videoRef} preload="auto" loop muted playsInline>
                        <source src="https://cdn.pixabay.com/video/2024/09/10/230767_large.mp4" type="video/mp4" />
                    </video> */}
                    <p>Seccion de imagenes del producto</p>
                </section>
                <section className="section section-cta" ref={(el) => sectionsRef.current.push(el)}>
                    <h2>Disponible pronto</h2>
                    <p>Haz tu reserva hoy mismo y sé el primero en experimentar el futuro.</p>
                    <a href="#get-started" className="cta-button">Reservar ahora</a>
                </section>
            </div>
        </div>
    );
};

export default HomePage;
