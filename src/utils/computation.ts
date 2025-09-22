
export function heavyComputation(data: any[]) {
    return data
      .map(item => ({
        ...item,
        computed: item.price * 3.1415 * Math.random() * item.name.length
      }))
      .filter(item => item.computed % 2 > 1)
      .reduce((acc, item) => acc + item.computed, 0);
  }
  