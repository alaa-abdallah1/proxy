# Proxy Server
This Proxy Server is a simple proxy server that can be used to forward HTTP requests to a target server. The proxy server is designed to receive a header with the request called **x-target-url**, which specifies the target server to proxy to.

## Usage
To use the proxy server, send an HTTP request to the proxy server with the **x-target-url** header


```
Method: / HTTP/1.1
Host: http://localhost:8080 OR https://proxy-7fuy.onrender.com
x-target-url: http://www.example.com
```

#### Axios Example
```

const axios = require('axios');

const url = 'http://localhost:8080'; // or https://proxy-7fuy.onrender.com
const targetUrl = 'http://www.example.com';

axios({
  method: 'get',
  url: url,
  headers: {
    'x-target-url': targetUrl
  }
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

```

This request will forward the request to http://www.example.com and return the response to the client.

You can use the proxy server locally by running the server on your own machine, or you can use the online version hosted at https://proxy-7fuy.onrender.com.

## Installation
To install the proxy server locally,

- you can clone this repository ```git clone https://github.com/alaa-abdallah1/proxy.git```
- got to the proxy directory ```cd proxy```
- install the necessary dependencies using the following commands ```npm install```
- run the server ```npm run start```
- The server will be available at http://localhost:8080.

## Contributing
If you would like to contribute to this project, feel free to submit a pull request or open an issue with your suggestions or bug reports.

## Code Owner 
This project was created by [Alaa Abdallah](https://github.com/alaa-abdallah1) 
