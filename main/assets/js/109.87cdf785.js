(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{563:function(e,t,o){"use strict";o.r(t);var a=o(1),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"submitting-a-proposal"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#submitting-a-proposal"}},[e._v("#")]),e._v(" Submitting a Proposal")]),e._v(" "),o("p",[e._v("If you have a final draft of your proposal ready to submit, you may want to push your proposal live on the testnet first. These are the three primary steps to getting your proposal live on-chain.")]),e._v(" "),o("p",[e._v("Interacting with the Cosmos Hub via the command line in order to run queries or submit proposals has several prerequisites:")]),e._v(" "),o("ul",[o("li",[e._v("You will need to compile "),o("a",{attrs:{href:"https://hub.cosmos.network/main/getting-started/installation.html",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("gaiad")]),o("OutboundLink")],1),e._v(" from source into a binary file executable by your operating system eg. MacOS, Windows, Linux")]),e._v(" "),o("li",[e._v("You will need to indicate which chain you are querying, and currently this is "),o("code",[e._v("--chain-id cosmoshub-4")])]),e._v(" "),o("li",[e._v("You will need to connect to a full node. You can find a list of available Cosmos Hub endpoints under the "),o("a",{attrs:{href:"https://github.com/cosmos/chain-registry/blob/master/cosmoshub/chain.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("API section"),o("OutboundLink")],1),e._v(" in the "),o("a",{attrs:{href:"https://github.com/cosmos/chain-registry",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chain Registry"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("li",[e._v("More info is in the Walkthrough Example section.")])]),e._v(" "),o("p",[e._v("Running a full node can be difficult for those not technically-inclined, so you may choose to use a third-party's full node. In this case, the primary security risk is that of censorship: it's the single place where you have a single gateway to the network, and any messages submitted through an untrusted node could be censored.")]),e._v(" "),o("h2",{attrs:{id:"hosting-supplementary-materials"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hosting-supplementary-materials"}},[e._v("#")]),e._v(" Hosting supplementary materials")]),e._v(" "),o("p",[e._v("In general we try to minimize the amount of data pushed to the blockchain. Hence, detailed documentation about a proposal is usually hosted on a separate censorship resistant data-hosting platform, like IPFS.")]),e._v(" "),o("p",[e._v("Once you have drafted your proposal, ideally as a Markdown file, you\ncan upload it to the IPFS network:")]),e._v(" "),o("ol",[o("li",[e._v("By "),o("a",{attrs:{href:"https://ipfs.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("running an IPFS node and the IPFS software"),o("OutboundLink")],1),e._v(", or")]),e._v(" "),o("li",[e._v("By using a service such as "),o("a",{attrs:{href:"https://pinata.cloud",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://pinata.cloud"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v('Ensure that you "pin" the file so that it continues to be available on the network. You should get a URL like this: https://ipfs.io/ipfs/QmbkQNtCAdR1CNbFE8ujub2jcpwUcmSRpSCg8gVWrTHSWD')]),e._v(" "),o("p",[e._v("The value "),o("code",[e._v("QmbkQNtCAdR1CNbFE8ujub2jcpwUcmSRpSCg8gVWrTHSWD")]),e._v(" is called the "),o("code",[e._v("CID")]),e._v(" of your file - it is effectively the file's hash.")]),e._v(" "),o("p",[e._v("If you uploaded a markdown file, you can use the IPFS markdown viewer to render the document for better viewing. Links for the markdown viewer look like "),o("code",[e._v("https://ipfs.io/ipfs/QmTkzDwWqPbnAh5YiV5VwcTLnGdwSNsNTn2aDxdXBFca7D/example#/ipfs/<CID>")]),e._v(", where "),o("code",[e._v("<CID>")]),e._v(" is your CID. For instance the link above would be: https://ipfs.io/ipfs/QmTkzDwWqPbnAh5YiV5VwcTLnGdwSNsNTn2aDxdXBFca7D/example#/ipfs/QmbkQNtCAdR1CNbFE8ujub2jcpwUcmSRpSCg8gVWrTHSWD")]),e._v(" "),o("p",[e._v("Share the URL with others and verify that your file is publicly accessible.")]),e._v(" "),o("p",[e._v("The reason we use IPFS is that it is a decentralized means of storage, making it resistant to censorship or single points of failure. This increases the likelihood that the file will remain available in the future.")]),e._v(" "),o("h2",{attrs:{id:"formatting-the-json-file-for-the-governance-proposal"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#formatting-the-json-file-for-the-governance-proposal"}},[e._v("#")]),e._v(" Formatting the JSON file for the governance proposal")]),e._v(" "),o("p",[e._v("Prior to sending the transaction that submits your proposal on-chain, you must create a JSON file. This file will contain the information that will be stored on-chain as the governance proposal. Begin by creating a new text (.txt) file to enter this information. Use "),o("RouterLink",{attrs:{to:"/governance/best-practices.html"}},[e._v("these best practices")]),e._v(" as a guide for the contents of your proposal. When you're done, save the file as a .json file.")],1),e._v(" "),o("p",[e._v("Each proposal type is unique in how the JSON should be formatted.\nSee the relevant section for the type of proposal you are drafting:")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/governance/formatting.html#text"}},[e._v("Text Proposals")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/governance/formatting.html#community-pool-spend"}},[e._v("Community Pool Spend Proposals")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/governance/formatting.html#parameter-change"}},[e._v("Parameter Change Proposals")])],1)]),e._v(" "),o("p",[e._v("Once on-chain, most people will rely upon block explorers to interpret this information with a graphical user interface (GUI).")]),e._v(" "),o("h2",{attrs:{id:"sending-the-transaction-that-submits-your-governance-proposal"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sending-the-transaction-that-submits-your-governance-proposal"}},[e._v("#")]),e._v(" Sending the transaction that submits your governance proposal")]),e._v(" "),o("p",[e._v("For information on how to use gaiad (the command line interface) to submit an on-chain proposal through the governance module, please refer to the "),o("RouterLink",{attrs:{to:"/hub-tutorials/gaiad.html"}},[e._v("gaiad resource")]),e._v(" for the Cosmos Hub documentation.")],1),e._v(" "),o("h3",{attrs:{id:"walkthrough-example"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#walkthrough-example"}},[e._v("#")]),e._v(" Walkthrough example")]),e._v(" "),o("p",[e._v("This is the generic command format for using gaiad (the command-line interface) to submit your proposal on-chain:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Z2FpYWQgdHggZ292IHN1Ym1pdC1wcm9wb3NhbCAmbHQ7cHJvcG9zYWwgdHlwZSZndDtcCiAgIC0tICZsdDtqc29uIGZpbGUmZ3Q7IFwKICAgLS1mcm9tICZsdDtzdWJtaXR0ZXIgYWRkcmVzcyZndDsgXAogICAtLWRlcG9zaXQgJmx0O2RlcG9zaXQgaW4gdWF0b20mZ3Q7IFwKICAgLS1jaGFpbi1pZCAmbHQ7Y2hhaW4gaWQmZ3Q7IFwKICAgLS1nYXMgJmx0O21heCBnYXMgYWxsb2NhdGVkJmd0OyBcCiAgIC0tZmVlcyAmbHQ7ZmVlcyBhbGxvY2F0ZWQmZ3Q7IFwKICAgLS1ub2RlICZsdDtub2RlIGFkZHJlc3MmZ3Q7IFwKCg=="}}),e._v(" "),o("p",[e._v("A specific example is given here:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Z2FpYWQgdHggZ292IHN1Ym1pdC1wcm9wb3NhbCBjb21tdW5pdHktcG9vbC1zcGVuZFwKICAgLS1+L2NvbW11bml0eV9zcGVuZF9wcm9wb3NhbC5qc29uIFwKICAgLS1mcm9tIGh5cGhhLWRldi13YWxsZXQgXAogICAtLWRlcG9zaXQgMTAwMDAwMHVhdG9tIFwKICAgLS1jaGFpbi1pZCBjb3Ntb3NodWItNCBcCiAgIC0tZ2FzIDUwMDAwMCBcCiAgIC0tZmVlcyA3NTAwdWF0b20gXAogICAtLW5vZGUgaHR0cHM6Ly9ycGMuY29zbW9zLm5ldHdvcms6NDQzIFwKCg=="}}),e._v(" "),o("p",[e._v("If "),o("code",[e._v("<proposal type>")]),e._v(" is left blank, the type will be a Text proposal. Otherwise, it can be set to "),o("code",[e._v("param-change")]),e._v(" or "),o("code",[e._v("community-pool-spend")]),e._v(". Use "),o("code",[e._v("--help")]),e._v(" to get more info from the tool.")]),e._v(" "),o("ol",[o("li",[o("code",[e._v("gaiad")]),e._v(" is the command-line interface client that is used to send transactions and query the Cosmos Hub.")]),e._v(" "),o("li",[o("code",[e._v("tx gov submit-proposal community-pool-spend")]),e._v(" indicates that the transaction is submitting a community pool spend proposal.")]),e._v(" "),o("li",[o("code",[e._v("--~/community_spend_proposal.json")]),e._v(" indicates the file containing the proposal details.")]),e._v(" "),o("li",[o("code",[e._v("--from hypha-dev-wallet")]),e._v(" is the account key that pays the transaction fee and deposit amount. This account key must be already saved in the keyring on your device and it must be an address you control.")]),e._v(" "),o("li",[o("code",[e._v("--gas 500000")]),e._v(" is the maximum amount of gas permitted to be used to process the transaction.\n"),o("ul",[o("li",[e._v("The more content there is in the description of your proposal, the more gas your transaction will consume")]),e._v(" "),o("li",[e._v("If this number isn't high enough and there isn't enough gas to process your transaction, the transaction will fail.")]),e._v(" "),o("li",[e._v("The transaction will only use the amount of gas needed to process the transaction.")])])]),e._v(" "),o("li",[o("code",[e._v("--fees")]),e._v(" is a flat-rate incentive for a validator to process your transaction.\n"),o("ul",[o("li",[e._v("The network still accepts zero fees, but many nodes will not transmit your transaction to the network without a minimum fee.")]),e._v(" "),o("li",[e._v("Many nodes (including the Figment node) use a minimum fee to disincentivize transaction spamming.")]),e._v(" "),o("li",[e._v("7500uatom is equal to 0.0075 ATOM.")])])]),e._v(" "),o("li",[o("code",[e._v("--chain-id cosmoshub-4")]),e._v(" is Cosmos Hub 4. For current and past chain-id's, please look at the "),o("a",{attrs:{href:"https://github.com/cosmos/mainnet",target:"_blank",rel:"noopener noreferrer"}},[e._v("cosmos/mainnet resource"),o("OutboundLink")],1),e._v(".\n"),o("ul",[o("li",[e._v("The testnet chain ID is "),o("code",[e._v("theta-testnet-001")]),e._v(". For current and past testnet information, please look at the "),o("a",{attrs:{href:"https://github.com/cosmos/testnets",target:"_blank",rel:"noopener noreferrer"}},[e._v("testnet repository"),o("OutboundLink")],1),e._v(".")])])]),e._v(" "),o("li",[o("code",[e._v("--node https://rpc.cosmos.network:443")]),e._v(" is using an established node to send the transaction to the Cosmos Hub 4 network. For available nodes, please look at the "),o("a",{attrs:{href:"https://github.com/cosmos/chain-registry/blob/master/cosmoshub/chain.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chain Registry"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("p",[o("strong",[e._v("Note")]),e._v(": be careful what you use for "),o("code",[e._v("--fees")]),e._v(". A mistake here could result in spending hundreds or thousands of ATOMs accidentally, which cannot be recovered.")]),e._v(" "),o("h3",{attrs:{id:"verifying-your-transaction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#verifying-your-transaction"}},[e._v("#")]),e._v(" Verifying your transaction")]),e._v(" "),o("p",[e._v("After posting your transaction, your command line interface (gaiad) will provide you with the transaction's hash, which you can either query using gaiad or by searching the transaction hash using "),o("a",{attrs:{href:"https://www.mintscan.io/cosmos/txs/0506447AE8C7495DE970736474451CF23536DF8EA837FAF1CF6286565589AB57",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mintscan"),o("OutboundLink")],1),e._v(". The hash should look something like this: "),o("code",[e._v("0506447AE8C7495DE970736474451CF23536DF8EA837FAF1CF6286565589AB57")])]),e._v(" "),o("h3",{attrs:{id:"troubleshooting-a-failed-transaction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-a-failed-transaction"}},[e._v("#")]),e._v(" Troubleshooting a failed transaction")]),e._v(" "),o("p",[e._v("There are a number of reasons why a transaction may fail. Here are two examples:")]),e._v(" "),o("ol",[o("li",[o("p",[o("strong",[e._v("Running out of gas")]),e._v(" - The more data there is in a transaction, the more gas it will need to be processed. If you don't specify enough gas, the transaction will fail.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Incorrect denomination")]),e._v(" - You may have specified an amount in 'utom' or 'atom' instead of 'uatom', causing the transaction to fail.")])])]),e._v(" "),o("p",[e._v("If you encounter a problem, try to troubleshoot it first, and then ask for help on the Cosmos Hub forum: "),o("a",{attrs:{href:"https://forum.cosmos.network",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://forum.cosmos.network"),o("OutboundLink")],1),e._v(". We can learn from failed attempts and use them to improve upon this guide.")]),e._v(" "),o("h3",{attrs:{id:"depositing-funds-after-a-proposal-has-been-submitted"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#depositing-funds-after-a-proposal-has-been-submitted"}},[e._v("#")]),e._v(" Depositing funds after a proposal has been submitted")]),e._v(" "),o("p",[e._v("Sometimes a proposal is submitted without having the minimum token amount deposited yet. In these cases you would want to be able to deposit more tokens to get the proposal into the voting stage. In order to deposit tokens, you'll need to know what your proposal ID is after you've submitted your proposal. You can query all proposals by the following command:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Z2FpYWQgcSBnb3YgcHJvcG9zYWxzCg=="}}),e._v(" "),o("p",[e._v("If there are a lot of proposals on the chain already, you can also filter by your own address. For the proposal above, that would be:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Z2FpYWQgcSBnb3YgcHJvcG9zYWxzIC0tZGVwb3NpdG9yIGNvc21vczFoeHY3bXB6dHZsbjQ1ZWdoZXo2ZXZ3MnlwY3c0dmptc21yOGNkeAo="}}),e._v(" "),o("p",[e._v("Once you have the proposal ID, this is the command to deposit extra tokens:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Z2FpYWQgdHggZ292IGRlcG9zaXQgJmx0O3Byb3Bvc2FsLWlkJmd0OyAmbHQ7ZGVwb3NpdCZndDsgLS1mcm9tICZsdDtuYW1lJmd0Owo="}}),e._v(" "),o("p",[e._v("In our case above, the "),o("code",[e._v("<proposal-id>")]),e._v(" would be 59 as queried earlier.\nThe "),o("code",[e._v("<deposit>")]),e._v(" is written as "),o("code",[e._v("500000uatom")]),e._v(", just like the example above.")]),e._v(" "),o("h3",{attrs:{id:"submitting-your-proposal-to-the-testnet"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#submitting-your-proposal-to-the-testnet"}},[e._v("#")]),e._v(" Submitting your proposal to the testnet")]),e._v(" "),o("p",[e._v("Submitting to the testnet is identical to mainnet submissions aside from a few changes:")]),e._v(" "),o("ol",[o("li",[e._v("The chain-id is "),o("code",[e._v("theta-testnet-001")]),e._v(".")]),e._v(" "),o("li",[e._v("The list of usable endpoints can be found "),o("a",{attrs:{href:"https://github.com/cosmos/testnets/tree/master/public#readme",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("li",[e._v("You will need testnet tokens, not ATOM. There is a faucet available in the Developer "),o("a",{attrs:{href:"https://discord.gg/W8trcGV",target:"_blank",rel:"noopener noreferrer"}},[e._v("Discord"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("p",[e._v("You may want to submit your proposal to the testnet chain before the mainnet for a number of reasons:")]),e._v(" "),o("ol",[o("li",[e._v("To see what the proposal description will look like.")]),e._v(" "),o("li",[e._v("To signal that your proposal is about to go live on the mainnet.")]),e._v(" "),o("li",[e._v("To share what the proposal will look like in advance with stakeholders.")]),e._v(" "),o("li",[e._v("To test the functionality of the governance features.")])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);