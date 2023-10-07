import React from 'react';
import { H2, H4, Heading1, Heading2, Heading3, HomeH4, Section } from '../../components/UI/Heading/Heading';
import { ItalicP, Main, P, P3, Span } from '../../components/UI/TextArea/TextArea';
import Review from './Review';



function Home(props) {
    return (
        <Main id="main">
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <Heading1>Welcome to City <br />Multispeciality Hospital</Heading1>
                    <Heading2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Heading2>
                </div>
            </section>
            <section id="why-us" className="why-us">
            </section>
            <section id="counts" className="counts">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="count-box">
                                <i className="fas fa-user-md" />
                                <Span>23</Span>
                                <P3>Doctors</P3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                            <div className="count-box">
                                <i className="far fa-hospital" />
                                <Span>18</Span>
                                <P3>Departments</P3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                            <div className="count-box">
                                <i className="fas fa-heartbeat" />
                                <Span>980</Span>
                                <P3>Patients</P3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                            <div className="count-box">
                                <i className="fas fa-award" />
                                <Span>12</Span>
                                <P3>Awards</P3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="services" className="services">
                <div className="container">
                    <div className="section-title">
                        <H2>Our Facilities</H2>
                        <P>Nunc aliquam eget nibh eu euismod. Donec dapibus blandit quam volutpat sollicitudin. Fusce tincidunt sit
                            amet ex in volutpat. Donec lacinia finibus tortor. Curabitur luctus eleifend odio. Phasellus placerat mi et
                            suscipit pulvinar. Donec quis tristique lectus.</P>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="icon-box">
                                <div className="icon"><i className="fas fa-hospital-alt" /></div>
                                <H4><a href>24x7 Emergency Available</a></H4>
                                <P3>Nullam accumsan, velit et porta consequat, purus leo congue risus</P3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                            <div className="icon-box">
                                <div className="icon"><i className="fas fa-bed" /></div>
                                <H4><a href>40+ Bed Facilities</a></H4>
                                <P3>Pellentesque id felis elit. Pellentesque blandit sem a nisi dictum</P3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                            <div className="icon-box">
                                <div className="icon"><i className="fas fa-hospital-user" /></div>
                                <H4><a href>Cardiogram Machine</a></H4>
                                <P3>Donec lacinia finibus tortor. Curabitur luctus eleifend odio.</P3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                            <div className="icon-box">
                                <div className="icon"><i className="fas fa-dna" /></div>
                                <H4><a href>X-ray and Sonography</a></H4>
                                <P3>Aliquam auctor felis ut sem elementum, ac rutrum turpis venenatis.</P3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                            <div className="icon-box">
                                <div className="icon"><i className="fas fa-wheelchair" /></div>
                                <H4><a href>Semi Special, Special and Delux Room Available</a></H4>
                                <P3>Etiam in massa eu neque euismod consectetur.</P3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                            <div className="icon-box">
                                <div className="icon"><i className="fas fa-notes-medical" /></div>
                                <H4><a href>Medical</a></H4>
                                <P3>Morbi vulputate, tortor nec pellentesque molestie</P3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="testimonials" className="testimonials">
                <div className="container">

                    <div className="section-title"><Section>Reviews</Section></div>


                        <Review />
                

                    <div className="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="testimonial-wrap">
                                    <div className="testimonial-item">
                                        <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt />
                                        <Heading3>Jacob Wilsson</Heading3>
                                        <HomeH4>Writer</HomeH4>
                                        <ItalicP>
                                            <i className="bx bxs-quote-alt-left quote-icon-left" />
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere, lacus ac tincidunt tempor,
                                            sapien justo ultrices ante, vel pharetra turpis ex ac nisi. Aliquam tempor egestas turpis, nec
                                            commodo lorem egestas eleifend. Curabitur lacus ipsum, fermentum sit amet leo non, blandit tincidunt
                                            turpis.
                                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </ItalicP>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="testimonial-wrap">
                                    <div className="testimonial-item">
                                        <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt />
                                        <Heading3>Ava Smith</Heading3>
                                        <HomeH4>Artist</HomeH4>
                                        <ItalicP>
                                            <i className="bx bxs-quote-alt-left quote-icon-left" />
                                            Praesent pellentesque leo vestibulum, facilisis ante eget, pharetra mi. Curabitur risus mauris,
                                            dignissim ullamcorper vehicula id, aliquet ut turpis. Nunc euismod nec nulla non tincidunt. Vivamus
                                            nisi mauris, blandit quis sem sit amet, posuere blandit diam. Cras quis quam suscipit.
                                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </ItalicP>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="testimonial-wrap">
                                    <div className="testimonial-item">
                                        <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt />
                                        <Heading3>Abigail Martin</Heading3>
                                        <HomeH4>Teacher</HomeH4>
                                        <ItalicP>
                                            <i className="bx bxs-quote-alt-left quote-icon-left" />
                                            Fusce ante ipsum, convallis auctor dui sit amet, feugiat blandit ex. Etiam eget tortor sed augue
                                            laoreet laoreet vel non libero. Sed in nibh ut sem ornare feugiat at at risus. Morbi gravida enim
                                            vitae tortor fringilla tristique. Nulla ac mauris et elit eleifend suscipit et quis lacus. Nam nec
                                            ex purus.
                                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </ItalicP>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="testimonial-wrap">
                                    <div className="testimonial-item">
                                        <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt />
                                        <Heading3>Alexander Tremblay</Heading3>
                                        <HomeH4>Designer</HomeH4>
                                        <ItalicP>
                                            <i className="bx bxs-quote-alt-left quote-icon-left" />
                                            Nam at est in nibh cursus hendrerit. Nunc commodo diam a erat fermentum aliquet. Integer at interdum
                                            nisi. Vivamus risus erat, facilisis a blandit ut, sollicitudin sed est. Vestibulum volutpat luctus
                                            quam sed finibus. Sed luctus odio eget ex posuere hendrerit. Donec iaculis
                                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </ItalicP>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="testimonial-wrap">
                                    <div className="testimonial-item">
                                        <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt />
                                        <Heading3>Jayden Brown</Heading3>
                                        <HomeH4>Entrepreneur</HomeH4>
                                        <ItalicP>
                                            <i className="bx bxs-quote-alt-left quote-icon-left" />
                                            Quisque tristique lectus eget pretium lacinia. Mauris suscipit sapien sit amet enim rhoncus
                                            tristique. Phasellus dictum aliquam nisl vel fermentum. Duis viverra luctus justo, vel aliquam ipsum
                                            mollis nec. Pellentesque quis suscipit erat. Mauris id lobortis tellus.
                                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </ItalicP>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="gallery">
                <div className="container">
                    <div className="section-title">
                        <Section>Gallery</Section>
                        <P>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                            consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                            in iste officiis commodi quidem hic quas.</P>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row no-gutters">
                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a href="assets/img/gallery/gallery-1.jpg" className="galelry-lightbox">
                                    <img src="assets/img/gallery/gallery-1.jpg" alt className="img-fluid" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a href="assets/img/gallery/gallery-2.jpg" className="galelry-lightbox">
                                    <img src="assets/img/gallery/gallery-2.jpg" alt className="img-fluid" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a href="assets/img/gallery/gallery-3.jpg" className="galelry-lightbox">
                                    <img src="assets/img/gallery/gallery-3.jpg" alt className="img-fluid" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a href="assets/img/gallery/gallery-4.jpg" className="galelry-lightbox">
                                    <img src="assets/img/gallery/gallery-4.jpg" alt className="img-fluid" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a href="assets/img/gallery/gallery-5.jpg" className="galelry-lightbox">
                                    <img src="assets/img/gallery/gallery-5.jpg" alt className="img-fluid" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a href="assets/img/gallery/gallery-6.jpg" className="galelry-lightbox">
                                    <img src="assets/img/gallery/gallery-6.jpg" alt className="img-fluid" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a href="assets/img/gallery/gallery-7.jpg" className="galelry-lightbox">
                                    <img src="assets/img/gallery/gallery-7.jpg" alt className="img-fluid" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a href="assets/img/gallery/gallery-8.jpg" className="galelry-lightbox">
                                    <img src="assets/img/gallery/gallery-8.jpg" alt className="img-fluid" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Main>
    );
}

export default Home;