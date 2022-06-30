### Run the Blockchain

```
$ npm install
$ npm run app
```

### Result

```json
Blockchain:
{
  "blocks": [
    {
      "id": 0,
      "hash": "$2b$10$u4MaN0UDxsmpJ/Y6YYpS6.XpCwMqNrqIQxlUH3RCDYGfiTsyGIhlS",
      "timestamp": 1656612440555,
      "transaction": {
        "sender": "sinai",
        "receiver": "kazadi",
        "amount": 24034
      },
      "prevBlockHash": ""
    },

    {
      "id": 1,
      "hash": "$2b$10$XbidxXcQP5E7p9WKb4HuFeaqG0ftXAbwv8haPZA4p/1PI8aLVWwVS",
      "timestamp": 1656612440601,
      "transaction": {
        "sender": "Dahouda",
        "receiver": "Pat",
        "amount": 32032
      },
      "prevBlockHash": "$2b$10$u4MaN0UDxsmpJ/Y6YYpS6.XpCwMqNrqIQxlUH3RCDYGfiTsyGIhlS"
    },
    
    {
      "id": 2,
      "hash": "$2b$10$MTL9tKXBphdV8P5oZ5lKOuX1bS6D5x8LAAR2MKEvMrfjqfWqbVvyW",
      "timestamp": 1656612440647,
      "transaction": {
        "sender": "Nkolomoni",
        "receiver": "Mao",
        "amount": 20993
      },
      "prevBlockHash": "$2b$10$XbidxXcQP5E7p9WKb4HuFeaqG0ftXAbwv8haPZA4p/1PI8aLVWwVS"
    }
  ]
}
```