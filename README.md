# Farmers App

This app is the result of the final project for React22K course, team Kernel.

This app was a Nahomzoe's (@ github) idea.
scrum mastered by VitaliiDubini (@ github)

## Using the image

### Installation

```shell
git clone https://github.com/VitaliiDubinin/STP_Kernel.git
docker-compose up --build
cd web
npm install
npm install react-use-cart
npm i bootstrap
npm run watch
```

- phpMyAdmin will run on [http://localhost:9582]
- npm watch will run on [http://localhost:8507]

go to your docker dasboard,
enter in cli of phpMyAdmin:

```shell
cd web
php bin/console doctrine:migrations:migrate
```

## Heroku deploy

- create an account in heroku https://signup.heroku.com/login

  in dashboard right top corner:
  create new app button

- install Heroku in your computer

  ```shell
  brew tap heroku/brew && brew install heroku
  ```

- install heroku in your app - create 2 files in the root of your repository called - server.js
  copy this in it:
  `javascript const jsonServer = require('json-server'); const server = jsonServer.create(); const router = jsonServer.router('./db.json'); const middlewares = jsonServer.defaults({ static: './build' }); const PORT = process.env.PORT || 8000; server.use(middlewares); server.use(jsonServer.rewriter({ '/api/\*': '/$1', })) server.use(router); server.listen(PORT, () => { console.log('Server is running'); }); ` - Procfile (notice - no extension)
  copy this in it:
  web: node server.js

      - in the package.json file of your app change:

          "start": "react-scripts start" => "start":"node server.js",

      - in IDE terminal: (you might get an error... is ok)

          ```shell
          npm install -g heroku
          heroku --version
          heroku login
          heroku git:remote -a {your_app_name}
          git remote show
          git add .
          git commit -m "awesome"
          git push heroku
          ```

- go to browser and find "open app" btn, press it.
  copy the url of the browser, that is your app url.

### database:

    -   if you are using a database from react json-server
    change the end-point of your database url to "api/{your_database_end_point_name}" wherever your app is using it.

    -   if you are using a database from mysql with symfony ????

    -   if you are using a database external api remains unchanged.

    remember save changes:
    ```shell
    git add .
    git commit -m "awesome"
    git push heroku
    ```

### dismount from heroku

in terminal:

```shell
heroku apps:destroy --app <appname> --confirm <appname>
```

# Use for reference

Use solely for reference material only. yes!
