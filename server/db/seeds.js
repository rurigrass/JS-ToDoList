use todo_hub;
db.dropDatabase();

db.tasks.insertMany([
  {
    task: "Deal with Scott"
},
{
  task: "Deal with aubergine"
},
{
  task: "buy Davina a marshmallow thing"
}
]);
