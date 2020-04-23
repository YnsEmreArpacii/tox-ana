const Discord = require('discord.js')

exports.run = async (client ,message ,args) => {
  message.delete();
if(!message.member.roles.get("702800562315591700") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Bu Komutu Kullanmaya Yetkin Yok!!").then(m => m.delete(5000));

const id = args[0]
if (!id)

return message.reply("İD AT LAN !!")//KANAL YOKSA VEYA İD GİRİLMEDİYSE

message.guild.members.filter(a => a.voiceChannel).forEach(x => x.setVoiceChannel(id))

message.channel.send(`Bütün Sesli Kanaldaki Üyeler **<#${id}>** İsimli Odaya Taşındı! `)//İŞLEM SONRASI
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['herkesi-taşı'],
  permLevel: 0
};
exports.help = {
  name: "hçek"
};
