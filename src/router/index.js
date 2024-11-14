import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/Loading";
import Layout from "../layout/Layout";

const Home = lazy(() => import("../page/home"));
const List = lazy(() => import("../page/list"));
const Record = lazy(() => import("../page/record"));

const Mypage = lazy(() => import("../page/mypage"));

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },

      {
        path: "/list",
        element: (
          <Suspense fallback={<Loading />}>
            <List />
          </Suspense>
        ),
      },

      {
        path: "/record",
        element: (
          <Suspense fallback={<Loading />}>
            <Record />
          </Suspense>
        ),
      },
      {
        path: "/mypage",
        element: (
          <Suspense fallback={<Loading />}>
            <Mypage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
