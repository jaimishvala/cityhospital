import React, { useState } from 'react';

function Auth(props) {
    const [type, setType] = useState("login")
    const [forgetpasword, setforgetPasword] = useState("login")

    return (
        <main>
            <section id="departments" className="appointment">
                <div className="container">
                    <div className="section-title">
                        {
                            type === 'login' ? <h2>Login</h2> : <h2>Signup</h2>
                        }

                        {
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
                                type === 'login' ? <button type="submit">login</button> : <button type="submit">Signup</button>
                            }

                        </div>
                    </form>

                    {
                        forgetpasword === 'login' ? <span>Forget Password<button onClick={() => setforgetPasword()}>ForgetPasword</button></span> : <span>Login Password<button onClick={() => setforgetPasword('login')}>Login</button></span>
                    }

                    <br></br>

                    {
                        type === 'login' ? <span>Created An Acount <button onClick={() => setType()}>Signup</button></span> : <span>Alredy Have An Acount <button onClick={() => setType('login')}>Login</button></span>
                    }

                </div>
            </section>
        </main>

    );
}

export default Auth;