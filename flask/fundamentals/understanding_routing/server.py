from flask import Flask, render_template

app = Flask(__name__) 
@app.route('/') 
def index():
    return "Hello world!"

@app.route("/dojo")
def dojo():
    return "Dojo!"

@app.route("/say/<name>")
def hello_name(name):
    print(type(name))

    return f"Hi {str(name)}!"

@app.route("/repeat/<int:number>/<name>")
def repeat_number(number, name):
    print(type(int))
    print(type(name))
    
    return (f"\n{str(name)} " * int(number))

@app.errorhandler(404)
def page_not_found(e):
    
    return ("Sorry! No response. Try again.")


if __name__=="__main__":  
    app.run(debug=True)    
