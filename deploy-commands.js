// File made to update commands on Discord's command list

// Require the necessary classes
const { REST, Routes } = require('discord.js');

// Use .env to configurate dev-helper
const dotenv = require('dotenv');
dotenv.config();
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env;

// Import commands
const fs = require("node:fs");
const path = require("node:path");
const commandsPath = path.join(__dirname, "commands"); // Accesses the folder 'commands'
const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js")); // Gets only files that ends with '.js'
const commands = []; // Array to save all commands
// For every file of command
for(const file of commandsFiles){
    const command = require(`./commands/${file}`); // Saves the files on a variable
    commands.push(command.data.toJSON()); // Push them into the array
}

// Instance REST
const rest = new REST({version: "10"}).setToken(TOKEN);

// Deploy
(async () => {
    try{
        if(commands.length <= 1){
            console.log(`Resetting ${commands.length} command...`);
        }else{
            console.log(`Resetting ${commands.length} commands...`);
        }

        // PUT
        const data = await rest.put(
            Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
            {body: commands}
        )

        if(commands.length <= 1){
            console.log("Command registered successfully!");
        }else{
            console.log("Commands registered successfully!");
        }
    }catch(error){
        console.error(error);
    }
})()