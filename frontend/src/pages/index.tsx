import React from "react";
import { useRoutes } from "react-router-dom";
import { userRoutes } from "../routes";

const Pages = ({ userToken }: any) => {
  return (
    <React.Suspense fallback={<p> Loading ....</p>}>
      {useRoutes(userRoutes(userToken))}
    </React.Suspense>
  );
};
export default Pages;
