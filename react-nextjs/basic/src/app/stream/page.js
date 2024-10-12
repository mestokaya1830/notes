import { Suspense } from "react"

import Test1 from "../test1/page"
import Test2 from "../test2/page"

export default function Stream() {
  return (
    <>
      <h1>Stream Rendering is Like A Lazy Loading Test with Suspense and Without Suspense</h1>
      <Suspense fallback="Loading">
        <Test1 />
      </Suspense>
      <Suspense fallback="Loading">
        <Test2 />
      </Suspense>


      {/* <Test1 />
      <Test2 /> */}
    </>
  )
}
