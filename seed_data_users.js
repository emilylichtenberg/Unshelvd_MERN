const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const { schema } = require('./models/Game');
const User = require('./models/User');
const Group = require('./models/Group');
const Game = require('./models/Game');


mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .then(() => loadCounter())
  .catch(err => console.log(err));

const seedUsers = [
  new User (
    {
      username: 'ColonelMustard',
      email: 'defNotSus@clue.com',
      password: 'password',
      // games: [{
      //   // type: Schema.Types.ObjectId,
      //   // ref: 'Game'
      // }],
      // groups: [{
      //   // Schema.Types.ObjectId,
      //   // ref: 'Group'
      // }],
    }
  ),
  new User(
    {
      username: 'ProfPlum',
      email: 'aLittleSus@clue.com',
      password: 'password',
      // games: [{
      //   // type: Schema.Types.ObjectId,
      //   // ref: 'Game'
      // }],
      // groups: [{
      //   // Schema.Types.ObjectId,
      //   // ref: 'Group'
      // }],
    }
  ),
  new User(
    {
      username: 'misterGreen',
      email: 'withEnvy@clue.com',
      password: 'password',
      // games: [{
      //   // type: Schema.Types.ObjectId,
      //   // ref: 'Game'
      // }],
      // groups: [{
      //   // Schema.Types.ObjectId,
      //   // ref: 'Group'
      // }],
    }
  ),
  new User(
    {
      username: 'MrsWhite',
      email: 'jaccuse@clue.com',
      password: 'password',
      // games: [{
      //   // type: Schema.Types.ObjectId,
      //   // ref: 'Game'
      // }],
      // groups: [{
      //   // Schema.Types.ObjectId,
      //   // ref: 'Group'
      // }],
    }
  ),
  new User(
    {
      username: 'MsScarlett',
      email: 'redWithWhat@clue.com',
      password: 'password',
      // games: [{
      //   // type: Schema.Types.ObjectId,
      //   // ref: 'Game'
      // }],
      // groups: [{
      //   // Schema.Types.ObjectId,
      //   // ref: 'Group'
      // }],
    }
  ),
  new User(
    {
      username: 'MissusPeacock',
      email: 'theyWillNotice@clue.com',
      password: '',
      // games: [{
      //   // type: Schema.Types.ObjectId,
      //   // ref: 'Game'
      // }],
      // groups: [{
      //   // Schema.Types.ObjectId,
      //   // ref: 'Group'
      // }],
    }
  ),
  new User(
    {
      username: 'aCandleStick',
      email: 'lumierreTheHost@clue.com',
      password: 'password',
      // games: [{
      //   // type: Schema.Types.ObjectId,
      //   // ref: 'Game'
      // }],
      // groups: [{
      //   // Schema.Types.ObjectId,
      //   // ref: 'Group'
      // }],
    }
  ),
  new User(
    {
      username: 'theLeadPipe',
      email: 'theBetterOption@clue.com',
      password: 'password',
      // games: [{
      //   // type: Schema.Types.ObjectId,
      //   // ref: 'Game'
      // }],
      // groups: [{
      //   // Schema.Types.ObjectId,
      //   // ref: 'Group'
      // }],
    }
  ),
  new User(
    {
      username: 'TopsyKirby',
      email: 'Kirby@unshelvd.com',
      password: 'password',
      // games: [{
      //   // type: Schema.Types.ObjectId,
      //   // ref: 'Game'
      // }],
      // groups: [{
      //   // Schema.Types.ObjectId,
      //   // ref: 'Group'
      // }],
    }
  ),
  new User(
    {
      username: 'WinnaBill',
      email: 'Bill@unshelvd.com',
      password: '',
      // games: [{
      //   // type: Schema.Types.ObjectId,
      //   // ref: 'Game'
      // }],
      // groups: [{
      //   // Schema.Types.ObjectId,
      //   // ref: 'Group'
      // }],
    }
  ),
  new User(
    {
      username: 'EmilyTheUndefeated',
      email: 'Emily@unshelvd.com',
      password: 'password',
      // games: [{
      //   // type: Schema.Types.ObjectId,
      //   // ref: 'Game'
      // }],
      // groups: [{
      //   // Schema.Types.ObjectId,
      //   // ref: 'Group'
      // }],
    }
  ),
  new User(
    {
      username: 'EthanWithTheW',
      email: 'Ethan@unshelvd.com',
      password: 'password',
      // games: [{
      //   // type: Schema.Types.ObjectId,
      //   // ref: 'Game'
      // }],
      // groups: [{
      //   // Schema.Types.ObjectId,
      //   // ref: 'Group'
      // }],
    }
  ),

] 


// LOAD LOGIC

const loadCounter = () => {
  let gamesDone = 0;
  for (let i = 0; i < seedUsers.length; i++) {
    // debugger
    seedUsers[i].save((err, res) => {
      console.log(`errors = ${err} res = ${res} `);
      console.log(`i = ${i} game = ${seedUsers[i]} `);
      gamesDone++;
      if (gamesDone === seedUsers.length) {
        // debugger
        console.log(`${i}`);
        exit();
      }
      // debugger
    });
  }

  // should add documents, then disconnect once finished (callback below)

};
const exit = () => {
  mongoose.disconnect()
    .then(() => console.log('Disonnected from MongoDB successfully'));
};



// FORMAT

// const seedUsers = [
//   {
//     username: '',
//     email: '',
//     password: '',
//     games: [{
//       // type: Schema.Types.ObjectId,
//       // ref: 'Game'
//     }],
//     groups: [{
//       // Schema.Types.ObjectId,
//       // ref: 'Group'
//     }],
//   },
// ] 