## Building an ERD 

### Example of ERD box

+------------+      
|    song    |
+------------+
| id            |
| name          |
| duration   
| artist         |
| genre_id          |
| artist_id
| album_id         |
+------------+

+------------+      
|    album   |
+------------+
| id               |
| name  
| song_id           |
| publisher_id     |
| release_date     |
+------------+

+------------+      
|    publisher   |
+------------+
| id               |
| name             |
+------------+

+------------+      
|    artist   |
+------------+
| id               |
| name             |
| date_of_birth
| 
+------------+



### Description of your relationship

An album can have many songs
An artist can have many songs
A publisher can have many albums

### ERD describing the relationship 