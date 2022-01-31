import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import { notification } from "antd";
import { useParams } from "react-router-dom";
import rewardABI from "../../abi/RewardManager.json";
import campaignABI from "../../abi/StandardCampaignStrategy.json";

const Certificate = () => {
  const { Moralis } = useMoralis();
  const params = useParams();
  const [selection, setSelection] = useState(0);

  const readOptions = {
	contractAddress: params.campaignId,
	functionName: "rewardManager",
	abi: campaignABI
  };

  async function getRewardManager() {
    const res = await Moralis.executeFunction(readOptions);
    console.log("reward::::", res);
    return res;
  }

  const openNotification = ({ message, description }) => {
    notification.open({
      placement: "bottomRight",
      message,
      description,
    });
  };

  const dispute = async () => {
    console.log(params.campaignId);
    const rewardAddress = await getRewardManager();
    const tx = await Moralis.executeFunction({
      awaitReceipt: false,
      contractAddress: rewardAddress,
      functionName: "vote",
      abi: rewardABI,
      params: {
        id: selection,
      },
    });
    console.log(tx);
    tx.on("transactionHash", (hash) => {
      openNotification({
        message: "🔊 New Transaction",
        description: `${hash}`,
      });
      console.log("🔊 New Transaction", hash);
    });
    tx.on("receipt", (receipt) => {
      console.log(receipt);
    });
  };

  return (
    <div>
      <div className="h-60 text-3xl ">
        <h1 className="text-white">Select Token</h1>
        <div className="flex mb-10 items-center justify-between w-full">
          <video
            onClick={() => setSelection(0)}
            className={
              selection == 0
                ? "p-4 border-8 border-supagreen-dark cursor-pointer"
                : "p-4 border border-supagreen-dark cursor-pointer"
            }
            width="320"
            height="320"
            loop
            autoPlay
          >
            <source
              src="https://ipfs.moralis.io:2053/ipfs/QmNbqLeV9cZrBhhkFyESD5sWXhGfPfaPQUT4LfmXz6VETQ/SUPABADGE%20T1.mp4"
              type="video/mp4"
            />
          </video>
          <video
            onClick={() => setSelection(1)}
            className={
              selection == 1
                ? "p-4 border-8 border-supagreen-dark cursor-pointer"
                : "p-4 border border-supagreen-dark cursor-pointer"
            }
            width="320"
            height="320"
            loop
            autoPlay
          >
            <source
              src="https://gateway.ipfs.io/ipfs/QmZ79sZSrYMcm7GyQxr169uJTQWWDiFjGPX247AKbR4ps1/2.mp4"
              type="video/mp4"
            />
          </video>
          <video
            onClick={() => setSelection(2)}
            className={
              selection == 2
                ? "p-4 border-8 border-supagreen-dark cursor-pointer"
                : "p-4 border border-supagreen-dark cursor-pointer"
            }
            width="320"
            height="320"
            loop
            autoPlay
          >
            <source
              src="https://gateway.ipfs.io/ipfs/QmZ79sZSrYMcm7GyQxr169uJTQWWDiFjGPX247AKbR4ps1/3.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <button
          className="text-white border mb-20 border-supagreen-dark w-full text-lg py-6 hover:bg-supagreen-dark hover:text-supadark-black"
          onClick={async () => {
            await dispute();
          }}
        >
          Vote Fraud
        </button>
      </div>
    </div>
  );
};

export default Certificate;
