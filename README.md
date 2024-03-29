
# ExpressJS Supabase API Starter

**Just a simple boilerplate for an ExpressJS-based REST API that connects to a Supabase-backend to help you get up to speed fast and start coding.**

![ExpressJS Supabase API Starter Header Image](image.png)

This example uses an example table called "languages" within Supabase that has an id (UUID), name, description and stars column per entry. They REST API provides you with all CRUD (Create, Read, Update, Delete) capabilities.

This starter should will help get you started quickly, but I highly recommend you follow the best practices outlined on the [ExpressJS website](https://expressjs.com), especially security-concerns and orginazational aspects (folder structure, imports, etc.) need to be considered for later production use.
## Installation & Usage

Install express-supabase-api-starter using npm or yarn and access on TCP port 3000. Logs will be written to ```./api.log```.

```bash
  git clone https://github.com/nicolaswehmeyer/express-supabase-api-starter
  cd express-supabase-api-starter
  npm install OR yarn install
  touch .env
  echo 'SUPABASE_KEY=<YOUR_SUPABASE_KEY_HERE>' > .env # Supabase key without '<' and '>'
  npm run start
```
    
## Contributing

Contributions are always welcome!


## License

[MIT](https://choosealicense.com/licenses/mit/)

