import React, { useState } from 'react';
import styled from 'styled-components';

function Auth(props) {
    //state Component:
    const [type, setType] = useState("login")
    const [forgetpasword, setforgetPasword] = useState("login")

    //Style Component:
    const StyleButton = styled.button`
    border:none;
    background-color:red;
    border-radius:50px;
    padding:10px 25px;
    color:white;
    margin-top:10px;
    &:hover{
        background-color:#0d6efd;
    }
    `;

    return (
        <main>
            <section id="departments" className="appointment">
                <div className="container">
                    <div className="section-title">
                        {
                            type === 'login' ? <h2>Login</h2> : <h2>Signup</h2>
                                &&
                                forgetpasword === 'login' ? <h2>Login</h2> : <h2>Forget Password</h2>
                        }

                    </div>

                    <form action method="post" role="form" className="php-email-form">
                        <div className="row justify-content-center">
                            <div className="col-md-8 form-group">

                                {
                                    type === 'login' ? null
                                        :
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                }

                            </div>
                            <div className="col-md-8 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            </div>
                            <div className="col-md-8 form-group mt-3 mt-md-0">
                                {
                                    forgetpasword === 'login' ? <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        : null

                                }

                            </div>
                        </div>
                        <div class="text-center">
                            <br></br>
                            {
                                type === 'login' ? <button type="submit">login</button> : <button type="submit">Signup</button> &&
                                    forgetpasword === 'login' ? <button type="submit">login</button> : <button type="submit">Submit</button>
                            }

                        </div>
                    </form>

                    {
                        forgetpasword === 'login' ? <span>Forget Password<StyleButton onClick={() => setforgetPasword()}>ForgetPasword</StyleButton></span> : <span>Login Password<StyleButton onClick={() => setforgetPasword('login')}>Login</StyleButton></span>
                    }

                    <br></br>

                    {
                        type === 'login' ? <span>Created An Acount <StyleButton onClick={() => setType()}>Signup</StyleButton></span> : <span>Alredy Have An Acount <StyleButton onClick={() => setType('login')}>Login</StyleButton></span>
                    }

                    <br></br>
                    <StyleButton>Hello</StyleButton>

                </div>
            </section>
        </main>

    );
}

export default Auth;