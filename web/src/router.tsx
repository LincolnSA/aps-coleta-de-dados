import { Routes, Route, Navigate } from "react-router-dom";

import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import { NewFaq } from "./pages/NewFaq";
import { EditFaq } from "./pages/EditFaq";

const RouteApp = () => {
  const authenticated = localStorage.getItem("userToken");

  return (
    <Routes>
      {!authenticated ? (
        <>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/faqs/new" element={<NewFaq />} />
          <Route path="/faqs/:id" element={<EditFaq />} />
          <Route path="*" element={<Navigate replace to="/home" />} />
        </>
      )}
    </Routes>
  );
};

export { RouteApp };
