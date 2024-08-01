import { AppContainer } from "./containers";
import { useAuthGuard } from "@/hooks/AuthGuard"

export default function App() {
  const { isAuthenticated } = useAuthGuard()

  return (
    <AppContainer>
      {isAuthenticated ? <>AUTENTICADO</> : <>NO AUTENTICADO</>}
    </AppContainer>
  )
}
