import styles from './Pages.module.css'

function Login() {
    return (
        <section className={styles.sectionLogin}>
            <h1>Login</h1>

            <article className={styles.article}>
                <main className={`${styles.formSignin} form-signin w-100 m-auto`}>
                    <form className={styles.form}>
                        <img className="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="272" height="57" />
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <div className="form-check text-start my-3">
                            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Remember me
                            </label>
                        </div>
                        <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                        <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
                    </form>
                </main>
            </article>
        </section>
    )
}

export default Login;
