use todo_hub;
db.dropDatabase();

db.tasks.insertMany([
  {
    task: "Deal with Scott",
    details: "break up",
    completed: false
},
{
  task: "Deal with aubergine",
  details: "break up",
  completed: false
},
{
  task: "buy Davina a marshmallow thing",
  details: "when I get my first salary",
  completed: false
}
]);
