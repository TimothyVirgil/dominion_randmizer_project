from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .dominion_data import dominion_sets
import random

app = FastAPI()

# Configure CORS
origins = ["http://localhost", "http://localhost:3000"]  # Adjust as needed

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/pickset1")
def return_first_set():
    random_pick = random.randint(1, len(dominion_sets))
    set = dominion_sets[random_pick]
    return set
