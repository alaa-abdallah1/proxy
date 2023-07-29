import cors from "cors"
import express from "express"
import {createProxyMiddleware} from "http-proxy-middleware"

const app = express()

app.use(cors())

const port = process.env.PORT || 8080

app.get("/*", (req, res, next) => {
  const target = req.headers["x-target-url"] || `http://localhost:${port}` // access the target URL on the server

  const options = {
    target, // target server to proxy
    changeOrigin: true, // changes the origin of the host header to the target URL
    pathRewrite: {
      "^/": "/", // rewrite the path "/" to "/"
    },
  }

  const apiProxy = createProxyMiddleware(options)

  apiProxy(req, res, next) // Call the proxy middleware
})

app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`)
})
