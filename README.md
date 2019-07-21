# IP-API

Express Node server that returns the IP Address of the requester

## Usage

All responses have the form

```JSON
{
  "ip": "IP Address"
}
```

### Return the IP Address

**Definition**
`GET /ip`

**Response**

```Json
{
  "ip": "Requester IP Address"
}
```

### Return the IP Address with a message

**Definition**
`GET /ip/<name>`

**Response**

```JSON
{
  "ip": "Requester IP Address",
  "greeting": "Good to see you again, <name>"
}
```
