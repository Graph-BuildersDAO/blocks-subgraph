import os
import json
import pystache
import subprocess

def read_config_files(directory):
    """ Read all JSON files in the directory and return their content. """
    config_files = []
    for filename in os.listdir(directory):
        if filename.endswith('.json'):
            with open(os.path.join(directory, filename), 'r') as file:
                config_files.append({
                    'name': filename[:-5],
                    'content': json.load(file)
                })
    return config_files

def render_yaml(template_path, data):
    """ Render a YAML file using a Mustache template and data. """
    with open(template_path, 'r') as file:
        template = file.read()
    return pystache.render(template, data)

def deploy_graph(network_name):
    """ Deploy using the Graph CLI. """
    try:
        subprocess.run(f"graph deploy --studio {network_name}-blocks", shell=True, check=True)
        print(f"Successfully deployed {network_name}-blocks")
    except subprocess.CalledProcessError as e:
        print(f"Failed to deploy for {network_name}: {e}")

def main():
    config_dir = './config'
    template_path = './subgraph.template.yaml'
    
    configs = read_config_files(config_dir)
    for config in configs:
        output_yaml = render_yaml(template_path, config['content'])
        yaml_path = f"./{config['name']}_subgraph.yaml"
        with open(yaml_path, 'w') as file:
            file.write(output_yaml)
        print(f"Generated YAML for {config['content']['network']} at {yaml_path}")

        # Deploy the subgraph
        deploy_graph(config['content']['network'])

if __name__ == "__main__":
    main()
