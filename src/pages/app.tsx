import React from "react"
import { TestDynamicApi } from "../modules/TestDynamicApi"
import { Router as MyRouter } from "@reach/router"

const Router = () => {
  return (
    <MyRouter>
      <TestDynamicApi path="/app/test-dynamic-api/:results" />
    </MyRouter>
  )
}

export default Router
