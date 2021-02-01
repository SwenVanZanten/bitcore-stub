import {Router, Request, Response} from 'express'
import walletBoilerplate from '../bitcore-wallet-service/responses/wallet/open'
import WalletScheme from '../schemes/Wallet'
import UUID from '../UUID'

const router = Router()

// Create wallet
router.post('/api/v2/wallets/', (req: Request, res: Response) => {
    walletBoilerplate.wallet.id = UUID.create()
    walletBoilerplate.wallet.copayers[0].id = req.header('x-identity') || ''

    const WalletModel = req.app.get('mongooseConnection').model('wallets', WalletScheme)
    WalletModel.create(walletBoilerplate, (error, saved) => {
        if (error) {
            return console.error(error)
        }

        res.send({
            walletId: walletBoilerplate.wallet.id
        })
    })
})

// Join wallet
router.post('/api/v2/wallets/:walletId/copayers/', (req: Request, res: Response) => {
    const WalletModel = req.app.get('mongooseConnection').model('wallets', WalletScheme)

    WalletModel.findOne({"wallet.id": req.params.walletId}).then(walletDocument => {
        if (walletDocument) {
            console.log(walletDocument)
            return res.send(walletDocument)
        }

        res.status(401)
        res.send({
            "code": "NOT_AUTHORIZED",
            "message": "Copayer not found"
        })
    })
})

// Open wallet
router.get('/api/v3/wallets/', (req: Request, res: Response) => {
    const copayerId = req.header('x-identity')
    const WalletModel = req.app.get('mongooseConnection').model('wallets', WalletScheme)

    WalletModel.findOne({"wallet.copayers.id": copayerId}).then(walletDocument => {
        if (walletDocument) {
            return res.send(walletDocument)
        }

        res.status(401)
        res.send({
            "code": "NOT_AUTHORIZED",
            "message": "Copayer not found"
        })
    })
})

// Wallet tx history
router.get('/api/v1/txhistory/', (req: Request, res: Response) => {
    res.send({})
})

router.get('/wallet/:walletId/balance/', (req: Request, res: Response) => {
    const WalletModel = req.app.get('mongooseConnection').model('wallets', WalletScheme)

    WalletModel.findOne({"wallet.id": req.params.walletId}).then(walletDocument => {
        if (walletDocument) {
            walletDocument.balance.totalAmount = req.query.totalAmount
            walletDocument.balance.lockedAmount = req.query.lockedAmount || 0
            walletDocument.balance.totalConfirmedAmount = req.query.totalConfirmedAmount || req.query.totalAmount
            walletDocument.balance.lockedConfirmedAmount = req.query.lockedConfirmedAmount || 0
            walletDocument.balance.availableAmount = req.query.availableAmount || req.query.totalAmount
            walletDocument.balance.availableConfirmedAmount = req.query.availableConfirmedAmount || 0
            walletDocument.balance.byAddress[0].amount = req.query.totalAmount

            return walletDocument.save()
        }

        res.status(401)
        res.send({
            "code": "NOT_AUTHORIZED",
            "message": "Copayer not found"
        })
    }).then(() => res.send('done'))
})

export default router
