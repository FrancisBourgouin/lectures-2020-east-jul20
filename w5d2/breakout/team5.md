## Building an ERD 

### Example of ERD box
+------------+
| TITLE HERE |
+------------+
|            |
|            |
|            |
|            |
|            |
|            |
+------------+

### Description of your relationship
A single person (one) who has a personal library with multiple books (many). 

### ERD describing the relationship

+---------------------------+
| person                    |
+---------------------------+
| id SERIAL PK              |
| name VARCHAR              |  
| address TEXT              |
| birthdate DATE            |
| reading preferences TEXT  |
| personal library id FK    |
+---------------------------+

+---------------------+
| personal library    |
+---------------------+
| id SERIAL PK        |
| person_id FK        |
| book_id FK          |
|                     |
|                     |
|                     |
+---------------------+

+---------------------+
| books    |
+---------------------+
| id SERIAL PK        |
| name        |
| author              |
|                     |
|                     |
|                     |
+---------------------+