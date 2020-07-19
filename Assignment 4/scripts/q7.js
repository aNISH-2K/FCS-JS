function Prime(num){
    var i,j,flag=0;
    for(i=2;i<=num;i++)
    {
        flag=0;
        for(j=2;j<i;j++)
        {
            if(i%j==0)
            {
                flag=1;
                break;
            }
        }
        if(flag!=1)
        console.log(i);    
    }
}         
var num=prompt("Enter a number (till what number do u want prime number) : ");
Prime(num);