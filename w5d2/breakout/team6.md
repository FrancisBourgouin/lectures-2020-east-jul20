## Building an ERD 

### Example of ERD box

+------------+
| collection |
+------------+
|            |
|            |
|            |
|            |
|            |
|            |
+------------+

### Description of your relationship
Record collection, artist, genre, album name, year recorded, date purchased,

### ERD describing the relationship

+------------+
| collection |
+------------+
|  id        |
|  artist_id |
|  genre_id  |
|  album     |
|date_purchased  |
|last_listened  |
+------------+

+------------+
| artist     |
+------------+
| id         |
| name       |
| start_date |
|            |
|            |
|            |
+------------+

+------------+
| genre      |
+------------+
| id         |
| name       |
| popularity |
|            |
|            |
|            |
+------------+