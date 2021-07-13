from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = "Keep it secret, keep it safe"

@app.route("/")
def index():
    visits = 1

    if 'visit_number' in session:
        session['visit_number'] += 1
        session['counter_value'] += 1
    else:
        session['visit_number'] = visits
        session['counter_value'] = visits

    return render_template("index.html")

@app.route("/destroy_session")
def destroy_session():
    session.clear()

    return render_template("index.html")


@app.route("/button", methods = ["POST"])
def button():
    if  request.form['submit_button'] == 'Plus2':
        session['counter_value'] += int(request.form['count_value'])

    if  request.form['submit_button'] == 'Reset':
        session.clear()
    

    return redirect("/")



if __name__ == "__main__":
    app.run(debug = True)