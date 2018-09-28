const DuelQueries = `
  duel(_id:String): [Duel]
`;

const DuelTypes = `
  type Duel {
    _id: String,
    name: String,
    players: Array    
  }
`;

module.exports = {
  DuelQueries,
  DuelTypes
};
