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
Artist to Songs

### ERD describing the relationship

+------------+
| artist     |
+------------+
| id         |
| name       |    // Drake
|            |
|            |
|            |
|            |
+------------+

+------------+
| songs      |
+------------+
| id         |
| title      |    // Laugh Now, Cry Later
| duration   |
| genre_id   |
| artist_id  |
| album_id   |
+------------+

+------------+
| album      |
+------------+
| id         |
| name       |    
|            |
|            |
|            |
|            |
+------------+

+------------+
| genre      |
+------------+
| id         |
| name       |    
|            |
|            |
|            |
|            |
+------------+