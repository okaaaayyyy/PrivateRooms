class Ready extends Event {
    constructor() {
        super("ready")
    }

    async run(bot) {
        console.log(bot.user.tag)

        bot.channels.cache.get('927555639394324520').send({embeds: [{title: 'Первоначальная настройка!'}]})

        bot.emit('messageEmbedUpdate', bot)
    }
}

module.exports = Ready