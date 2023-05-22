import React from 'react'
import styled from "styled-components"
import img from "../Assets/wave_img.svg"

const AdminCard = () => {


  return (
    <Container>
      <Wrapper>
        <Holder>
          <Card1>
        <Total>Total Employees</Total>
        <Num>13</Num>
      </Card1>

      <Card2>
        <Total>Attendance</Total>
        <Num>05</Num>
      </Card2>

      <Card3>
        <Total>Leave Apply</Total>
        <Num>15</Num>
      </Card3>
        </Holder>
      </Wrapper>
    </Container>
  );
};

export default AdminCard;
const Holder = styled.div`
  width: 100%;
  display: flex;
  @media screen and (max-width: 500px) {
    flex-wrap: wrap;
  }
`
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  /* background-color: red; */
`
const Num = styled.div`
  font-size: 42px;
  margin-top: 5px;
  color: #fff;
`
const Total = styled.div`
  font-size: 18px;
  color: #fff;
  @media screen and (max-width: 500px) {
    font-size: 13px;
  }
`

const Card3 = styled.div`
  height: 120px;
  width: 385px;
  background: radial-gradient(circle at 4.3% 10.7%, rgb(138, 118, 249) 13.6%, rgb(75, 252, 235) 100.7%);
  border-radius: 3px;
  border-bottom: 2px solid #0d71fa;
  display: flex;
  border: 1px solid #d5dbe1;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
  padding: 15px;
  overflow: hidden;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 320px;
  }

  @media (max-width: 500px) {
    width: 100%;
    margin: 7px;
  }
`;
const Card2 = styled.div`
  height: 120px;
  width: 385px;
  background: linear-gradient(to top, #0ba360 0%, #3cba92 100%);
  border-radius: 3px;
  border-bottom: 2px solid #0d71fa;
  display: flex;
  border: 1px solid #d5dbe1;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
  padding: 15px;
  overflow: hidden;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 320px;
  }

  @media (max-width: 500px) {
    width: 100%;
    margin: 7px;
  }
`;


const Card1 = styled.div`
  height: 120px;
  width: 385px;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-color: red;
  /* background: radial-gradient(484px at 49.4% 19%, rgb(23, 156, 214) 0%, rgb(52, 48, 111) 100.2%); */
  border-radius: 3px;
  border-bottom: 2px solid #0d71fa;
  display: flex;
  border: 1px solid #d5dbe1;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
  padding: 15px;
  overflow: hidden;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 320px;
  }

  @media (max-width: 500px) {
    width: 100%;
    margin: 7px;
  }
`;


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
