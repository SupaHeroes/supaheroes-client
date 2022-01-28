import React from "react";

import { Button } from "antd";
import { useState } from "react";
import { Row, Col, Divider, InputNumber } from "antd";
import { Typography } from "antd";
import MatchingCard from "../components/QEODemo/MatchingCard";

const { Title, Text } = Typography;

const Style = {
  paddingLeft: "14px",
  color: "white",
};

const Grants = () => {
  
  const [useGrantAmount, setGrantAmount] = useState(10000);
  const [goalArray, setGoalArray] = useState([26000, 15000, 16000, 18000]);
  const [contributionArray, setContributionArray] = useState([
    25383, 10495, 7987, 6608
  ]);
  const projects = ["Project A", "Project B", "Project C", "Project D"];

  

  const match = (index) => {
    let total = 0;
   for (let i = 0; i < contributionArray.length; i++) {
      total += contributionArray[i];
    }
    console.log(total);
    // const matchAmt = (contributionArray[index] * useGrantAmount / total).toFixed(2);
    const matchAmt = (contributionArray[index]/goalArray[index] * useGrantAmount * contributionArray[index]/total).toFixed(2);
    return matchAmt;
  };

  const changeGoal = (index, newGoal) => {
    console.log("called");
    const arr = goalArray;
    arr[index] = newGoal;
    console.log(arr);
    setGoalArray((oldarr) => [...arr]);
  };

  const changeCont = (index, newCont) => {
    if (newCont <= goalArray[index]) {
      console.log("called");
      const arr = contributionArray;
      arr[index] = newCont;
      console.log(arr);
      setContributionArray((oldarr) => [...arr]);
    }
  };

  const addGrant = () => {
    setGrantAmount((amt) => amt + 100);
  };

  const subGrant = () => {
    setGrantAmount((amt) => amt - 100);
  };

  return (
    <div className="bg-supadark-black" >
      <div style={{ maxWidth: "70%" }} className="pt-32 mx-auto  flex min-h-screen flex-col">
        <div className="w-4/5 mx-auto h-52 bg-supagreen-dark flex flex-col rounded-xl">
          <h1 className=" font-light text-xl pt-8 text-center">
            Funds for Public Goods
          </h1>
          <h1 className="text-5xl text-center pt-2">${useGrantAmount}</h1>
          <div className="mx-auto max-w-md">
            <Button onClick={addGrant}>+</Button>{" "}
            <Button onClick={subGrant}>-</Button>
          </div>
        </div>
        <div className="w-4/5 mx-auto pt-10">
          <h1 className="text-white text-3xl">QEO Funding Demo</h1>
          <h1 className="text-gray-300 font-light">
            Thank you for trying QEO funding model, we are still working on the
            mechanics! It is not perfect but we would love to try and give us
            feedbacks!
          </h1>
          <h1 className="text-gray-300 font-light">Follow our updates on <a href="https://twitter.com/SupaheroesFund">Twitter!</a></h1>
          <Divider />
          <Row gutter={16}>
            {goalArray.map((e, i) => (
              <MatchingCard
                inputBtn={
                  <InputNumber
                  prefix="$" style={{ width: '100%' }}
                    defaultValue={goalArray[i]}
                    onChange={(e) => changeGoal(i, e)}
                  />
                }
                contributeBtn={
                  <InputNumber
                  max={e}
                  prefix="$" style={{ width: '100%' }}
                    defaultValue={contributionArray[i]}
                    onChange={(e) => changeCont(i, e)}
                  />
                }
                name={projects[i]}
                goal={e}
                contribution={contributionArray[i]}
                matching={match(i)}
              />
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Grants;
