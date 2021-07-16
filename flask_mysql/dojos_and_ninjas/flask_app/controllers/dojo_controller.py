from flask import Flask, render_template, redirect, request
from flask_app import app
from flask_app.models.dojo import Dojo
from flask_app.models.ninja import Ninja


# displays all dojos
@app.route("/")
def index():
    return redirect("/dojos")

# displays all dojos
@app.route("/dojos")
def all_dojos():
    return render_template("index.html", all_dojos = Dojo.get_all())


@app.route("/dojos/create", methods = ['POST'])
def create_dojo():
    Dojo.create(request.form)

    return redirect("/dojos")

# displays a dojo and the ninjas in it
@app.route('/dojos/<int:dojo_id>')
def display_dojo(dojo_id):
    return render_template("dojo.html", dojo = Dojo.get_one({"id": dojo_id}))

