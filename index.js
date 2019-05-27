var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Discord Bot Activated.This page can close.");

});
var port = process.env.PORT || 3000;
server.listen(port);
// discord.js モジュールのインポート
const eris = require("eris");
// Discord Clientのインスタンス作成
var bot = new eris("NTgwNzQ1ODcwOTIwOTA4ODMx.XOVVeg.5zJLu7zAVE2zzoDIKCj-Ef8GDv0")
// トークンの用意
const token = 'NTgwNzQ1ODcwOTIwOTA4ODMx.XOVVeg.5zJLu7zAVE2zzoDIKCj-Ef8GDv0';
// 準備完了イベントのconsole.logで通知黒い画面に出る。

bot.on('ready', () => {
  console.log('ready...');

});

// メッセージがあったら何かをする
bot.on("messageCreate", message => {
  if (message.author.bot){
    return;
  }

  // if (message.isMemberMentioned(bot.user) && message.member.voiceChannel){
  //   message.member.voiceChannel.join().then( connection => {
  //     const dispatcher = connection.playFile('https://www.youtube.com/watch?v=5vedwQFQIYY');
  //     dispatcher.on('end', reason => {
  //       connection.disconnect();
  //     });
  //   })
  //   .catch(console.log);
  //   return;
  // }


  users = [
    {name: "mome", mention: "<@!317591869674487808>", ara: true, fr: true, sea: true, bf: true, ln: true, michi: true, nomad: true},
    {name: "may", mention: "<@!228583142393380874>", ara: true, fr: false, sea: false, bf: true, ln: true, michi: true, nomad: false},
    {name: "noboru", mention: "<@!261124579739566080>", ara: true, fr: true, sea: true, bf: true, ln: true, michi: true, nomad: true},
    {name: "pietan", mention: "<@!183204482568552448>", ara: true, fr: true, sea: true, bf: false, ln: true, michi: false, nomad: true},
    {name: "yutapon", mention: "<@!380686296991006722>", ara: true, fr: false, sea: false, bf: false, ln: false, michi: false, nomad: false},
    {name: "imasime", mention: "<@!236877372937207809>", ara: true, fr: false, sea: false, bf: false, ln: false, michi: false, nomad: false},
    {name: "gahara", mention: "<@!372778935437754378>", ara: true, fr: false, sea: false, bf: false, ln: false, michi: false, nomad: false},
    {name: "paladinde", mention: "<@!241201477043879937>", ara: true, fr: true, sea: true, bf: false, ln: true, michi: true, nomad: true},
    {name: "ishida", mention: "<@!314719495044464640>", ara: true, fr: false, sea: false, bf: true, ln: true, michi: true, nomad: false},
    {name: "zumi", mention: "<@!258948324541988864>", ara: true, fr: false, sea: false, bf: false, ln: false, michi: false, nomad: false},
    {name: "kom", mention: "<@!157135413478162432>", ara: true, fr: true, sea: true, bf: true, ln: true, michi: true, nomad: true},
    {name: "cwrouu", mention: "<@!280527727243689984>", ara: true, fr: false, sea: false, bf: false, ln: false, michi: false, nomad: false},
    {name: "guren", mention: "<@!231073116896362504>", ara: true, fr: true, sea: true, bf: true, ln: true, michi: true, nomad: true},
    {name: "tokotoko", mention: "<@!235750607372156928>", ara: true, fr: true, sea: true, bf: true, ln: true, michi: true, nomad: true},
    {name: "denka", mention: "<@!581699564025675796>", ara: false, fr: false, sea: true, bf: true, ln: true, michi: true, nomad: true},
  ];
  // メッセージの文字列による条件分岐
  var text = "";
  var mention = []
  if (message.content.match(/[@＠](ara|ARA|あら|アラ|ｱﾗ|ＡＲＡ|ａｒａ)/)) {mention = users.map(function(user){if(user.ara){return user.mention;}});
  } else if (message.content.match(/[@＠](fr|FR|ｆｒ|ＦＲ|フルランダム|ふるらんだむ|ふるらん|フルラン)/)) {mention = users.map(function(user){if(user.fr){return user.mention;}});
  } else if (message.content.match(/[@＠](umi|UMI|海|うみ|ウミ|ｳﾐ|ＵＭＩ|ｕｍｉ)/)) {mention = users.map(function(user){if(user.sea){return user.mention;}});
  } else if (message.content.match(/[@＠](bf|BF|森|mori|モリ|もり|ｂｆ|ＢＦ)/)) {mention = users.map(function(user){if(user.bf){return user.mention;}});
  } else if (message.content.match(/[@＠](ln|LN|ｌｎ|ＬＮ|エルエヌ|えるえぬ)/)) {mention = users.map(function(user){if(user.ln){return user.mention;}});
  } else if (message.content.match(/[@＠](michi|道|MICHI|みち|ミチ|ｍｉｃｈｉ|ＭＩＣＨＩ)/)) {mention = users.map(function(user){if(user.michi){return user.mention;}});
  } else if (message.content.match(/[@＠](nomad|NOMAD|ｎｏｍａｄ|ＮＯＭＡＤ|遊牧|ゆうぼく|ユウボク)/)) {mention = users.map(function(user){if(user.nomad){return user.mention;}});
  }
  if (text || mention.length){
    var text = text || mention.join('');
    bot.createMessage(message.channel.id, text);
  }
});

// Discordへの接続
bot.connect();
