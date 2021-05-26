
def test_funct(**params):
    print(params)
    
    
params = {
    'first_name': 'Devesh',
    'last_name': 'Pradhan'
}

params['age'] = 22
test_funct(**params)