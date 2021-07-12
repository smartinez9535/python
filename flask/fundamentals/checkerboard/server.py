from flask import Flask, render_template

app = Flask(__name__) 

@app.route('/') 
def index():
    return render_template("index.html", x = 8, y  = 8, color1 = "blue", color2 = "red")

@app.route("/<int:x>") 
def variable_one(x):
    return render_template("index.html", x = x, y = 4, color1 = "blue", color2 = "red")

@app.route("/<int:x>/<int:y>") 
def variable_two(x,y):
    return render_template("index.html", x = x, y = y, color1 = "blue", color2 = "red")

@app.route("/<int:x>/<int:y>/<color1>/<color2>") 
def color_variable(x,y,color1,color2):
    return render_template("index.html", x = x, y = y, color1 = color1, color2 = color2)

if __name__=="__main__":  
    app.run(debug=True)   