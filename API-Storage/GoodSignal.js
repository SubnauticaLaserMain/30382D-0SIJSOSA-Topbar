class GoodSignal {
    #connections = [];  // Private field to store connections securely

    constructor() {
        // Only expose the connect and disconnect methods through this interface
        this.signal = {
            connect: (func) => this.#connect(func),
            once: (func) => this.#once(func),
        };
    }

    // Private method to handle connection logic
    #connect(func) {
        const connection = { func, isConnected: true };

        // Store the connection privately
        this.#connections.push(connection);

        // Return a handle for disconnecting
        return {
            disconnect: () => {
                connection.isConnected = false;
                this.#connections = this.#connections.filter(conn => conn.isConnected);
            }
        };
    }

    // Method to connect a function that will be called only once
    #once(func) {
        // Wrap the original function to disconnect after the first call
        const onceFunc = (...args) => {
            func(...args);
            this.#connections = this.#connections.filter(conn => conn !== connection); // Remove the connection
        }

        // Store the connection, similar to connect
        const connection = { func: onceFunc, isConnected: true };
        this.#connections.push(connection);
    }

    // Method to fire all connected functions securely
    fireConnections(...args) {
        this.#connections.forEach(connection => {
            if (connection.isConnected) {
                connection.func(...args);
            }
        });
    }
}

// Export the factory function
export const makeGoodSignal = function() {
    return new GoodSignal();
};
