import { Center, Flex } from "@chakra-ui/react";
import { Container, Link, Text } from "@chakra-ui/layout";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import logo from "../../svg/logo.svg";
import github from "../../svg/github.svg";

const FooterComp = (): JSX.Element => {
  return (
    <Flex
      w="100%"
      minH="50px"
      h="12em"
      bg="#f9fafd"
      position="relative"
      mt="200px"
    >
      <Container
        maxW={[
          "container.sm",
          "container.sm",
          "container.md",
          "container.lg",
          "container.xl",
        ]}
        position="relative"
      >
        <Center>
          <Flex
            w={["80%", "90%", "98%", "full", "full"]}
            minH="90px"
            rounded="12px"
            p="3"
            top="-45px"
            bg="#4475F2"
            position="absolute"
            alignItems="center"
            justifyContent="space-between"
            flexDir={["column", "column", "row", "row", "row"]}
          >
            <Flex ml={["1", "1", "1", "8", "8"]} flexDir="column">
              <Text fontSize="22px" color="#f8fafd" fontWeight="700">
                Newsletter
              </Text>
              <Text fontSize="15px" color="#DAE3FC">
                Be the first one to know about discount, offers and events
              </Text>
            </Flex>
            <InputGroup
              w={["full", "60%", "370px", "370px", "370px"]}
              mr={["0", "0", "0", "8", "8"]}
              mt={["8px", "17px", "0px", "0px", "0px"]}
            >
              <Input
                color="white"
                _placeholder={{ color: "#f8fafd", fontWeight: "200" }}
                placeholder="Enter your email!"
                rounded="55px"
                bg="#608AF4"
                border="none"
              />
              <InputRightElement w="100px">
                <Button fontWeight="400" h="70%" color="#4475F2" rounded="55px">
                  submit
                </Button>
              </InputRightElement>
            </InputGroup>
          </Flex>
        </Center>

        <Flex
          mt={["120px", "120px", "90px", "90px", "90px"]}
          justifyContent="space-between"
          alignItems="flex-start"
          flexDir={["column", "column", "row", "row", "row"]}
        >
          
        </Flex>
        <Flex
          position={["static", "static", "absolute", "absolute", "absolute"]}
          bottom={["-10", "-10", "3", "4", "4"]}
          w={["90%", "90%", "95%", "98%", "98%"]}
          justifyContent="space-between"
        >
          <Image
            display={["none", "none", "block", "block", "block"]}
            src={logo}
          />
          <Flex
            flexDir={["column-reverse", "column-reverse", "row", "row", "row"]}
            mt={["10", "10", "0", "0", "0"]}
          >
            <Flex>
              <Link
                _focus={{}}
                isExternal
                href="https://github.com/davidnweke/bike-store"
              >
                <Image
                  cursor="pointer"
                  _selection={{ bg: "transparent" }}
                  mr="10"
                  src={github}
                />
              </Link>
            </Flex>

            <Flex mb={["26px", "26px", "0", "0", "0"]}>
              <Text mr="1" color="#7E7E7E">
                Copyright © 2022
              </Text>
              <Link
                color="#7E7E7E"
                href="https://github.com/davidnweke/bike-store"
                isExternal
              >
                David Nweke
              </Link>
            </Flex>
            
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default FooterComp;
