import { Flex } from '@chakra-ui/layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Heading } from '@chakra-ui/layout'
import { Link } from '@chakra-ui/layout'
import { VStack } from '@chakra-ui/layout'

const Home: NextPage = () => {
  return (
    <Flex w="100vw" h="100vh" flexDirection="row">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex w="50%" h="full" alignItems="center" justifyContent="center">
        <Image width="640px" height="360px" src="/tsvsjs.jpg" />
      </Flex>

      <Flex w="50%" h="full" alignItems="center" justifyContent="center">
        <VStack>

          <Heading>Welcome to Digital with TS</Heading>
          <Link href="/createUser">Create new user page</Link>
          <Link href="/login">Login with Auth0</Link>
        </VStack>

      </Flex>

    </Flex>
  )
}

export default Home
