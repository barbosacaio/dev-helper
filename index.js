// Require the necessary classes
const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');

// Use .env to configurate dev-helper
const dotenv = require('dotenv');
dotenv.config();
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env;

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Import commands
const fs = require("node:fs");
const path = require("node:path");
const commandsPath = path.join(__dirname, "commands"); // Accesses the folder 'commands'
const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js")); // Gets only files that ends with '.js'
const commands = []; // Array to save all commands

client.commands = new Collection(); // Saves the commands on a Collection

// For every file of command
for (const file of commandsFiles){
    const filePath = path.join(commandsPath, file); // Gets the path
    const command = require(filePath);
    // If 'data' and 'execute' are defined
    if ("data" in command && "execute" in command){
        client.commands.set(command.data.name, command); // Sets the command on clients.command
    }else{
        console.log(`The command on ${filePath} has 'data' or 'execute' undefined.`);
    }
}

// When the client is ready, run this code (only once)
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Log in to Discord with your client's token
client.login(TOKEN);

// Interaction's listener
client.on(Events.InteractionCreate, async interaction =>{
    // If the interaction isn't a chat input
    if(!interaction.isChatInputCommand()) return;
    const command = interaction.client.commands.get(interaction.commandName); // Gets the command name
    if(!command){ // If there's no command with this name
        console.error("Command could not be found.");
        return;
    }

    try{
        await command.execute(interaction); // Executes the interaction if everything's ok
    }catch(error){
        console.error(error); // Prints the error
        await interaction.reply("The command failed!"); // Tells the user
    }
    //console.log(interaction);
})