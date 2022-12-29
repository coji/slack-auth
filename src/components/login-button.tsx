import { useSession, signIn, signOut } from 'next-auth/react'
import type { Session } from 'next-auth'
import { Button } from '@chakra-ui/react'

/**
 * サインイン
 */
const SignInButton = ({ session }: { session: Session }) => (
  <>
    Signed in as {session.user?.name} <br />
    <Button onClick={() => void signOut()}>Sign Out</Button>
  </>
)

/**
 * サインアウト
 */
const SignOutButton = () => (
  <>
    Not signed in <br />
    <Button
      onClick={() =>
        void signIn('slack', {
          callbackUrl:
            'https://13c8-92-203-28-72.jp.ngrok.io/api/auth/callback/slack',
        })
      }
    >
      Sign In
    </Button>
  </>
)

/**
 * サインインまたはサインアウトボタン
 */
export const LoginButton = () => {
  const { data: session } = useSession()
  return session ? <SignInButton session={session} /> : <SignOutButton />
}
