const { Intents } = require('discord.js')

module.exports.internal = {
    token: 'OTY3MDE2NDE0MTYwNTE5MjM4.YmKKNw.3ljX6ULPD01V_xQ2Ppf6S-VEU1Y',
    mongoURL: 'mongodb+srv://Dain:56135586@bot.bls3s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    prefix:'!'
}

module.exports.intents = [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING
]


module.exports.ids = {
    owner: "693453618451447829",
    messages: {
        privatrooms: '967415063482884160'
    },
    guilds: {
        main: '918193489135665193'
    },
    channels: {
        text: {
            privatrooms: '927555639394324520'
        },
        voice: {
            createPrivate: '927553746131615804'
        },
        categories: {
            privatrooms: '927553718713475102'
        }
    }
}

module.exports.permissions = {
    privateroom: {
        creator: {
            CREATE_INSTANT_INVITE: true,
            VIEW_CHANNEL: true,
            CONNECT: true,
            SPEAK: true,
            STREAM: true,
            USE_VAD: true,
            PRIORITY_SPEAKER: true,
            MANAGE_CHANNELS: false,
            MANAGE_ROLES: false,
            MANAGE_WEBHOOKS: false,
            MOVE_MEMBERS: false,
        }
    }
}

