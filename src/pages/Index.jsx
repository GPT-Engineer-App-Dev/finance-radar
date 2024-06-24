import React from 'react';
import { Box, Container, Flex, Heading, Text, VStack, HStack, Image, Link, Grid, GridItem } from "@chakra-ui/react";
import { FaSearch, FaUser } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Box bg="blue.900" color="white" py={4}>
        <Container maxW="container.xl">
          <Flex justifyContent="space-between" alignItems="center">
            <Heading as="h1" size="lg">Financial Times</Heading>
            <HStack spacing={4}>
              <FaSearch />
              <FaUser />
              <Link>Subscribe</Link>
              <Link>Sign In</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Navigation */}
      <Box bg="gray.100" py={2}>
        <Container maxW="container.xl">
          <HStack spacing={4}>
            <Link>Home</Link>
            <Link>World</Link>
            <Link>Business</Link>
            <Link>Markets</Link>
            <Link>Opinion</Link>
            <Link>Technology</Link>
          </HStack>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.xl" mt={8}>
        <Grid templateColumns="2fr 1fr" gap={8}>
          <GridItem>
            {/* Featured Article */}
            <Box mb={8}>
              <Image src="https://via.placeholder.com/800x400" alt="Featured Article" mb={4} />
              <Heading as="h2" size="xl" mb={2}>Breaking: Major Economic Shift in Global Markets</Heading>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            </Box>

            {/* Other Articles */}
            <VStack spacing={8} align="stretch">
              {[1, 2, 3].map((item) => (
                <Box key={item}>
                  <Heading as="h3" size="md" mb={2}>Article Headline {item}</Heading>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                </Box>
              ))}
            </VStack>
          </GridItem>

          {/* Sidebar */}
          <GridItem>
            <VStack spacing={8} align="stretch">
              <Box bg="gray.100" p={4}>
                <Heading as="h3" size="md" mb={4}>Latest Updates</Heading>
                <VStack spacing={4} align="stretch">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Text key={item}>Update {item}: Lorem ipsum dolor sit amet.</Text>
                  ))}
                </VStack>
              </Box>
              <Box bg="gray.100" p={4}>
                <Heading as="h3" size="md" mb={4}>Advertisement</Heading>
                <Image src="https://via.placeholder.com/300x250" alt="Advertisement" />
              </Box>
            </VStack>
          </GridItem>
        </Grid>
      </Container>

      {/* Footer */}
      <Box bg="gray.200" mt={16} py={8}>
        <Container maxW="container.xl">
          <Grid templateColumns="repeat(4, 1fr)" gap={8}>
            <GridItem>
              <Heading as="h4" size="sm" mb={4}>Support</Heading>
              <VStack align="start">
                <Link>View Site Tips</Link>
                <Link>Help Centre</Link>
                <Link>Contact Us</Link>
              </VStack>
            </GridItem>
            <GridItem>
              <Heading as="h4" size="sm" mb={4}>Legal & Privacy</Heading>
              <VStack align="start">
                <Link>Terms & Conditions</Link>
                <Link>Privacy Policy</Link>
                <Link>Cookie Policy</Link>
              </VStack>
            </GridItem>
            <GridItem>
              <Heading as="h4" size="sm" mb={4}>Services</Heading>
              <VStack align="start">
                <Link>FT Live</Link>
                <Link>FT Forums</Link>
                <Link>Corporate Subscriptions</Link>
              </VStack>
            </GridItem>
            <GridItem>
              <Heading as="h4" size="sm" mb={4}>Follow the FT</Heading>
              <VStack align="start">
                <Link>Twitter</Link>
                <Link>Facebook</Link>
                <Link>LinkedIn</Link>
              </VStack>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;