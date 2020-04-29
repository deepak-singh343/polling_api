# polling_api
## Getting started

- If you don't already have one, [create a GitHub account](https://github.com/join).
- Open the [Node.js core repository web page](https://github.com/nodejs/node).
- Use the "Fork" button to fork the repository:![Image](http://nodetodo.org/getting-started/zfork.png)
- On the page _for your own fork_, use the "Clone or download" button and copy the URL for cloning to your clipboard:![Screenshot](http://nodetodo.org/getting-started/zclone.png)
- On the command line, in your home directory or a directory you have for projects, run:

```console
git clone <paste that URL here>;
```

- When that is done:

```console
cd node
```

- Then:

```console
git remote add upstream https://github.com/nodejs/node.git
```

- Then:

Install the required packages and run the project by npm start command.

- Then:

Open Postman, to ADD a new Question make a POST request with URL localhost:8000/api/v1/questions/create with raw data   
{ "title":"Title" } .

- Then:

To ADD Options to the Question make a POST request with localhost:8000/api/v1/questions/QuestionId/options/create with raw data                                             
{ "text":"Text" } .

- Then:

To VIEW a Question make a GET request with URL localhost:8000/api/v1/questions/QuestionId.

- Then:

To ADD a Vote make a POST request with URL localhost:8000/api/v1/options/OptionId/add_vote it will increment vote count by 1.

- Then:

To DELETE an Option make a DELETE request with URL localhost:8000/api/v1/options/OptionId/delete.

- Then:

To DELETE a Question make a DELETE request with URL localhost:8000/api/v1/questions/5eaa34f727b3e91d9c3495a0/delete.

