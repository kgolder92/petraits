<h1 align="center"> 
  <img src="https://i.imgur.com/8tZXVi4.png" alt="petraits" width="550">
</h1>
Animal art for pet parents. 
This application is for pet lovers who want to make artwork from their pet's photos

<p align="center">
  <a href="#How it works">How it works</a> •
  <a href="#installation">Installation</a> 
  <!-- <a href="#contributing">Contributing</a> -->
  <!-- contact -->
</p>

# How it works
### User
1. Users will create an account that includes their name, location[optional] and the name of their pet 
2. Login to upload a photo of their pet to be recreated as a drawing

### Admin
1. Admin will recieve a notification 
2. Complete the drawing and then upload it with the original photo to gallery and email it to the user with an attatchment to download

# Installation
1. Clone this repository from your terminal

   `$ git clone https://github.com/kgolder92/petraits.git`

2. Install dependencies with `npm install`

3. Create a database in PostgreSQL named `petraits`. These instructions and the .env.example assume a database and user named `petraits`
4. Execute the database schema 
    `$psql -d petraits -U petraits -f schema.sql`
5. Copy `.env.example` to `.env`
     `$ cp .env.example .env`
6. Edit `.env` to reflect your database information
7. Start with `npm start`
<!-- seed back end -->
<!-- # # Contributing 
# Want to help? Great! Checkout the [issue](https://github.com/kgolder92/petraits/issues) tracker and find something you'd like to tackle.
-->
