import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../Provider/AouthProvider"

export default function SignUp() {
    const { registerUser } = useContext(AuthContext)
    const [createUser, setCreateUser] = useState([])
    // console.log(registerUser)

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        // console.log(email,password)
        registerUser(email, password)
            .then(result => {
                const newUser = result.user
                // console.log(user)
                setCreateUser(newUser)
            })
            .catch(err => console.log(err))
    }
    console.log(createUser)
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    {
                        createUser && <p className="text-green-300">Register Secesfull</p>
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

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>You Have an Account <Link className="text-green-400" to='/signin'>LogIn</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}
