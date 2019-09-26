from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import ExtractNASAData


# Create an instance of Flask
app = Flask(__name__)

# Use PyMongo to establish Mongo connection

# Route to render index.html template using data from Mongo
@app.route("/")
def home():

    
    # Return template and data
    return render_template("index.html")


# Route that will trigger the scrape function
@app.route("/scrape")
def scrape():

    # Run the scrape function and save the results to a variable
    # @TODO: YOUR CODE HERE!

    print("SCRAPE")
    runprogram = ExtractNASAData.scrape()
    #results = {'height':20}

    
    return redirect("static/Planets.html")

@app.route("/data/<file>")
def accessFile (file = None):
    if file is None:
        self.Error(400)
    try:
        return send_from_directory(file, as_attachment=True)
    except Exception as e:
        print(e)



if __name__ == "__main__":
    app.run(debug=True)
