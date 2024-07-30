interface Props {
  children: JSX.Element | React.ReactNode
}

export const AuthGuard = ({
  children
}: Props) => {
  return (
    <>
    {children}
    </>
  )
}
