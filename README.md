<h2 align="center">
  Dev Helper - v1.0.0<br/>
  <a href="https://discord.com/api/oauth2/authorize?client_id=1074053061334536303&permissions=8&scope=bot%20applications.commands" target="_blank">Invite me!</a>
</h2>
<div align="center">
  <img alt="Demo" src="./assets/discord-wallpaper.jpg" />
</div>

<br/>

<center>

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) &nbsp;
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) &nbsp;
[![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com) &nbsp;

</center>

<h3 align="center">
    🔹
    <a href="https://github.com/barbosacaio/dev-helper/issues">Report Bug</a> &nbsp; &nbsp;
    🔹
    <a href="https://github.com/barbosacaio/dev-helper/issues">Request Feature</a>
</h3>

## Description

The whole idea behind **Dev Helper** is to help as many developers as possible to keep track of some of the basics, 
and their own study routine. One other motivation was my own development while studying Javascript and discord.js.<br/>

**Dev Helper** uses:

- Node.js
- Javascript
- Discord.js
- Visual Studio Code

## Features

**🙏 Open Source**

**🤖 Multiple Commands**

## Getting Started

Clone down this repository. You will need `node.js`, `discord.js`, `dotenv` and `git` installed globally on your machine.

- <a href="https://nodejs.org/en/download/" target="_blank">Node.js</a>
- `npm install discord.js`
- `npm install dotenv`
- <a href="https://git-scm.com/downloads" target="_blank">Git</a>

## Setup Instructions

1. Go to <a href="https://discord.com/developers/applications" target="_blank">Discord Developers</a>
2. Create a new application
3. Go to `Bot` and create a new bot. **REMEMBER to copy it's TOKEN as you'll not be able to see it later**
4. Go to `OAuth2 > URL Generator` and select on **Scopes**: `bot` and `application.commands`
5. Scroll down and select on **BOT Permissions: `Administrator`
6. Below all of these permissions, you will have the **Generated URL** that you can use to add your BOT to any server
7. Create a `.env` file and write, deleting all brackets
    ```TOKEN={Your TOKEN here}
    CLIENT_ID={Can be found on 'General Information' as 'Application ID'}
    GUILD_ID={Get by right-clicking on the server name on Discord and selecting 'Copy ID'}```
8. Open your terminal and run `node deploy-commands.js` to initialize all commands (only need to do if creating or deleting commands)
9. Run `node index.js`
10. Enjoy your new fully functioning Discord Bot!