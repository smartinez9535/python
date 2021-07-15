from flask import Flask, render_template, redirect, request
from flask_app import app
from flask_app.models.user import User


@app.route("/")
def index():
    return redirect("/users")

@app.route("/users")
def all_users():
    return render_template("index.html", all_users = User.get_all())

@app.route("/users/new")
def new_user():
    return render_template("new_user.html")

@app.route("/users/create", methods = ['POST'])
def create_user():
    user_id = User.create(request.form)

    return redirect(f"/users/{user_id}")

@app.route("/users/<int:user_id>")
def display_user(user_id):
    return render_template("user.html", user = User.get_one({"id": user_id}))

@app.route("/users/<int:user_id>/edit")
def edit_user(user_id):
    return render_template("edit_user.html", user = User.get_one({"id": user_id}))

@app.route("/users/<int:user_id>/change", methods = ['POST'])
def change_user(user_id):
    new_dict = {
        **request.form,
        "id": user_id
    }
    User.update(new_dict)

    return redirect(f"/users/{user_id}")

@app.route("/users/<int:user_id>/delete")
def delete_user(user_id):
    User.delete({"id": user_id})

    return redirect("/users")