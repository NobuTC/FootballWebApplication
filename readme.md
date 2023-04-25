# Teams API

Teams API Web application

## Features

- Create a new team
- Get all teams

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

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `string` | **Required**. your team id |

## Documentation

[Mongoose Documentation](https://mongoosejs.com/docs/api/document.html)

## License

[MIT](https://choosealicense.com/licenses/mit/)
