from flask import Flask, render_template, redirect, request
from flask_app import app
from flask_app.models.dojo import Dojo
from flask_app.models.ninja import Ninja

# displays the form to create a new ninja
@app.route("/ninjas")
def new_ninja():
    return render_template("new_ninja.html", all_dojos = Dojo.get_all())


# performs the action of creating a new ninja
@app.route("/ninjas/create", methods = ['POST'])
def create_ninja():
    
    new_dict = {
        "first_name": request.form['first_name'],
        "last_name": request.form['last_name'],
        "age": request.form['age'],
        "dojo_id": request.form['dojo_id']
    }
    dojo_id = new_dict['dojo_id']
    
    Ninja.create(new_dict)

    return redirect(f"/dojos/{dojo_id}")#FIX THIS CHECK OLD ASSIGNMENT