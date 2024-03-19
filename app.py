from flask import *

app = Flask(__name__, template_folder="templates")
app.debug = True

@app.route("/")
def index():
    return render_template("index.html")