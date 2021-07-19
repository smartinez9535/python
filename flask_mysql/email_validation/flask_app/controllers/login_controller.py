from flask import Flask, render_template, redirect, request
from flask_app import app
from flask_app.models.login import Login


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/register", methods = ['POST'])
def register():
    if not Login.validate_login(request.form):
        return redirect("/")

    login_id = Login.create(request.form)

    return redirect("/success")

@app.route("/success")
def login_history():
    return render_template("/success.html", all_logins = Login.get_all())