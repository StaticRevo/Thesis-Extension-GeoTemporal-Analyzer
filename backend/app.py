from flask import Flask
from flask_cors import CORS
from routes.imagery import imagery_bp

# Initialize Flask app and enable CORS
app = Flask(__name__) 
CORS(app)

# Register blueprints
app.register_blueprint(imagery_bp)

if __name__ == "__main__":
    app.run(debug=True)