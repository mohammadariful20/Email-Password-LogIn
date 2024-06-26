import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../Provider/AouthProvider"


export default function Signin() {
    const Navigate=useNavigate()
    // const [signinUser, setSigninUser] = useState([])
    const { signInUser ,user} = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        //   console.log(email,password)
        //sign in user
        signInUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                // setSigninUser(user)
                e.target.reset()
                Navigate('/')

            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        {
                            user && <p className="text-green-300">SignIn Secesfull</p>
                        }
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>You Dont Have an Account <Link className="text-green-400" to='/signup'>Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
