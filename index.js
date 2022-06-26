const express = require("express");
const Notification = require("./notifications.js")
const GenerateToken = require("./generateToken.js") // only needed if you want to generate your own tokens

const app = express();

// Only use it to generate Access Token for Firebase Notifications using Http v1
GenerateToken.getAccessToken()
    .then((token) => console.log("This token expires in 1 hour: " + token))
    .catch((err) => console.log("Error: ", err))


// This is to send notifications using node and express
app.get("/one-user", function (req, res) {
    // Here you could receive the token id, titulo and mensage, in this case all these params are already hardcoded
    res.send("Sending Notification to One user...");
    const data = {
        tokenId: "exL89dp0R7yAjQOAkYarwl:APA91bFJj25zIaoDzfrOrLg6OfpTKmGZwGDXfRz6G0wbYxvo2mpAOFMHPB_6EJ20J7VF9ct0Xdd-QYXxyac9XiYHxLUBy79bwZ0ohL_e9qBeSYZMZWlAMjfgu50WBdNkDWGgmllfc_wT",
        titulo: "Re:codigo",
        mensaje: "Message from Nodejs to One User"
    }
    Notification.sendPushToOneUser(data);
});

app.get("/topic", function (req, res) {
    // Here you could receive the topic id, titulo and mensage, in this case all these params are already hardcoded
    res.send("Sending Notification to a Topic...");
    const data = {
        topic: "hernan",
        titulo: "Re:codigo",
        mensaje: "Message from Nodejs to Topic test"
    }
    Notification.sendPushToTopic(data);
});

app.get("/", function (req, res) {
    res.send("Success")
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});