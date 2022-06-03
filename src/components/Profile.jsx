import React, { useState, useEffect } from "react";
import {
  Fade,
  Button,
  useDisclosure,
  Box,
  WrapItem,
  Avatar,
  Text,
  Center,
  Link,
} from "@chakra-ui/react";
import "../styles.css";

function Profile() {
  const [user, setUser] = useState([]);
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    const fetchApi = () => {
      fetch("https://api.github.com/users/vit0rr")
        .then((response) => response.json())
        .then((data) => setUser(data));
    };
    fetchApi();
  }, []);

  if (!user) return <span>Loading...</span>;
  return (
    <>
      <div className="centerMe">
        <Button onClick={onToggle}>About me!</Button>
        <Fade in={isOpen}>
          <Box
            p="40px"
            color="white"
            mt="4"
            bg="teal.500"
            rounded="md"
            shadow="md"
          >
            <div className="App">
              <WrapItem>
                <Center>
                  <Avatar
                    name="Dan Abrahmov"
                    mr={2}
                    size="lg"
                    src={user.avatar_url}
                  />
                  <Text fontSize="lg">{user.bio}</Text>
                </Center>
              </WrapItem>

              <Text size="md" mt={5}>
                Currently I have {user.followers} followers and{" "}
                {user.public_repos} repos. You can read more about me on my{" "}
                <Link color="black" href={user.blog} isExternal>
                  blog
                </Link>
              </Text>
            </div>
          </Box>
        </Fade>
      </div>
    </>
  );
}

export default Profile;
