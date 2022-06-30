import bcrypt from 'bcrypt'
import Transaction from './Transaction'

class Block {
    public id: number
    public timestamp: number
    public hash: string
    public prevBlockHash: string
    public transaction: Transaction

    constructor(id: number, prevBlockHash: string, transaction: Transaction) {
        this.id = id
        this.hash = this.getHash()
        this.timestamp = Date.now()
        this.transaction = transaction
        this.prevBlockHash = prevBlockHash
    }

    public getHash(): string {
        return bcrypt.hashSync(
            String(this.id + this.timestamp + this.hash + this.prevBlockHash + JSON.stringify(this.transaction)),
            10
        )
    };
}

export default Block