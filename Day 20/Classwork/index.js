const os = require("os");

// Get the operating system type
console.log(`Operating System: ${os.type()}`);

// Get the operating system platform
console.log(`Platform: ${os.platform()}`);

// Get the operating system release
console.log(`Release: ${os.release()}`);

// Get the total memory in bytes
console.log(`Total Memory: ${os.totalmem()} bytes`);

// Get the free memory in bytes
console.log(`Free Memory: ${os.freemem()} bytes`);

// Get the CPU information
console.log(`CPU Architecture: ${os.arch()}`);
console.log(`CPU Model: ${os.cpus()[0].model}`);
console.log(`CPU Cores: ${os.cpus().length}`);

// Get the network interfaces
console.log(`Network Interfaces: ${Object.keys(os.networkInterfaces())}`);

// Get the system uptime in seconds
console.log(`System Uptime: ${os.uptime()} seconds`);

// Get the system load average
console.log(`System Load Average: ${os.loadavg()}`);

// Get the system hostname
console.log(`System Hostname: ${os.hostname()}`);

// Get the system home directory
console.log(`System Home Directory: ${os.homedir()}`);

// Get the system temporary directory
console.log(`System Temporary Directory: ${os.tmpdir()}`);
