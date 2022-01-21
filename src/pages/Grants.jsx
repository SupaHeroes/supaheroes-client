import React from "react";
import { Button } from 'antd';
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
  const [useGrantAmount, setGrantAmount] = useState(5000);
  const [goalArray, setGoalArray] = useState([6500, 5000, 6000, 7000]);
  const [contributionArray, setContributionArray] = useState([
    4000, 5000, 3000, 5200,
  ]);
  const projects = ["Project A", "Project B", "Project C", "Project D"];

  const match = (index) => {
    let total = 0;
    for (let i = 0; i < goalArray.length; i++) {
      total += ((goalArray[i] - contributionArray[i]) * 100) / useGrantAmount;
    }
    console.log("index of" + index + total);
    const matchAmt = (
      (((goalArray[index] - contributionArray[index]) * 100) /
        useGrantAmount /
        total) *
      useGrantAmount
    ).toFixed(2);
    if (matchAmt + contributionArray[index] >= goalArray[index]) {
      return goalArray[index] - contributionArray[index];
    }
    return matchAmt;
  };

  const changeGoal = (index, newGoal) => {
    console.log("called")
    const arr = goalArray;
    arr[index] = newGoal;
    console.log(arr);
    setGoalArray(arr);
  };

  const addGrant = () => {
    setGrantAmount(amt => amt + 100);
  }

  const subGrant = () => {
    setGrantAmount(amt => amt - 100);
  }

  return (
    <div className="pt-24 bg-supadark-dark flex min-h-screen flex-col">
      <div className="w-4/5 mx-auto h-52 bg-supagreen-dark rounded-xl">
        <h1 className="text-5xl text-center pt-12">${useGrantAmount}</h1>
        <div className="mx-auto max-w-md">
        <Button onClick={addGrant}>+</Button> <Button onClick={subGrant}>-</Button>
        </div>
        <h1 className=" font-light text-xl text-center">
          Funds for Public Goods
        </h1>
      </div>
      <div className="w-4/5 mx-auto pt-10">
        <h1 className="text-white text-3xl">QEO Funding Demo</h1>
        <h1 className="text-gray-300 font-light">
          Thank you for trying QEO funding model, let me have your feedback!
        </h1>
        <Divider />
        <Row gutter={16}>
          {goalArray.map((e, i) => (
            <MatchingCard
              inputBtn={
                <InputNumber
                  defaultValue={goalArray[i]}
                  onChange={(e) => changeGoal(i, e)}
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
  );
};

export default Grants;
