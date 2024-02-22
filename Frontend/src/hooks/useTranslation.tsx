import translation from "../../ES-EN.json"
export default function useTranslation()
{
    const toSpanish:(word:string)=>string = ((word: string) => translation[word] as string)
    
    return { toSpanish }
} 