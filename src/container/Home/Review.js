import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Card from '../../components/UI/Card/Card';



function Review(props) {
    const [rData, setrData] = useState([])

    const getReview = async () => {
        let respones = await fetch("https://jsonplaceholder.typicode.com/comments")
        // console.log(respones);

        let data = await respones.json()
        // console.log(data);

        setrData(data)
    }
    // console.log(rData);


    useEffect(() => {
        getReview()
    }, [])


    return (
        <>
            <section id="testimonials" className="testimonials">
                <div className="container">

                    {/* <div className="section-title"><Section>Reviews</Section></div> */}
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={20}
                        navigation={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Navigation]}

                        className="mySwiper"
                    >

                        <div>
                            {
                                rData.map((v) => {
                                    return (
                                        <SwiperSlide>
                                            <Card
                                                title={v.name}
                                                SubTitle={v.body}
                                            />
                                        </SwiperSlide>
                                    )
                                })

                            }
                        </div>

                    </Swiper>
                </div>

            </section>
        </>
    );
}

export default Review;