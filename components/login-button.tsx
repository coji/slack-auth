import { useSession, signIn, signOut } from 'next-auth/react'
import { Button } from '@chakra-ui/react'

export const LoginButton = () => {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <Button onClick={() => void signOut()}>Sign Out</Button>
      </>
    )
  } else {
    return (
      <>
        Not signed in <br />
        <Button onClick={() => void signIn()}>Sign In</Button>
      </>
    )
  }
}
