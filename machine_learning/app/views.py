from flask import Blueprint, request, jsonify
import os
import joblib
import pandas as pd
views = Blueprint('views', __name__, url_prefix='/api')

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

def get_model_path(model):
    return os.path.join(BASE_DIR, "..", "models", model)

def to_binary(value):
    if value.lower() == 'yes':
        return 1
    elif value.lower() == 'no':
        return 0
    else:
        return None


def is_empty(value):
    return value == '' or value is None


@views.route('/preeclampsia', methods=['POST'])
def preeclampsia():
    """
    The function `preeclampsia` takes input data related to a patient and predicts the risk of
    preeclampsia using a pre-trained random forest model.
    :return: The function `preeclampsia()` is returning a JSON response containing the predicted risk of
    preeclampsia based on the input data provided in the POST request. If there are any errors during
    the process, it will return a JSON response with the error message.
    """
    try:
        if request.method == 'POST':
            request_data = request.json
            age = request_data.get('age')
            bmi = request_data.get('bmi')
            diabp = request_data.get('diabp')
            sysbp = request_data.get('sysbp')
            fam_history_hypertension = request_data.get(
                'fam_history_hypertension')
            glucose_levels = request_data.get('glucose_levels')
            
            print(age)
            print(fam_history_hypertension)

            fam_history_hypertension = to_binary(fam_history_hypertension)

            # if fam_history_hypertension is None:
            #     return jsonify({'error': 'Invalid family history hypertension value'}), 400

            if (
                    is_empty(age) or is_empty(fam_history_hypertension) or
                    is_empty(bmi) or is_empty(diabp) or is_empty(sysbp) or
                    is_empty(glucose_levels)):
                return jsonify({'error': 'All fields are required'}), 400

            data = {
                'age': [int(age)],
                'bmi': [float(bmi)],
                'diabp': [float(diabp)],
                'sysbp': [float(sysbp)],
                'fam_history_hypertension': [fam_history_hypertension],
                'glucose_levels': [float(glucose_levels)],
            }

            test_data = pd.DataFrame(data)
            rf_model = joblib.load(get_model_path('preeclampsia_joblib_v4'))
            # rf_model = joblib.load('../models/preeclampsia_joblib_v4')
            predicted = rf_model.predict(test_data).tolist()[0]
            if predicted == 1:
                recommendation = "Your risk for preeclampsia is low. Maintain regular checkups, a balanced diet, and stay active."
            else:
                recommendation = "You are at high risk of preeclampsia. Please consult with a healthcare provider immediately and discuss preventive measures."
            return jsonify({'risk': "High" if predicted == 0 else "Low",  'recommendation': recommendation})
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@views.route('/genhealth', methods=['POST'])
def genhealth():
    """
    The `genhealth` function takes input data from a form, processes it, uses a pre-trained model to
    predict complication risk, and returns the prediction as JSON.
    :return: The function `genhealth()` is returning a JSON response. If the request method is 'POST',
    it collects data from the form fields, creates a DataFrame with the collected data, loads a
    pre-trained Random Forest model using joblib, makes predictions on the test data, and returns a JSON
    response containing the predicted complication risk. If an exception occurs during this process, it
    will return a JSON response with a status code of 400.
    """
    try:
        if request.method == 'POST':
            age = request.form.get('age')
            bmi = request.form.get('bmi')
            activity = request.form.get('Physical Activity Level')
            diabp = request.form.get('diabp')
            sysbp = request.form.get('sysbp')
            glucose_levels = request.form.get('glucose_levels')
            heart_rate = request.form.get('heart_rate')

            if (
                    is_empty(age) or is_empty(activity) or
                    is_empty(bmi) or is_empty(diabp) or is_empty(sysbp) or
                    is_empty(glucose_levels) or is_empty(heart_rate)):
                return jsonify({'error': 'All fields are required'}), 400
            data = {
                'Age': [int(age)],
                'Physical Activity Level': [int(activity)],
                'Heart Rate': [float(heart_rate)],
                'BMI': [float(bmi)],
                'Systolic': [float(sysbp)],
                'Diastolic': [float(diabp)],
                'glucose_levels': [float(glucose_levels)],
            }

            test_data = pd.DataFrame(data)
            rf_model = joblib.load(get_model_path('Not pregnant and Not expecting joblib'))
            # rf_model = joblib.load('Not pregnant and Not expecting joblib')
            predicted = rf_model.predict(test_data).tolist()[0]
            if predicted == 0:
                recommendation = "You are at low risk. Continue maintaining a healthy lifestyle with regular exercise and balanced nutrition."
            else:
                recommendation = "You are at high risk. It is highly recommended that you visit a healthcare provider for further diagnosis and treatment."
            return jsonify({'complication_risk': predicted, 'recommendation': recommendation})
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@views.route('/postpartum', methods=['POST'])
def postpartum():
    """
    The function `postpartum` processes user input related to postpartum symptoms and predicts the risk
    of postpartum depression using a pre-trained machine learning model.
    :return: a JSON response containing the predicted risk of Postpartum Depression (PPD) based on the
    input values provided in the POST request. The response includes the PPD risk value predicted by the
    Random Forest model. If any errors occur during the process, an error message is returned along with
    a status code of 400.
    """
    try:
        if request.method == 'POST':
            request_data = request.json
            sad = request_data.get('sad')
            trouble_sleeping = request_data.get('trouble_sleeping')
            appetite_loss = request_data.get('appetite_loss')
            suicide_attempt = request_data.get('suicide_attempt')
            thinking_difficulty = request_data.get('thinking_difficulty')

            sad = to_binary(sad)
            trouble_sleeping = to_binary(trouble_sleeping)
            appetite_loss = to_binary(appetite_loss)
            suicide_attempt = to_binary(suicide_attempt)
            thinking_difficulty = to_binary(thinking_difficulty)
            
            print(sad)
            print(trouble_sleeping)

            # Handle invalid inputs
            # if None in [sad_tearful, trouble_sleeping, loss_of_appetite, suicide_attempt, thinking_difficulty]:
            #     return jsonify({'error': "Invalid input in one or more fields"}), 400

            if (
                    is_empty(sad) or is_empty(trouble_sleeping) or
                    is_empty(appetite_loss) or is_empty(suicide_attempt) or is_empty(thinking_difficulty)):
                return jsonify({'error': 'All fields are required'}), 400

            data = {
                'Feeling sad or Tearful': [int(sad)],
                'Trouble sleeping': [int(trouble_sleeping)],
                'Loss of appetite': [int(appetite_loss)],
                'Suicide attempt': [int(suicide_attempt)],
                'Difficulty thinking or focusing': [int(thinking_difficulty)],
            }

            test_data = pd.DataFrame(data)
            rf_model = joblib.load(get_model_path('postpartum_joblib_v2'))
            # rf_model = joblib.load('../models/postpartum_joblib_v2')
            predicted = rf_model.predict(test_data).tolist()[0]
            if predicted == 1:
                recommendation = (
                    "You are at low risk of postpartum depression. Focus on self-care, maintain a good support system, "
                    "and monitor your emotional health regularly."
                )
            else:
                recommendation = (
                    "You are at high risk of postpartum depression. Please seek immediate help from a healthcare provider "
                    "or mental health professional. Reach out to a crisis hotline or a support network as soon as possible."
                )
            return jsonify({'risk': "High" if predicted == 0 else "Low", 'recommendation': recommendation})
    except Exception as e:
        return jsonify({'error': str(e)}), 400
