// commented lines are for sign in with redirect
// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form copy/sign-in-form.component';

import { AuthenticationContainer } from './authentication.styles';

const Authentication = () => {
  // useEffect(
  //   () => async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   },
  //   []
  // );

  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
    </AuthenticationContainer>
  );
};

export default Authentication;
