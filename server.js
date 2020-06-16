// reddit bot that replies when called
// const Snoowrap = require('snoowrap');
// const { CommentStream } = require('snoostorm');
// require('dotenv').config();

// const pass = process.env.PASSWORD;
// const name = process.env.NAME; 
// const secret = process.env.SECRET; 


// const client = new Snoowrap({
//     userAgent: 'my-node-js-bot',
//     clientId: 'IuKPp2j-eNEYzw',
//     clientSecret: secret,
//     username: name,
//     password: pass
// });

// const BOT_START = Date.now() / 1000;

// const canSummon = (msg) => {
//     return msg && msg.toLowerCase().includes('/u/username');
// };

// const comments = new CommentStream(client, { 
//     subreddit: 'testingground4bots', 
//     limit: 10, 
//     pollTime: 1000 
// });

// comments.on('item', (item) => {
//     if(item.created_utc < BOT_START) return;
//     if(!canSummon(item.body)) return;

//     item.reply('Hello, World.');
//     console.log(item);
// });

// console.log('Im alive dont worry')

// https://www.reddit.com/prefs/feeds/

// inbox
const axios = require('axios');
require('dotenv').config();

const inbox = process.env.INBOX 

axios.get('https://www.reddit.com/message/inbox/' + inbox,{
    params: {
      limit: 100
     }
  })
  .then((response) => {
    let dataLength = response.data.data.children
    for(var i=0; i < dataLength.length; i++){
        let messagesIn = [response.data.data.children[i].data.body]
        console.log(messagesIn);               
    }  
  })
  .catch((error) => {
      console.log(error)
  });

  
  