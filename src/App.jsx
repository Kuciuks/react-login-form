import LoginBtn from './Components/LoginBtn'
import LoginForm from './Components/LoginForm'
import RegisterBtn from './Components/RegisterBtn'
import RegisterForm from './Components/RegisterForm'
import {useState} from 'react'

export default function App() {

    const [state, setState] = useState(null)


    const handleLogin = () =>{
        setState(true)
    }

    const handleRegister = () =>{
        setState(false)
    }


    console.log(state)

    return(
        <div>
            <div>
                <LoginBtn onClick={handleLogin}/>
                <RegisterBtn onClick={handleRegister}/>
            </div>
            <div>
                {
                    state == null ? ""
                    : state == true ? (<LoginForm/>)
                    : (<RegisterForm/>)
                }
            </div>

        </div>
    )
}
