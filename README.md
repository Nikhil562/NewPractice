table names must be plural(flights, books )
 model names uses CamelCase , singular 

 model attributes -> snake_case
 
//migration helps to make incremental changes to your table
If I add 1 more table it will create 1 more migration file 

migration files says do u still want to make more changes here , if yes then do I am not syncing thats why no table is prsent in db 

db migrater command migrations your db with fact that new migrations which might not be applied will be applied 

sequelizemeta data fill contains all migrations we applied on the db 

If we run a migration bymistake:- npx sequelize db:migrate:undo


Services will contain all business logic


//Index.js in model:- whatever model we make it will fetch from here that's why we dont want to hemper it

fun({abc}) if we do this destrcuturing then we dont need to do obj.abc we can directly use it as abc

app.get('/',
<!-- this part is controller :-// -->
 (req, res) => {
  res.send('hello world')
  <!--  -->
})
                  <!-- Middle wares  -->
const logStuff = [logOriginalUrl, logMethod]
app.get( routes '/user/:id', logStuff, (req, res, next) => {
  res.send('User Info')
  <!-- controller -->
})




Express router 