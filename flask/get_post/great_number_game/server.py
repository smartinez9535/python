from flask import Flask, render_template, request, redirect, session
import random

app = Flask(__name__)
app.secret_key = "Keep it secret, keep it safe"

@app.route("/")
def index():
    if 'random_number' not in session:
        session['random_number'] = random.randint(1, 100)
        print(session['random_number']) #for debugging and testing
    
    return render_template("index.html")


@app.route("/button", methods = ["POST"])
def button():
    print(session['random_number']) #for debugging and testing
    if 'number_guesses' not in session:
        session['number_guesses'] = 1
    else:
        session['number_guesses'] += 1
    if request.form['submit_button'] == "Reset":
        session['hint'] = ""
        session['random_number'] = random.randint(1, 100)
        session['number_guesses'] = 0
        print(session['random_number']) #for debugging and testing
        return redirect("/")

    elif int(request.form['user_guess']) == session['random_number']:
        session['hint'] = f"{session['random_number']} was the number! {session['number_guesses']} tries!"

    elif int(request.form['user_guess']) < session['random_number']:
        session['hint'] = "Too Low!"

    elif int(request.form['user_guess']) > session['random_number']:
        session['hint'] = "Too High!"
    
    

    return render_template("index.html",
    hint = session['hint'])


if __name__ == "__main__":
    app.run(debug = True)