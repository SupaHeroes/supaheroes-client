import React from 'react';

 
import { Button } from "antd";
import { useState } from "react";
import { Row, Divider, InputNumber, Collapse, Select } from "antd";
import MatchingCard from "../components/QEODemo/MatchingCard";

const Style = {
  background: "#79D38A",
  color: "white",
};

const Grants = () => {
  
  const [useGrantAmount, setGrantAmount] = useState(10000);
  const [goalArray, setGoalArray] = useState([26000, 15000, 16000, 18000]);
  const [contributionArray, setContributionArray] = useState([
    25383, 10495, 7987, 6608
  ]);
  const { Panel } = Collapse;

  function callback(key) {
    console.log(key);
  }

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
		console.log('called');
		const arr = goalArray;
		arr[index] = newGoal;
		console.log(arr);
		setGoalArray((oldarr) => [...arr]);
	};

	const changeCont = (index, newCont) => {
		if (newCont <= goalArray[index]) {
			console.log('called');
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

  const text1 = `
  Active Collective is an experimental quadratic voting algorithm governed by game theory mechanism that distributes matching fund equally toward collective good on maximum participation. This algorithm is not only meant to solve the Sybil attack problem but also provide different perspective on funding public goods.
`;

const text2 = `
  You should begin from 0 contributions and gradually increase the amount. Try to give variations on the values, what matters here is not only how close a project is to its goal but also total contributions across all projects.
`;


  return (
    <div className="bg-supadark-black" >
      <div style={{ maxWidth: "70%" }} className="pt-32 mx-auto  flex min-h-screen flex-col">
        <div className="w-4/5 mx-auto h-52 bg-supagreen-dark flex flex-col rounded-xl">
          <h1 className=" font-light text-xl pt-8 text-center">
            Fund Pool
          </h1>
          <h1 className="text-5xl text-center pt-2">${useGrantAmount}</h1>
          <div className="mx-auto max-w-md">
            <Button onClick={addGrant}>+</Button>{" "}
            <Button onClick={subGrant}>-</Button>
          </div>
        </div>
        <div className="w-4/5 mx-auto pt-10">
          <h1 className="text-white text-3xl font-cormorant">Active Collective Funding Demo</h1>
          <h1 className="text-gray-300 font-light">
            Thank you for trying Active Collective funding model, we are still working on the
            mechanics! It is an experimental concept but we would like you to try and give us
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
          <div className=" text-white font-cormorant text-3xl py-10 text-center">FAQ</div>
          <Collapse
        className=""
          defaultActiveKey={['1']}
          onChange={callback}
        >
          <Panel style={Style} header="What is Active Collective Funding" key="1">
            <div className="text-gray-300">{text1}</div>
            <div className="text-gray-300 pt-4">Unlike the Liberal Radicalism algorithm used by Gitcoin, this algorithm uses only currency as vote count rather than a mix of currency and identity because identity is no longer a source of truth, an individual could have multiple identities(Sybil Attack). In addition, since identity is mixed in the LR model, the outcome of vote is actually less democratic since a user with $1 could significantly affect the outcome because it calculates not just the voting cost but also the identity count. In our algorithm, we reverted back to the original quadratic voting mechanism where the more you pay, the more you vote. However, the outcome of the matching amount is governed by mathematical formula to prevent manipulations. The mathematical formula evaluates both project conditions and round performance to calculate the outcome.</div>
          </Panel>
          <Panel  style={Style} header="How should I test this?" key="2">
            <div className="text-white">{text2}
            <p className="font-bold pt-4">Try Scenario #1 : Domination</p>
            <p className="text-gray-300">Try having 1 project at maximum contribution and leave the others at 0-1000 contribution. You will see that the amount of fund will be distributed mostly for the dominating project. This scenario happens if the market is showing high level of bias and low variance in market share. For example, experimental topics such as social science or new green energy projects tend to have only few proofable concepts. Therefore, users might be voting highly toward few proofable projects.</p>
            <p className="font-bold">Try Scenario #2 : Altruism</p>
            <p  className="text-gray-300">Try having all projects reach their goals. You will see that 100% of the pool is being spent and the amount of fund distributed are equally based on their goal targets (acknowledging that every project has different size). This scenario happens if the market has low level bias and high variance in market share. Very often this behavior occurs on merit goods such as non-profits or educational projects where users tend to consider all projects have equally good effect on society.</p>
            <p className="font-bold">Try Scenario #3 : Cooperative Competition</p>
            <p  className="text-gray-300">Try to vary the amount of contributions to each projects. You will notice that the contribution performance of each project affect the other's matching amount. This algorithm governs the distribution and unlock only some percentage of the matching pool funds so that the only way to receive maximum amount of fund from the pool is through either scenario #1 or scenario #2. This scenario is the most common behavior we see in the market where there is medium level of bias and high variance in market share. Looking through Gitcoin grant history, this scenario will happen almost everytime.</p>
            <p className="pt-6">Have a look at this article for more information on different scenarios</p>
            <a href="https://axeldevara.medium.com/active-collective-funding-using-game-theory-to-fund-public-goods-54c92f6fd04e">Medium</a>
            <p className="pt-6">Have a look at the docs to learn how the round will be implemented</p>
            <a href="https://docs.supaheroes.fund/grant/active-collective">Docs</a>
            </div>
          </Panel>
        </Collapse>
        </div>
        
      </div>
    </div>
  );

};

export default Grants;
