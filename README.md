Id	Method	Path	Description
1	get	/countries/list	Muestra la lista de países
2	get	/countries/:id***	Muestra los detalles de un país 
3	get	/celebrations/list	Muestra la lista de celebraciones
4	get	/celebrations/details***	Muestra detalles de la celebración
5	get	/celebrations/new	Muestra el formulario para crear celebración
6	post	/celebrations/new	Guarda en la BBDD una celebración
7	get	/celebrations/delete?id=xxx	Elimina de la BBDD una celebración (sólo Admin)
8	get	/celebrations/edit?id=xxx	Muestra el formulario para editar una celebración
9	post	/celebrations/edit?id=xxx	Edita en la BBDD la celebración
10	get	/signup	Muestra el formulario de registro
11	post	/signup	Guarda el usuario en la BBDD
12	get	/login	Muestra formulario de inicio de sesión
13	post	/login	Gestiona el inicio de sesión
14	get	/close	Cierra sesión
15	get	/admin/user-list	Muestra lista de usuarios (sólo Admin)
17	get	/admin/delete/:user_id	Borra usuario (sólo Admin)
18	get	/admin/edit/:user_id	Muestra formulario de edición de usuario (sólo Admin)
19	post	/admin/edit/:user_id	Edita usuario en BBDD



Views:
-	Homepage
-	Layout
-	Not found
-	Error
-	Lista de países
-	Detalles país
-	Lista de celebraciones
-	Detalles celebración
-	Formulario nueva celebración
-	Formulario edición de celebración
-	Formulario de registro
-	Formulario de iniciar sesión
-	Lista de usuarios
-	Formulario de edición de usuario


Run npm install
Añadir dependencias: bcryptjs, connect-flash, express-session, passport, passport-local  
