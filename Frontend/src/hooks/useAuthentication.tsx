import { LoginInfo, RegisterUserInfo } from "../types/User";
import { useState } from "react"
import { toast } from 'react-toastify';


export default function useAuthentication()
{
    // const router = useRouter()
    const [userKey, setUserKey] = useState("")

    function RegisterUser (newUser: RegisterUserInfo): string {
        
        // POST NEW USER
        try
        {
            const formData = new FormData();
            
            Object.keys(newUser).forEach(key => {
                formData.append(key, newUser[key]);
            });
            const response = fetch(`${process.env.API_URL}/v1/rest-auth/registration/`,{
                method: "POST",
                body: formData
            }).then(
                (response)=>
                {
                    if(!response.ok) toast("Error")
                }
            )
        }
        catch(e)
        {
           console.log(e)
        }
        

        return ""
    }

    function LogUser (userinfo: LoginInfo): string {
        
        // LOGIN USER
        try
        {
            const formData = new FormData();
            
            Object.keys(userinfo).forEach(key => {
                formData.append(key, userinfo[key]);
            });
            const response = fetch(`${process.env.API_URL}/v1/rest-auth/login/`,{
                method: "POST",
                body: formData
            })
        }
        catch(e)
        {
           console.log(e)
        }
        

        return ""
    }

    // function LogOut()
    // {
    //     setLoggedInUser(
    //         {
    //             email: loggedInUser.email,
    //             name: loggedInUser.name,
    //             lastname: loggedInUser.lastname,
    //             faculty: loggedInUser.faculty,
    //             password: loggedInUser.password,
    //             isLoggedIn: false
    //         }
    //     )
    //     updateUser({
    //         email: loggedInUser.email,
    //         name: loggedInUser.name,
    //         lastname: loggedInUser.lastname,
    //         faculty: loggedInUser.faculty,
    //         password: loggedInUser.password,
    //         isLoggedIn: false
    //     })
    //     // router.push("/")
    // }
    

    return { RegisterUser, userKey, LogUser }
}