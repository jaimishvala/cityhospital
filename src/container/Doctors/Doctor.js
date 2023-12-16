import React, { useEffect } from 'react';
import { Heading4, Section } from '../../components/UI/Heading/Heading';
import { Main, P, P2, Span1 } from '../../components/UI/TextArea/TextArea';
import { useDispatch, useSelector } from 'react-redux';
import { getDoctor } from '../../redux/action/doctor.action';
import Card from '../../components/UI/Card/Card';

function Doctor(props) {
    const doctor = useSelector(state => state.doctor)
    console.log(doctor);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDoctor())
    }, [])
    return (

        <Main>
            <section id="doctors" className="doctors">
                <div className="container">
                    <div className="section-title">
                        <Section>Doctors</Section>
                        <P>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac. Suspendisse sem risus, molestie vitae arcu et,
                            tincidunt viverra erat. Quisque in lectus id nulla viverra sodales in a risus. Aliquam ut sem ex. Duis viverra
                            ipsum lacus, ut pharetra arcu sagittis nec. Phasellus a eleifend elit.</P>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="member d-flex align-items-start">
                                <div className="pic"><img src="../assets/img/doctors/doctors-1.jpg" className="img-doctor" alt /></div>
                                <div className="member-info">
                                    <Heading4>Atha Smith</Heading4>
                                    <Span1>Chief Medical Officer</Span1>
                                    <P2>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.</P2>
                                    <div className="social">
                                        <a href><i className="ri-twitter-fill" /></a>
                                        <a href><i className="ri-facebook-fill" /></a>
                                        <a href><i className="ri-instagram-fill" /></a>
                                        <a href> <i className="ri-linkedin-box-fill" /> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <div className="member d-flex align-items-start">
                                <div className="pic"><img src="../assets/img/doctors/doctors-2.jpg" className="img-doctor" alt /></div>
                                <div className="member-info">
                                    <Heading4>John White</Heading4>
                                    <Span1>Anesthesiologist</Span1>
                                    <P2>Aenean ac turpis ante. Mauris velit sapien.</P2>
                                    <div className="social">
                                        <a href><i className="ri-twitter-fill" /></a>
                                        <a href><i className="ri-facebook-fill" /></a>
                                        <a href><i className="ri-instagram-fill" /></a>
                                        <a href> <i className="ri-linkedin-box-fill" /> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4">
                            <div className="member d-flex align-items-start">
                                <div className="pic"><img src="../assets/img/doctors/doctors-3.jpg" className="img-doctor" alt /></div>
                                <div className="member-info">
                                    <Heading4>Umika Loha</Heading4>
                                    <Span1>Cardiology</Span1>
                                    <P2>Curabitur luctus eleifend odio. Phasellus placerat mi.</P2>
                                    <div className="social">
                                        <a href><i className="ri-twitter-fill" /></a>
                                        <a href><i className="ri-facebook-fill" /></a>
                                        <a href><i className="ri-instagram-fill" /></a>
                                        <a href> <i className="ri-linkedin-box-fill" /> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4">
                            <div className="member d-flex align-items-start">
                                <div className="pic"><img src="../assets/img/doctors/doctors-4.jpg" className="img-doctor" alt /></div>
                                <div className="member-info">
                                    <Heading4>Daimy Smith</Heading4>
                                    <Span1>Neurosurgeon</Span1>
                                    <P2>Morbi vulputate, tortor nec pellentesque molestie, eros nisi ornare purus.</P2>
                                    <div className="social">
                                        <a href><i className="ri-twitter-fill" /></a>
                                        <a href><i className="ri-facebook-fill" /></a>
                                        <a href><i className="ri-instagram-fill" /></a>
                                        <a href> <i className="ri-linkedin-box-fill" /> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='container'>
                <div className='row'>
                    {
                        doctor.doctor.map((v) => {
                            return (
                                <div className='doctorCard  col-lg-3'>
                                    {/* <Card
                                        title={v.name}
                                        SubTitle={v.desc}
                                    /> */}
                                    <br></br><br></br>
                                    <h3>{v.name}</h3>
                                    <span>{v.desc}</span>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </Main>



    );
}

export default Doctor;