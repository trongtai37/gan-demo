from flask import Flask, request, send_file
from flask_cors import CORS, cross_origin

app = Flask(__name__)


@app.route("/api/test")
def test():
    return "Hello World!."


@app.route("/api/transform-image", methods=["POST"])
@cross_origin(origin="*")
def index():
    image = request.form.get("inputFile")
    model_type = request.form.get("modelType")
    print(image, model_type)
    return send_file("liberty.png", mimetype="image/png")


app.run("127.0.0.1", port=3000)
