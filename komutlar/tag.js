const Discord = require('discord.js');

exports.run = async (client, message) => {
  const yasak = client.emojis.get('701884491647549502');
  if (message.channel.id !== '701141469674864720') return message.channel.send(`${yasak} **Bu Komutu <#693286888341110885> Gidip Yazmalısınız.**`).then(m => m.delete(5000));  
  const elmas = client.emojis.get('694626540977127424');
  const emoji = client.emojis.get('694639615809814699');
      message.delete()
  const embed = new Discord.RichEmbed()
     .setColor('RANDOM')
    .setDescription(`
 ${elmas}***<@${message.author.id}> Yardımcı Oluyoruz Size :)***

${elmas} **Sol Altta İsiminizin Yanında Mikrofon Ses ve Ayarlar Menüsü var.**
${elmas} **Ayarlar Menüsüne Tıklıyorsunuz.**
${elmas} **"HESABIM" Bölümünde Düzenleye Tıklayın**
${elmas} **Kullanıcı Adınızın Başına "Ꮦ" Tagını Ekleyin.**
${elmas} **Şifrenizi Yazıp Kaydete Tıklayın.**       
`,true)
        .setFooter(`Ailemize Katılmak Mı İstiyorsun? Devam Etmelisin... Yardımlar Yolda Geliyor...`)
message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  aliases: ['tag'],
  permLevel: 0,
};

exports.help = {
  name: "tag",
  description: "Bot bulunduğunuz odaya girer.",
  usage: "tag",
};
