import * as net from "net"

function newConn(socket) {
	console.log('new connection', socket.remoteAddress, socket.remotePort)

	socket.on('end', () => {
		// FIN received. The connection will be closed automatically
		console.log('EOF')
	})

	socket.on('data', (data) => {
		console.log('data', data)
		socket.write(data) // echo back the data

		// actively closed the connection if the data contains 'q'
		if (data.includes('q')) {
			console.log('closing')
			socket.end() // this will send FIN and close the connection the
		}
	})
}

let server = net.createServer()
server.on('error', (err) => { throw err })
server.on('connection', newConn)
server.listen({ host: '127.0.0.1', port: 1234 })

