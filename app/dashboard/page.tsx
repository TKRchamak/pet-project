import { auth } from "@/auth";
import React from "react";

const Dashboard = () => {
  // const authData = async () => {
  //   const data = await auth();
  //   if (!data?.user) return <div>user data not given</div>;
  //   return <pre>{JSON.stringify(data?.user, null, 2)}</pre>;
  // };

  return <div>{"Dashboard"}</div>;
};

export default Dashboard;
