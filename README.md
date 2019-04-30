Yugiohapp is an Node.js/Express webaplication, with a mongodb database, to manage
yugioh's duels and update an duels history.

In the frontend we've an ejs engine working with HTML, CSS and javascript/jQuery.

Basically yugiohapp is entire written in javascript.

On yugiohapp.ejs: select the name of duelists (for while the names are display as static) and click the button to start the duel engine.

On duel engine you have 2 methods for each duelist = increase or damage, use it based on card's effects and damage.

When one of duelists have their lifepoints equal 0, send the duel data to the database.

If you click on Yu-gi-oh's logo, you'll be redirect to duel history's page, there you could see all history saved on database.

FEATURES TO CREATE: 
-duelists factory, for add new duelists to database
-display duelist's name dynamically, based on duelist's collection on mongodb.
-create a duelist's rank based on duel's history.
-whatever that is on your mind, few free to change, improve or copy anything.

