(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{552:function(e,t,a){"use strict";a.r(t);var o=a(1),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"validator-security"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validator-security"}},[e._v("#")]),e._v(" Validator Security")]),e._v(" "),a("p",[e._v("Each validator candidate is encouraged to run its operations independently, as diverse setups increase the resilience of the network. Validator candidates should commence their setup phase now in order to be on time for launch.")]),e._v(" "),a("h2",{attrs:{id:"key-management-hsm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-management-hsm"}},[e._v("#")]),e._v(" Key Management - HSM")]),e._v(" "),a("p",[e._v("It is mission critical that an attacker cannot steal a validator's key. If this is possible, it puts the entire stake delegated to the compromised validator at risk. Hardware security modules are an important strategy for mitigating this risk.")]),e._v(" "),a("p",[e._v("HSM modules must support "),a("code",[e._v("ed25519")]),e._v(" signatures for the hub. The YubiHSM2 supports "),a("code",[e._v("ed25519")]),e._v(" and "),a("a",{attrs:{href:"https://github.com/iqlusioninc/yubihsm.rs",target:"_blank",rel:"noopener noreferrer"}},[e._v("this yubikey library is available"),a("OutboundLink")],1),e._v(". The YubiHSM can protect a private key but cannot ensure in a secure setting that it won't sign the same block twice.")]),e._v(" "),a("p",[e._v("The CometBFT team is also working on extending our Ledger Nano S application to support validator signing. This app can store recent blocks and mitigate double signing attacks.")]),e._v(" "),a("p",[e._v("We will update this page when more key storage solutions become available.")]),e._v(" "),a("h2",{attrs:{id:"sentry-nodes-ddos-protection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sentry-nodes-ddos-protection"}},[e._v("#")]),e._v(" Sentry Nodes (DDOS Protection)")]),e._v(" "),a("p",[e._v("Validators are responsible for ensuring that the network can sustain denial of service attacks.")]),e._v(" "),a("p",[e._v("One recommended way to mitigate these risks is for validators to carefully structure their network topology in a so-called sentry node architecture.")]),e._v(" "),a("p",[e._v("Validator nodes should only connect to full-nodes they trust because they operate them themselves or are run by other validators they know socially. A validator node will typically run in a data center. Most data centers provide direct links the networks of major cloud providers. The validator can use those links to connect to sentry nodes in the cloud. This shifts the burden of denial-of-service from the validator's node directly to its sentry nodes, and may require new sentry nodes be spun up or activated to mitigate attacks on existing ones.")]),e._v(" "),a("p",[e._v("Sentry nodes can be quickly spun up or change their IP addresses. Because the links to the sentry nodes are in private IP space, an internet based attacked cannot disturb them directly. This will ensure validator block proposals and votes always make it to the rest of the network.")]),e._v(" "),a("p",[e._v("To setup your sentry node architecture you can follow the instructions below:")]),e._v(" "),a("p",[e._v("Validators nodes should edit their config.toml:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBDb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiBub2RlcyB0byBrZWVwIHBlcnNpc3RlbnQgY29ubmVjdGlvbnMgdG8KIyBEbyBub3QgYWRkIHByaXZhdGUgcGVlcnMgdG8gdGhpcyBsaXN0IGlmIHlvdSBkb24ndCB3YW50IHRoZW0gYWR2ZXJ0aXNlZApwZXJzaXN0ZW50X3BlZXJzID1bbGlzdCBvZiBzZW50cnkgbm9kZXNdCgojIFNldCB0cnVlIHRvIGVuYWJsZSB0aGUgcGVlci1leGNoYW5nZSByZWFjdG9yCnBleCA9IGZhbHNlCg=="}}),e._v(" "),a("p",[e._v("Sentry Nodes should edit their config.toml:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBDb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiBwZWVyIElEcyB0byBrZWVwIHByaXZhdGUgKHdpbGwgbm90IGJlIGdvc3NpcGVkIHRvIG90aGVyIHBlZXJzKQojIEV4YW1wbGUgSUQ6IDNlMTZhZjBjZWFkMjc5NzllMWZjM2RhYzU3ZDAzZGYzYzdhNzdhY2NAMy44Ny4xNzkuMjM1OjI2NjU2Cgpwcml2YXRlX3BlZXJfaWRzID0gJnF1b3Q7bm9kZV9pZHNfb2ZfcHJpdmF0ZV9wZWVycyZxdW90Owo="}}),e._v(" "),a("h2",{attrs:{id:"environment-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#environment-variables"}},[e._v("#")]),e._v(" Environment Variables")]),e._v(" "),a("p",[e._v("By default, uppercase environment variables with the following prefixes will replace lowercase command-line flags:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("GA")]),e._v(" (for Gaia flags)")]),e._v(" "),a("li",[a("code",[e._v("TM")]),e._v(" (for Tendermint/CometBFT flags)")]),e._v(" "),a("li",[a("code",[e._v("BC")]),e._v(" (for democli or basecli flags)")])]),e._v(" "),a("p",[e._v("For example, the environment variable "),a("code",[e._v("GA_CHAIN_ID")]),e._v(" will map to the command line flag "),a("code",[e._v("--chain-id")]),e._v(". Note that while explicit command-line flags will take precedence over environment variables, environment variables will take precedence over any of your configuration files. For this reason, it's imperative that you lock down your environment such that any critical parameters are defined as flags on the CLI or prevent modification of any environment variables.")])],1)}),[],!1,null,null,null);t.default=n.exports}}]);