const {createPublicClient, http} = require('viem');
const {xdc} = require('viem/chains');

const main = async () => {
    const publicClient = createPublicClient({
        transport: http('https://earpc.xinfin.network'),
        chain: xdc
    });
    const result = await publicClient.estimateFeesPerGas({chain: xdc, type: "legacy"});
    console.log(result);
}
main()