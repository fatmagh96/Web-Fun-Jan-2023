# this is a comment this line will not be interpreted

"""
this is
multi line comment
will not be interpreted
"""

# hot to detect variables
# javascript var variableName = value

# python is snake we are going to use snake-case-naming-convention

variable_name = "value"

GLOBAL_VARIABLE = "python"
PORT = 5000
APP_NAME = "WEB_APP"

# DATA TYPES

# PRIMITIVES
#STRING
first_str = "hello world"
name = "jane"
#Numbers
    #integers
age = 41
    #floats
bmi = 2.75

#Boolean
voted = True
is_admin = False

#NoneType
permit = None

print(name, age, permit)
# Formatted String
print(f"user name: {name} her age {age} years old and her BMI equal to {bmi}")
print(f"user name: {name} \nage {age} years old \nBMI:\t {bmi}")
print("FORMAT *** \nuser name: {} \nage {} years old \nBMI:\t {}".format(name,52,bmi))

print(type(age),type(permit),type(voted))

str_age = str(age)
float_age = float(age)
print(f"AGE: {type(age)}\nSTR_AGE: {type(str_age)}")
print(len(name),name.upper(), first_str.split(" "))

#COMPLEX

# Array in JS == List in Python
my_list = [1,2,3,4, "45", name, [1.2,"milk",None]]
print(my_list[-1])
print(my_list[:5])
my_list.append(first_str)
print(my_list)
print(my_list.pop(3))
print(my_list)



#Objects in JS = Dictionaries in python
# key-value pairs
user = {
    'first_name' : name,
    'last_name' : "Smith",
    'age' : age,
    'is_admin': False
}
#bracket notation
print(user["first_name"])
# .get
print(user.get("is_admin"))

# Tuples
# similar to lists but immutable: can not be changed
my_tuple = (1,2,3,3)
print(my_tuple)



