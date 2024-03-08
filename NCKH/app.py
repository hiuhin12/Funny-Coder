import csv
import os
import numpy as np
import pickle
import pandas as pd
from flask import Flask, redirect, render_template, request, url_for


# Load the Random Forest Classifier model
filename = r'C:\Users\Admin\OneDrive - uel.edu.vn\Documents\GitHub\Funny-Coder\NCKH\heart-disease-prediction-knn-model.pkl'
model = pickle.load(open(filename, 'rb'))

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('amain.html')

@app.route('/enter-information', methods=['POST'])
def enterinformation():
    return render_template('enterinf.html')

@app.route('/enter-information/predict', methods=['POST'])
def predict():
    if request.method == 'POST':

        Gender = request.form.get('Gender')
        Age = int(request.form.get('Age'))
        Driving_License = request.form.get('Driving_License')
        Region_Code = int(request.form.get('Region_Code'))
        Previously_Insured = request.form.get('Previously_Insured')
        Vehicle_Age = request.form.get('Vehicle_Age')
        Vehicle_Damange = request.form.get('Vehicle_Damange')
        Annual_Premium = int(request.form.get('Annual_Premium'))
        Policy_Sales_Channel = int(request.form.get('Policy_Sales_Channel'))
        Vintage = int(request.form.get('Vintage'))
        
        data = np.array([[Gender,Age,Driving_License,Region_Code,Previously_Insured,Vehicle_Age,Vehicle_Damange,Annual_Premium,Policy_Sales_Channel,Vintage]])
        my_response = model.predict(data)
        
        return render_template('result.html', response=my_response)

@app.route('/upload-data', methods=['POST'])
def uploaddata():
    return render_template('upload.html')

@app.route('/upload-data/upload', methods=['POST'])
def upload():
    file = request.files['file']
    file.save(f'uploads/{file.filename}')    
    return render_template('uploadkq.html')

if __name__ == '__main__':
    app.run(debug=True)