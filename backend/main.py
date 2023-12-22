from typing import Optional

from fastapi import FastAPI, HTTPException
from models import Todo
from uuid import uuid4

# Neatly, FastAPI enables logging by default

app = FastAPI()

dummy_todos: list[Todo] = [
    Todo(todo_id=str(uuid4()), task="Clean room", date="12-24-23"),
    Todo(todo_id=str(uuid4()), task="Call school", date="12-26-23"),
    Todo(todo_id=str(uuid4()), task="Get groceries", date="12-28-23"),
    Todo(todo_id=str(uuid4()), task="Go fishing", date="12-29-23"),
    Todo(todo_id=str(uuid4()), task="Go to mall", date="12-30-23"),
]

@app.get("/")
def index():
    return {
        "message": "Hello, world"
    }

@app.get("/todos/{todo_id}")
def get_todo_by_id(todo_id: str):
    for todo in dummy_todos:
        if todo.todo_id == todo_id:
            return todo

    raise HTTPException(status_code=404, detail="No todo by that id exists")

@app.get("/todos")
def get_todos():
    return dummy_todos

@app.post("/todos")
def add_todo(todo: Todo):
    todo.todo_id = str(uuid4())
    dummy_todos.append(todo)
    return todo

@app.delete("/todos/{todo_id}")
def delete_todo(todo_id: str):
    result = list(filter(lambda x: x[1].todo_id == todo_id, enumerate(dummy_todos)))
    if len(result) != 1:
        raise HTTPException(status_code=404, detail="Todo not found")

    dummy_todos.pop(result[0][0])
