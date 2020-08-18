## Building an ERD 

### Example of ERD box
<>=D


+---------------------+     
| Customer            |
+---------------------+
| PK id: INTEGER      |
| name: VARCHAR(30)   |
| phone: VARCHAR(10)  | ->---
| email: TEXT         |
| loyalty: INTEGER    |
| common_cart: INTEGER|
+---------------------+
  
+----------------------------------------+
| Store                                  |
+----------------------------------------+
| PK: ID INTEGER                         |
| name: varchar(30)                      |
| address: text                          |
| open-time: timestampz                  |   
| close-time: timestampz                 |
| FK customer_id: REFERENCE(customer.id) |
+----------------------------------------+

### Description of your relationship
Grocery Store to Customers

### ERD describing the relationship