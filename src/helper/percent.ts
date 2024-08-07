export function calculatePercentages(num1: number, num2: number, titleOne:string, titleTwo: string): any{
    const total = num1 + num2;
  
    if (total === 0) {
        return [
          {
            title: titleOne,
            percent: '0%',
            color: '#3FA110'
          },
          {
            title: titleTwo,
            percent: '0%',
            color: '#dd8843'
          },
        ]
    }
  
    const percent1 = ((num1 / total) * 100).toFixed(2) + '%';
    const percent2 = ((num2 / total) * 100).toFixed(2) + '%';
  
    return [
      {
        title: titleOne,
        percent: percent1,
        color: '#3FA110'
      },
      {
        title: titleTwo,
        percent: percent2,
        color: '#dd8843'
      },
    ]
  }

