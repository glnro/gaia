(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{590:function(e,t,a){"use strict";a.r(t);var n=a(1),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"mint-subspace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mint-subspace"}},[e._v("#")]),e._v(" "),a("code",[e._v("mint")]),e._v(" subspace")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("mint")]),e._v(" module is responsible for enabling the Cosmos Hub to have a flexible inflation rate that depends upon a bonded stake ratio target. It has the following parameters")]),e._v(" "),a("table",[a("tr",[a("th",[e._v("Key")]),e._v(" "),a("th",[e._v("Value")])]),e._v(" "),e._l(e.$themeConfig.currentParameters.mint,(function(t,n){return a("tr",[a("td",[a("a",{attrs:{href:"#"+n}},[a("code",[e._v(e._s(n))])])]),e._v(" "),a("td",[a("code",[e._v(e._s(t))])])])}))],2),e._v(" "),a("p",[e._v("The "),a("code",[e._v("mint")]),e._v(" module was designed to allow for a flexible inflation rate determined by market demand targeting a particular bonded-stake ratio, and effect a balance between market liquidity and staked supply.")]),e._v(" "),a("p",[e._v("In order to best determine the appropriate market rate for inflation rewards, a moving change rate is used. The moving change rate mechanism ensures that if the % bonded is either over or under the goal %-bonded, the inflation rate will adjust to further incentivize or disincentivize being bonded, respectively. Setting the goal %-bonded at less than 100% encourages the network to maintain some non-staked tokens in order to help provide some liquidity.")]),e._v(" "),a("p",[e._v("It can be broken down in the following way:")]),e._v(" "),a("ul",[a("li",[e._v("If the inflation rate is below the goal %-bonded the inflation rate will increase until a maximum value is reached")]),e._v(" "),a("li",[e._v("If the goal % bonded (67% in Cosmos-Hub) is maintained, then the inflation rate will stay constant")]),e._v(" "),a("li",[e._v("If the inflation rate is above the goal %-bonded the inflation rate will decrease until a minimum value is reached")])]),e._v(" "),a("h2",{attrs:{id:"governance-notes-on-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#governance-notes-on-parameters"}},[e._v("#")]),e._v(" Governance notes on parameters")]),e._v(" "),a("h3",{attrs:{id:"mintdenom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mintdenom"}},[e._v("#")]),e._v(" "),a("code",[e._v("MintDenom")])]),e._v(" "),a("p",[a("strong",[e._v("Type of asset/coin that the Cosmos Hub mints.")])]),e._v(" "),a("ul",[a("li",[e._v("on-chain value "),a("code",[e._v(e._s(e.$themeConfig.currentParameters.mint.MintDenom))])]),e._v(" "),a("li",[a("code",[e._v("cosmoshub-4")]),e._v(" default: "),a("code",[e._v("uatom")])]),e._v(" "),a("li",[a("code",[e._v("cosmoshub-3")]),e._v(" default: "),a("code",[e._v("uatom")])])]),e._v(" "),a("p",[e._v("This is the type of asset (aka coin) that is being minted. The Cosmos Hub produces "),a("code",[e._v("uatom")]),e._v(", or micro-ATOM, where 1,000,000 uatom is equivalent to 1 ATOM.")]),e._v(" "),a("h4",{attrs:{id:"changing-the-mintdenom-parameter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changing-the-mintdenom-parameter"}},[e._v("#")]),e._v(" Changing the "),a("code",[e._v("MintDenom")]),e._v(" parameter")]),e._v(" "),a("p",[e._v("Changing the "),a("code",[e._v("MintDenom")]),e._v(" will change the asset that the Cosmos Hub mints from the ATOM. This is likely to disrupt the functionality of applications and the expectations of staking participants.")]),e._v(" "),a("h3",{attrs:{id:"inflationratechange"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inflationratechange"}},[e._v("#")]),e._v(" "),a("code",[e._v("InflationRateChange")])]),e._v(" "),a("p",[a("strong",[e._v("A factor of and limit to the speed at which the Cosmos Hub's inflation rate changes.")])]),e._v(" "),a("ul",[a("li",[e._v("on-chain value: "),a("code",[e._v(e._s(e.$themeConfig.currentParameters.mint.InflationRateChange))])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.mintscan.io/cosmos/proposals/48",target:"_blank",rel:"noopener noreferrer"}},[e._v("Proposal 48"),a("OutboundLink")],1),e._v(" change to "),a("code",[e._v("1.000000000000000000")])]),e._v(" "),a("li",[a("code",[e._v("cosmoshub-4")]),e._v(" default: "),a("code",[e._v("0.130000000000000000")])]),e._v(" "),a("li",[a("code",[e._v("cosmoshub-3")]),e._v(" default: "),a("code",[e._v("0.130000000000000000")])])]),e._v(" "),a("p",[e._v("Cosmos Hub's inflation rate can change faster or slower, depending on staking participation, and is limited to a minimum of 7% and maximum of 20%. The inflation rate cannot increase or decrease faster than 13% per year ("),a("code",[e._v("InflationRateChange")]),e._v("). The speed that the inflation rate changes depends upon two things:")]),e._v(" "),a("ol",[a("li",[e._v("how far away the "),a("em",[e._v("current staking participation ratio")]),e._v(" is from "),a("a",{attrs:{href:"#5-GoalBonded"}},[a("code",[e._v("GoalBonded")])]),e._v(" (67%)")]),e._v(" "),a("li",[e._v("the value of "),a("code",[e._v("InflationRateChange")]),e._v(", which is "),a("code",[e._v(e._s(e.$themeConfig.currentParameters.mint.InflationRateChange))])])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"aW5mbGF0aW9uUmF0ZUNoYW5nZVBlclllYXIgPSAoMSAtIGJvbmRlZFJhdGlvL3BhcmFtcy5Hb2FsQm9uZGVkKSAqIHBhcmFtcy5JbmZsYXRpb25SYXRlQ2hhbmdlCg=="}}),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/main/x/mint#begin-block",target:"_blank",rel:"noopener noreferrer"}},[e._v("The source for this information can be found here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("The inflation rate increases when under 67% of the token supply is staking, and it will take less time to reach the maximum of rate of 20% inflation if (for example) 30% of the token supply is staking than if 50% is staking.")]),e._v(" "),a("h4",{attrs:{id:"decreasing-the-value-of-inflationratechange"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decreasing-the-value-of-inflationratechange"}},[e._v("#")]),e._v(" Decreasing the value of "),a("code",[e._v("InflationRateChange")])]),e._v(" "),a("p",[e._v("Decreasing the value of the "),a("code",[e._v("InflationRateChange")]),e._v(" parameter will decrease both how fast the inflation rate changes and also the maximum speed that it can potentially change. It will then take longer for inflation to reach "),a("a",{attrs:{href:"#InflationMin"}},[a("code",[e._v("InflationMin")])]),e._v(" or "),a("a",{attrs:{href:"#InflationMax"}},[a("code",[e._v("InflationMax")])]),e._v(". This may lessen the response of staking behaviour to the incentive mechanism "),a("a",{attrs:{href:"#notes"}},[e._v("described in the notes below")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"increasing-the-value-of-inflationratechange"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#increasing-the-value-of-inflationratechange"}},[e._v("#")]),e._v(" Increasing the value of "),a("code",[e._v("InflationRateChange")])]),e._v(" "),a("p",[e._v("Increasing the value of the "),a("code",[e._v("InflationRateChange")]),e._v(" parameter will increase both how fast the inflation rate changes and also the maximum speed that it can potentially change. It will then take less time for inflation to reach "),a("a",{attrs:{href:"#InflationMin"}},[a("code",[e._v("InflationMin")])]),e._v(" or "),a("a",{attrs:{href:"#InflationMax"}},[a("code",[e._v("InflationMax")])]),e._v(". This may quicken the response of staking behaviour to the incentive mechanism "),a("a",{attrs:{href:"#notes"}},[e._v("described in the notes below")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[e._v("#")]),e._v(" Notes")]),e._v(" "),a("p",[a("strong",[e._v("Example:")]),e._v(' if the current staking participation ratio (aka "bond ratio") is 73%, then this is the calculation for speed that the inflation rate will change:')]),e._v(" "),a("p",[e._v("(1 - 73%/67%) * 13% = -1.16% per year")]),e._v(" "),a("p",[e._v("This means that if the staking participation rate stays the same, the inflation rate will  decrease by 1.16% over the course of one year, during which time the Hub's inflation rate will decrease by about 0.1% per month.")]),e._v(" "),a("p",[e._v("If "),a("code",[e._v("InflationRateChange")]),e._v(' is 26% and the current staking participation ratio (aka "bond ratio") is 73%, then the inflation will  decrease by 2.33% over the course of one year, during which time inflation will decrease by about 0.19% per month.')]),e._v(" "),a("p",[e._v("The Cosmos Hub's inflation rate is tied to its staking participation ratio in order to make staking more or less desirable, since most of the Hub's inflation is used to fund staking rewards. If the speed of inflation responds more strongly to staking participation, it could be that staking behaviour will also respond more strongly.")]),e._v(" "),a("h3",{attrs:{id:"inflationmax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inflationmax"}},[e._v("#")]),e._v(" "),a("code",[e._v("InflationMax")])]),e._v(" "),a("p",[a("strong",[e._v("The maximum rate that the Cosmos Hub can mint new ATOMs, proportional to the supply.")])]),e._v(" "),a("ul",[a("li",[e._v("on-chain value: "),a("code",[e._v(e._s(e.$themeConfig.currentParameters.mint.InflationMax))])]),e._v(" "),a("li",[a("code",[e._v("cosmoshub-4")]),e._v(" default: "),a("code",[e._v("0.200000000000000000")])]),e._v(" "),a("li",[a("code",[e._v("cosmoshub-3")]),e._v(" default: "),a("code",[e._v("0.200000000000000000")])])]),e._v(" "),a("p",[e._v("The maximum rate that the Cosmos Hub can be set to mint new ATOMs is determined by "),a("code",[e._v("InflationMax")]),e._v(", which is 20% ("),a("code",[e._v("0.200000000000000000")]),e._v(") of the ATOM supply per year and based on the assumption that there are 4,855,015 blocks produced per year (see "),a("a",{attrs:{href:"#BlocksPerYear"}},[a("code",[e._v("BlocksPerYear")])]),e._v("). If the Cosmos Hub's staking ratio (ie. the number of ATOMs staked vs total supply) remains below "),a("a",{attrs:{href:"#GoalBonded"}},[a("code",[e._v("GoalBonded")])]),e._v("(67%) for long enough, its inflation setting will eventually reach this maximum.")]),e._v(" "),a("h4",{attrs:{id:"decreasing-the-value-of-inflationmax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decreasing-the-value-of-inflationmax"}},[e._v("#")]),e._v(" Decreasing the value of "),a("code",[e._v("InflationMax")])]),e._v(" "),a("p",[e._v("Decreasing the value of the "),a("code",[e._v("InflationMax")]),e._v(" parameter will lower the maximum rate that the Cosmos Hub produces new ATOMs and reduce the rate at which the ATOM supply expands. This will reduce the rate at which token-holders' assets are diluted and may reduce the incentive for staking participation.")]),e._v(" "),a("h4",{attrs:{id:"increasing-the-value-of-inflationmax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#increasing-the-value-of-inflationmax"}},[e._v("#")]),e._v(" Increasing the value of "),a("code",[e._v("InflationMax")])]),e._v(" "),a("p",[e._v("Increasing the value of the "),a("code",[e._v("InflationMax")]),e._v(" parameter will raise the maximum rate that the Cosmos Hub produces new ATOMs and raise the rate at which the ATOM supply expands. This will increase the rate at which token-holders' assets are diluted and may increase the incentive for staking participation.")]),e._v(" "),a("h4",{attrs:{id:"notes-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes-2"}},[e._v("#")]),e._v(" Notes")]),e._v(" "),a("p",[e._v("The effective rate of inflation tends to be different than the set rate of inflation because inflation is dependent upon the number of blocks produced per year. If blocks are produced more slowly than 6.50 seconds per block, then fewer than the assumed 4,855,015 will be produced per year, and effectively inflation will be lower than the set rate. If blocks are produced more quickly than 6.50 seconds per block, then more than the assumed 4,855,015 will be produced per year, and effectively inflation will be higher than the set rate.")]),e._v(" "),a("h3",{attrs:{id:"inflationmin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inflationmin"}},[e._v("#")]),e._v(" "),a("code",[e._v("InflationMin")])]),e._v(" "),a("p",[a("strong",[e._v("The minimum rate that the Cosmos Hub can mint new ATOMs, proportional to the supply.")])]),e._v(" "),a("ul",[a("li",[e._v("on-chain value: "),a("code",[e._v(e._s(e.$themeConfig.currentParameters.mint.InflationMin))])]),e._v(" "),a("li",[a("code",[e._v("cosmoshub-4")]),e._v(" default: "),a("code",[e._v("0.070000000000000000")])]),e._v(" "),a("li",[a("code",[e._v("cosmoshub-3")]),e._v(" default: "),a("code",[e._v("0.070000000000000000")])])]),e._v(" "),a("p",[e._v("The minimum rate that the Cosmos Hub can be set to mint new ATOMs is determined by "),a("code",[e._v("InflationMin")]),e._v(", which is 7% ("),a("code",[e._v("0.070000000000000000")]),e._v(") of the ATOM supply per year and based on the assumption that there are 4,855,015 blocks produced per year (see "),a("a",{attrs:{href:"#BlocksPerYear"}},[a("code",[e._v("BlocksPerYear")])]),e._v("). If the Cosmos Hub's staking ratio (ie. the number of ATOMs staked vs total supply) remains above "),a("a",{attrs:{href:"#GoalBonded"}},[a("code",[e._v("GoalBonded")])]),e._v("(67%) for long enough, its inflation setting will eventually reach this minimum.")]),e._v(" "),a("h4",{attrs:{id:"decreasing-the-value-of-inflationmin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decreasing-the-value-of-inflationmin"}},[e._v("#")]),e._v(" Decreasing the value of "),a("code",[e._v("InflationMin")])]),e._v(" "),a("p",[e._v("Decreasing the value of the "),a("code",[e._v("InflationMin")]),e._v(" parameter will lower the minimum rate that the Cosmos Hub produces new ATOMs and reduce the rate at which the ATOM supply expands. This will reduce the rate at which token-holders' assets are diluted and may reduce the incentive for staking participation.")]),e._v(" "),a("h4",{attrs:{id:"increasing-the-value-of-inflationmin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#increasing-the-value-of-inflationmin"}},[e._v("#")]),e._v(" Increasing the value of "),a("code",[e._v("InflationMin")])]),e._v(" "),a("p",[e._v("Increasing the value of the "),a("code",[e._v("InflationMin")]),e._v(" parameter will raise the minimum rate that the Cosmos Hub produces new ATOMs and raise the rate at which the ATOM supply expands. This will increase the rate at which token-holders' assets are diluted and may increase the incentive for staking participation.")]),e._v(" "),a("h4",{attrs:{id:"notes-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes-3"}},[e._v("#")]),e._v(" Notes")]),e._v(" "),a("p",[e._v("The effective rate of inflation tends to be different than the set rate of inflation because inflation is dependent upon the number of blocks produced per year. If blocks are produced more slowly than 6.50 seconds per block, then fewer than the assumed 4,855,015 will be produced per year, and effectively inflation will be lower than the set rate. If blocks are produced more quickly than 6.50 seconds per block, then more than the assumed 4,855,015 will be produced per year, and effectively inflation will be higher than the set rate.")]),e._v(" "),a("h3",{attrs:{id:"goalbonded"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#goalbonded"}},[e._v("#")]),e._v(" "),a("code",[e._v("GoalBonded")])]),e._v(" "),a("p",[a("strong",[e._v("The target proportion of staking participation, relative to the ATOM supply.")])]),e._v(" "),a("ul",[a("li",[e._v("on-chain value: "),a("code",[e._v(e._s(e.$themeConfig.currentParameters.mint.GoalBonded))])]),e._v(" "),a("li",[a("code",[e._v("cosmoshub-4")]),e._v(" default: "),a("code",[e._v("0.670000000000000000")])]),e._v(" "),a("li",[a("code",[e._v("cosmoshub-3")]),e._v(" default: "),a("code",[e._v("0.670000000000000000")])])]),e._v(" "),a("p",[a("code",[e._v("GoalBonded")]),e._v(" is the target proportion of staking participation, relative to the ATOM supply. Currently the goal of the system's design is to have 67% ("),a("code",[e._v("0.670000000000000000")]),e._v(") of the total ATOM supply bonded and participating in staking. When over 67% of the supply is staked, the inflation set rate begins decreasing at a maximum yearly rate of "),a("a",{attrs:{href:"#InflationRateChange"}},[a("code",[e._v("InflationRateChange")])]),e._v(" until it reaches and remains at the "),a("a",{attrs:{href:"#InflationMin"}},[a("code",[e._v("InflationMin")])]),e._v(" of 7%. When under 67% of the supply is staked, the inflation set rate begins increasing at a maximum yearly rate of "),a("a",{attrs:{href:"#InflationRateChange"}},[a("code",[e._v("InflationRateChange")])]),e._v(" until it reaches and remains at the "),a("a",{attrs:{href:"#InflationMax"}},[a("code",[e._v("InflationMax")])]),e._v(" of 20%.")]),e._v(" "),a("h4",{attrs:{id:"decreasing-the-value-of-goalbonded"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decreasing-the-value-of-goalbonded"}},[e._v("#")]),e._v(" Decreasing the value of "),a("code",[e._v("GoalBonded")])]),e._v(" "),a("p",[e._v("Decreasing the value of the "),a("code",[e._v("GoalBonded")]),e._v(" parameter will cause the Cosmos Hub's inflation setting to begin decreasing at a lower participation rate, and this may reduce the incentive for staking participation.")]),e._v(" "),a("h4",{attrs:{id:"increasing-the-value-of-goalbonded"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#increasing-the-value-of-goalbonded"}},[e._v("#")]),e._v(" Increasing the value of "),a("code",[e._v("GoalBonded")])]),e._v(" "),a("p",[e._v("Increasing the value of the "),a("code",[e._v("GoalBonded")]),e._v(" parameter will cause the Cosmos Hub's inflation setting to begin increasing at a lower participation rate, and this may increase the incentive for staking participation.")]),e._v(" "),a("h3",{attrs:{id:"blocksperyear"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blocksperyear"}},[e._v("#")]),e._v(" "),a("code",[e._v("BlocksPerYear")])]),e._v(" "),a("p",[a("strong",[e._v("The system's assumed number of blocks that the Cosmos Hub will produce in one year.")])]),e._v(" "),a("ul",[a("li",[e._v("on-chain value: "),a("code",[e._v(e._s(e.$themeConfig.currentParameters.mint.BlocksPerYear))])]),e._v(" "),a("li",[a("code",[e._v("cosmoshub-4")]),e._v(" default: "),a("code",[e._v("4360000")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.mintscan.io/cosmos/proposals/30",target:"_blank",rel:"noopener noreferrer"}},[e._v("Proposal 30"),a("OutboundLink")],1),e._v(" change to "),a("code",[e._v("4360000")])]),e._v(" "),a("li",[a("code",[e._v("cosmoshub-3")]),e._v(" default: "),a("code",[e._v("4855015")])])]),e._v(" "),a("p",[a("code",[e._v("BlocksPerYear")]),e._v(" is the setting for the system's assumed number of blocks that the Cosmos Hub will produce in one year. "),a("code",[e._v("BlocksPerYear")]),e._v(" is currently "),a("code",[e._v("{{ $themeConfig.currentParameters.mint.BlocksPerYear }")]),e._v(" and the network's inflationary behaviour will be aligned with its settings when the average block time is 7.24 seconds (see "),a("a",{attrs:{href:"https://www.mintscan.io/cosmos/proposals/30",target:"_blank",rel:"noopener noreferrer"}},[e._v("Proposal 30"),a("OutboundLink")],1),e._v(") seconds over one year. "),a("code",[e._v("BlocksPerYear")]),e._v(" is most notably used in by the system to determine the rate that new ATOMs are minted, which can vary if block times vary from 6.50 seconds per block, since effectively a different number of blocks will be produced in one year and ATOMs are minted each block.")]),e._v(" "),a("h4",{attrs:{id:"changing-the-blocksperyear-parameter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changing-the-blocksperyear-parameter"}},[e._v("#")]),e._v(" Changing the "),a("code",[e._v("BlocksPerYear")]),e._v(" parameter")]),e._v(" "),a("p",[e._v("Changing the "),a("code",[e._v("BlocksPerYear")]),e._v(" parameter will change the assumption that system makes about how many Cosmos Hub blocks will be produced per year. If block times are greater than 6.50 seconds, then this parameter should be decreased to make the Cosmos Hub's inflationary behaviour more aligned with its settings. If block times are less than 6.50 seconds, then this parameter should be increased to make the Cosmos Hub's behaviour more aligned with its settings.")]),e._v(" "),a("h4",{attrs:{id:"notes-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes-4"}},[e._v("#")]),e._v(" Notes")]),e._v(" "),a("p",[e._v("The calculation for seconds in one year:")]),e._v(" "),a("p",[e._v("365.24 (days) * 24 (hours) * 60 (minutes) * 60 (seconds) = 31556736 seconds")]),e._v(" "),a("p",[a("strong",[e._v("Example:")]),e._v(" If block times are 7.12 seconds per block and 31556736 seconds per year:")]),e._v(" "),a("p",[e._v("31556736 / 7.12 = ~4432126 blocks per year")])],1)}),[],!1,null,null,null);t.default=o.exports}}]);