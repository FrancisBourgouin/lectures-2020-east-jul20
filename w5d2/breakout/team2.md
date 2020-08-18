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
School to teachers

### ERD describing the relationship

+--------------+                
| School       |
+--------------+
| id  Serial PK|------|
| name VARCHAR |      |  
| address TEXT |      |
|              |      |
|              |      |
+--------------+      |
                      |
                      |
                      |
                      |
+----------------+    |
| Teacher        |    |
+----------------+    |
| id Serial PK   |    |
| school_id  FK  | >--|
| name   VARCHAR |    | 
| salary  INT    |    |
| course  INT FK |    |
|                |    |
+----------------+    |
                      |
+--------------+      |
| Student      |      |
+--------------+      |
| id Serial PK |      |
| school_id INT|>-----|
| year DATE    |      
| name TEXT    |
|              |
|              |
+--------------+