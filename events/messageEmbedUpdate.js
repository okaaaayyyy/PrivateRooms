const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")

class MessageEmbedUpdate extends Event {
    constructor() {
        super("messageEmbedUpdate")
    }

    async run(bot) {
        let channel = bot.channels.cache.get(bot.config.ids.channels.text.privatrooms)
        if(channel) {
            channel.messages.fetch(bot.config.ids.messages.privatrooms)
            .then(message => {
                let row1 = new MessageActionRow()
                .addComponents(new MessageButton().setEmoji('<:pvlimit:967408912552820776>').setCustomId('pvlimit').setStyle('SECONDARY'))
                .addComponents(new MessageButton().setEmoji('<:pvlock:967408912473133056>').setCustomId('pvlock').setStyle('SECONDARY'))
                .addComponents(new MessageButton().setEmoji('<:pvunlock:967408912422830100>').setCustomId('pvunlock').setStyle('SECONDARY'))
                .addComponents(new MessageButton().setEmoji('<:pvban:967408912594796554>').setCustomId('pvremoveuser').setStyle('SECONDARY'))
                .addComponents(new MessageButton().setEmoji('<:pvadd:967408912431185930>').setCustomId('pvadduser').setStyle('SECONDARY'))

                let row2 = new MessageActionRow()
                .addComponents(new MessageButton().setEmoji('<:pvname:967408912426995712>').setCustomId('pvname').setStyle('SECONDARY'))
                .addComponents(new MessageButton().setEmoji('<:pvcrown:967408912594763896>').setCustomId('pvcrown').setStyle('SECONDARY'))
                .addComponents(new MessageButton().setEmoji('<:pvkick:967408912456351804>').setCustomId('pvkick').setStyle('SECONDARY'))
                .addComponents(new MessageButton().setEmoji('<:pvmute:967408912582201384>').setCustomId('pvmute').setStyle('SECONDARY'))
                .addComponents(new MessageButton().setEmoji('<:punmutee:967408912607371285>').setCustomId('pvunmute').setStyle('SECONDARY'))
                
                let embed = new MessageEmbed()
                .setColor('#2f3136')
                .setTitle('Управление приватной комнатой')
                .setDescription('> Жми следующие кнопки, чтобы настроить свою комнату')
                .setFooter({text: 'Использовать их можно только когда у тебя есть приватный канал'})
                .setImage('https://images-ext-2.discordapp.net/external/93wT5AUzMZ2aUjAfzK72LGh1fcbLfm93ZpxJhjzbqCM/https/images-ext-1.discordapp.net/external/ldyVlM7WffrXZBMSmBl-PEVrJky1S7nQFv2keyOhCcw/%253Fwidth%253D1440%2526height%253D3/https/media.discordapp.net/attachments/958411770979045426/963027361341784104/1.png')
                .addField('** **',
                '<:pvlimit:967408912552820776> — установить лимит' + '\n'
                + '<:pvlock:967408912473133056> — закрыть комнату' + '\n'
                + '<:pvunlock:967408912422830100> — открыть комнату' + '\n'
                + '<:pvban:967408912594796554> — забрать доступ' + '\n'
                + '<:pvadd:967408912431185930> — выдать доступ',
                true)
                .addField('** **',
                '<:pvname:967408912426995712> — сменить название' + '\n'
                + '<:pvcrown:967408912594763896> — передать владельца' + '\n'
                + '<:pvkick:967408912456351804> — выгнать из комнаты' + '\n'
                + '<:pvmute:967408912582201384> — забрать право говорить' + '\n'
                + '<:punmutee:967408912607371285> — вернуть право говорить',
                true)
                message.edit({embeds: [embed], components: [row1, row2]})
            }).catch((err) => {
                console.log(`Ошибка с изменерием сообщения.\n${err.name}: ${err.message}`)
            })
        }
    }
}

module.exports = MessageEmbedUpdate