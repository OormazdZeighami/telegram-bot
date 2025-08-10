
from dataset import load_dataset
dataset = load_dataset("Gholamreza/pquad")

# تبدیل به JSON (مثلاً بخش train):
import json
with open('pquad_train.json', 'w', encoding='utf-8') as f:
    json.dump(dataset['train'].to_list(), f, ensure_ascii=False, indent=4)