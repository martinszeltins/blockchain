import Block from './Block'
import Transaction from './Transaction'

class Blockchain {
    public blocks: Block[]

    constructor() {
        this.blocks = []
    }

    public addBlock(transaction: Transaction) {
        let id = this.blocks.length
        let prevBlockHash = this.blocks.length !== 0 ? this.blocks[this.blocks.length - 1].hash : ''

        let block = new Block(id, prevBlockHash, transaction)

        this.blocks.push(block)
    }
}

export default Blockchain