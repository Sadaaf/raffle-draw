# Lottery API

- Sell lottery ticket
- update lottery ticket
- delete lottery ticket
- get all tickets
- get ticket by id
- bulk buy (user can buy multiple ticket at a time)
- raffle draw

# Models
Ticket:
 - number (unique)
 - username
 - price
 - timeStamp

# Routes
- /tickets/t/:ticketId      GET     find a single ticket using a ticketId
- /tickets/t/:ticketId      PATCH   update ticket information by id
- /tickets/t/:ticketId      DELETE  delete ticket by id
- /tickets/u/:username      GET     find tickets belonging to a user
- /tickets/u/:username      PATCH   update tickets for a given user
- /tickets/u/:username      DELETE  delete all tickets for a given user
- /tickets/sell             POST    Create ticket
- /tickets/bulk             POST    bulk sell tickets
- /tickets/draw             GET     Get the raffle draw winners
- /tickets                  GET     find all lottery