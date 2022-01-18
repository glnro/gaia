(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{701:function(e,a,o){"use strict";o.r(a);var s=o(1),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"unase-a-la-red-principal-del-cosmos-hub"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#unase-a-la-red-principal-del-cosmos-hub"}},[e._v("#")]),e._v(" Únase a la red principal del Cosmos Hub")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",[e._v("Vea el "),o("a",{attrs:{href:"https://github.com/cosmos/launch",target:"_blank",rel:"noopener noreferrer"}},[e._v("repositorio para el lanzamiento"),o("OutboundLink")],1),e._v(" para la información de la red principal, incluyendo la versión correcta para el SDK de Cosmos que usar y detalles acerca del archivo génesis.")])]),e._v(" "),o("p",[e._v("::: aviso\n"),o("strong",[e._v("Necesitará "),o("RouterLink",{attrs:{to:"/es/gaia-tutorials/installation.html"}},[e._v("instalar gaia")]),e._v(" antes de avanzar más")],1),e._v("\n:::")]),e._v(" "),o("h2",{attrs:{id:"configurando-un-nuevo-nodo"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configurando-un-nuevo-nodo"}},[e._v("#")]),e._v(" Configurando un nuevo nodo")]),e._v(" "),o("p",[e._v("Estas instrucciones son para establecer un nuevo nodo completo desde cero.")]),e._v(" "),o("p",[e._v("Primero, inicie el nodo y cree los archivos de configuración necesarios:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgaW5pdCAmbHQ7eW91cl9jdXN0b21fbW9uaWtlciZndDsK"}}),e._v(" "),o("p",[e._v(":::Warning\nEl moniker solo debe contener carácteres ASCII.  El uso de caracteres Unicode hará que tu nodo sea irreconocible.\n:::")]),e._v(" "),o("p",[e._v("Puede editar el apodo ("),o("code",[e._v("moniker")]),e._v(") después, en el archivo "),o("code",[e._v("~/.gaia/config/config.toml")]),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"IyBBIGN1c3RvbSBodW1hbiByZWFkYWJsZSBuYW1lIGZvciB0aGlzIG5vZGUKbW9uaWtlciA9ICZxdW90OyZsdDt0dSBub21icmUgcGVyc29uYWxpemFkbyZndDsmcXVvdDsK"}}),e._v(" "),o("p",[e._v("Puede editar el archivo "),o("code",[e._v("~/.gaia/config/app.toml")]),e._v(" para activar el mecanismo antispam y rechazar las transacciones entrantes con valores inferiores a los precios mínimos para el "),o("em",[e._v("gas")]),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"IyBUaGlzIGlzIGEgVE9NTCBjb25maWcgZmlsZS4KIyBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90b21sLWxhbmcvdG9tbAoKIyMjIyMgbWFpbiBiYXNlIGNvbmZpZyBvcHRpb25zICMjIyMjCgojIFRoZSBtaW5pbXVtIGdhcyBwcmljZXMgYSB2YWxpZGF0b3IgaXMgd2lsbGluZyB0byBhY2NlcHQgZm9yIHByb2Nlc3NpbmcgYQojIHRyYW5zYWN0aW9uLiBBIHRyYW5zYWN0aW9uJ3MgZmVlcyBtdXN0IG1lZXQgdGhlIG1pbmltdW0gb2YgYW55IGRlbm9taW5hdGlvbgojIHNwZWNpZmllZCBpbiB0aGlzIGNvbmZpZyAoZS5nLiAxMHVhdG9tKS4KCm1pbmltdW0tZ2FzLXByaWNlcyA9ICZxdW90OyZxdW90Owo="}}),e._v(" "),o("p",[e._v("¡Su nodo completo ha sido iniciado!")]),e._v(" "),o("h2",{attrs:{id:"genesis-y-semillas"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#genesis-y-semillas"}},[e._v("#")]),e._v(" Génesis y semillas")]),e._v(" "),o("h3",{attrs:{id:"copie-el-archivo-genesis"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#copie-el-archivo-genesis"}},[e._v("#")]),e._v(" Copie el archivo génesis")]),e._v(" "),o("p",[e._v("Busque el archivo "),o("code",[e._v("genesis.json")]),e._v(" de la red principal en el directorio de configuración de "),o("code",[e._v("gaiad")]),e._v(".")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bWtkaXIgLXAgJEhPTUUvLmdhaWEvY29uZmlnCmN1cmwgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Nvc21vcy9sYXVuY2gvbWFzdGVyL2dlbmVzaXMuanNvbiAmZ3Q7ICRIT01FLy5nYWlhL2NvbmZpZy9nZW5lc2lzLmpzb24K"}}),e._v(" "),o("p",[e._v("Observe que usamos el directorio "),o("code",[e._v("latest")]),e._v(" en el "),o("a",{attrs:{href:"https://github.com/cosmos/launch",target:"_blank",rel:"noopener noreferrer"}},[e._v("repositorio de lanzamiento"),o("OutboundLink")],1),e._v(" que contiene detalles para la red principal como la última versión y el archivo de génesis.")]),e._v(" "),o("p",[e._v(":::consejo\nSi en cambio quiere conectarse a la red de pruebas pública, haga clic "),o("RouterLink",{attrs:{to:"/es/gaia-tutorials/join-testnet.html"}},[e._v("aquí")]),e._v("\n:::")],1),e._v(" "),o("p",[e._v("Para verificar la validez de la configuración:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgc3RhcnQK"}}),e._v(" "),o("h3",{attrs:{id:"anada-los-nodos-semilla"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#anada-los-nodos-semilla"}},[e._v("#")]),e._v(" Añada los nodos semilla")]),e._v(" "),o("p",[e._v("Su nodo necesita saber cómo encontrar pares ("),o("em",[e._v("peers")]),e._v("). Necesita añadir nodos semilla en buen estado en "),o("code",[e._v("$HOME/.gaia/config/config.toml")]),e._v(". El repositorio para el "),o("a",{attrs:{href:"https://github.com/cosmos/launch",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("lanzamiento")]),o("OutboundLink")],1),e._v(" contiene enlaces a algunos nodos semilla.")]),e._v(" "),o("p",[e._v("Si estas semillas no funcionan, puedes encontrar más "),o("em",[e._v("seeds")]),e._v(" y "),o("em",[e._v("peers")]),e._v(" persistentes en un explorador de Cosmos Hub (puede encontrar una lista en la "),o("a",{attrs:{href:"https://cosmos.network/launch",target:"_blank",rel:"noopener noreferrer"}},[e._v("página del lanzamiento"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("p",[e._v("También puedes preguntar por "),o("em",[e._v("peers")]),e._v(" en el "),o("a",{attrs:{href:"https://riot.im/app/#/room/#cosmos-validators:matrix.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("canal de Validadores de Riot"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("Para más información acerca de seeds y peers, puede leer "),o("a",{attrs:{href:"https://docs.tendermint.com/master/spec/p2p/peer.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("este enlace"),o("OutboundLink")],1)]),e._v(" "),o("h2",{attrs:{id:"nota-sobre-el-fee-y-el-gas"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#nota-sobre-el-fee-y-el-gas"}},[e._v("#")]),e._v(" Nota sobre el Fee y el Gas")]),e._v(" "),o("p",[e._v("::: Aviso\nEn el Hub de Cosmos, la denominación aceptada es "),o("code",[e._v("uatom")]),e._v(", donde "),o("code",[e._v("1atom = 1.000.000uatom")]),e._v("\n:::")]),e._v(" "),o("p",[e._v("Las transacciones en la red del Hub de Cosmos deben incluir una tarifa de transacción para poder ser procesadas. Esta tarifa paga el gas necesario para llevar a cabo la transacción. La fórmula es la siguiente:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"dGFyaWZhID0gdGVjaG8oZ2FzICogcHJlY2lvUG9yR2FzKQo="}}),e._v(" "),o("p",[e._v("El "),o("code",[e._v("gas")]),e._v(" depende de la transacción. Diferentes transacciones requieren diferentes cantidades de "),o("code",[e._v("gas")]),e._v(". La cantidad de "),o("code",[e._v("gas")]),e._v(" para una transacción se calcula mientras se procesa, pero hay una forma previa de estimarla usando el valor "),o("code",[e._v("auto")]),e._v(" para el indicador de "),o("code",[e._v("gas")]),e._v(". Por supuesto, esto sólo da una estimación. Puede ajustar esta estimación con el identificador "),o("code",[e._v("--gas-adjustment")]),e._v(" (por defecto "),o("code",[e._v("1.0")]),e._v(") si quiere estar seguro de que proporciona suficiente "),o("code",[e._v("gas")]),e._v(" para la transacción.")]),e._v(" "),o("p",[e._v("El "),o("code",[e._v("gasPrice")]),e._v(" (i.e "),o("code",[e._v("precioPorGas")]),e._v(") es el precio de cada unidad de "),o("code",[e._v("gas")]),e._v(". Cada validador establece un valor de "),o("code",[e._v("min-gas-price")]),e._v(", y sólo incluirá transacciones que tengan un "),o("code",[e._v("gasPrice")]),e._v(" mayor que su "),o("code",[e._v("min-gas-price")]),e._v(".")]),e._v(" "),o("p",[e._v("Los "),o("code",[e._v("fees")]),e._v(" de la transacción son el producto del "),o("code",[e._v("gas")]),e._v(" y del "),o("code",[e._v("gasPrice")]),e._v(". Como usuario, tiene que introducir 2 de 3. Cuanto más alto sea el "),o("code",[e._v("gasPrice")]),e._v("/"),o("code",[e._v("fees")]),e._v(", mayor será la posibilidad de que su transacción se incluya en un bloque.")]),e._v(" "),o("p",[e._v("::: consejo\nPara la red principal, el "),o("code",[e._v("gas-prices")]),e._v(" recomendado es "),o("code",[e._v("0.0025uatom")]),e._v(".\n:::")]),e._v(" "),o("h2",{attrs:{id:"establezca-minimum-gas-prices"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#establezca-minimum-gas-prices"}},[e._v("#")]),e._v(" Establezca "),o("code",[e._v("minimum-gas-prices")])]),e._v(" "),o("p",[e._v("Su nodo completo mantiene las transacciones no confirmadas en la "),o("em",[e._v("mempool")]),e._v(". Para protegerlo de ataques de spam, es mejor establecer un "),o("code",[e._v("minimum-gas-prices")]),e._v(" que la transacción debe cumplir para ser aceptada en la "),o("em",[e._v("mempool")]),e._v(" de su nodo. Este parámetro puede ser establecido en el siguiente archivo "),o("code",[e._v("~/.gaia/config/app.toml")]),e._v(".")]),e._v(" "),o("p",[e._v("El valor inicial recomendado para "),o("code",[e._v("min-gas-prices")]),e._v(" es "),o("code",[e._v("0.0025uatom")]),e._v(", pero puede querer cambiarlo más tarde.")]),e._v(" "),o("h2",{attrs:{id:"reduccion-del-estado"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#reduccion-del-estado"}},[e._v("#")]),e._v(" Reducción del Estado")]),e._v(" "),o("p",[e._v("Hay tres estrategias para reducir el estado, por favor tenga en cuenta que esto es sólo para el estado y no para el almacenamiento de bloques:")]),e._v(" "),o("ol",[o("li",[o("code",[e._v("PruneEverything")]),e._v(": Esto significa que todos los estados salvados serán reducidos aparte del actual.")]),e._v(" "),o("li",[o("code",[e._v("PruneNothing")]),e._v(": Esto significa que todo el estado se guardará y nada se borrará.")]),e._v(" "),o("li",[o("code",[e._v("PruneSyncable")]),e._v(": Esto significa que sólo se salvará el estado de los últimos 100 y cada 10.000 bloques.")])]),e._v(" "),o("p",[e._v("Por defecto cada nodo está en modo "),o("code",[e._v("PruneSyncable")]),e._v(". Si desea cambiar su estrategia de reducción en su nodo, debe hacerlo cuando el nodo se ha iniciado. Por ejemplo, si desea cambiar su nodo al modo "),o("code",[e._v("PruneEverything")]),e._v(" entonces puede pasar la opción "),o("code",[e._v("---pruning everything")]),e._v(" cuando llame a "),o("code",[e._v("gaiad start")]),e._v(".")]),e._v(" "),o("blockquote",[o("p",[e._v("Nota: Cuando esté en estado de reducción no podrá consultar las partes que no estén en su base de datos.")])]),e._v(" "),o("h2",{attrs:{id:"ejecute-un-nodo-completo"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ejecute-un-nodo-completo"}},[e._v("#")]),e._v(" Ejecute un nodo completo")]),e._v(" "),o("p",[e._v("Inicie el nodo completo con este comando:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgc3RhcnQK"}}),e._v(" "),o("p",[e._v("Comprueba que todo funciona bien:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgc3RhdHVzCg=="}}),e._v(" "),o("p",[e._v("Vea el estado de la red con el "),o("a",{attrs:{href:"https://cosmos.network/launch",target:"_blank",rel:"noopener noreferrer"}},[e._v("Explorador de Cosmos"),o("OutboundLink")],1)]),e._v(" "),o("h2",{attrs:{id:"exportar-el-estado"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#exportar-el-estado"}},[e._v("#")]),e._v(" Exportar el estado")]),e._v(" "),o("p",[e._v("Gaia puede volcar todo el estado de la aplicación a un archivo JSON, que podría ser útil para el análisis manual y también puede ser usado como el archivo génesis para una nueva red.")]),e._v(" "),o("p",[e._v("Exporte el estado con:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgZXhwb3J0ICZndDsgW2ZpbGVuYW1lXS5qc29uCg=="}}),e._v(" "),o("p",[e._v("También puede exportar el estado desde una altura en especial (al final del procesamiento del bloque en esa altura):")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgZXhwb3J0IC0taGVpZ2h0IFtoZWlnaHRdICZndDsgW2ZpbGVuYW1lXS5qc29uCg=="}}),e._v(" "),o("p",[e._v("Si desea empezar una nueva red desde el estado exportado, expórtelo con la opción "),o("code",[e._v("--for-zero-height")]),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgZXhwb3J0IC0taGVpZ2h0IFtoZWlnaHRdIC0tZm9yLXplcm8taGVpZ2h0ICZndDsgW2ZpbGVuYW1lXS5qc29uCg=="}}),e._v(" "),o("h2",{attrs:{id:"verifica-la-red-principal"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#verifica-la-red-principal"}},[e._v("#")]),e._v(" Verifica la red principal")]),e._v(" "),o("p",[e._v("Ayude a prevenir problemas críticos ejecutando invariantes en cada bloque de su nodo. En esencia, al ejecutar invariantes se asegura que el estado de la red principal es el estado esperado correcto. Una comprobación de la invariante vital es que ningún átomo está siendo creado o destruido fuera del protocolo esperado, sin embargo hay muchas otras invariantes, comprueben cada una de ellas de forma única para su respectivo módulo. Porque la invariante es costosa desde el punto de vista computacional, no están habilitados por defecto. Para ejecutar un nodo con  estas comprobaciones inicie su nodo con la opción assert-invariants-blockly:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgc3RhcnQgLS1hc3NlcnQtaW52YXJpYW50cy1ibG9ja2x5Cg=="}}),e._v(" "),o("p",[e._v("Si se rompe una invariante en su nodo, su nodo entrará en pánico ("),o("code",[e._v("panic")]),e._v(" de Golang) y le pedirá que envíe una transacción que detenga la red principal. Por ejemplo, el mensaje proporcionado puede parecerse a:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aW52YXJpYW50IGJyb2tlbjoKICAgIGxvb3NlIHRva2VuIGludmFyaWFuY2U6CiAgICAgICAgcG9vbC5Ob3RCb25kZWRUb2tlbnM6IDEwMAogICAgICAgIHN1bSBvZiBhY2NvdW50IHRva2VuczogMTAxCiAgICBDUklUSUNBTCBwbGVhc2Ugc3VibWl0IHRoZSBmb2xsb3dpbmcgdHJhbnNhY3Rpb246CiAgICAgICAgZ2FpYWQgdHggY3Jpc2lzIGludmFyaWFudC1icm9rZW4gc3Rha2luZyBzdXBwbHkKCg=="}}),e._v(" "),o("p",[e._v("Cuando se presenta una transacción inválida, no se deducen los tokens de honorarios de la transacción ya que la cadena de bloques se detendrá (también conocido como transacción gratuita).")]),e._v(" "),o("h2",{attrs:{id:"actualice-a-un-nodo-validador"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#actualice-a-un-nodo-validador"}},[e._v("#")]),e._v(" Actualice a un nodo validador")]),e._v(" "),o("p",[e._v("Ahora tienes un nodo completo activo. ¿Cuál es el siguiente paso? Puedes actualizar tu nodo completo para convertirte en un Validador del Cosmos. Los 120 mejores validadores tienen la capacidad de proponer nuevos bloques en el Hub de Cosmos. Continúe en la "),o("RouterLink",{attrs:{to:"/es/validators/validator-setup.html"}},[e._v("Configuración del Validador")])],1)],1)}),[],!1,null,null,null);a.default=n.exports}}]);