from flask import Flask, render_template
import sass

app = Flask(__name__)

# sass.compile(dirname=('static/scss', 'static/css'), output_style='compressed')


@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)
