use todo_hub;
db.dropDatabase();

db.tasks.insertMany([
  {
    name: "Deal with Scott"
},
{
  name: "Deal with aubergine"
},
{
  name: "buy Davina a marshmallow thing"
}
]);
