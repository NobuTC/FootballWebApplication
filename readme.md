# Teams API

Teams API Web application

## Features

- Create a new team
- Get all teams
- Get one team by id
- Update team by given id
- Delete team with given id

## Demo Endpoint

https://footballteam.onrender.com

## API Reference

#### Get all teams

```http
  GET /api/getall
```

#### Create new team

```http
  POST /api/add
```

| Parameter | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
| `name`    | `string` | **Required**. name of your team |
| `country` | `string` | **Required**. country           |

#### Get one team with given id

```http
  GET /api/:id
```

#### Delete one team with given id

```http
  DELETE /api/delete/:id
```

#### Update team by id

```http
  PUT /api/update/:id
```

| Parameter | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
| `name`    | `string` | **Required**. name of your team |
| `country` | `string` | **Required**. country           |

## Documentation

[Mongoose Documentation](https://mongoosejs.com/docs/api/document.html)

## License

[MIT](https://choosealicense.com/licenses/mit/)
