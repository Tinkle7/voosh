import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Book = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("dataKey")) || []
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: e.target.username.value,
      useremail: e.target.useremail.value,
      password: e.target.password.value,
      companyname: e.target.companyname.value,
      title: e.target.title.value,
    };

    let flag = true;

    data.map((target) => {
      if (target.useremail === user.useremail) {
        return (flag = false);
      }
      return flag;
    });

    if (flag) {
      setData([...data, user]);
    } else {
      alert("alredy done");
    }
  };

  useEffect(() => {
    localStorage.setItem("dataKey", JSON.stringify(data));
  }, [data]);

  console.log(data);

  return (
    <Box
      display="flex"
      style={{
        backgroundImage:
          "url('https://voosh.in/static/media/book_now_bg.e9f9294653918137cd78.webp')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      height="100Vh"
      id="book"
    >
      <Box
        flexBasis="0"
        flexGrow="1"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text width="fit-content" fontSize="4xl" color="white">
          Book A Demo Now
        </Text>
      </Box>
      <Box
        flexBasis="0"
        flexGrow="1"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box backgroundColor="white" width="50%" padding="2%" borderRadius="2%">
          <Box display={!data.length ? "block" : "none"}>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <FormControl isRequired>
                <FormLabel htmlFor="username" style={{ color: "black" }}>
                  Name
                </FormLabel>
                <Input type="text" id="username" name="username" required />
                <FormLabel htmlFor="useemail" style={{ color: "black" }}>
                  Email
                </FormLabel>
                <Input type="email" id="useemail" name="useremail" />
                <FormLabel htmlFor="password" style={{ color: "black" }}>
                  password
                </FormLabel>
                <Input type="password" id="password" name="password" />
                <FormLabel htmlFor="companyname" style={{ color: "black" }}>
                  Company Name
                </FormLabel>
                <Input type="text" id="companyname" name="companyname" />
                <FormLabel htmlFor="title" style={{ color: "black" }}>
                  Your title
                </FormLabel>
                <Input type="text" id="title" name="title" />
              </FormControl>
              <button
                type="submit"
                style={{
                  color: "white",
                  backgroundColor: "#2d66f5",
                  border: "none",
                  borderRadius: "4px",
                  marginTop: "10px",
                  padding: "10px 0",
                }}
              >
                Book Demo
              </button>
            </form>
          </Box>
          <Box display={!data.length ? "none" : "block"}>
            <Alert
              status="success"
              variant="subtle"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              height="200px"
            >
              <AlertIcon boxSize="40px" mr={0} />
              <AlertTitle mt={4} mb={1} fontSize="lg">
                Application submitted!
              </AlertTitle>
              <AlertDescription maxWidth="sm">
                Thanks for submitting your application. Our team will get back
                to you soon.
              </AlertDescription>
            </Alert>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Book;
