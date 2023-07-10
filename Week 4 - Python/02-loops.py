"""
In JS 
for (var i=0;i<10;i++){
console.log(i)
}
"""
# In Python

for i in range(0,10):
    print(i)

superheros = ["saitama","genos", "catwoman", "wonderwoman", "captain marvel", "tatsumaki"]

for hero in superheros:
    print(hero)

user = {
    'first_name' : "taylor",
    'last_name' : "Smith",
    'age' : 33,
    'is_admin': False
}

for key,value in user.items():
    print(f"Key: {key} --- Value: {value}")

for key in user.keys():
    print(key,"     ", user[key])

print(user.items())
