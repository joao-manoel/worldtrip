import { Grid, GridItem } from "@chakra-ui/react";
import Reference from "./Reference";

export default function References() {
  return(
    <Grid
      templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
      w="100%"
      justifyContent="space-between"
      align="center"
      mt={['10', '32']}
      mx="auto"
      maxW="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <Reference icon="cocktail" text="vida noturna" />
      </GridItem>
      <GridItem>
        <Reference icon="surf" text="praia" />
      </GridItem>
      <GridItem>
      <Reference icon="building" text="moderno" />
      </GridItem>
      <GridItem>
        <Reference icon="museum" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
      <Reference icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  )
}