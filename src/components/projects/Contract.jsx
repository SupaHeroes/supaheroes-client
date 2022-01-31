import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Skeleton } from "antd";
import { useMoralis } from "react-moralis";
import campaignABI from "../../abi/StandardCampaignStrategy.json";
import axios from "axios";
import { useVerifyMetadata } from "../../hooks/useVerifyMetadata";

const Contract = () => {
  const { account, Moralis, isInitialized, chainId } = useMoralis();
  const { verifyMetadata } = useVerifyMetadata();
  const [Nfts, setNfts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const params = useParams();

  const readOptions = {
    contractAddress: params.campaignId,
    functionName: "rewardManager",
    abi: campaignABI,
  };

  const getRewardManager = async () => {
    const res = await Moralis.executeFunction(readOptions);
    console.log("reward::::", res);
    return res;
  };

  const getTokenAddress = async () => {
    setLoading(true);
    const reward = await getRewardManager();

    const options = { address: reward, chain: chainId };
    const nfts = await Moralis.Web3API.token.getNFTOwners(options);

    setNfts(nfts.result);
    setLoading(false);
    console.log("NFTS:::::", Nfts);
  };

  useEffect(() => {
    if (isInitialized) {
      getTokenAddress();
    }
  }, [isInitialized]);

  return (
    <div className="flex flex-wrap">
      {isLoading ? (
        <Skeleton></Skeleton>
      ) : (
        Nfts.map((v, i) => {
          const a = verifyMetadata(v);
		  console.log("v is ::::",v);
		  console.log("a is ::::",a);
          return (
            <div className="mr-3" key={i}>
              <video
                className="p-4 border border-supagreen-dark cursor-pointer"
                width="320"
                height="320"
                loop
                autoPlay
              >
                <source
                  src={a.image}
                  type="video/mp4"
                />
              </video>
			  <h1 className="text-white">{v.name}</h1>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Contract;
