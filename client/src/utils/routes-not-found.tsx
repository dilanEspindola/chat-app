import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { PageNotFound } from "@/components/page-not-found";

interface Props {
  children: React.ReactNode;
}

export const RoutesNotFound: FC<Props> = ({ children }) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
