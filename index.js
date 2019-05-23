const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
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


  users = [
    {name: "mome", mention: "<@!317591869674487808>", ara: true, fr: true, sea: true, bf: true, ln: true, michi: true, nomad: true},
    {name: "may", mention: "<@!228583142393380874>", ara: true, fr: false, sea: false, bf: true, ln: true, michi: true, nomad: false},
    {name: "noboru", mention: "<@!261124579739566080>", ara: true, fr: true, sea: true, bf: true, ln: true, michi: true, nomad: true},
    {name: "pietan", mention: "<@!183204482568552448>", ara: true, fr: true, sea: true, bf: false, ln: true, michi: false, nomad: true},
    {name: "yutapon", mention: "<@!380686296991006722>", ara: true, fr: false, sea: false, bf: false, ln: false, michi: false, nomad: false},
    {name: "imasime", mention: "<@!236877372937207809>", ara: true, fr: false, sea: false, bf: false, ln: false, michi: false, nomad: false},
    {name: "gahara", mention: "<@!372778935437754378>", ara: true, fr: false, sea: false, bf: false, ln: false, michi: false, nomad: false},
    {name: "paladubde", mention: "<@!241201477043879937>", ara: true, fr: true, sea: true, bf: false, ln: true, michi: true, nomad: true},
    {name: "ishida", mention: "<@!314719495044464640>", ara: true, fr: false, sea: false, bf: true, ln: true, michi: true, nomad: false},
    {name: "zumi", mention: "<@!258948324541988864>", ara: true, fr: false, sea: false, bf: false, ln: false, michi: false, nomad: false},
  ];
  // メッセージの文字列による条件分岐
  var text = "";
  var mention = []
  if (message.content.match(/[@＠](ara|ARA|あら|アラ|ｱﾗ)/)) {
    mention = users.map(function(user){
      if(user.ara){
        return user.mention;
      }
    });
  } else if (message.content.match(/[@＠](fr|FR|フルランダム|ふるらんだむ|ふるらん|フルラン)/)) {
    mention = users.map(function(user){
      if(user.fr){
        return user.mention;
      }
    });
  } else if (message.content.match(/[@＠](umi|UMI|海|うみ|ウミ|ｳﾐ)/)) {
    mention = users.map(function(user){
      if(user.sea){
        return user.mention;
      }
    });
  } else if (message.content.match(/[@＠](bf|BF|森|mori|モリ|もり|ｂｆ|ＢＦ)/)) {
    mention = users.map(function(user){
      if(user.bf){
        return user.mention;
      }
    });
  } else if (message.content.match(/[@＠](ln|LN|ｌｎ|エルエヌ|えるえぬ)/)) {
    mention = users.map(function(user){
      if(user.ln){
        return user.mention;
      }
    });
  } else if (message.content.match(/[@＠](michi|道|MICHI|みち|ミチ|ｍｉｃｈｉ)/)) {
    mention = users.map(function(user){
      if(user.michi){
        return user.mention;
      }
    });
  } else if (message.content.match(/[@＠](nomad|NOMAD|遊牧|ゆうぼく|ユウボク)/)) {
    mention = users.map(function(user){
      if(user.nomad){
        return user.mention;
      }
    });
  }
  if (text || mention.length){
    var text = text || mention.join('');
    bot.createMessage(message.channel.id, text);
  }
});

// Discordへの接続
bot.connect();
