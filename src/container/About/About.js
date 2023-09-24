import React from 'react';
import { H3 } from '../../components/UI/Heading/Heading';
import { Main, P } from '../../components/UI/TextArea/TextArea';

function About(props) {
    return (
        <Main>
            <section id="about" class="about">
                <div class="container">

                    <div class="row">


                        <div
                            class="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center px-lg-5 abouttop">
                            <H3>Fusce nec risus at enim congue bibendum quis at augue. </H3>
                            <P>Proin tincidunt blandit fermentum. Ut gravida arcu non mi dapibus ullamcorper. Curabitur mollis, turpis eu
                                pellentesque finibus, nisi ex mattis quam, mollis aliquet mi massa non nunc. Pellentesque id felis elit.
                                Pellentesque blandit sem a nisi dictum, in pretium ante tincidunt.</P>
                            <P>Maecenas lobortis, nunc eu porttitor posuere, neque lectus rutrum leo, sit amet rutrum orci eros aliquam
                                mauris. Aliquam erat volutpat. Aenean eget dui ac lectus rutrum aliquam pulvinar ut massa. Duis sagittis
                                rutrum neque, quis tincidunt arcu pretium ac. Suspendisse sem </P>
                        </div>
                    </div>

                </div>
            </section>
        </Main>
    );
}

export default About;