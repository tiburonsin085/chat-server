const messages = []
let id = 0

module.exports = {
    create: (req, res ) =>{
        const {text , time } = req.body 
        const newMessage = {id,text,time}
        messages.push(newMessage)
        id ++ 
        res.status(200).send(messages)
    },
    read: (req ,res) =>{
        res.status(200).send(messages)
    },
    update: (req,res) => {
        const reqId = req.params.id
        const {text} = req.body

        const newTextId = messages.findIndex( e => e.id == reqId)

        messages[newTextId].text = text || messages.newTextId.text

        res.status(200).send(messages)
    },

    delete: (req,res) => {
        const {id} = req.params
        messageId = messages.findIndex(e => e.id == id)

        messages.splice(messageId,1)
        console.log(messages)
        res.status(200).send(messages)

    }
}