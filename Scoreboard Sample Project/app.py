from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')





# ----- Mainline program: this code executes when we run this file. ----- #
if __name__ == '__main__':
    # init_db()  # set up the database before starting the web app (later)
    app.run(debug=True)