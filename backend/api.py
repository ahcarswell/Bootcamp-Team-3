from flask import Flask
from flask import request

import ast

app = Flask(__name__)


@app.route("/backend/time")
def getTime():
    import time

    ## No need to jsonify
    return {"time": time.time()}


@app.route("/backend/formAPI", methods=["GET", "POST"])
def formAPI():
    if request.method == "GET":
        print("request.args =", request.args)
        orgName = request.args.get("orgName")

        ## Implement backend logic here

        ## Implement SQL logic here

        ## No need to jsonify
        return {"orgName": orgName}

    elif request.method == "POST":
        dict_str = request.data.decode("UTF-8")
        postData = ast.literal_eval(dict_str)

        inputParams = postData.get("params")

        orgName = inputParams.get("orgName")

        ## Implement backend logic here

        ## Implement SQL logic here

        ## No need to jsonify
        return {"orgName": orgName}


@app.route("/backend/createAccount", methods=["GET", "POST"])
def userFormAPI():
    if request.method == "GET":
        return userInfoVerification(request.args)

    elif request.method == "POST":
        dict_str = request.data.decode("UTF-8")
        postData = ast.literal_eval(dict_str)

        inputParams = postData.get("params")

        return userInfoVerification(inputParams)


def userInfoVerification(inputParams):

    email = inputParams.get("email")
    username = inputParams.get("username")
    pasW = inputParams.get("pass")
    pasWConf = inputParams.get("passConf")

    if pasW != pasWConf:
        return {"error": "passConf"}
    if len(pasW) < 5:
        return {"error": "passIsShort"}
    if pasW.islower():
        return {"error": "passIsLower"}
    if pasW.isupper():
        return {"error": "passIsUpper"}

    ## We can put the username through the database here to check if this user already exists
    ## At this point, the user information is valid

    ## We send this data to the database
    userInfo = {"email": email, "username": username, "pass": pasW, "verified": True}

    return userInfo


@app.route("/backend/login", methods=["GET", "POST"])
def login():
    if request.method == "GET":
        return loginVerification(request.args)

    elif request.method == "POST":
        dict_str = request.data.decode("UTF-8")
        postData = ast.literal_eval(dict_str)

        inputParams = postData.get("params")

        return loginVerification(inputParams)


def loginVerification(inputParams):

    username = inputParams.get("username")
    pasW = inputParams.get("pass")

    ## VERIFY W/ DATABASE HERE

    ## We can put the username through the database here to check if this user already exists
    ## At this point, the user information is valid

    ## We send this data to the database
    userInfo = {"username": username, "pass": pasW, "verified": True}
    print(f"userInfo {userInfo}")
    return userInfo


@app.route("/backend/subscription", methods=["GET", "POST"])
def subscription():
    if request.method == "GET":
        # return loginVerification(request.args)
        return
    elif request.method == "POST":
        dict_str = request.data.decode("UTF-8")
        postData = ast.literal_eval(dict_str)

        inputParams = postData.get("params")
        print("inputParams ,", inputParams)

        name = inputParams.get("name")
        email = inputParams.get("email")
        address = inputParams.get("address")
        nE = inputParams.get("nE")
        nR = inputParams.get("nR")
        time = inputParams.get("time")

        print("params ,", [name, email, address, nE, nR, time])

        # return loginVerification(inputParams)
