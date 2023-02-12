// Requires the necessary classes
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

// Exports the data
module.exports = {
    // Creates a new command
    data: new SlashCommandBuilder()
        .setName("motivation")
        .setDescription("Motivates your study!"),

    // Deals with the interaction
    async execute(interaction){
        const motivations = [
            "If you work hard enough and assert yourself, and use your imagination, you can shape the world to your desires",
            "Success is not final, failure is not fatal: it is the courage to continue that counts",
            "Learning is the only thing the mind never exhausts, never fears, and never regrets",
            "I find that the harder I work, the more luck I seem to have",
            "Live as if you were to die tomorrow. Learn as if you were to live forever",
            "Failure is the opportunity to begin again more intelligently",
            "Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will spend its whole life believing that it is stupid",
            "Success doesn't come to you, you go to it",
            "Work gives you meaning and purpose and life is empty without it",
            "Many of life's failures are people who did not realize how close they were to success when they gave up",
            "Your future depends on what you do today",
            "If opportunity doesn't knock, build a door",
            "The best way to predict the future is to create it",
            "I've failed over and over and over again in my life. And that's why I succeed",
            "There is no substitute for hard work"
        ];
        const motivation = motivations[Math.floor(Math.random() * motivations.length)]; // Gets a random item from the array
        
        // Builds an embed message
        const embedMotivation = new EmbedBuilder()
            .setColor("Blue")
            .setTitle("Dev Helper's Motivation")
            .setDescription(motivation);

        await interaction.reply({ embeds: [embedMotivation] });
    }
}