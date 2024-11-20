'use client'
import React from "react";
import * as Components from '../../Components/HelpfulAuth/page';

function App() {
    const [signIn, toggle] = React.useState(true);
     return(
       
       <div className="py-36 mx-80 z-0">
    <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form>
                     <Components.Title className="text-white text-2xl py-7">Create Account</Components.Title>
                     <Components.Input type='text' placeholder='Name' />
                     <Components.Input type='email' placeholder='Email' />
                     <Components.Input type='password' placeholder='Password' />
                     <Components.Button className="button hover:bg-green-800 hover:text-white transition transition-all duration-1000">Sign Up</Components.Button>
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title className="text-white text-2xl py-7">Sign in</Components.Title>
                      <Components.Input type='email' placeholder='Email' />
                      <Components.Input type='password' placeholder='Password' />
                      <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                      <Components.Button className="button hover:bg-green-800 hover:text-white transition transition-all duration-1000">Sigin In</Components.Button>
                  </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title className="text-2xl">Welcome Back!</Components.Title>
                     <Components.Paragraph>
                         To keep connected with us please login with your personal info
                     </Components.Paragraph>
                     <Components.GhostButton className="button hover:bg-green-800 hover:text-white transition transition-all duration-1000" onClick={() => toggle(true)}>
                         Sign In
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title className="text-2xl">Hello, Friend!</Components.Title>
                       <Components.Paragraph>
                           Enter Your personal details and start journey with us
                       </Components.Paragraph>
                           <Components.GhostButton className="button hover:bg-green-800 hover:text-white transition transition-all duration-1000" onClick={() => toggle(false)}>
                               Sigin Up
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
       </div>
   
     )
}

export default App;