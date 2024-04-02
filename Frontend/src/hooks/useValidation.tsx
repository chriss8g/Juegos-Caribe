import axios from "axios"
import useAdministration from "./useAdministration"

export default function useValidation()
{
    const {
        getData
    } = useAdministration()


    // function requiredField(entityEndpoint, fieldname)
    // {
    //     API.options(entityEndpoint + "/").then(resp => {
    //         resp.data["actions"]["POST"][fieldname]["required"];
    //     })
    // }

    return {}
}