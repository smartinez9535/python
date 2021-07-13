from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = "Keep it secret, keep it safe" # ideally a hash of characters

# what is the default request method when declaring a route?
# GET Request
@app.route("/")
def index():
    return render_template("index.html")

# we need to specify that this route is
@app.route("/create", methods = ["POST"])
def create_dog():
    print(request.form) 
    #request.form is a dictionary
    # keys and values
    # session is dictionary
    session['name'] = request.form['name']
    session['age'] = request.form['age']
    session['hair_color'] = request.form['hair_color']

    #if request.form['name'] != "":
    #    name = request.form['name']
    #else:
    #    name = "Default name"

    return redirect("/display") # redirect makes a new GET request to a different route
    # NEVER RENDER ON A POST REQUEST, RESENDS PREVIOUS POST, ALWAYS REDIRECT


@app.route("/display")
def display():
    #print("SUCCESSFUL REDIRECT")
    print(session['name'])
    return render_template(
        "display.html",
        name = session['name']
        age = session['age']
        hair_color = session['hair_color']
        )


if __name__ == "__main__":
    app.run(debug = True)