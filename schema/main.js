const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} = require('graphql');
const roll = () => Math.floor(6 * Math.random()) + 1;

const queryType  = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        hello: {
            type: GraphQLString,
            resolve: () => 'srinivasraju you are great'
        },
        diceRoll: {
            type: new GraphQLList(GraphQLInt),
            args:{
                count:  {type: GraphQLInt},
                defaultValue: 2
            },
            resolve: (_, args) => {
                let rolls = [];
                for (let i = 0; i < args.count; i++){
                     rolls.push(roll())  ; 
                }
                return rolls;
            }
        }
    }
});

const mySchema = new GraphQLSchema({
    // root query & root mutation definitions
   // query property for read - mutation property for insert/update/delete
   query:queryType


});


module.exports = mySchema;