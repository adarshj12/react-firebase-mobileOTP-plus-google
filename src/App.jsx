import './App.css';
import { verifyOTP, requestOTP } from '../firebase-otp';
import { signInWithGoogle } from '../firebase-gmail';
import { useState } from 'react';
import {
  Button,
  Input,
  Container,
  Heading,
  HStack,
  VStack,
  Divider,
} from '@chakra-ui/react';
import { FaGoogle } from "react-icons/fa";

function App() {
  const [mobile, setMobile] = useState()
  const [otp, setOtp] = useState();

  return (
    <Container>
<div className="App">
     <VStack>
     <Heading fontSize={20}>Enter Mobile Number</Heading>
      <div id='sign-in-button'></div>
      <input type='number' placeholder='enter number' id='recaptcha-container' onChange={(e) => setMobile(e.target.value)}></input>
      <input type="button" onClick={() => requestOTP(mobile)} value="SEND OTP" />


      <Heading fontSize={20}>Enter OTP</Heading>
      <input type='number' placeholder='enter number' id='recaptcha-container' onChange={(e) => setOtp(e.target.value)} ></input>
      <input type="button" onClick={() => verifyOTP(otp)} value="VERIFY" />
     </VStack>

      <Button
        colorScheme="red"
        leftIcon={<FaGoogle />}
        onClick={() => signInWithGoogle()} my="4"
      >
        Sign in with Google
      </Button>

    </div>
    </Container>
    
  );
}

export default App; 
