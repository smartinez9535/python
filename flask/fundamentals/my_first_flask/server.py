from flask import Flask, render_template

app = Flask(__name__) # this creates a new instance of the Flask class

@app.route('/') # the route with just the / is called the index route
def index():
    #return "Hello world!"
    return render_template("index.html", name = "Shawn", age = 28)

# all routes need to start with a /
# path variable
@app.route("/hello/<name>/<int:age>")
def hello(name):
    return render_template("index.html", name = name, age = age)

@app.route("/users/<username>/<id>")
def show_profile(username, id):
    print(type(username))
    print(type(id))

    return f"Username: {username}, ID: {id}."

@app.route("/dogs")
def dogs():
    dogs = [
        {
            "name": "vicky",
            "age": "4",
            "hair_color": "brindle"
        },
        {
            "name": "leia",
            "age": "0",
            "hair_color": "red and white"
        },
        {
            "name": "shiro",
            "age": "10",
            "hair_color": "white"
        }
    ]

    return render_template("lists.html", dogs = dogs)



if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.
