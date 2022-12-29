import Head from 'next/head'
import {
  Box,
  Heading,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
} from '@chakra-ui/react'
import { LoginButton } from '../components/login-button'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box p="4">
        <Heading>Hello Slack Auth!</Heading>

        <Card>
          <CardHeader>Session status</CardHeader>
          <CardBody>session: {JSON.stringify(session)}</CardBody>
          <CardFooter>
            <LoginButton />
          </CardFooter>
        </Card>
      </Box>
    </>
  )
}
