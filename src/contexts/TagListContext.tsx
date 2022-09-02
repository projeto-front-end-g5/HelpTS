
import { createContext, ReactNode, useContext, useState } from "react";

interface ITagListProviderProps {
    children: ReactNode;
}

interface ITagListProvidder {
    tags: string[]
    setTags: React.Dispatch<React.SetStateAction<string[]>>
}

const TagListContext = createContext<ITagListProvidder>({} as ITagListProvidder)
export const useTagListContext = () => useContext(TagListContext)

function TagListProvidder ({children}: ITagListProviderProps) {
    const [tags, setTags] = useState<string[]>(["state", "function", "style-components", "png", "axios", "contextApi", "props", "parameter"])


    return (<TagListContext.Provider value={{tags, setTags}}>{children}</TagListContext.Provider>)
}

export default TagListProvidder;