sys.path.insert(0,"/var/lib/jenkins/jobs/inventory-planner/workspace/backend/venv/lib/python3.6/site-packages")
from inventory_planner import create_app
application = create_app()
