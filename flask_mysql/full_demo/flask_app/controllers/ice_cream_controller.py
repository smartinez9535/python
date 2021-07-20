from flask import Flask, render_template, redirect, request, flash

from flask import session
from flask_app import app
from flask_app.models.ice_cream import IceCream


@app.route("/dashboard")
def dashboard():
    if "uuid" not in session:
        return redirect("/")

    return render_template(
        "dashboard.html",
        logged_in_user = User.get_by_id({"id": session['uuid']}),
        all_ice_creams = IceCream.get_all()
        )

@app.route("/ice_creams/new")
def new_ice_cream():
    if "uuid" not in session:
        return redirect("/")

    return render_template("new_ice_cream.html", logged_in_user = User.get_by_id({"id": session['uuid']}))


@app.route("/ice_creams/create", methods = ["POST"])
def create_ice_cream():
    if not IceCream.validate(request.form):
        return redirect("/ice_creams/new")

    post_data = {
        **request.form,
        "user_id": session['uuid']
    }
    IceCream.create(post_data)

    return redirect("/dashboard")


@app.route("/ice_creams/<int:id>")
def display_ice_cream(id):
    if "uuid" not in session:
        return redirect("/")

    return render_template(
        "ice_cream.html",
        logged_in_user = User.get_by_id({"id": session['uuid']}),
        ice_cream = IceCream.get_one({"id": id})
        )

@app.route("/ice_creams/<int:id>/edit")
def edit_ice_cream(id)
    if "uuid" not in session:
        return redirect("/")

    ice_cream = IceCream.get_one({"id": id})

    if session['uuid'] != ice_cream.user.id:
        flash("You can't edit an ice cream you didn't make.")
        return redirect("/dashboard")

    return render_template(
        "edit_ice_Cream.html",
        logged_in_user = User.get_by_id({"id": session['uuid']}),
        ice_cream = IceCream.get_one({"id": id})
    )

@app.route("/ice_creams/<int:id>/update", methods = ['POST'])
def update_ice_cream()
    if not IceCream.validate(request.form):
        return redirect("/ice_creams/{id}/edit")

    post_data = {
        **request.form,
        "id": index
    }
    IceCream.update(post_data)

    return redirect("/dashboard")



@app.route("/ice_creams/<int:id>/delete")
def delete_ice_cream(id)
    ice_cream = IceCream.get_one({"id": id})

    if session['uuid'] != ice_cream.user.id:
        flash("You can't delete an ice cream you didn't make.")
        return redirect("/dashboard")

    IceCream.delete({"id": id})

    return redirect("/dashboard")