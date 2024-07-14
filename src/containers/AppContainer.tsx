import { ThemeProvider } from "@/components/theme-provider"

interface Props {
  children: JSX.Element | React.ReactNode
}              
                           
export const AppContainer = ({ 
  children                      
}: Props) => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div 
      className='font-Montserrat min-h-screen flex justify-center items-center'>
        {children}
      </div>
    </ThemeProvider>
  )
}
