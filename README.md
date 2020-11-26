Id	Method	Path	Description
1	get	/countries/list			Show the countries list
2	get	/countries/:id***		Show country details
3	get	/celebrations/list		Show celebrations list
4	post	/celebrations/search		Search bar for celebrations
5	get	/celebrations/details***	Show celebration details
6	get	/celebrations/new		Show the create new celebration form
7	post	/celebrations/new		Upload the new celebration on the database
8	get	/celebrations/delete?id=xxx	Delete a celebration from the database (Admin only)
9	get	/celebrations/edit?id=xxx	Show the edit celebration form
10	post	/celebrations/edit?id=xxx	Edit celebration on the database
11	get	/signup				Show the register form
12	post	/signup				Upload the user on the database
13	get	/login				Show the login form
14	post	/login				Manage login
15	get	/close				Close session
16	get	/admin/user-list		Show the users list (Admin only)
17	post	/admin/search			Search bar for users list (Admin only)
18	get	/admin/delete/:user_id		Delete user (Admin only)
19	get	/admin/new			Show the form to create new user (Admin only)
20	post	/admin/new			Upload a the new user on the database (Admin only)
21	get	/admin/edit/:user_id		Show the edit users form (Admin only)
22	post	/admin/edit/:user_id		Edit the user on the database
23	get	/				Show the index
24	get	/profile			Show profiles 		
Views:
-	Index home page
-	Layout
-	Not found
-	Error
-	Profile
-	Sing Up
-	Log In
-	Countries-list
-	Country-details
-	CelebrationPartials
-	Celebrations-list
-	Celebrations-details
-	Celebrations-details-search
-	Celebrations-new
-	Celebrations-edit
-	Users-list
-	Users-details-search
-	Users-new
-	Users-edit
