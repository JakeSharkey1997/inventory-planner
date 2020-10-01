import pytest

from inventory_planner import create_app


@pytest.fixture
def client():
    app = create_app()
    app.config['TESTING'] = True

    with app.test_client() as client:
        yield client


def test_index(client):
    rv = client.get('/')
    assert b'DONE' in rv.data
