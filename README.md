
![alienswap logo](https://lh3.googleusercontent.com/-pdw6-EhB-qc2oBaY1vc5iXIfkge-5O1tbQpCrpW_E5kiCLToy09c4aJ6OForg0VMyawbNGQ4pW5jVvH8MTufbDO7Gjpmaa1d6sYbyjJI1L0aMqEXapDm5fhT9NAr7i5LcwSF6r91w=w2400)
# ALIENSWAP WEB 3.0 NFT MARKETPLACE

This project was created with Reactjs and thirdweb. 
It is a fairly simple web app, the main purpose is experimintation with Web3.0.

## How it works

The web app pulls NFT data from the [opensea.io](https://opensea.io) API. ([Opensea.io NFT API DOCS](https://docs.opensea.io/reference/api-overview))

[thirdweb.com](https://www.thirdweb.com)

### 1. Create/Mint NFT Collection on Thirdweb
An NFT Collection is a group of NFTs that are grouped together. My NFT Collection titled "Aliens" was minted on Thirdweb using some Photoshop Art I had created a while ago.

### 2. Set up react app and make Opensea.io API Call  (App.js)

```
const openseaData = await axios.get(
        'https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=0xb9E9092dE1de2fc5d4433c3676730CCED3d9DA07&order_direction=asc'
      )

```
The above code snippet gets the NFT Collection data. the "contract_address" refers to the address of the NFT collection. Changing the address in this API Call would change the data displayed within this app.

To view a different NFT collection within the app, replace the contract address with the address of your desired NFT collection.

### 3. Pass data into Components
After following the steps above, it is just a matter of taking the data and formatting it correctly within components in the app.

My appp has a preview section, and below it a list section that contains all the othe NFTs within the collection. The user can select each NFT to view the information associated with the token.


## Technologies Used
![thirdweb](https://thirdweb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthirdweb.eaedf298.png&w=48&q=90)
Thirdweb was used to create an NFT Collection using the Ethereum blockchain.

![metamask](https://metamask.io/images/mm-logo.svg)
Metamask wallet was used to store the collection and Ethereum on the rinkeby test network.

<img src="https://opensea.io/static/images/logos/opensea-white.svg" alt="opensea" width="48">
OpenSea is an NFT marketplace. In this project we use the OpenSea API to gather information on the NFT collection.

![ethereum](https://ethereum.org/static/a110735dade3f354a46fc2446cd52476/db4de/eth-home-icon.webp)
The NFT project was created on the Etheruem blockchain using a test network called Rinkeby.

![reactjs](https://reactjsexample.com/assets/favicon.png)
The web app was built with reactjs.

<img src="https://miro.medium.com/max/1140/0*pxb9-4jdzxSp1K5Y.png" alt="htmlcss" width="100">
HTML and CSS were used. (Obviously.)





