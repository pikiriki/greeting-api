# Greeting API

A small Node.js server that reads a name from a URL query
parameter and returns a personalised greeting.

## Requirements

- Node.js installed.
- A browser.

No additional npm packages are required.

## Run the server

Open a terminal inside the greeting-api folder and run:

```bash
node server.js
```

Then visit:

```text
http://localhost:3000/?name=Saikat
```

Expected response:

```text
Hello, Saikat!
```

Keep the server running while testing.
Press Control + C in its terminal to stop it.

## Example requests

Use http://localhost:3000 before each path below.

| Path and query | Response |
|---|---|
| /?name=Saikat | Hello, Saikat! |
| /?name=Aryan | Hello, Aryan! |
| / | Please provide a name. |
| /?name= | Please provide a name. |
| /?username=Saikat | Please provide a name. |

The parameter key must be name.

## How it works

1. The browser sends an HTTP request.
2. Node parses the request URL.
3. The server extracts the name query parameter.
4. A missing or empty name receives an instruction.
5. A nonempty name receives a personalised greeting.

## Project files

- server.js — server and request-handling code.
- package.json — Node project information.
- .gitignore — files and folders Git should ignore.
- README.md — project instructions.

## What I learned

- **Client input:** The browser can send information through the URL.
- **Query parameters:** In `?name=Saikat`, `name` is the key and
  `Saikat` is its value.
- **Request object:** `req` contains information about an incoming request.
- **Request URL:** `req.url` contains the requested path and query string.
- **URL parsing:** `new URL(req.url, "http://localhost:3000")` turns
  URL text into an object with accessible parts.
- **Extracting input:** `url.searchParams.get("name")` retrieves
  the value associated with the key `name`.
- **Missing versus empty:** A missing parameter returns `null`;
  a parameter with no value returns an empty string (`""`).
- **Input checks:** `if`, `===`, and `||` let the server check
  whether the name is missing or empty.
- **Template literals:** Backticks and `${name}` insert a value
  into the greeting text.
- **Sending responses:** `res.end()` sends the response body
  and finishes the response.
- **Early return:** `return` exits the current handler call
  without shutting down the server.
- **Request lifecycle:** Each request runs the handler again
  with its own request, response, and local variables.
- **Debugging:** Terminal logs reveal what arrived and what
  the server extracted; DevTools shows requests and responses.
- **Ports and processes:** The browser must contact the correct
  port while the server is running.
- **Restarting:** With `node server.js`, code changes require
  a restart; changing URL input only requires another request.
- **Git:** I inspected changes, staged files, and saved commits.

The complete flow:
Browser input → HTTP request → parse URL → extract name →
check input → build response → browser displays response.