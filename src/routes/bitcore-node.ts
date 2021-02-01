import {Router, Request, Response} from 'express'
import block from './../bitcore-node/responses/block/index.json'
import blockTip from './../bitcore-node/responses/block/tip.json'

const router = Router()

router.get('/api/:chain/:network/block/tip', (req: Request, res: Response) => {
    res.send({ ...blockTip, chain: req.params.chain, network: req.params.network })
})

router.get('/api/:chain/:network/block', (req: Request, res: Response) => {
    res.send({ ...block, chain: req.params.chain, network: req.params.network })
})

export default router
