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

// // my inbox
// const axios = require('axios');
// require('dotenv').config();

// const inbox = process.env.INBOX 

// axios.get('https://www.reddit.com/message/inbox/' + inbox,{
//     params: {
//       limit: 200
//      }
//   })
//   .then((response) => {
//     let dataLength = response.data.data.children
//     let count = 0
//     for(var i=0; i < dataLength.length; i++){
//         const messagesIn = response.data.data.children[i].data.body
//         // console.log(messagesIn);     
//         // console.log(messagesIn.includes("Trump"))         
//         if (messagesIn.includes("Trump")){
//             count++ 
//         }
//     }  
//     console.log(count)
                 
//   })
//   .catch((error) => {
//       console.log(error)
//   });

// everyone's inbox

// my inbox
const axios = require('axios');
require('dotenv').config();

const inbox = process.env.INBOX 

let user = 'username'

axios.get('https://www.reddit.com/user/' + user + '/comments.json', {
        params: {
          limit: 200
         }
      })
  .then((response) => {
    let dataLength = response.data.data.children  
    let count = 0
    for(var i=0; i < dataLength.length; i++){
        const messagesOut = response.data.data.children[i].data.body
        console.log(messagesOut + "\n");  
        console.log(messagesOut.includes("lmao"))    
        if (messagesOut.includes("lmao")){
                count++ 
            }
    }  
    console.log(count)
                 
  })
  .catch((error) => {
      console.log(error)
  });

  
  