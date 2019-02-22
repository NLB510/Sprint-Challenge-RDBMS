Explain the difference between RDBMS and SQL.
  * Relational database management system is a type of database management system that groups its data in tables with rows and columns, with a row in each table being a single item of data. The relationships between the tables and its columns(keys) make it a relational database. Structured query language, or SQL, is coding language that’s used to communicate with the relational database management system in order to manage data on the database.


Why do tables need a primary key?
  * Rows in tables need primary keys in order to uniquely identify their place within the table, and increment on incoming data. 

What is the name given to a table column that references the primary key on another table.
  * A Foreign Key is a column that references the primary key of another table. 


What do we need in order to have a many to many relationship between two tables.

  * In order to have many to many relationship between two tables we need an intermediate or middle table with two composite foreign keys linking to the primary keys on each of the two tables we want to have many to many relationships. 