ApiKey= 'eMpdHL6BBBPdurOf5a9PbX276bW4lcSgcn1Nltgo'

url = 'https://api.nasa.gov/insight_weather/?api_key=eMpdHL6BBBPdurOf5a9PbX276bW4lcSgcn1Nltgo&feedtype=json&ver=1.0'

response = requests.get(url).json()

print(response)