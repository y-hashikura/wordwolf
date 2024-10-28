import requests
import pytest

BASE_URL = "http://localhost:8000/wolfdata"

@pytest.mark.parametrize("params, expected_status", [
    ({"wolf": 1, "normal": 2}, 200),
])
def test_api_with_params(params, expected_status):
    response = requests.get(BASE_URL, params=params)
    print(f"{response.status_code}")
    print(response)
