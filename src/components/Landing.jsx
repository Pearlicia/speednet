import styled from "styled-components"
// import { mobile } from "../responsive";
//${mobile({ width: "75%" })}

const PrimaryContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
  ), 
    url("https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
      center;
    background-size: cover;
`;


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  
  display: flex;
  align-items: center;
  justify-content: center;

    
`;

const Wrapper = styled.div`
  width: 60%;
  padding: 20px;
  background: white;
  display: flex;
  justify-content: center;
  
`;



const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;


const Register = () => {
  return (
    <PrimaryContainer>
      <div>
          <div>
            <div className="flex flex-row px-4 mx-4">
              <button className="my-3 mx-3 px-3 font-bold border">Home</button>
              <button className="my-3 mx-3 px-3 font-bold border">Accounts</button>
              <button className="my-3 mx-3 px-3 font-bold border">Login</button>
            </div>
          </div>
        </div>
        <Container>
            
            <Wrapper>
                <Form>
                  <div className="flex flex-row justify-between">
                    <div>
                      <div className="flex flex-col my-4">
                        <button className="my-3 px-3 border">Username</button>
                        <button className="border">Password</button>
                      </div>
                    </div>
                    <div className="flex flex-col py-4">
                      <div className="px-4">
                        <input className="my-3 border "/>
                      </div>
                      <div className="px-4">
                        <input className="border "/>
                      </div>
                      <div className="my-4 ml-9 px-4">
                        <button className=" px-3 border font-bold bg-[#55999a] ">Submit</button>
                      </div>
                        
                      
                    </div>
                  </div>
                    
                </Form>
            </Wrapper>
        </Container>
    </PrimaryContainer>
  )
}

export default Register
