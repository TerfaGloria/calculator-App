
try {
    let currentValue = ''
    let calculation = []

    
    function updateDisplay(value = currentValue) {
        document.getElementById('solution').value = value
        evaluateCalculation()

    }

    
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']

    numbers.forEach((number) => {
        document.getElementById(number).addEventListener('click', () => {
            currentValue += number 
            updateDisplay(currentValue) 
        })
    })

    const operators = ['+', '-', '*', '/', '%', 'plus-minus']
    operators.forEach((operator) => {
        document.getElementById(operator).addEventListener('click', () => {
            if (currentValue !== '') {
                if(operator==='plus-minus'){
                    currentValue = (parseFloat(currentValue) * -1).toString()
                    updateDisplay(currentValue)
                
                          
                  
                } else{
                    calculation.push(currentValue)
                    calculation.push(operator)
                    currentValue =''
                    updateDisplay(operator) 
                }
               
            }

        })
    })
                    
            


    
    document.getElementById('equals').addEventListener('click', () => {
        if (currentValue !== '') {
            calculation.push(currentValue)  
            const result = evaluateCalculation()  
            updateDisplay(result)
            currentValue = result  
            calculation = [] 
        }
    })

    
    document.getElementById('clear').addEventListener('click', () => {
        currentValue = '' 
        calculation = [] 
        updateDisplay() 

    })


    function evaluateCalculation() {

       

         result = parseFloat(calculation[0])
        let operator = ''


        for (let i = 1; i < calculation.length; i++) {
            const value = calculation[i]

            if (isNaN(value)) {
                operator = value 

            } else {
                const num = parseFloat(value)

                
                switch (operator) {
                    case '+':
                        result += num;
                        break;

                    case '-':
                        result -= num;
                        break;

                    case '*':
                        result *= num;
                        break;

                 

                    case '%':
                        result= (num * result)/ 100;
                        break;

                    case '/':
                        if (num !== 0) {
                            result /= num;
                            break;
                        } else {
                            return 'Error'

                        }



                }
            }
        }
        return result.toString() 
    }




    
} catch (error) {
    console.log('Error loading:', error)
}

