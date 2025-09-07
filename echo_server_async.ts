import * as net from "net";

async function newConn(socket: net.Socket): Promise<void> {
  console.log('new connection', socket.remoteAddress, socket.remotePort);

  // Set up event listeners
  socket.on('end', () => {
    console.log('EOF');
  });

  socket.on('data', async (data: Buffer) => {
    console.log('data', data);

    // Echo back the data asynchronously
    await new Promise<void>((resolve, reject) => {
      socket.write(data, (err?: Error | null) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });

    // Actively close the connection if the data contains 'q'
    if (data.includes('q'.charCodeAt(0))) {
      console.log('closing');
      socket.end();
    }
  });
}

const server: net.Server = net.createServer();
server.on('error', (err: Error) => { throw err });
server.on('connection', (socket: net.Socket) => {
  newConn(socket).catch(console.error);
});
server.listen({ host: '127.0.0.1', port: 1234 });

type TCPListener = {
  server: net.Server;
};

async function soListen(address: string, port: number): Promise<TCPListener> {
  const server = net.createServer()

  return new Promise((resolve, reject) => {
    server.listen(port, address, () => {
      resolve({ server })
    })
    server.on('error', (err) => {
      reject(err)
    })
  })
};

type TCPConn = {
  socket: net.Socket
}

function soAccept(listener: TCPListener): Promise<TCPConn> {
  return new Promise((resolve, reject) => {
    listener.server.once('connection', (socket) => {
      resolve({ socket })
    })

    listener.server.on('error', reject)
  })
}