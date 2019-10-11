import node

if __name__ == "__main__":
  node.log('Shell Started')
  node.ready()
  while (True):
    output = {}
    data = node.recive()
    output['ans'] = data['a'] * data['b']
    node.log(f"Data Processed: {data['a']} * {data['b']} = {output['ans']}")
    node.emit(output)
    node.ready()

