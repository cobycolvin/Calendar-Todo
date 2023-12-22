#!/usr/bin/env python3
from pydantic import BaseModel
from typing import Optional
from uuid import uuid4

class Todo(BaseModel):
    # Todo will be none when creating new todos
    todo_id: str = str(uuid4())
    task: str
    date: str
