const Discord = require ('discord.js')
const bot = new Discord.Client()

var prefix = (".")

bot.login(process.env.TOKEN)

//<:Mod:461116218175127553>
//<:Utiles:461116219164983306>
//<:Createur:461116218003161088>
//<:Fun:461116218116407306>
//<:Oui:461116218988953610>
//<:Non:461116218825506816>

bot.on('ready', () => {
    console.log(`✔ ${bot.user.tag}`);
     bot.user.setActivity(".help | Noctunia | Fortnite Team", {
        type: "STREAMING",
        url: "http://twitch.tv/NoctuniaFortnite"
      });
    }, 8000);

bot.on('message', message => {
    if(message.content.startsWith(prefix + "help")) {
        var help = new Discord.RichEmbed()
        .setTitle("Prefix :")
        .setDescription("``.``")
        .addField("<:Utiles:461116219164983306> Utiles :", "``.help``\n``.listteam``\n``.avatar``", true)
        .addField("<:Fun:461116218116407306> Fun :", "``.roll``\n``.ask``", true)
        .addField("<:Mod:461116218175127553> Modération :", "``.clear``\n``.mute``\n``.unmute``\n``.kick``\n``.ban``", true)
        .addField("<:Createur:461116218003161088> Créateur :", "``.say``", true)
        .setColor("0xDF0101")
        message.channel.send(help)
    }
});

bot.on('message', message => {
  if(message.content.startsWith(prefix + "listteam")) {
    message.channel.send("<:Utiles:461116219164983306> | Team 2k18 :\n```• Noctunia Shey (C)\n• Noctunia Kb44\n• Noctunia ?\n• Noctunia ?```\n\n**Tu peux aussi allez voir dans le channel correspondant (#roster)**")
  }
});

bot.on('message', message => {
    if(message.content.startsWith(prefix + "avatar")) {
        message.member.createDM().then(channel => {
            message.delete()
            var avatar = new Discord.RichEmbed()
            .setAuthor("Noctunia - Avatar")
            .setImage(message.author.avatarURL)
            .setFooter("Avatar")
            .setTimestamp()
            .setColor("0xDF0101")
            return channel.send(avatar)
       }
    )};
});

bot.on('message', message => {
    if(message.content.startsWith(prefix + "say")) {
        if(message.author.id == "265151154537758720") {
        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ")
            message.delete()
            message.channel.send(thingToEcho)
        }
    }
});

bot.on('message', message => {
    if(message.content.startsWith(prefix + "clear")) {
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) {
            return message.channel.send(`<:Non:461116218825506816> | Tu n'as pas la permission pour effectuer cette commande.`)
        }
        var deleteCount = message.content.substr(7);
            if (!deleteCount || deleteCount < 1 || deleteCount > 100)
                return message.channel.send('<:Non:461116218825506816> | Merci de choisi un nombre entre 1 et 100.')
                message.delete()
                message.channel.bulkDelete(deleteCount, true)
                var clear = new Discord.RichEmbed()
                .addField("Utilisateur", message.author.username, true)
                .addField("Message(s) clear", deleteCount, true)
                .setFooter("Noctunia | Clear")
                .setTimestamp()
                .setColor("0xDF0101")
                message.channel.send(clear)
    }
});

bot.on('message', message => {
    if(message.content.startsWith(prefix + "mute")) {
        if(message.guild.id === "461527623735181323") {
            var muterole = message.guild.roles.find("name", "Noctunia | Mute");
            let modRole3 =  message.guild.roles.find("name", "Noctunia | Modérateurs");
            if(!message.member.roles.has(modRole3.id)) {
                return message.channel.send("**<:Non:461116218825506816> | Vous n'êtes pas modérateur du serveur.**")
            }

            if(message.mentions.users.size === 0) {
                return message.channel.send("**<:Non:461116218825506816> | Vous devez mentionner un utilisateur.**");
            }
    
            var mute2 = message.guild.member(message.mentions.users.first());
            if(!mute2) {
                return message.channel.send("**<:Non:461116218825506816> | Je ne sais pas si l'utilisateur existe.**");
            }

            var mute = new Discord.RichEmbed()
            .setAuthor(`${message.author.tag} - Mute`, message.author.avatarURL)
            .addField("Utilisateur :", mute2)
            .setFooter("Mute")
            .setTimestamp()
            .setColor("0xDF0101")

            var mutemp = new Discord.RichEmbed()
            .setAuthor("Noctunia - Mute")
            .addField("Vous avez été mute par :", message.author.tag)
            .setFooter("Mute")
            .setTimestamp()
            .setColor("0xDF0101")

            message.delete()
            message.guild.channels.find("id", "461568121564823552").send(mute)
            mute2.send(mutemp)
            mute2.addRole(muterole)
        }
    }
});

bot.on('message', message =>  {
    if(message.content.startsWith(prefix + "unmute")) {
        if(message.guild.id === "461527623735181323") {
            var muterole = message.guild.roles.find("name", "Noctunia | Mute");
            let modRole3 =  message.guild.roles.find("name", "Noctunia | Modérateurs");
            if(!message.member.roles.has(modRole3.id)) {
                return message.channel.send("**<:Non:461116218825506816> | Vous n'êtes pas modérateur du serveur.**")
            }

            if(message.mentions.users.size === 0) {
                return message.channel.send("**<:Non:461116218825506816> | Vous devez mentionner un utilisateur.**");
            }
    
            var unmute2 = message.guild.member(message.mentions.users.first());
            if(!unmute2) {
                return message.channel.send("**<:Non:461116218825506816> | Je ne sais pas si l'utilisateur existe.**");
            }

            var unmute = new Discord.RichEmbed()
            .setAuthor(`${message.author.tag} - Unmute`, message.author.avatarURL)
            .addField("Utilisateur :", unmute2)
            .setFooter("Unmute")
            .setTimestamp()
            .setColor("0xDF0101")

            var unmutemsg = new Discord.RichEmbed()
            .setAuthor("Noctunia - Unmute")
            .addField("Vous avez été unmute par :", message.author.tag)
            .setFooter("Unmute")
            .setTimestamp()
            .setColor("0xDF0101")

            message.delete()
            message.guild.channels.find("id", "461568121564823552").send(unmute)
            unmute2.send(unmutemsg)
            unmute2.removeRole(muterole);
        }
    }
});

bot.on('message', message => {
    if(message.content.startsWith(prefix + 'kick')) {
     if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("**<:Non:461116218825506816> | Vous n'avez pas la permission.**");
 
         if(message.mentions.users.size === 0) {
             return message.channel.send("**<:Non:461116218825506816> | Vous devez mentionner un utilisateur.**")
         }
 
         var kick = message.guild.member(message.mentions.users.first());
         if(!kick) {
             return message.channel.send("**<:Non:461116218825506816> | Je ne sais pas si l'utilisateur existe.**")
         }
                      
         kick.kick().then(member => {
            var kick2 = new Discord.RichEmbed()
            .setAuthor(`${message.author.tag} - Kick`, message.author.avatarURL)
            .addField("Utilisateur :", member.user.username)
            .setFooter("Kick")
            .setTimestamp()
            .setColor("0xDF0101")

            message.guild.channels.find("id", "461568121564823552").send(kick2)
         });
     }
 })

 bot.on('message', message => {
    if(message.content.startsWith(prefix + "ban")) {
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("**<:Non:461116218825506816> | Vous n'avez pas la permission.**");

        if(message.mentions.users.size === 0) {
            return message.channel.send("**<:Non:461116218825506816> | Vous devez mentionner un utilisateur.**");
        }

        var ban = message.guild.member(message.mentions.users.first());
        if(!ban) {
            return message.channel.send("**<:Non:461116218825506816> | Je ne sais pas si l'utilisateur existe.**");
        }

        ban.ban().then(member => {
            var ban2 = new Discord.RichEmbed()
            .setAuthor(`${message.author.tag} - Ban`, message.author.avatarURL)
            .addField("Utilisateur :", member.user.username)
            .setFooter("Ban")
            .setTimestamp()
            .setColor("0xDF0101")

            message.guild.channels.find("id", "461568121564823552").send(ban2)        
            }

        )
    
    }
});

        bot.on('message', message => {
            if(message.content.startsWith(prefix + "roll")) {
        
                var replys2 = [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6"
                ];
        
                let reponse2 = (replys2[Math.floor(Math.random() * replys2.length)])
                var embedroll = new Discord.RichEmbed()
                .setAuthor("Nomaki - Roll")
                .addField( "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬", "**:game_die: Roll :**")
                .addField(reponse2, "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")
                .setFooter("Nomaki")
                .setTimestamp()
                .setColor("0xDF0101")
            message.channel.send(embedroll)
        
            }
        });

bot.on('message', message => {
    if(message.content.startsWith(prefix + "ask")) {
        var messageArray = message.content.split(" ");
        var args = messageArray.slice(1);
        if(!args[2]) return message.channel.send(`**<:Non:461116218825506816> | Tu dois poser une question.**`);

             var replys = [
                 "Oui", 
                 "Non"
                 
                ];

var reponse = Math.floor((Math.random() * replys.length));
var question = args.slice(0).join(" ");

             var embed = new Discord.RichEmbed()
             .setColor("0xDF0101")
             .addField(`**Question posé par ${message.author.tag}**`, "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")
             .addField("**Question**", question)
             .addBlankField()
             .addField("**Réponse**", replys[reponse])
             .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬", "Noctunia")
             message.channel.send(embed);
         }
        });
