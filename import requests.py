import requests
import time
import json




i=0
while True:
	response = requests.get("http://api.openweathermap.org/data/2.5/weather?q=araucaria&units=metric&appid=75ff6405fb7b261a5d04a3e35adab3ca")
	resposta=response.text		

	x = json.loads(resposta)
	teste = resposta.find("rain")
	print(x)


	if teste == -1:
		envio = requests.get("https://api.thingspeak.com/update?api_key=2KY2WFEOL19GATI1&field1="+str(x["main"]["humidity"])+"&field2="+str(x["main"]["feels_like"])+"&field3="+str(x["main"]["pressure"])+"&field4="+str(x["wind"]["deg"])+"&field5="+str(x["wind"]["speed"])+"&field4="+str(x["wind"]["deg"])+"&field6=0")
		i=i+1
	else:
		envio = requests.get("https://api.thingspeak.com/update?api_key=2KY2WFEOL19GATI1&field1="+str(x["main"]["humidity"])+"&field2="+str(x["main"]["feels_like"])+"&field3="+str(x["main"]["pressure"])+"&field4="+str(x["wind"]["deg"])+"&field5="+str(x["wind"]["speed"])+"&field4="+str(x["wind"]["deg"])+"&field6="+str(x["rain"]["1h"]))
		i=i+1




	print(teste)
	print()
	print(i)

	time.sleep(600)