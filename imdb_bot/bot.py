import os
from handlers.input_handler import InputHandler
from orchestrator import BotOrchestrator

def main():
    # 1. Initialize Handlers
    input_h = InputHandler()
    
    # 2. Get Workload (Batch or Manual)
    workload = input_h.get_workload()

    # 3. Initialize Orchestrator
    script_dir = os.path.dirname(os.path.abspath(__file__))
    data_path = os.path.join(script_dir, "..", "assets", "data", "data.js")
    
    orchestrator = BotOrchestrator(data_path)
    
    # 4. Run!
    orchestrator.run(workload)

if __name__ == "__main__":
    main()
