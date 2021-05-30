const { chalk, inquirer, print } = require("./tools/index.js");
var moment = require("moment");
var colors = require("colors");
var userHome = require("user-home");

//DETECT IP *START!
var os = require("os");
var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces) {
  for (var k2 in interfaces[k]) {
    var address = interfaces[k][k2];
    if (address.family === "IPv4" && !address.internal) {
      addresses.push(address.address);
    }
  }
}
//DETECT IP *END!
const questionTools = [
  "➥ Information",
  "➥ Bot Like Timeline",
  "➥ Bot Like Target User",
  "➥ Mass Delete Post/Photo",

  "➥ F-L -> Followers Target",
  "➥ L-C -> Followers Target",

  "➥ F-L-C -> Followers Target",
  "➥ F-L-C -> Followers Target [BETA]",

  "➥ F-L-C -> Followers Target v2",

  "➥ F-L-DM -> Followers Target",
  "➥ F-L-DM -> Followers Target [BETA]",

  "➥ F-L-C -> Hashtag Target",
  "➥ F-L-C -> Location Target",

  "➥ Unfollow All Following",
  "➥ Unfollow Not Followback",
  "\n",
];

const menuQuestion = {
  type: "list",
  name: "choice",
  message:
    "tools:\n  Pule bha shwa phin jied ki tools ioh ba phi kum jied bkla..Every rules are made to be broken..\n\n",
  choices: questionTools,
};

const main = async () => {
  try {
    const { choice } = await inquirer.prompt(menuQuestion);
    choice == questionTools[0] && require("./tools/info.js");
    choice == questionTools[1] && require("./tools/liketimeline.js");
    choice == questionTools[2] && require("./tools/liketarget.js");
    choice == questionTools[3] && require("./tools/delallmedia.js");
    choice == questionTools[4] && require("./tools/flonly.js");
    choice == questionTools[5] && require("./tools/lconly.js");
    choice == questionTools[6] && require("./tools/fftauto.js");
    choice == questionTools[7] && require("./tools/fftbetaauto.js");
    choice == questionTools[8] && require("./tools/fftautov2.js");
    choice == questionTools[9] && require("./tools/fftdmauto.js");
    choice == questionTools[10] && require("./tools/fftdmbetaauto.js");
    choice == questionTools[11] && require("./tools/fhtauto.js");
    choice == questionTools[12] && require("./tools/fltauto.js");
    choice == questionTools[13] && require("./tools/unfollowall.js");
    choice == questionTools[14] && require("./tools/unfollnotfollback.js");
    choice == questionTools[15] && process.exit();
  } catch (err) {
    print(err, "err");
  }
};

console.log(chalk`{bold.green
DBINSTA V.3

  Ξ Author  : Dbareh projecting on dbinsta v3.2
  Ξ Script info/ update: json.php / 30 may 2021.
  Ξ Quote : Wat buh dak jing kylli na bynta ka jing don ne em jong u Blei kynmaw kino kino ki bym iohi ne paw ki kham ma, bad ki don ka bor ban trei bun ki kam khlem sangeh.

  Husiar : Lada phi pyn lehrain ia nga tang shisien, U Blei jong nga yn ai jingstad ha nga kham palat ban pynleh raiñ ia phi bun sien 
  }`);
console.log(chalk`{bold.red   •••••••••••••••••••••••••••••••••••••••••}`);
console.log(
  "  Ξ START  : ".bold.red + moment().format("D MMMM YYYY, h:mm:ss a")
);
console.log("  Ξ YPATH  : ".bold.red + userHome);
console.log("  Ξ YOUIP  : ".bold.red + addresses);
console.log(chalk`{bold.red   •••••••••••••••••••••••••••••••••••••••••}`);
console.log(chalk`{bold.yellow
  Github ••••••••••••••••••••••••••••••••••
  : U briew u ba stad u kren da ki sur kiba jem bad jai2 kat kum ka jing stad ka jong u hynrei U briew u ba biej yn pynksan ia ka jing biej da ka jingshit khlieh ka jong u.
  : @dbr1908 @dbareh
  •••••••••••••••••••••••••••••••••••••••••
  : Only God can stop me..
  : Don't question God existense because God is true }\n`);
main();