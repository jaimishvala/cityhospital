import React, { useState } from 'react';
import Button from '../../components/UI/Button';
import InputBox from '../../components/InputBox/InputBox';
import { Section } from '../../components/UI/Heading/Heading';
import { Main } from '../../components/UI/TextArea/TextArea';

function Auth(props) {
    const [type, setType] = useState("login")

    return (
        <Main>
            <section id="departments" className="appointment">
                <div className="container">
                    <div className="section-title">
                        {
                            type === 'login' ? <Section>Login</Section> :
                                type === 'signup' ? <Section>Signup</Section> :
                                    <Section>Forget Pasword</Section>
                        }

                    </div>

                    <form action method="post" role="form" className="php-email-form">
                        <div className="row justify-content-center">
                            {
                                type === 'signup' ?
                                    <div className="col-md-8 form-group">
                                        <InputBox type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    </div>
                                    :
                                    null
                            }

                            <div className="col-md-8 form-group mt-3 mt-md-0">
                                <InputBox type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            </div>

                            <div className="col-md-8 form-group mt-3 mt-md-0">
                                {
                                    type === 'login' || type === 'signup' ?
                                        <InputBox type="password" className="form-control" name="password" id="password" placeholder="Your password" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        : null
                                }
                            </div>
                        </div>

                        <div class="text-center">
                            {
                                type === 'login' ? <Button disabled={true} type="submit">Login</Button> :
                                    type === 'signup' ? <Button btnDisabled={true} btnType="Secondary" type="submit">SignUp</Button> :
                                        <Button btnType="Outline" type="submit">Submit</Button>
                            }
                        </div>
                    </form>

                    {
                        type === 'login' ? <span>Created An Acount <Button onClick={() => setType('signup')}>Signup</Button></span> :
                            <span>Alredy Have An Acount <Button onClick={() => setType('login')}>Login</Button></span>
                    }
                    <br></br>
                    {
                        type === 'login' ? <span>Forget Password<Button onClick={() => setType('forgot')}>Forget Pasword</Button></span> :
                            null
                    }


                </div>
            </section>
        </Main>

    );
}

export default Auth;