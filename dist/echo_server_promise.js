// create a wrapper from net.Socket
function soInit(socket) {
    const conn = {
        socket: socket,
        err: null,
        ended: false,
        reader: null,
    };
    socket.on("data", (data) => {
        // omitted ...
    });
    socket.on("end", () => {
        // this also fulfills the current read.
        conn.ended = true;
        if (conn.reader) {
            conn.reader.resolve(Buffer.from("")); // EOF
            conn.reader = null;
        }
    });
    socket.on("error", (err) => {
        // errors are also delivered to the current read.
        conn.err = err;
        if (conn.reader) {
            conn.reader.reject(err);
            conn.reader = null;
        }
    });
    return conn;
}
// returns an empty `Buffer` after EOF.
function soRead(conn) {
    console.assert(!conn.reader); // no concurrent calls
    return new Promise((resolve, reject) => {
        // if the connection is not readable, complete the promise now.
        if (conn.err) {
            reject(conn.err);
            return;
        }
        if (conn.ended) {
            resolve(Buffer.from("")); // EOF
            return;
        }
        // save the promise callbacks
        conn.reader = { resolve: resolve, reject: reject };
        // and resume the 'data' event to fulfill the promise later.
        conn.socket.resume();
    });
}
function soWrite(conn, data) {
    console.assert(data.length > 0);
    return new Promise((resolve, reject) => {
        if (conn.err) {
            reject(conn.err);
            return;
        }
        conn.socket.write(data, (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve();
            }
        });
    });
}
export {};
//# sourceMappingURL=echo_server_promise.js.map