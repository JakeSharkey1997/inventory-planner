import sys
sys.path.insert(0,"/var/lib/jenkins/jobs/inventory-planner/workspace/backend/venv/lib/python3.6/site-packages")
sys.path.insert(0,"/var/lib/jenkins/jobs/inventory-planner/workspace/backend")
from inventory_planner import create_app
application = create_app()
