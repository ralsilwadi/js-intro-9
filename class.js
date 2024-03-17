const product = (...args) => args.length !== 0 ? args.reduce((acc, currentValue) => acc * currentValue) : 0
