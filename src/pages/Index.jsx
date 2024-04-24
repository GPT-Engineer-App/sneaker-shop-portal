import { Box, Flex, Text, Image, Button, VStack, HStack, Grid, GridItem } from "@chakra-ui/react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

const Index = () => {
  const sneakers = [
    {
      id: 1,
      name: "Air Max 95",
      price: "$190",
      image: "https://images.unsplash.com/photo-1547963802-25f153e14080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxOaWtlJTIwQWlyJTIwTWF4JTIwOTV8ZW58MHx8fHwxNzEzOTY1MjQ0fDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 2,
      name: "Adidas Yeezy Boost",
      price: "$220",
      image: "https://images.unsplash.com/photo-1505248254168-1de4e1abfa78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBZGlkYXMlMjBZZWV6eSUyMEJvb3N0fGVufDB8fHx8MTcxMzk2NTI0NXww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 3,
      name: "Converse All Star",
      price: "$55",
      image: "https://images.unsplash.com/photo-1567159862312-8bef50048b81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxDb252ZXJzZSUyMEFsbCUyMFN0YXJ8ZW58MHx8fHwxNzEzOTY1MjQ1fDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 4,
      name: "Puma RS-X",
      price: "$110",
      image: "https://images.unsplash.com/photo-1701221029139-73505b5c0e73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxQdW1hJTIwUlMtWHxlbnwwfHx8fDE3MTM5NjUyNDV8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ];

  return (
    <Box p={5}>
      <Flex justifyContent="space-between" alignItems="center" mb={10}>
        <Text fontSize="3xl" fontWeight="bold">
          Solehub
        </Text>
        <HStack spacing={4}>
          <Button leftIcon={<FaSearch />} colorScheme="teal" variant="solid">
            Search
          </Button>
          <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="solid">
            Cart
          </Button>
        </HStack>
      </Flex>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {sneakers.map((sneaker) => (
          <GridItem key={sneaker.id} w="100%" bg="gray.100" p={4} borderRadius="md">
            <VStack>
              <Image src={sneaker.image} borderRadius="md" boxSize="200px" objectFit="cover" />
              <Text fontWeight="bold">{sneaker.name}</Text>
              <Text>{sneaker.price}</Text>
              <Button colorScheme="teal" size="sm">
                Add to Cart
              </Button>
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;
