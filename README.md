Dish Manager Database
This README provides instructions for setting up the dish_manager database and creating the dishes table. The database will store information about various dishes including their names, images, and publication status.
Database Setup
Step 1: Create the Database
To create the dish_manager database, use the following SQL command:
CREATE DATABASE dish_manager;

Step 2: Use the Database
Switch to the newly created dish_manager database:
USE dish_manager;

Step 3: Create the dishes Table
Create the dishes table with the following schema:
CREATE TABLE dishes (
  dish_id VARCHAR(255) PRIMARY KEY,
  dis_name VARCHAR(255),
  image_url VARCHAR(255),
  is_published BOOLEAN
);

Step 4: Insert Initial Data
Insert sample data into the dishes table:

INSERT INTO dishes (dish_id, dis_name, image_url, is_published) VALUES
('1', 'Jeera Rice', 'https://nosh-assignment.s3.ap-south-1.amazonaws.com/jeera-rice.jpg', true),
('2', 'Paneer Tikka', 'https://nosh-assignment.s3.ap-south-1.amazonaws.com/paneer-tikka.jpg', true),
('3', 'Rabdi', 'https://nosh-assignment.s3.ap-south-1.amazonaws.com/rabdi.jpg', true),
('4', 'Chicken Biryani', 'https://nosh-assignment.s3.ap-south-1.amazonaws.com/chicken-biryani.jpg', true),
('5', 'Alfredo Pasta', 'https://nosh-assignment.s3.ap-south-1.amazonaws.com/alfredo-pasta.jpg', true);

Summary
The dish_manager database now contains a dishes table with initial data about various dishes. The table schema includes columns for the dish ID, name, image URL, and publication status.
Contact
For any questions or issues, please contact Santhosh S at santhoshsofficial07@gmail.com.

