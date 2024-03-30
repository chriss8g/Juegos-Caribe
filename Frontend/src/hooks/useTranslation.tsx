import es from "../../es.json"
import en from "../../en.json"

export default function useTranslation()
{
    const toSpanish:(word:string)=>string = ((word: string) => es[word] as string)
    const toEnglish: (word:string)=>string = ((word: string) => en[word] as string)
    
    return { toSpanish, toEnglish }
} 