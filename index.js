const profileInfos = require("./information.js");
const cowsay = require("cowsay");

console.log(cowsay.say({
    text: `Hello, I'm ${profileInfos.profile.name} from the ${profileInfos.profile.campus} campus`,
    e: "00",
    T: "V"
}));