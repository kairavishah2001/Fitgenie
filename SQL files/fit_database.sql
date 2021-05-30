create database dim;
use dim;

CREATE TABLE `user` (
	`userId` int NOT NULL auto_increment,
	`firstName` varchar(255) NOT NULL,
	`lastName` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`age` INT NOT NULL,
	`weight` FLOAT NOT NULL,
	`height` FLOAT NOT NULL,
	`bloodGroup` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`userId`)
);
-- UserId PK and userMed added 
CREATE TABLE `medicalDetails` (
	`userId` int NOT NULL
);

CREATE TABLE `ingredients` (
	`ingredientId` varchar(255) NOT NULL,
	`ingredientName` varchar(255) NOT NULL,
	`ingredientType` varchar(255) NOT NULL,
	PRIMARY KEY (`ingredientId`)
);

CREATE TABLE `menu` (
	`dishId` varchar(255) NOT NULL,
	`dishName` varchar(255) NOT NULL,
	`dishType` varchar(255) NOT NULL,
    `image` varchar(500) NOT NULL,
	`price` FLOAT NOT NULL,
	`calories` FLOAT NOT NULL,
	`protein` FLOAT NOT NULL,
	`carbs` FLOAT NOT NULL,
	`fibre` FLOAT NOT NULL,
	`fats` FLOAT NOT NULL,
	`ingredientId` varchar(255) NOT NULL,
	PRIMARY KEY (`dishId`)
);

-- Disease is the primary key
CREATE TABLE `medicalIssues` (
	`disease` varchar(255) NOT NULL,
	`deniedIngredients` varchar(255) NOT NULL
);

-- User Id is the only foreign key here
CREATE TABLE `preferences` (
	`userId` int NOT NULL,
	`ingredientId` varchar(255) NOT NULL,
	primary key(`userId`)
);


CREATE TABLE `exercise` (
	`workType` varchar(255) NOT NULL,
	`reqNutrient` varchar(255) NOT NULL,
	PRIMARY KEY (`workType`)
);

-- WType is the FK and Date and time are added as columns 
-- userId+time+date added as the primary key
CREATE TABLE `workout` (
	`userId` int NOT NULL,
	`workoutType` varchar(255) NOT NULL
);

-- First and last name added 
CREATE TABLE `professional` (
	`pId` varchar(255) NOT NULL,
	`pFirstname` varchar(50) NOT NULL,
    `pLastname` varchar(50) NOT NULL,
	`role` varchar(50) NOT NULL,
	`qualification` varchar(50) NOT NULL,
	primary key(`pId`)
);

-- Date column is dropped and UserId is PK
CREATE TABLE `cart` (
	`userId` int NOT NULL,
	`dishId` varchar(255) NOT NULL,
	`quantity` INT NOT NULL,
	`date` DATETIME NOT NULL
);

CREATE TABLE `order` (
	`userId` int NOT NULL,
	`orderId` varchar(255) NOT NULL,
	`dishId` varchar(255) NOT NULL,
	`date` DATETIME NOT NULL,
	PRIMARY KEY (`orderId`)
);

-- User id is PK
create table `appointments`(
	`userId` int not null ,
    `pName` varchar(100),
    `appointmentDate` date,
	`appointmentTime` varchar(50),
    `role` varchar(50),
	primary key(`userId`, `appointmentDate`, `appointmentTime`)
);

ALTER TABLE `medicalDetails` ADD CONSTRAINT `medicalDetails_fk0` FOREIGN KEY (`userId`) REFERENCES `user`(`userId`);

ALTER TABLE `preferences` ADD CONSTRAINT `preferences_fk0` FOREIGN KEY (`userId`) REFERENCES `user`(`userId`);

ALTER TABLE `preferences` add CONSTRAINT `preferences_fk1` FOREIGN KEY (`ingredientId`) REFERENCES `ingredients`(`ingredientId`);

ALTER TABLE `workout` ADD CONSTRAINT `workout_fk0` FOREIGN KEY (`userId`) REFERENCES `user`(`userId`);

ALTER TABLE `workout` ADD CONSTRAINT `workout_fk1` FOREIGN KEY (`workoutType`) REFERENCES `exercise`(`workType`);

ALTER TABLE `cart` ADD CONSTRAINT `cart_fk0` FOREIGN KEY (`userId`) REFERENCES `user`(`userId`);

ALTER TABLE `cart` ADD CONSTRAINT `cart_fk1` FOREIGN KEY (`dishId`) REFERENCES `menu`(`dishId`);

ALTER TABLE `order` ADD CONSTRAINT `order_fk0` FOREIGN KEY (`userId`) REFERENCES `user`(`userId`);

ALTER TABLE `order` ADD CONSTRAINT `order_fk1` FOREIGN KEY (`dishId`) REFERENCES `menu`(`dishId`);

alter table workout add column date date;

alter table workout add column time time;

alter table medicalDetails add column userMed varchar(200);

alter table medicalIssues add primary key (`disease`); 

alter table preferences drop FOREIGN KEY preferences_fk1;

alter table workout add primary key(`userId`,`date`,`time`);

alter table cart drop column date;

alter table `cart` add primary key(`userId`);

alter table medicalDetails add primary key(`userId`);

alter table exercise add column image varchar(255);

INSERT INTO ingredients Values
('I101','Dairy', 'protein'),
('I102','Soy', 'fibre'),
('I103','Nut', 'protein'),
('I104','Seeds', 'fats'),
('I105','Nutmeg', 'fats'),
('I106', 'Vegetables', 'protein carbs'),
('I107', 'Whey', 'protein'),
('I108','Nutmeg', 'protein'),
('I109' ,'Cheese','protein'),
('I110', 'Multigrain', 'fibre'),
('I111', 'Vegetable oil' , 'fibre'),
('I112', 'Egg', 'fibre'),
('I113', 'Peanuts', 'fibre'),
('I114', 'Mustard',  'fibre'),
('I115', 'Caffeine',  'fibre'),
('I116', 'Coconut', 'carbs'),
('I117', 'Fruits', 'carbs'),
('I118', 'Chicken', 'protein'),
('I119', 'Gluten', 'protein'),
('I120', 'Sugar','fats');
 
INSERT INTO menu VALUES 
('MV101','Butter Paneer Kulcha Burger', 'High protien','https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_600,ar_1.33,c_fit/dpr_2/image/singles/eat/meals/EAT6108/primary/5_1.jpg', 99,483,16,57,11,18, 'I101 I102 I103 I104 I105 I119'),
('MV102','Classic Paneer Pizza', 'High Protein','https://cdn-images.cure.fit/www-curefit-com/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/EAT6394/primary/2_1.jpg' ,270,723,28,80,5,29, 'I106 I109 I110 '),
('MV103','Marconi Pepper Salad with Cream Jalapeno', 'Low Calorie','https://cdn-images.cure.fit/www-curefit-com/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/EAT5370/primary/4_1.jpg', 129, 329,11,47,9,11, 'I102 I103 I105 I106 '),
('MN101','Butter Chicken Kulcha Burger', 'High Protein' ,'https://cdn-images.cure.fit/www-curefit-com/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/EAT6107/primary/5_1.jpg', 99,483,18,56,12,16, 'I101 I102 I103 I104 I105 I119'),
('MN102','Indian Chicken Pizza', 'High Carbs','https://cdn-images.cure.fit/www-curefit-com/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/EAT6393/primary/2_1.jpg' , 270, 669,57,11,18,50, 'I106 I104 I109 I118'),
('MN103','Sweet Potato Herbed Grilled Chicken with Honey Mustard', 'High Fibre' , 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Soni_Khadilkar/grilled_chicken_salad_1600.jpg' ,149,14,57,11,18,8, 'I106 I103 I118'),
('MN104','Chettinad Egg Curry', 'High Protein','https://cdn-images.cure.fit/www-curefit-com/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/EAT6118/primary/2_1.jpg', 99,603,35,24,12,41, ' I103 I104 I112'),
('MN201','High protein bar', 'High Protein','https://s2.thcdn.com/productimg/1600/1600/12565702-6564838635959549.jpg', 69,269,30,23,10,7.2, 'I101 I103 I111 I112 I113'),
('MV201','High protein bar (Veg)', 'High Protein','https://s2.thcdn.com/productimg/1600/1600/12565702-6564838635959549.jpg', 69,269,30,23,10,7.2, 'I101 I103 I111I113'),
('MV203','Tender coconut water', 'High Carbs','https://cdn-images.cure.fit/www-curefit-com/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/EAT6267/primary/6_1.jpg', 40,49,0,12,0,0, 'I116'),
('MV204','Mighty Mango', 'High Carbs' ,'https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_600,ar_1.33,c_fit/dpr_2/image/singles/eat/meals/EAT6171/primary/4_1.jpg',80 ,64,0,16,0,0, 'I117 I120'),
('MV205','Whey protein shake', 'High Protein','https://fitfoodiefinds.com/wp-content/uploads/2020/01/sq.jpg',79 ,99,19,2.17,0,1.51, 'I101 I102 I107 I115');

INSERT INTO medicalIssues VALUES 
('diabetes','Sugar'),
('cholesterol','Dairy Chicken'),
('thyroid','Dairy Gluten Sugar'),
('blood pressure','Sugar Meat Caffeine');

insert into exercise values
('Leg Workout - Beginner', 'fibre','https://c4.wallpaperflare.com/wallpaper/409/386/366/legs-female-workout-crossfit-wallpaper-preview.jpg'),
('Leg Workout - Advance', 'carbs','https://lh3.googleusercontent.com/proxy/WsQf_FDqj0pL9myTM4sVkJ18j2RZf7P8PlEuFJWadEQ1NjoQY67skjEyEvbaNAZq21qsBxjRsMRDw6sxEbDP5Jb1wPE7rNIDCmLeKYO0AcfpnWUeYa7cgN4cB2at3WU551CkWl6C5xJFWpxA1w'),
('Upper Body - Beginner', 'fats','https://images.hdqwalls.com/download/fitness-gym-girl-nb-1920x1080.jpg'),
('Upper Body - Adance', 'fats','https://images.unsplash.com/photo-1605296867424-35fc25c9212a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHVsbCUyMHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'),
('Cardio - Beginner', 'carbs','https://wallpapercave.com/wp/wp7535570.jpg'),
('Cardio - Adance', 'protien','https://media.istockphoto.com/photos/below-view-of-athletic-people-cycling-on-stationary-bikes-in-a-gym-picture-id1199289629?k=6&m=1199289629&s=612x612&w=0&h=O9Rv858hU_LJRJmlRBnKxcF66NMm2_mSPl6fQISBxoU='),
('Abs- Beginner', 'fibre','https://images.pexels.com/photos/2294363/pexels-photo-2294363.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
('Abs - Adance', 'protien','https://i.pinimg.com/originals/21/30/78/213078fe758f987ed1ae5da027b4faeb.jpg');

insert into professional values
('P101','Ashna', 'Gandhi', 'Trainer','PG Diploma'),
('P102','Sumit', 'Singh', 'Trainer','HSC'),
('P103','Aakash', 'Gupta', 'Trainer','PG Diploma'),
('P104','Sanjay', 'Shah', 'Physiotherapist','B.Sc in Physiotherapy'),
('P105','Vibha', 'Patel', 'Nutritionist','M.Sc in Nutrition'),
('P106','Vikas', 'Bothra', 'Nutritionist','M.Sc in Nutrition');


-- insert into user(firstName, lastName, email, age, weight, height, bloodGroup) values('Aneri','Dalwadi','aneri.d@ahduni.edu.in','20','55','150','B+');
-- insert into user(firstName, lastName, email, age, weight, height, bloodGroup) values('Parth','Shah','parth.s5@ahduni.edu.in','20','55','170','B+');
-- insert into user(firstName, lastName, email, age, weight, height, bloodGroup) values('Sameep','Vani','sameep.v@ahduni.edu.in','20','75','175','AB+');
-- insert into user(firstName, lastName, email, age, weight, height, bloodGroup) values('Sameep','Vani','sameep0112vani@gmail.com','28','80','190','AB+');
