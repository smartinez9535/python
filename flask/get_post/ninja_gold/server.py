from flask import Flask, render_template, request, redirect, session
import random

app = Flask(__name__)
app.secret_key = "keep it secret, keep it safe"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/process_money", methods=["POST"])
def process_money():
    request.form['']
    return redirect("/")