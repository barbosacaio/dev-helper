// Requires the necessary classes
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

// Exports the data
module.exports = {
    // Creates a new command
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Answers 'Pong!'"),

    // Deals with the interaction
    async execute(interaction){
        // Builds an embed message
        const embedMotivation = new EmbedBuilder()
            .setColor("Blue")
            .setDescription("Pong!");

        await interaction.reply({ embeds: [embedMotivation] });
    }
}