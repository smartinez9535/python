from flask import Flask, render_template

app = Flask(__name__) 

@app.route('/') 
def index():
    return "Hello world!"

@app.route("/play")
def play():
    return render_template("index.html", x = 3, color = '#9fc5f8')

@app.route("/play/<int:x>")
def play_variable(x):
    return render_template("index.html", x = x, color = '#9fc5f8')

@app.route("/play/<int:x>/<color>")
def play_variable_color(x, color):
    #print(color)
    return render_template("index.html", x = x, color = color)

if __name__=="__main__":  
    app.run(debug=True)    