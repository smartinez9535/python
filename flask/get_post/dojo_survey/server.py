from flask import Flask, render_template, request, redirect, session
from dojo import Dojo

app = Flask(__name__)
app.secret_key = "Keep it secret, keep it safe"


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/process", methods = ["POST"])
def process():
    print(request.form) 

    if not Dojo.validate(request.form):
        return redirect("/")

    session['name'] = request.form['name']
    session['location'] = request.form['location']
    session['language'] = request.form['language']
    session['comment'] = request.form['comment']

    return redirect("/result")


@app.route("/result", methods = ["GET"])
def result():
    print(session['name'])
    return render_template(
        "result.html",
        name = session['name'],
        location = session['location'],
        language = session['language'],
        comment = session['comment']
        )


if __name__ == "__main__":
    app.run(debug = True)