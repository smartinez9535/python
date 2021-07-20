from flask import Flask, render_template, redirect, request, flash

from flask import session
from flask_app import app
from flask_app.models.user import User
from flask_app.models.recipe import Recipe


@app.route("/dashboard")
def dashboard():
    if "uuid" not in session:
        return redirect("/")

    return render_template("dashboard.html", logged_in_user = User.get_by_id({"id": session['uuid']}), all_recipes = Recipe.get_all())

@app.route("/recipes/new")
def new_recipe():
    if "uuid" not in session:
        return redirect("/")

    return render_template("new_recipe.html", logged_in_user = User.get_by_id({"id": session['uuid']}))


@app.route("/recipes/create", methods = ["POST"])
def create_recipe():
    if not Recipe.validate(request.form):
        return redirect("/recipes/new")

    post_data = {
        **request.form,
        "user_id": session['uuid']
    }
    Recipe.create(post_data)

    return redirect("/dashboard")


@app.route("/recipes/<int:id>")
def display_recipe(id):
    if "uuid" not in session:
        return redirect("/")

    return render_template(
        "recipe.html", logged_in_user = User.get_by_id({"id": session['uuid']}), recipe = Recipe.get_one({"id": id}))

@app.route("/recipes/<int:id>/edit")
def edit_recipe(id):
    if "uuid" not in session:
        return redirect("/")

    recipe = Recipe.get_one({"id": id})

    if session['uuid'] != recipe.user.id:
        flash("You can't edit a recipe you didn't make.")
        return redirect("/dashboard")

    return render_template(
        "edit_recipe.html", logged_in_user = User.get_by_id({"id": session['uuid']}), recipe = recipe)

@app.route("/recipes/<int:id>/update", methods = ['POST'])
def update_recipe(id):
    if not Recipe.validate(request.form):
        return redirect("/recipes/{id}/edit")

    post_data = {
        **request.form,
        "id": id
    }
    Recipe.update(post_data)

    return redirect("/dashboard")



@app.route("/recipes/<int:id>/delete")
def delete_recipe(id):
    recipe = Recipe.get_one({"id": id})

    if session['uuid'] != recipe.user.id:
        flash("You can't delete a recipe you didn't make.")
        return redirect("/dashboard")

    Recipe.delete({"id": id})

    return redirect("/dashboard")