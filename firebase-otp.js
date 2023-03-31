import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { authentication } from './firebase';


export const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        console.log(response);
      },
      defaultCountry: "IN"
    }, authentication);
  }

 export const requestOTP = (mobile) => {
    console.log('gsgsgg',mobile);
    const phoneNumber = '+91' + mobile
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier
    signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log(`confirmation of otp => ${JSON.stringify(confirmationResult)}`);
        // ...
      }).catch((error) => {
        console.log(`error=> ${error.message}`);
      });
  }
export  const verifyOTP = (otp) => {
    console.log(otp);
    let confirmationResult = window.confirmationResult;
    confirmationResult.confirm(otp).then((result) => {
      console.log(result);
      console.log(JSON.stringify(result));
      const user = result.user;
      console.log(`signed in successfully as ${JSON.stringify(user)}`);
      // ...
    }).catch((error) => {
      console.log(`error=> ${error.message}`);
    });
  }