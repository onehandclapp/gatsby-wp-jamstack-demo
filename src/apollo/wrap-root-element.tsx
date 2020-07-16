// @ts-ignore
import React from "react"
import { ApolloProvider } from "@apollo/react-hooks"
import { client } from "./client"

// const Provider: React.FC<ApolloProviderProps<any>> = ApolloProvider
// @ts-ignore
export const wrapRootElement = ({ element }) => (  <ApolloProvider client={client}>{element}</ApolloProvider>)
