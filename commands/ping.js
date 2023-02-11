// Requires the necessary classes
const { SlashCommandBuilder } = require("discord.js");

// Exports the data
module.exports = {
    // Creates a new command
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Answers 'Pong!'"),

    // Deals with the interaction
    async execute(interaction){
        await interaction.reply("Pong!")
    }
}