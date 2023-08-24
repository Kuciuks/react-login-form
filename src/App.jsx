import LoginBtn from './Components/LoginBtn'
import LoginForm from './Components/LoginForm'
import RegisterBtn from './Components/RegisterBtn'
import RegisterForm from './Components/RegisterForm'
import {useState} from 'react'

export default function App() {

    const [state, setState] = useState(null) //stores state of which button has been clicked (login/register)


    const handleClick = (value) =>{ 
        value == "login" ? setState(true)
        : setState(false)
    }

    return(
        <div>
            <div>
                <LoginBtn onClick={handleClick}/>
                <RegisterBtn onClick={handleClick}/>
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
