import { Grid, Heading } from "@chakra-ui/react";
import City from "./City";

export default function Cities(){
  return(
    <>
      <Heading fontWeight="500" fontSize={["2xl","4xl"]} mb="10">Cidades +100</Heading>
      <Grid templateColumns={["1fr","1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={['20px','45px']} alignItems="center" justifyContent="center" px={["30px", "0"]}>
        
          <City
            key="1"
            name="Londres"
            country="Reino Unido"
            flag="reino_unido"
            image="londres"
          />
          <City
            key="2"
            name="Paris"
            country="França"
            flag="franca"
            image="paris"
          />
          <City
            key="3"
            name="Roma"
            country="Itália"
            flag="italia"
            image="roma"
          />
          <City
            key="4"
            name="Praga"
            country="Repúplica Tcheca"
            flag="repuplica_tcheca"
            image="praga"
          />
          <City
            key="5"
            name="Amsterdã"
            country="Holanda"
            flag="holanda"
            image="amsterda"
          />
      </Grid>
    </>
  )
}