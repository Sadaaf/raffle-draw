const Ticket = require('../models/Ticket')

class MyDB {
    constructor() {
        this.tickets = []
    }

    /**
     * Creates and saves a new ticket
     * @param {string} username 
     * @param {number} price 
     * @returns {Ticket} returns a ticket object
     */
    create(username, price) {
        const ticket = new Ticket(username, price)
        this.tickets.push(ticket)
        return ticket
    }

    /**
     * Returns all tickets
     */
    find() {
        return this.tickets
    }

    /** 
     * Returns a single ticket matching the ID
     * @param {string} ticketId
     * @returns {Ticket} ticket object
    */
    findById(ticketId) {
        return this.tickets.find(ticket => ticket.id === ticketId)
    }

    /**
     * find all tickets containing the username
     * @param {string} username 
     * @returns {Array<Ticket>}
     */
    findByUsername(username) {
        return this.tickets.filter(ticket => ticket.username === username)
    }

    /**
     * Updates the ticket matching the ticketId with the information from ticketBody
     * @param {string} ticketId 
     * @param {{username: string, price: number}} ticketBody 
     * @returns {Ticket} updated ticket object
     */
    updateById(ticketId, ticketBody) {
        const ticket = this.findById(ticketId)
        ticket.username = ticketBody.username
        ticket.price = ticketBody.price ?? ticket.price
        ticket.updatedAt = new Date()
        return ticket
    }

    /**
     * Delete ticket matching the id
     * @param {string} ticketId
     * @returns {boolean} if the operation was successful
     */
    deleteById(ticketId) {
        const index = this.tickets.findIndex((ticket) => ticket.id === ticketId)
        if(index != -1){
            this.ticket.splice(index, 1)
            return true
        } else {
            return false
        }
    }

    /**
     * Creates multiple ticket for a single user
     * @param {string} username 
     * @param {number} price 
     * @param {number} quantity 
     * @returns {Array<Ticket>} an array of tickets
     */
    bulkCreate(username, price, quantity) {
        const result = [];
        for (let i = 0; i < quantity; i++) {
            const ticket = this.create(username, price)
            result.push(ticket)
        }
        return this.result
    }

    /**
     * raffle draw
     * @param {number} winnerCount
     * @returns {Array<Ticket>}
     */
    draw(winnerCount) {
        let indexes = new Array(winnerCount)
        for(let i=0; i<winnerCount;){
            let index = Math.floor(Math.random() * this.tickets.length)
            if(!indexes.includes(index)){
                indexes[i++] = index
            }
        }
        const winners = indexes.map((index) => this.tickets[index])
        return winners
    }
}

const myDB = new MyDB()

module.exports = myDB