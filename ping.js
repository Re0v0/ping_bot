'use strict';

/**
 * A ping pong bot, whenever you send "ping", it replies "pong".
 */

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'Treyni') {
    // Send "pong" to the same channel
    message.channel.send('เจ้าคะ?');
  }
});

// Create an event listener for messages
client.on('message', message => {
    // If the message is "ping"
    if (message.content === 'Treyniทำไรอยู่') {
      // Send "pong" to the same channel
      message.channel.send('คุยกับคุณไง');
    }
  });

 // Create an event listener for messages
client.on('message', message => {
    // If the message is "ping"
    if (message.content === 'Treyniสวยไหม') {
      // Send "pong" to the same channel
      message.channel.send('คุณคิดว่าไง');
    }
  });

  // Create an event listener for messages
client.on('message', message => {
    // If the message is "ping"
    if (message.content === 'สวย') {
      // Send "pong" to the same channel
      message.channel.send('จริงนะ');
    }
  });

  // Create an event listener for messages
client.on('message', message => {
    // If the message is "ping"
    if (message.content === 'จริง') {
      // Send "pong" to the same channel
      message.channel.send('ดีใจจัง');
    }
  });

  // Create an event listener for messages
client.on('message', message => {
    // If the message is "ping"
    if (message.content === 'ไม่สวย') {
      // Send "pong" to the same channel
      message.channel.send('งอนเเล้ว');
    }
  });

   // Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'ไม่งอนน้า') {
    // Send "pong" to the same channel
    message.channel.send('T-T');
  }
});

// Log our bot in using the token from https://discord.com/developers/applications
client.login('ODY0NzM0ODgwNzIxNDAzOTE0.YO5xHQ.eYk3PrzNy_FDqW8Jbe__880rQW0');