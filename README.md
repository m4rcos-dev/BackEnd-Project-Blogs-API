#### EN - English [(Versão em Português Brasil aqui)](https://github.com/m4rcos-dev/BackEnd-Project-Blogs-API/blob/main/README_pt-br.md)

<h1 align="center">🎉 Welcome to my blogs API project repository </h1>

![swagger documetation blogs api](https://user-images.githubusercontent.com/104791582/225178878-0b5ef381-f88b-4098-8043-a6ec66ea7d32.gif)

![flag tools](https://img.shields.io/badge/Tools-%20Docker%20|%20Node.js-9cf) ![flag tools](https://img.shields.io/badge/Languages-JavaScript-yellow) ![flag tools](https://img.shields.io/badge/Frameworks-Express%20|%20JWT%20|%20Swagger-yelow) ![flag database](https://img.shields.io/badge/Database-MySql-green) ![flag orm](https://img.shields.io/badge/ORM-Sequelize-blue)

### [DEPLOY](https://LINK)

<p>Project developed during the back-end module of the Trybe full-stack web development course.</p>
<p>In this project an API and a database were developed to produce content for a blog.</p>
<p>A Node.js application using the sequelize package to do a CRUD of posts. Creating endpoints that are connected to the database following REST principles</p>


## 🔨 Project Resources

<ul>
<li>✅EndPoint for user login, using the POST method.</li>
<li>✅EndPoint for registering users, using the POST method.</li>
<li>✅EndPoint for lists all registered users, using the GET method</li>
<li>✅EndPoint for lists by id only a registered user, using the GET method</li>
<li>✅EndPoint to delete logged in user, using the DELETE method</li>
<li>✅EndPoint for post category registration, using the POST method.</li>
<li>✅EndPoint for lists all categories of registered posts, using the GET method</li>
<li>✅EndPoint for lists all registered posts, using the GET method</li>
<li>✅EndPoint for lists by id just a registered post, using the GET method</li>
<li>✅EndPoint for lists by query informed only a registered post that corresponds to the title or content of the post, using the GET method</li>
<li>✅EndPoint for registering a new post, using the POST method.</li>
<li>✅EndPoint to update an existing post, using the PUT method.</li>
<li>✅EndPoint to delete an existing post, using the DELETE method</li>
<li>✅To make a post, you need a user and a login, so the relationship between the user and post tables is worked on</li>
<li>✅It is necessary to use categories for posts, thus working on the relationship between posts tables for categories and categories for posts</li>
</ul>

## ▶️ Running application
<details>
   <summary><strong>🐋 Running on Docker vs Locally</strong></summary>

   ## 👉 With Docker

**⚠️ Before starting, your docker-compose needs to be at version 1.29 or higher. [See here](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) or [in the documetation](https://docs.docker.com/compose/install/)  how to install it. In the first article, you can replace where you are with `1.26.0` with `1.29.2`.**


> ℹ️ Run the `node` and `db` services with the `docker-compose up -d --build` command.

   - Remember to stop `mysql` if you are using it locally on the default port (`3306`), or adapt it, if you want to use the application in containers;

   - These services will initialize a container named `blogs_api` and another named `blogs_api_db`;

   - From here you can run the `blogs_api` container via CLI or open it in VS Code;

   > ℹ️ Use the command `docker exec -it blogs_api bash`.

   - It will give you access to the interactive terminal of the container created by compose, which is running in the background.

   > ℹ️ Install dependencies [**If any**] with `npm install`. (Install inside the container)

   - **⚠️ Attention:** If you choose to use Docker, **ALL** the commands available in `package.json` (npm start, npm test, npm run dev, ...) must be executed **INSIDE ** of the container, that is, in the terminal that appears after executing the `docker exec` command mentioned above.

   - **⚠️ Attention:** The **git** inside the container is not configured with your credentials. Either commit outside the container, or set your git credentials inside the container.

   - **⚠️ Attention:** Do not run the npm audit fix command! It updates several project dependencies, and this update causes conflicts.

   - ✨ **Tip:** The `Remote - Containers` extension is indicated so that you can develop your application in the Docker container directly in VS Code, as you do with your local files.

   <img src="https://user-images.githubusercontent.com/104791582/213542711-a092f145-a6e3-4172-89f4-417379cfefae.png" width="800px" >

   <br />

   ## 👉 Without Docker

   > ℹ️ Install dependencies [**If any**] with `npm install`

   - **⚠️ Attention:** Do not run the npm audit fix command! It updates several project dependencies, and this update causes conflicts.

   - **✨ Tip:** To run the project this way, you must have `node` installed on your computer.
   <br/>
</details>
<details>
   <summary id="diagram"><strong>🎲 ER and Entities Diagram</strong></summary>

   #### Entity-Relationship Diagram

   ![der](https://user-images.githubusercontent.com/104791582/225185857-9875236d-8b62-49fc-a774-ebbae9cf45e4.png)

  ---

  #### Format of entities

  - A table called **users**, containing data with the following structure:

    | id  | display_name    | email           | password | image                                                                                   |
    | --- | --------------- | --------------- | -------- | --------------------------------------------------------------------------------------- |
    | 1   | Brett Wiltshire | brett@email.com // tem quer ser único | 123456   | http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png |

  - A table called **categories**, containing data with the following structure:

    | id  | name |
    | --- | ---- |
    | 18  | News |

  - A table called **blog_posts**, containing data with the following structure:

    | id  | title                      | content                                                | user_id | published                | updated                  |
    | --- | -------------------------- | ------------------------------------------------------ | ------- | ------------------------ | ------------------------ |
    | 21  | Latest updates, August 1st | The whole text for the blog post goes here in this key | 14 // Foreign key, referencing the id of `users`    | 2011-08-01T19:58:00.000Z | 2011-08-01T19:58:51.947Z |


  - A table called **PostCategories**, containing a **composite primary key** using the two structure attributes:

    | post_id | category_id |
    | ------- | ----------- |
    | 50 // Primary and foreign key, referencing the id of `BlogPosts`     | 20 // Primary and foreign key, referencing id from `Categories`     |


    *The data above are fictitious, and are here only as an example*

    ---
<br />
</details>
<details>
   <summary><strong>👀 Ready-made script tips</strong></summary>

   ---

   - Delete the database:
     ```json
     "drop": "npx sequelize-cli db:drop"
     ```

   - Create the database and generate the tables:
     ```json
     "prestart": "npx sequelize-cli db:create && npx sequelize-cli db:migrate"
     ```

   - Insert data / Populate the table:
     ```json
     "seed": "npx sequelize-cli db:seed:all"
     ```
<br />
</details>
</br>

## 🧔 Author

<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="dev-marcospaulo " data-version="v1"><a class="badge-base__link LI-simple-link" href="https://br.linkedin.com/in/dev-marcospaulo?trk=profile-badge">Marcos Paulo Pereira</a></div>
