import { ReactNode } from "react"

interface ContainerProps {
    children: ReactNode,
    classes?: string
}

const Container:React.FC<ContainerProps> = ({children , classes}) => {
    return (
      <div className={`mx-auto w-full max-w-7xl px-5 ${classes ? classes : ''}`}>
        {children}
      </div>
    );
}

export default Container;