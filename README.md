# Installation
1. Download the directory
2. Change into the project directory and open ur terminal
3. Run the following command <code>npm install</code>
4. Finally run <code>npm run dev</code> to start the project

# Docker
1. Download the Backend Repo, change to the dev branch and run <code>docker-compose up</code> to start the project
2. Go to the CLI of the "Phpmyadmin" container and run <code>composer install</code> and then <code>php artisan migrate:refresh --seed</code>

# Pages
<b>Port usually is 3000</b>

1. localhost:{PORT} --> Home page
2. localhost:{PORT}/ayuda --> Help page
3. localhost:{PORT}/configuraciones --> Settings page
4. localhost:{PORT}/informacion-del-objeto --> Object page
5. localhost:{PORT}/mi-perfil --> Profile page
6. localhost:{PORT}/mis-encontrados --> My found objects page
7. localhost:{PORT}/mis-perdidos --> My lost objects page
8. localhost:{PORT}/publicar-objeto-perdido --> Post lost object page
9. localhost:{PORT}/resultados --> Results of searching page
