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

## Documentation

[Mongoose Documentation](https://mongoosejs.com/docs/api/document.html)

## License

[MIT](https://choosealicense.com/licenses/mit/)
