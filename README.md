# Reflections App

It's a big world out there and it can be hard to keep track of important experiences. This application easily allows a user to store breif descriptions of their experiences and the lessons they gained from them. The user can view, bookmark, delete, and edit these reflections. 


## This application is built with: 
- React.js
- Node.js
- React-Bootstrap
- Moment.js
- PostgreSQL
- pg 

## Instalation
In Node.js: 
- npm install
- npm run server
- npm run client

PostgreSQL: 

CREATE DATABASE "reflection_board";

-- Switch to "reflection_board" before running the following
-- Table to store the reflections
CREATE TABLE "reflection" (
  "id" serial primary key,
  "topic" varchar(120),
  "description" varchar(480),
  "bookmarked" boolean default false,
  "date" date not null default CURRENT_DATE
);

-- Sample reflection
INSERT INTO "reflection" ("topic", "description")
VALUES ('What went well?', 'Gave an ice breaker at public speaking practice.'),
('Better next time?', 'Get more sleep.'),
('What went well?', 'Built a full stack web application!'),
('Better next time?', 'Use trello to manage tasks.');


### Handcrafted by R. Atticus Pomerantz