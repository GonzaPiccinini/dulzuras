import { ThemeProvider } from "@/components/theme-provider"

interface Props {
  children: JSX.Element | React.ReactNode
}              
                           
export const AppContainer = ({ 
  children                      
}: Props) => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  )
}
