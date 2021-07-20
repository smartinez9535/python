from flask import Flask, render_template, redirect, request, flash
from flask_bcrypt import Bcrypt

from flask import session
from flask_app import app
from flask_app.models.user import User
from flask_app.models.recipe import Recipe

bcrypt = Bcrypt(app)


@app.route("/")
def index():
    if "uuid" in session:
        return redirect("/dashboard")

    return render_template("index.html")

@app.route("/dashboard")
def success():
    if "uuid" not in session:
        flash("Must Log In")
        return redirect('/')

    return render_template("dashboard.html", logged_in_user = User.get_by_id({"id": session['uuid']}), all_recipes = Recipe.get_all())


@app.route("/register", methods = ['POST'])
def register_user():
    if not User.validate_register(request.form):
        return redirect("/")

    hash_browns = bcrypt.generate_password_hash(request.form['password'])
    data = {
        **request.form,
        "password": hash_browns
    }
    print(data)

    user_id = User.create(data)

    session['uuid'] = user_id

    return redirect("/dashboard")

@app.route("/login", methods = ['POST'])
def login_user():
    if not User.validate_login(request.form):
        return redirect("/")

    user = User.get_by_email({"email": request.form['email']})

    session['uuid'] = user.id

    return redirect("/dashboard")

@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")


