import { Flex, Grid, Icon, Image } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import {RiArrowLeftSLine} from 'react-icons/ri'

export default function Header() {
  const { asPath } = useRouter()
  const isHomePage = asPath === "/"
  return(
    <Flex 
      bg="white" 
      w="100%" 
      as="header" 
      mx="auto" 
      px="1rem" 
      h={["50px", "100px"]}
      align="center"
      justify="center"
    >
      <Grid 
        h="100%"
        w="100%"
        maxW="1160px"
        mx="auto"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justify="center"
      >
        {
          !isHomePage && (
            <Link href="/">
              <a>
                <Icon as={RiArrowLeftSLine} 
                  fontSize={[20, 40]}
                  justifySelf="start"
                />
              </a>
            </Link>
          )
        }
        <Image
          w={["81px", "184px"]} 
          src="/images/logo.svg"
          alt="WorldTrip"
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  )
}