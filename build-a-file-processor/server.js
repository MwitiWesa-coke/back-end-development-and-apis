const http = require("http");
const fs = require("fs");
const fsPromises = require("fs/promises");
const crypto = require("crypto");
const os = require("os");
const { convertProcessSignalToExitCode } = require("util");
const path = require("path");

const readable = fs.createReadStream("assets/poem.txt");
const writable = fs.createWriteStream("assets/stream-output.txt");
readable.pipe(writable);

console.log(__filename);



const filePath = path.join(__dirname, "assets", "poem.txt");
const parts = path.parse("filePath");
process.stdout.write("Hello from stdout\n");
process.stderr.write("Hello from stderr\n");

console.log(process.argv);
console.log(process.argv[2]);
console.log(parts);
console.log(process.version);
console.log(process.platform);
console.log(process.env.NODE_ENV);
console.log(filePath);
console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.extname(filePath));
console.log(path.join("assets", "..", "server.js"));;
console.log(path.resolve("assets", "..", "server.js"));


const hash = crypto.createHash("sha256")
.update("freeCodeCamp!")
.digest("hex");

const random = crypto.randomUUID();
console.log(random);

const id = crypto.randomUUID();
console.log(id);

console.log(os.platform());
console.log(os.arch());
console.log(os.hostname());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.uptime());
console.log(os.cpus().length);

async function main() {
    const data = await fsPromises.readFile("assets/poem.txt", {
        encoding: "utf8",
    });
    console.log(data);
}

main();

fs.writeFileSync("assets/output.txt", "Hello, freeCodeCamp!");
fs.appendFileSync("assets/output.txt", "\nThis is Wesa!");

const exists = fs.existsSync("assets/output.txt");
const entries = fs.readdirSync("assets");
const buf = Buffer.from("Hello, Node!");
const buf2 = Buffer.alloc(8, 0xff);
const decoded = Buffer.from("ZnJlZUNvZGVDYW1w", "base64").toString("utf8");


console.log(hash);
console.log(decoded);
console.log(buf2);
console.log(buf);
console.log(buf.toString("hex"));
console.log(buf.toString("base64"));
console.log(entries);
console.log(exists);