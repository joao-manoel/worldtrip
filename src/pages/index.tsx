import { Flex, Heading } from "@chakra-ui/react"
import Head from 'next/head'
import React from "react"

import Banner from "../components/Banner"
import Header from "../components/Header"
import References from "../components/References"
import Separador from "../components/Separador"
import Slider from "../components/Slider"

export default function Home() {
  return (
    <Flex direction="column">
      <Head>
        <title>WorldTrip</title>
      </Head>
      <Header />
      <Banner />
      <References />
      <Separador />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={['lg', '3xl', '4xl']}
      >
        Vamos nessa?<br />Então escolha seu continente

      </Heading>

      <Slider />
    </Flex>
  )
}
