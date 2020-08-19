DROP TABLE jokes;
DROP TABLE authors;

CREATE TABLE authors(
   id serial PRIMARY KEY,
   name TEXT,
   type TEXT
);

CREATE TABLE jokes(
    id serial PRIMARY KEY,
    question TEXT NOT NULL,
    answer TEXT,
    author_id INT REFERENCES authors(id) ON DELETE CASCADE
);


INSERT INTO authors (name, type) VALUES ('Scott Grunerud', 'student'); 
INSERT INTO authors (name, type) VALUES ('Colin McLellan', 'student'); 
INSERT INTO authors (name, type) VALUES ('Declan ODonnell', 'student'); 
INSERT INTO authors (name, type) VALUES ('Joao Goncalves Jr.', 'student'); 
INSERT INTO authors (name, type) VALUES ('Francis Bourgouin', 'instructor'); 


INSERT INTO jokes (question, answer, author_id) VALUES ('Internet Explorer', '', 1);
INSERT INTO jokes (question, answer, author_id) VALUES ('How do you know that a mathematician planted a tree ?', 'It has square roots.', 5);
INSERT INTO jokes (question, answer, author_id) VALUES ('What does a cheese lover say when someone keeps messing around with them?', 'You gouda brie kidding!', 2);
INSERT INTO jokes (question, answer, author_id) VALUES ('Why cant you hear a pterodactyl go to the bathroom?', 'Because the p is silent.', 3);
INSERT INTO jokes (question, answer, author_id) VALUES ('Knock, knock Who’s there? Ya. Ya who?', 'No thanks, I use Google.', 4);
INSERT INTO jokes (question, answer, author_id) VALUES ('What do you call a fake noodle?', 'Impasta!', 4);


