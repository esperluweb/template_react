import Layout from "../../layout/Layout";

import Hero from "../../components/Hero";

export const routesArray = [
    {
        path: "",
        element: <Layout/>,
        children: [
            {
            path: "/",
            element: <Hero/>,
            }
        ]
    },
];