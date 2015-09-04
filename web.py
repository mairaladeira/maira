__author__ = 'Maira'
from flask import Flask, render_template, Markup, request
import webbrowser
import threading
import time
import json

app = Flask(__name__)

def open_browser():
    """
    opens the browser for "gui"
    """
    time.sleep(2)
    url = "http://localhost:5000"
    webbrowser.open(url)

@app.route("/")
def hello():
    return render_template('index.html')


@app.route("/<button>")
def click(button):
    """
    Simple button click, only with GET
    :param button: the domId of the button that was clicked
    :return:
    """
    print(button)
    try:
        return "Page not found"
    except Exception as e:
        print(e)


@app.route("/<button>", methods=["POST"])
def upload(button):
    """
    Upload handler
    :param button: the domId of the button that was clicked
    :return:
    """
    print(button)
    try:
        return "Undefined button: " + button
    except Exception as e:
        print(e)


if __name__ == "__main__":
    t = threading.Thread(target=open_browser)
    t.daemon = True
    t.start()
    app.run()
