import { error } from "console";
import { RegisterUserInfo } from "../types/User";
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

    // function LogInUser(User:LogInCredentials): string
    // {
    //     for(const user of users)
    //     {
    //         if(user.email === User.email)
    //         {
    //             // HASH User PASSWORD
    //             if(user.password === User.password)
    //             {
    //                 setLoggedInUser(
    //                     {
    //                         email: user.email,
    //                         name: user.name,
    //                         lastname: user.lastname,
    //                         faculty: user.faculty,
    //                         password: user.password,
    //                         isLoggedIn: true
    //                     }
    //                 )
    //                 updateUser({
    //                     email: user.email,
    //                     name: user.name,
    //                     lastname: user.lastname,
    //                     faculty: user.faculty,
    //                     password: user.password,
    //                     isLoggedIn: true
    //                 })
    //                 return ""
    //             }
    //             else return "Contraseña incorrecta"
    //         }
    //         else return "No existe una cuenta con el correo introducido"
    //     }
    //     return ""
    // }

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

    // function updateUser(newUser: User)
    // {
    //     //PUT here
    // }
    

    return { RegisterUser, userKey }
}