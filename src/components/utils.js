const contractAddress = 'TPG7u3Uq4coxuVJv3cyA1Sm84cxyCMR4n2'

const utils = {
    tronWeb: false,
    contract: false,

    async setTronWeb(tronWeb) {
        this.tronWeb = tronWeb;
        this.contract = await tronWeb.contract().at(contractAddress)
    },
};

export default utils;