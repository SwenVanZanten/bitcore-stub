export default {
    wallet: {
        version: '1.0.0',
        createdOn: 1607539510,
        id: 'c20a7891-8f42-464f-b377-447bf7b957ce',
        name: 'Bitcoin',
        m: 1,
        n: 1,
        singleAddress: false,
        status: 'complete',
        publicKeyRing: [
            {
                xPubKey: 'xpub6CCCQbPju1j2Y9CUkfYiWKaS6huD5FrcFRPr3Bww5a6BwQYe4GJj45ehScgWstz3yUVa3iPKtMM2ZGPFaXhSaikBQ1j6x5PHx4c3gbB35Tz',
                requestPubKey: '032c737c38265ca576f76cee5548ccb10b8d50dd06533730fedefb9997d0fad5d7'
            }
        ],
        copayers: [
            {
                version: 2,
                createdOn: 1607539511,
                coin: 'btc',
                id: '02c6aa8f73a08e44f196a794086111c09ae6039372bf9efede7e3faf8d8e7c2f',
                name: 'ik',
                xPubKey: 'xpub6CCCQbPju1j2Y9CUkfYiWKaS6huD5FrcFRPr3Bww5a6BwQYe4GJj45ehScgWstz3yUVa3iPKtMM2ZGPFaXhSaikBQ1j6x5PHx4c3gbB35Tz',
                requestPubKey: '032c737c38265ca576f76cee5548ccb10b8d50dd06533730fedefb9997d0fad5d7',
                signature: '3045022100b6fe37f5ac4454a1e1c18c220da43e69bd45fe52152861b7ae7001543c3508e50220386a4be4922c8a8a36fd647fd28536c6226aac8334cd0d5b84c85ed2db864ee1',
                requestPubKeys: [
                    {
                        key: '032c737c38265ca576f76cee5548ccb10b8d50dd06533730fedefb9997d0fad5d7',
                        signature: '3045022100b6fe37f5ac4454a1e1c18c220da43e69bd45fe52152861b7ae7001543c3508e50220386a4be4922c8a8a36fd647fd28536c6226aac8334cd0d5b84c85ed2db864ee1'
                    }
                ],
                customData: '{"iv":"aDlcTWMiqxkc+EdF/fqUIg==","v":1,"iter":1,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","ct":"x2Lzgu/PuJMp10SwRuXwr9lewdzvwpwrerfBfqotWULaSbBMWoklq+IsOhZm9N9NM4Kl9Rqh0rX2Hh2Wsea6ronRtkkSU2j5tZdV4Yccar/AITBr118VUAAOtzs="}',
                encryptedName: '{"iv":"D76XrgEzcI/apoQ/8VNWNw==","v":1,"iter":1,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","ct":"L6IE819ecjnZiQ=="}'
            }
        ],
        pubKey: '02b230863681903341aa8971515dfec2849da5f5281866b6ed56e2709a2ff7853b',
        coin: 'btc',
        network: 'livenet',
        derivationStrategy: 'BIP44',
        addressType: 'P2PKH',
        addressManager: {
            receiveAddressIndex: 3,
            changeAddressIndex: 1,
            version: 2,
            derivationStrategy: 'BIP44',
            copayerIndex: 2147483647,
            skippedPaths: []
        },
        scanStatus: null,
        beRegistered: true,
        beAuthPrivateKey2: '7b86af20c3cc31d17e0fc752e9860842c151a699e7854748164b5a283f28b6b9',
        beAuthPublicKey2: '04c0f1b5e1c5491605e7116590716cf082dfb864b18729fdeec5fb7cd4bf7de9485da220a05b53c1a1dd84eda43442e77485ec604378925dd997df117435ad8e68',
        nativeCashAddr: null,
        usePurpose48: false,
        encryptedName: '{"iv":"5k5ki2BsQsKwhPX3u5meJw==","v":1,"iter":1,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","ct":"CnKe3Dma0v8U1KfxqhRg"}'
    },
    serverMessages: [],
    preferences: {
        version: '1.0.0',
        createdOn: 1607539525,
        walletId: 'c20a7891-8f42-464f-b377-447bf7b957ce',
        copayerId: '36f1c9a708a9d43d55242ffe3e11042c336ca2d05adb8470194baba4ebd3cc16',
        email: '',
        language: 'nl',
        unit: 'btc',
        tokenAddresses: null,
        multisigEthInfo: null
    },
    pendingTxps: [],
    balance: {
        totalAmount: 0,
        lockedAmount: 0,
        totalConfirmedAmount: 0,
        lockedConfirmedAmount: 0,
        availableAmount: 0,
        availableConfirmedAmount: 0,
        byAddress: [
            {
                address: '1ASVV2TQwiv36U5yC9ege4PHKtPRtDJHNV',
                path: 'm/1/0',
                amount: 0
            }
        ]
    },
    customData: {
        walletPrivKey: 'fd1a27075de9796960df79cc6290da45252f77d1181ec07ab2290c15a0edfc5e'
    }
}
