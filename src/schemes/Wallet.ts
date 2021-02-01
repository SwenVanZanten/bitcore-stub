import { Schema } from 'mongoose'

export default new Schema({
    wallet: {
        version: String,
        createdOn: Number,
        id: String,
        name: String,
        m: Number,
        n: Number,
        singleAddress: Boolean,
        status: String,
        publicKeyRing: [
            {
                xPubKey: String,
                requestPubKey: String
            }
        ],
        copayers: [
            {
                version: Number,
                createdOn: Number,
                coin: String,
                id: String,
                name: String,
                xPubKey: String,
                requestPubKey: String,
                signature: String,
                requestPubKeys: [
                    {
                        key: String,
                        signature: String
                    }
                ],
                customData: String,
                encryptedName: String
            }
        ],
        pubKey: String,
        coin: String,
        network: String,
        derivationStrategy: String,
        addressType: String,
        addressManager: {
            receiveAddressIndex: Number,
            changeAddressIndex: Number,
            version: Number,
            derivationStrategy: String,
            copayerIndex: Number,
            skippedPaths: []
        },
        scanStatus: String,
        beRegistered: Boolean,
        beAuthPrivateKey2: String,
        beAuthPublicKey2: String,
        nativeCashAddr: String,
        usePurpose48: Boolean,
        encryptedName: String
    },
    serverMessages: [String],
    preferences: {
        version: String,
        createdOn: Number,
        walletId: String,
        copayerId: String,
        email: String,
        language: String,
        unit: String,
        tokenAddresses: String,
        multisigEthInfo: String
    },
    pendingTxps: Array,
    balance: {
        totalAmount: Number,
        lockedAmount: Number,
        totalConfirmedAmount: Number,
        lockedConfirmedAmount: Number,
        availableAmount: Number,
        availableConfirmedAmount: Number,
        byAddress: [
            {
                address: String,
                path: String,
                amount: Number
            }
        ]
    },
    customData: {
        walletPrivKey: String
    }
})
