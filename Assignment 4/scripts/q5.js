 var sales=prompt("Enter your Sales amount : ");
            if(sales>=0 && sales<=5000)
            {
                totalCommission= +sales*2/100;
                totalCommission+= +sales;
                console.log("Total Commission Earned is : ",totalCommission);
            }
            else if(sales>=5001 && sales<=10000)
            {
                totalCommission= +sales*5/100;
                totalCommission+= +sales;
                console.log("Total Commission Earned is : ",totalCommission);
            }
            else if(sales>=10001 && sales<=20000)
            {
                totalCommission= +sales*7/100;
                totalCommission+= +sales;
                console.log("Total Commission Earned is : ",totalCommission);
            }
            else
            {
                totalCommission= +sales*10/100;
                totalCommission+= +sales;
                console.log("Total Commission Earned is : ",totalCommission);
            }